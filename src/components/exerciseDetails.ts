import Template from "../templates/template";
import { ITemplate, IExercise, IExerciseAdd } from "../types/index";
import Exercise from "./exercise";
import AddNewComplex from "./addNewComplex";
import { trash } from "./svg";
import Slider from "./slider";
import WorkoutBlock from "./workoutBlock";
import Complex from "../utils/сomplex.routes";
import trainingsData from "../utils/trainings-data-en";
import router from "../components/routerComponent";
class ExerciseDetails {
  template: ITemplate;
  exercise: IExercise;
  backLayer: HTMLElement;
  modal: HTMLElement;
  addNewComplex;
  slider;
  workoutBlock;
  complex;

  constructor(exercise: IExercise) {
    this.template = new Template();
    this.exercise = exercise;
    this.backLayer = this.template.createElement(
      "div",
      "exercise-modal__backlayer"
    );
    this.modal = this.template.createElement("div", "exercise-modal");
    this.addNewComplex = new AddNewComplex();
    this.slider = new Slider();
    this.workoutBlock = new WorkoutBlock();
    this.complex = new Complex();
  }

  public async draw(
    exercises: IExerciseAdd,
    flag: boolean,
    flagTrash?: boolean
  ) {
    this.backLayer.append(this.modal);
    const complexId = localStorage.getItem("complexId");
    const trashIcon = this.template.createElement("div", "dateils__trash-icon");
    trashIcon.setAttribute("id", String(exercises.id));
    if (exercises.serverId) {
      trashIcon.setAttribute("serverId", exercises.serverId);
    }
    trashIcon.innerHTML = trash;
    trashIcon.addEventListener("click", async () => {
      if (exercises.serverId) {
        await this.complex.deleteExercise(exercises.serverId);
        const exercAfter = await this.complex.getExercises(
          JSON.parse(String(complexId))
        );
        if (exercAfter && !exercAfter.length) {
          const startBtn = document.querySelector(
            ".training__button-start"
          ) as HTMLButtonElement;
          startBtn.disabled = true;
        }
      }

      this.forClickOnDelBtn();
      this.createServerExercises(JSON.parse(String(complexId)));
    });
    const closeButton: HTMLButtonElement = this.template.createBtn(
      "exercise-modal__button-close"
    );
    if (!flagTrash) {
      this.modal.append(trashIcon);
    }
    this.modal.append(closeButton);

    const exerciseGif: HTMLImageElement = document.createElement("img");
    exerciseGif.className = "exercise-modal__gif";
    const path: string = this.exercise.example;
    exerciseGif.src = path;
    this.modal.append(exerciseGif);

    this.createExerciseInfo();

    const exerciseDescription: HTMLElement = this.template.createElement(
      "p",
      "exercise-modal__description",
      this.exercise.description
    );
    this.modal.append(exerciseDescription);
    this.createChangeBlock(flag);

    document.body.prepend(this.backLayer);

    closeButton.addEventListener("click", () => {
      this.closeExerciseModal();
      const modal = document.querySelector(
        ".modal-addNewComplex"
      ) as HTMLElement;
      modal.classList.add("invisible");
    });

    window.addEventListener("click", (e) => {
      const target = <HTMLElement>e.target;
      if (target.classList.contains("exercise-modal__backlayer")) {
        this.closeExerciseModal();
      }
    });
    return this.backLayer;
  }

  private closeExerciseModal() {
    this.backLayer.style.display = "none";
    document.body.removeChild(this.backLayer);
  }

  private createExerciseInfo(): void {
    const exerciseInfo: HTMLElement = this.template.createElement(
      "div",
      "exercise-modal__info"
    );
    const exerciseName: HTMLElement = this.template.createElement(
      "span",
      "exercise-modal__name",
      this.exercise.title
    );
    const exerciseQuantity: HTMLSpanElement = this.template.createElement(
      "span",
      "exercise-modal__quantity",
      this.exercise.quantity
    );
    const youtubeLink: HTMLAnchorElement = this.template.createLink(
      "exercise-modal__link",
      this.exercise.youtube
    );
    youtubeLink.target = "_blank";
    exerciseInfo.append(exerciseName, exerciseQuantity, youtubeLink);
    this.modal.append(exerciseInfo);
  }

  private async createChangeBlock(flag: boolean) {
    const changeBlock = this.template.createElement(
      "div",
      "exercise-modal__change"
    );

    const counter: HTMLElement = this.template.createElement(
      "div",
      "exercise-modal__counter"
    );
    changeBlock.append(counter);

    const minusButton: HTMLButtonElement = this.template.createBtn(
      "exercise-modal__button-minus",
      "-"
    );
    const currentQuantity: HTMLElement = this.template.createElement(
      "span",
      "exercise-modal__current-quantity",
      this.exercise.quantity
    );
    const plusButton: HTMLButtonElement = this.template.createBtn(
      "exercise-modal__button-plus",
      "+"
    );
    counter.append(minusButton, currentQuantity, plusButton);

    const changeButtons: HTMLElement = this.template.createElement(
      "div",
      "exercise-modal__buttons"
    );

    const cancelButton: HTMLButtonElement = this.template.createBtn(
      "exercise-modal__button-cancel",
      "cancel"
    );
    const saveButton: HTMLButtonElement = this.template.createBtn(
      "exercise-modal__button-save",
      "save"
    );
    saveButton.setAttribute("id", String(this.exercise.id));
    saveButton.addEventListener("click", async () => {
      const exerciseCount = document.querySelector(
        ".exercise-modal__current-quantity"
      ) as HTMLElement;
      const trashIcon = document.querySelector(
        ".dateils__trash-icon"
      ) as HTMLElement;
      const startBtn = document.querySelector(
        ".training__button-start"
      ) as HTMLButtonElement;
      startBtn.disabled = false;
      const exerciseId = saveButton.getAttribute("id");
      const complexId = JSON.parse(String(localStorage.getItem("complexId")));
      if (flag) {
        if (exerciseId && complexId) {
          await this.complex.createExercise({
            idComplex: complexId,
            idExercise: exerciseId,
            count: exerciseCount.innerHTML,
          });
        }
      } else {
        const exerciseIdServer = trashIcon.getAttribute("serverId");
        if (exerciseId && complexId && exerciseIdServer) {
          await this.complex.updateExercise(exerciseIdServer, {
            idComplex: complexId,
            idExercise: exerciseId,
            count: exerciseCount.innerHTML,
          });
        }
      }
      this.forClickOnSaveBtn();
      this.createServerExercises(complexId);
    });
    changeButtons.append(cancelButton, saveButton);
    changeBlock.append(changeButtons);

    cancelButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.closeExerciseModal();
    });

    plusButton.addEventListener("click", this.addExerciseQuantity);

    minusButton.addEventListener("click", this.reduceExerciseQuantity);

    this.modal.append(changeBlock);
  }

  private reduceExerciseQuantity() {
    const curQuantitySpan = <HTMLElement>(
      document.querySelector(".exercise-modal__current-quantity")
    );
    const exerciseText = <string>curQuantitySpan.textContent;
    if (exerciseText.toLowerCase().includes("x")) {
      const curNumber = Number(exerciseText.slice(1));
      if (curNumber === 1) {
        return;
      }
      curQuantitySpan.textContent = `X${curNumber - 1}`;
    } else {
      let minutes: string = exerciseText.slice(0, 2);
      let seconds: string = exerciseText.slice(3);
      if (Number(seconds) === 1 && Number(minutes) === 0) {
        return;
      } else if (Number(seconds) === 0) {
        if (Number(minutes) < 10) {
          minutes = `0${Number(minutes) - 1}`;
        } else {
          minutes = `${Number(minutes) - 1}`;
        }
        seconds = "59";
      } else {
        if (Number(seconds) <= 10) {
          seconds = `0${Number(seconds) - 1}`;
        } else {
          seconds = `${Number(seconds) - 1}`;
        }
      }
      curQuantitySpan.textContent = `${minutes}:${seconds}`;
    }
  }

  private addExerciseQuantity() {
    const curQuantitySpan = <HTMLElement>(
      document.querySelector(".exercise-modal__current-quantity")
    );
    const exerciseText = <string>curQuantitySpan.textContent;
    if (exerciseText.toLowerCase().includes("x")) {
      const curNumber = Number(exerciseText.slice(1));
      curQuantitySpan.textContent = `X${curNumber + 1}`;
    } else {
      let minutes = exerciseText.slice(0, 2);
      let seconds = exerciseText.slice(3);
      if (Number(seconds) === 59) {
        if (Number(minutes) < 10) {
          minutes = `0${Number(minutes) + 1}`;
        } else {
          minutes = `${Number(minutes) + 1}`;
        }
        seconds = "00";
      } else {
        if (Number(seconds) < 9) {
          seconds = `0${Number(seconds) + 1}`;
        } else {
          seconds = `${Number(seconds) + 1}`;
        }
      }
      curQuantitySpan.textContent = `${minutes}:${seconds}`;
    }
  }

  async forClickOnSaveBtn() {
    this.closeExerciseModal();
  }

  async forClickOnDelBtn() {
    this.closeExerciseModal();
  }

  private async createServerExercises(id: string) {
    const exercises = await this.complex.getExercises(id);
    const exercQt = document.querySelector(
      ".header-bottom__quantity"
    ) as HTMLElement;
    const exercTime = document.querySelector(
      ".header-bottom__time"
    ) as HTMLElement;
    const exerciseWrapper = document.querySelector(
      ".exercises-wrapper"
    ) as HTMLElement;
    const largeWrapper = document.querySelector(
      ".training__exercises"
    ) as HTMLElement;
    largeWrapper.innerHTML = "";
    if (exercises) {
      exercQt.innerHTML = String(`${exercises.length} exercises`);
      exercTime.innerHTML = String(
        `${Math.round((exercises.length * 45) / 60)} minutes`
      );
      for (let i = 0; i < exercises.length; i++) {
        const id = exercises[i].idExercise;
        const serverId = exercises[i]._id;
        const serverQt = exercises[i].count;
        trainingsData.trainings.forEach((el) => {
          if (String(el.id) === id) {
            const exercise = new Exercise(
              this.createObj(el, serverId, serverQt),
              true
            ).draw();
            largeWrapper.append(exercise);
          }
        });
      }
      const plus: HTMLElement = this.workoutBlock.createAddWorkoutPlanCont(
        "Add new exercises",
        false
      );
      largeWrapper.append(plus);
    }
  }

  private createObj(
    element: IExerciseAdd,
    servId: string,
    servQt: string
  ): IExerciseAdd {
    const object: IExerciseAdd = {
      id: element.id,
      title: element.title,
      description: element.description,
      example: element.example,
      youtube: element.youtube,
      quantity: servQt,
      serverId: servId,
    };
    return object;
  }
}

export default ExerciseDetails;
