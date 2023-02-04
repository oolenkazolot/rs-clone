import Template from "../templates/template";
import { ITemplate, ITraining } from "../types/index";

class TrainingModal {
  template: ITemplate;
  exercise: ITraining;
  backLayer: HTMLElement;
  modal: HTMLElement;

  constructor(exercise: ITraining) {
    this.template = new Template();
    this.exercise = exercise;
    this.backLayer = this.template.createElement(
      "div",
      "exercise-modal__backlayer"
    );
    this.modal = this.template.createElement("div", "exercise-modal");
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
    exerciseInfo.append(exerciseName, exerciseQuantity, youtubeLink);
    this.modal.append(exerciseInfo);
  }

  private createChangeBlock(): void {
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
    const currentQuantity = this.template.createElement(
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
    changeButtons.append(cancelButton, saveButton);
    changeBlock.append(changeButtons);

    this.modal.append(changeBlock);
  }

  public draw(): void {
    this.backLayer.append(this.modal);

    const closeButton: HTMLButtonElement = this.template.createBtn(
      "exercise-modal__button-close"
    );
    this.modal.append(closeButton);

    const exerciseGif: HTMLImageElement = document.createElement("img");
    exerciseGif.className = "exercise-modal__gif";
    exerciseGif.src = this.exercise.example;
    this.modal.append(exerciseGif);

    this.createExerciseInfo();

    const exerciseDescription: HTMLElement = this.template.createElement(
      "p",
      "exercise-modal__description",
      this.exercise.description
    );
    this.modal.append(exerciseDescription);

    this.createChangeBlock();

    document.body.prepend(this.backLayer);
  }
}

export default TrainingModal;
