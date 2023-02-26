import Template from "../templates/template";
import Exercise from "../components/exercise";
import router from "../components/routerComponent";
import {
  ITemplate,
  IExercise,
  ISingleTraining,
  IWorkoutBlock,
  IExerciseAdd,
} from "../types/index";
import workout_plans from "../utils/workout-plans-en";
import WorkoutBlock from "../components/workoutBlock";
import AddNewComplex from "../components/addNewComplex";
import Complex from "../utils/сomplex.routes";
import trainingsData from "../utils/trainings-data-en";

class SingleTrainingPage {
  template: ITemplate;
  exQuantity: string;
  exTime: string;
  color: string;
  image: string;
  title: string;
  workout: ISingleTraining | undefined;
  workoutBlock: IWorkoutBlock;
  addNewComplex;
  complex;

  constructor() {
    this.template = new Template();
    this.exQuantity = "";
    this.exTime = "";
    this.color = "";
    this.image = "";
    this.title = "";
    this.workout;
    this.workoutBlock = new WorkoutBlock();
    this.addNewComplex = new AddNewComplex();
    this.complex = new Complex();
  }

  public async draw(id: string | undefined) {
    const mainElement: HTMLElement | null = document.querySelector("main");
    if (!mainElement) {
      return;
    }
    mainElement.classList.add("main");

    mainElement.textContent = "";
    const mainPageElement: HTMLElement = document.createElement("div");
    mainPageElement.classList.add("training");
    mainElement.append(mainPageElement);
    // const workoutPlansInStore = JSON.parse(
    //   localStorage.getItem("workoutPlans") || "[]"
    // );
    const serverData = await this.addNewComplex.creatingArrayFromData();
    if (id) {
      const exercisesTransformed = await this.transformExercises(id);
      for (let i = 0; i < serverData[0].block.length; i++) {
        if (id === serverData[0].block[i].id) {
          serverData[0].block[i].exercises.push(...exercisesTransformed);
        }
      }
      const data = [...serverData, ...workout_plans];
      data.forEach((group) => {
        group.block.forEach((training: ISingleTraining) => {
          if (String(training.id) === id) {
            this.workout = training;
          }
        });
      });
      const pageHeader = await this.createHeader(id);
      mainPageElement.append(pageHeader);

      const exercises = document.createElement("div");
      exercises.className = "training__exercises exercises";
      mainPageElement.append(exercises);

      this.workout?.exercises.forEach((exercise: IExercise) => {
        if (id.length > 2) {
          const newEx = new Exercise(exercise, true);
          exercises.append(newEx.draw());
        } else {
          const newEx = new Exercise(exercise, false);
          exercises.append(newEx.draw());
        }
      });

      if (id.length > 2) {
        const plus: HTMLElement = this.workoutBlock.createAddWorkoutPlanCont(
          "Add new exercises",
          false
        );
        plus.classList.add("singl-train__plus");
        exercises.append(plus);
        if (!this.workout?.exercises.length) {
          exercises.append(
            this.template.createElement(
              "div",
              "singl-train__empty-text",
              "Exercise list is empty"
            )
          );
        }
        exercises.classList.add("addit");
      }
      mainPageElement.append(this.createDetailsModal());
    }
  }

  public async createHeader(id: string) {
    // const workoutPlansInStore = JSON.parse(
    //   localStorage.getItem("workoutPlans") || "[]"
    // );
    const serverData = await this.addNewComplex.creatingArrayFromData();
    const exercises = await this.transformExercises(id);
    for (let i = 0; i < serverData[0].block.length; i++) {
      if (id === serverData[0].block[i].id) {
        serverData[0].block[i].exercises.push(...exercises);
      }
    }
    const data = [...serverData, ...workout_plans];
    data.forEach((plan) => {
      plan.block.forEach((training: ISingleTraining) => {
        if (String(training.id) === id) {
          this.exQuantity = String(training.exercises.length);
          this.exTime = String(
            Math.round((training.exercises.length * 45) / 60)
          );
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
      if (id.length > 2) {
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

    trashIcon.addEventListener("click", async () => {
      await this.deleteComplex(trashIcon);
      const mainElement: HTMLElement | null = document.querySelector("main");
      if (mainElement) {
        mainElement.innerHTML = "";
        router.navigate(`workouts`);
      }
    });
    upperHeader.append(returnButton, trainingsName);
    if (id.length > 2) {
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

    const startButton: HTMLAnchorElement = this.template.createLink(
      "training__button-start",
      "/startTraining",
      "Start now"
    );
    header.append(startButton);
    return header;
  }

  private async deleteComplex(element: HTMLElement) {
    const id = element.getAttribute("id");
    if (id) {
      await this.complex.deleteComplex(id);
      const exercises = await this.complex.getExercises(id);
      if (exercises) {
        exercises.forEach(async (el) => {
          await this.complex.deleteExercise(el._id);
        });
      }
    }
  }

  createDetailsModal(): HTMLElement {
    const modal: HTMLElement = this.template.createElement(
      "div",
      "modal-addNewComplex"
    );
    modal.classList.add("invisible");
    return modal;
  }

  public async transformExercises(id: string) {
    const exercisesFromServer = await this.complex.getExercises(id);
    const exercises: IExerciseAdd[] = [];
    exercisesFromServer?.forEach((el) => {
      for (let i = 0; i < trainingsData.trainings.length; i++) {
        if (el.idExercise === String(trainingsData.trainings[i].id)) {
          const object: IExerciseAdd = {
            id: trainingsData.trainings[i].id,
            title: trainingsData.trainings[i].title,
            description: trainingsData.trainings[i].description,
            example: trainingsData.trainings[i].example,
            youtube: trainingsData.trainings[i].youtube,
            quantity: el.count,
            serverId: el._id,
          };
          exercises.push(object);
        }
      }
    });
    return exercises;
  }
}

export default SingleTrainingPage;
