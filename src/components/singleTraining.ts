import Template from "../templates/template";
import Exercise from "../components/exercise";
import { ITemplate, IExercise, IWorkoutMiniBlock } from "../types/index";
import workout_plans from "../utils/workout-plans-en";

class SingleTraining {
  template: ITemplate;
  container: HTMLElement;
  trainings: IExercise[];
  exercises: HTMLElement;
  title: string;
  exQuantity: string;
  exTime: string;
  color: string;
  image: string;

  constructor(trainings: IExercise[], title: string) {
    this.template = new Template();
    this.container = this.template.createElement("div", "training");
    this.exercises = document.createElement("div");
    this.exercises.className = "training__exercises exercises";
    this.trainings = trainings;
    this.title = title;
    this.exQuantity = "";
    this.exTime = "";
    this.color = "";
    this.image = "";
  }

  private createHeader(): void {
    for (let i = 0; i < workout_plans.length; i++) {
      workout_plans[i].block.forEach((item: IWorkoutMiniBlock) => {
        if (item.title === this.title) {
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
      "#"
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

    const beginButton: HTMLButtonElement = this.template.createBtn(
      "training__button-start",
      "Start now"
    );
    header.append(beginButton);
    this.container.append(header);
  }

  public draw(): HTMLElement {
    this.createHeader();
    this.container.append(this.exercises);

    this.trainings.forEach((training: IExercise) => {
      const newEx = new Exercise(training);
      this.exercises.append(newEx.draw());
    });

    return this.container;
  }
}

export default SingleTraining;
