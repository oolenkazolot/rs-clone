import Template from "../templates/template";
import { ITemplate, ITraining } from "../types/index";

class SingleTraining {
  template: ITemplate;
  container: HTMLElement;
  trainings: ITraining[];
  exercises: HTMLElement;
  trainingVariant: string;

  constructor(trainings: ITraining[], trainingVariant: string) {
    this.template = new Template();
    this.container = this.template.createElement("div", "training");
    this.exercises = document.createElement("div");
    this.exercises.className = "training__exercises exercises";
    this.trainings = trainings;
    this.trainingVariant = trainingVariant;
  }

  private createHeader(): void {
    const header: HTMLElement = this.template.createElement(
      "div",
      "training__header"
    );

    const upperHeader: HTMLElement = this.template.createElement(
      "div",
      "header-upper"
    );
    header.append(upperHeader);

    const returnButton: HTMLAnchorElement = this.template.createLink(
      "header-upper__return",
      "#"
    );
    const trainingsName: HTMLSpanElement = document.createElement("span");
    trainingsName.className = "header-upper__name";
    trainingsName.textContent = this.trainingVariant;

    const trashIcon: HTMLElement = this.template.createIcon(
      "header-upper__icon",
      "icon-trash"
    );
    upperHeader.append(returnButton, trainingsName, trashIcon);

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
    img.src = exercise.example;
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
