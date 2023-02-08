import Template from "../templates/template";
import { ITemplate, IExercise } from "../types/index";

class TrainingModal {
  template: ITemplate;
  backLayer: HTMLElement;
  modal: HTMLElement;

  constructor() {
    this.template = new Template();
    this.backLayer = this.template.createElement(
      "div",
      "training-modal__backlayer"
    );
    this.modal = this.template.createElement("div", "training-modal");
  }

  public draw(exercise: IExercise): void {
    this.backLayer.append(this.modal);

    // const closeButton: HTMLButtonElement = this.template.createBtn(
    //   "training-modal__button-close"
    // );
    // this.modal.append(closeButton);

    const exerciseGif: HTMLImageElement = document.createElement("img");
    exerciseGif.className = "training-modal__gif";
    const path: string = exercise.example;
    exerciseGif.src = path;
    this.modal.append(exerciseGif);

    this.createExerciseInfo(exercise);
    this.createCounter(exercise);
    this.createNavigationButtons();

    document.body.prepend(this.backLayer);

    // closeButton.addEventListener("click", () => {
    //   this.backLayer.style.display = "none";
    // });
  }

  private createExerciseInfo(exercise: IExercise): void {
    const exerciseInfo: HTMLElement = this.template.createElement(
      "div",
      "training-modal__info"
    );
    const exerciseName: HTMLElement = this.template.createElement(
      "span",
      "training-modal__name",
      exercise.title
    );
    const exerciseQuantity: HTMLSpanElement = this.template.createElement(
      "span",
      "training-modal__quantity",
      exercise.quantity
    );

    const extraInfo: HTMLElement = this.template.createElement(
      "div",
      "training-modal__extra"
    );
    const infoLink: HTMLAnchorElement = this.template.createLink(
      "training-modal__info-link",
      "#",
      "Info"
    );
    const youtubeLink: HTMLAnchorElement = this.template.createLink(
      "training-modal__youtube",
      exercise.youtube,
      "Watch"
    );
    extraInfo.append(infoLink, youtubeLink);
    exerciseInfo.append(exerciseName, exerciseQuantity, extraInfo);
    this.modal.append(exerciseInfo, extraInfo);
  }

  private createCounter(exercise: IExercise): void {
    const counter: HTMLElement = this.template.createElement(
      "div",
      "training-modal__counter"
    );
    const currentQuantity: HTMLElement = this.template.createElement(
      "span",
      "training-modal__current-quantity",
      exercise.quantity
    );
    const doneButton: HTMLButtonElement = this.template.createBtn(
      "training-modal__button-done",
      "Done"
    );
    counter.append(currentQuantity, doneButton);
    this.modal.append(counter);
  }

  private createNavigationButtons() {
    const navigationButtons: HTMLElement = this.template.createElement(
      "div",
      "training-modal__buttons"
    );
    const previousButton: HTMLButtonElement = this.template.createBtn(
      "training-modal__button-prev",
      "Previous"
    );
    const skipButton: HTMLButtonElement = this.template.createBtn(
      "training-modal__button-skip",
      "Skip"
    );
    navigationButtons.append(previousButton, skipButton);
    this.modal.append(navigationButtons);
  }
}

export default TrainingModal;
