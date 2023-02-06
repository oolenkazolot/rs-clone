import Template from "../templates/template";
import { ITemplate, ITraining } from "../types/index";
import workout_plans from "../utils/workout-plans";

class SingleTraining {
  template: ITemplate;
  container: HTMLElement;
  trainings: ITraining[];
  exercises: HTMLElement;
  title: string;
  exQuantity: string;
  exTime: string;
  color: string;
  image: string;

  constructor(trainings: ITraining[], title: string) {
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
      workout_plans[i].block.forEach((item) => {
        if (item.title === this.title) {
          this.exQuantity = item.exercisesAmt;
          this.exTime = item.exercisesTime;
          this.color = workout_plans[i].color;
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

  private createExercise(exercise: ITraining): void {
    const exerciseContainer: HTMLElement = document.createElement("div");
    exerciseContainer.className = "exercises__item exercise";
    exerciseContainer.id = `${exercise.id}`;

    const exerciseInfo: HTMLElement = this.template.createElement(
      "div",
      "exercise__info"
    );
    exerciseContainer.append(exerciseInfo);

    const exerciseName: HTMLElement = this.template.createElement(
      "p",
      "exercise__name",
      exercise.title
    );
    exerciseInfo.append(exerciseName);

    const exerciseQuantity: HTMLElement = this.template.createElement(
      "p",
      "exercise__quantity",
      exercise.quantity
    );
    exerciseInfo.append(exerciseQuantity);

    const exerciseGif: HTMLElement = this.template.createElement(
      "div",
      "exercise__gif"
    );
    exerciseContainer.append(exerciseGif);

    const img: HTMLImageElement = document.createElement("img");
    const path: string = exercise.example;
    img.src = path;
    exerciseGif.append(img);

    this.exercises.append(exerciseContainer);
  }

  public draw(): HTMLElement {
    this.createHeader();
    this.container.append(this.exercises);

    this.trainings.forEach((training: ITraining) => {
      this.createExercise(training);
    });

    return this.container;
  }
}

export default SingleTraining;
