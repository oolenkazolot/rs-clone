import Template from "../templates/template";
import Exercise from "../components/exercise";
import {
  IRouter,
  ITemplate,
  IExercise,
  IWorkoutMiniBlock,
  ISingleTraining,
} from "../types/index";
import workout_plans from "../utils/workout-plans-en";
import allTrainings from "../utils/singleTrainings-en";
import TrainingModal from "../components/trainingModal";

class SingleTrainingPage {
  template: ITemplate;
  public router?: IRouter;
  exQuantity: string;
  exTime: string;
  color: string;
  image: string;
  title: string;

  constructor() {
    this.template = new Template();
    this.exQuantity = "";
    this.exTime = "";
    this.color = "";
    this.image = "";
    this.title = "";
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

    const workout: ISingleTraining | undefined = allTrainings.find(
      (item: ISingleTraining) => item.id == Number(id)
    );
    console.log(workout);

    if (workout) {
      this.title = workout.title;
    }

    const pageHeader = this.createHeader(this.title);
    mainPageElement.append(pageHeader);

    const exercises = document.createElement("div");
    exercises.className = "training__exercises exercises";
    mainPageElement.append(exercises);

    workout?.exercises.forEach((exercise: IExercise) => {
      const newEx = new Exercise(exercise);
      exercises.append(newEx.draw());
    });

    this.showTrainingModal(workout?.exercises);
  }

  private createHeader(title: string): HTMLElement {
    for (let i = 0; i < workout_plans.length; i++) {
      workout_plans[i].block.forEach((item: IWorkoutMiniBlock) => {
        if (item.title.toLowerCase() == title.toLowerCase()) {
          this.exQuantity = item.exercisesAmt;
          this.exTime = item.exercisesTime;
          this.color = item.color;
          this.image = workout_plans[i].image;
        }
      });
    }
    const header: HTMLElement = this.template.createElement(
      "div",
      "training__header"
    );
    header.style.background = `url(${this.image}), ${this.color}`;
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundPosition = "right bottom";
    header.style.backgroundSize = "contain";

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
    trainingsName.textContent = title;

    const trashIcon: HTMLElement = this.template.createIcon(
      "header-upper__icon",
      "icon-trash"
    );
    upperHeader.append(returnButton, trainingsName, trashIcon);

    const bottomHeader: HTMLElement = this.template.createElement(
      "div",
      "header-bottom"
    );
    header.append(bottomHeader);
    const workoutName: HTMLElement = this.template.createElement(
      "p",
      "header-bottom__name",
      title
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
}

export default SingleTrainingPage;
