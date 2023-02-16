import Template from "../templates/template";
import Exercise from "../components/exercise";
import {
  IRouter,
  ITemplate,
  IExercise,
  ISingleTraining,
  IWorkoutBlock,
} from "../types/index";
import TrainingModal from "../components/trainingModal";
import workout_plans from "../utils/workout-plans-en";
import WorkoutBlock from "../components/workoutBlock";

class SingleTrainingPage {
  template: ITemplate;
  public router?: IRouter;
  exQuantity: string;
  exTime: string;
  color: string;
  image: string;
  title: string;
  workout: ISingleTraining | undefined;
  workoutBlock: IWorkoutBlock;

  constructor() {
    this.template = new Template();
    this.exQuantity = "";
    this.exTime = "";
    this.color = "";
    this.image = "";
    this.title = "";
    this.workout;
    this.workoutBlock = new WorkoutBlock();
  }

  public draw(id: string | undefined): void {
    const mainElement: HTMLElement | null = document.querySelector("main");
    if (!mainElement) {
      return;
    }
    mainElement.classList.add("main");

    mainElement.textContent = "";
    const mainPageElement: HTMLElement = document.createElement("div");
    mainPageElement.classList.add("training");
    mainElement.append(mainPageElement);
    const workoutPlansInStore = JSON.parse(
      localStorage.getItem("workoutPlans") || "[]"
    );
    const data = [...workoutPlansInStore, ...workout_plans];

    if (id) {
      data.forEach((group) => {
        group.block.forEach((training: ISingleTraining) => {
          if (training.id === Number(id)) {
            this.workout = training;
          }
        });
      });

      const pageHeader = this.createHeader(id);
      mainPageElement.append(pageHeader);

      const exercises = document.createElement("div");
      exercises.className = "training__exercises exercises";
      mainPageElement.append(exercises);

      this.workout?.exercises.forEach((exercise: IExercise) => {
        const newEx = new Exercise(exercise);
        exercises.append(newEx.draw());
      });

      if (!exercises.childNodes.length) {
        const plus: HTMLElement = this.workoutBlock.createAddWorkoutPlanCont(
          "Add new exercises",
          false
        );
        plus.classList.add("singl-train__plus");
        exercises.append(plus);
        exercises.append(
          this.template.createElement(
            "div",
            "singl-train__empty-text",
            "Exercise list is empty"
          )
        );
        exercises.classList.add("addit");
      }
      mainPageElement.append(this.createDetailsModal());
      this.showTrainingModal(this.workout?.exercises);
    }
  }

  private createHeader(id: string): HTMLElement {
    const workoutPlansInStore = JSON.parse(
      localStorage.getItem("workoutPlans") || "[]"
    );
    const data = [...workoutPlansInStore, ...workout_plans];

    data.forEach((plan) => {
      plan.block.forEach((training: ISingleTraining) => {
        if (training.id === Number(id)) {
          this.exQuantity = training.exercisesAmt;
          this.exTime = training.exercisesTime;
          this.color = training.color;
          this.image = training.image;
          this.title = training.title;
        }
      });
    });

    const header: HTMLElement = this.template.createElement(
      "div",
      "training__header"
    );
    if (Number(id) === 10) {
      header.style.background = `url(${this.image})`;
      header.style.backgroundRepeat = "no-repeat";
      header.style.backgroundPosition = "top";
      header.style.backgroundSize = "cover";
    } else if (Number(id) === 11) {
      header.style.background = `url(${this.image})`;
      header.style.backgroundRepeat = "no-repeat";
      header.style.backgroundPosition = "center";
      header.style.backgroundSize = "cover";
    } else {
      header.style.background = `url(${this.image}), ${this.color}`;
      header.style.backgroundRepeat = "no-repeat";
      header.style.backgroundPosition = "right bottom";
      if (Number(id) > 11) {
        header.style.backgroundPosition = "90% bottom";
      }
      header.style.backgroundSize = "contain";
    }

    const upperHeader: HTMLElement = this.template.createElement(
      "div",
      "header-upper"
    );
    upperHeader.style.backgroundColor = "transparent";
    header.append(upperHeader);

    const returnButton: HTMLAnchorElement = this.template.createLink(
      "header-upper__return",
      "/workouts"
    );
    const trainingsName: HTMLSpanElement = document.createElement("span");
    trainingsName.className = "header-upper__name";
    trainingsName.textContent = this.title;

    const trashIcon: HTMLElement = this.template.createIcon(
      "header-upper__icon",
      "icon-trash"
    );
    trashIcon.setAttribute("id", id);

    trashIcon.addEventListener("click", () => {
      this.deleteComplex(trashIcon);
      if (this.router) {
        const mainElement: HTMLElement | null = document.querySelector("main");
        if (mainElement) {
          mainElement.innerHTML = "";
          this.router.navigate(`workouts`);
        }
      }
    });

    upperHeader.append(returnButton, trainingsName);
    if (Number(id) > 11) {
      upperHeader.append(trashIcon);
    }

    const bottomHeader: HTMLElement = this.template.createElement(
      "div",
      "header-bottom"
    );
    header.append(bottomHeader);
    const workoutName: HTMLElement = this.template.createElement(
      "p",
      "header-bottom__name",
      this.title
    );
    const workoutQuantity: HTMLElement = this.template.createElement(
      "p",
      "header-bottom__quantity",
      `${this.exQuantity} exercises`
    );
    const workoutTime: HTMLElement = this.template.createElement(
      "p",
      "header-bottom__time",
      `${this.exTime} minutes`
    );
    bottomHeader.append(workoutName, workoutQuantity, workoutTime);

    const beginButton: HTMLButtonElement = this.template.createBtn(
      "training__button-start",
      "Start now"
    );
    header.append(beginButton);
    return header;
  }

  private showTrainingModal(exercises: IExercise[] | undefined) {
    const startBtn = document.querySelector(".training__button-start");
    startBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      if (exercises) {
        const trainingModal = new TrainingModal();
        trainingModal.draw(exercises[0]);
      }
    });
  }

  private deleteComplex(element: HTMLElement): void {
    let workoutPlansInStore = JSON.parse(
      localStorage.getItem("workoutPlans") || "[]"
    );
    const block = workoutPlansInStore[0].block;
    for (let i = 0; i < block.length; i++) {
      if (block[i].id === Number(element.getAttribute("id"))) {
        block.splice(i, 1);
        if (!block.length) {
          workoutPlansInStore = [];
        }
      }
    }
    localStorage.setItem("workoutPlans", JSON.stringify(workoutPlansInStore));
  }

  createDetailsModal(): HTMLElement {
    const modal: HTMLElement = this.template.createElement(
      "div",
      "modal-addNewComplex"
    );
    modal.classList.add("invisible");
    return modal;
  }
}

export default SingleTrainingPage;
