import Template from "../templates/template";
import Exercise from "../components/exercise";
import { IRouter, ITemplate, IExercise, ISingleTraining } from "../types/index";
import workout_plans from "../utils/workout-plans-en";

class SingleTrainingPage {
  template: ITemplate;
  public router?: IRouter;
  exQuantity: string;
  exTime: string;
  color: string;
  image: string;
  title: string;
  workout: ISingleTraining | undefined;

  constructor() {
    this.template = new Template();
    this.exQuantity = "";
    this.exTime = "";
    this.color = "";
    this.image = "";
    this.title = "";
    this.workout;
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

    if (id) {
      workout_plans.forEach((group) => {
        group.block.forEach((training) => {
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
    }
  }

  private createHeader(id: string): HTMLElement {
    workout_plans.forEach((plan) => {
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
    upperHeader.append(returnButton, trainingsName, trashIcon);

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
}

export default SingleTrainingPage;
