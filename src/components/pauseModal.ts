import Template from "../templates/template";
import { ITemplate, IExercise } from "../types/index";

class PauseModal {
  template: ITemplate;
  exercise: IExercise;
  backLayer: HTMLElement;
  modal: HTMLElement;

  constructor(exercise: IExercise) {
    this.template = new Template();
    this.exercise = exercise;
    this.backLayer = this.template.createElement(
      "div",
      "pause-modal__backlayer"
    );
    this.modal = this.template.createElement("div", "pause-modal");
  }

  public draw(): HTMLElement {
    this.backLayer.append(this.modal);
    const title: HTMLElement = this.template.createElement(
      "div",
      "pause-modal__title",
      "pause"
    );
    const exerciseInfo: HTMLElement = this.template.createElement(
      "div",
      "pause-modal__info"
    );
    const exerciseName: HTMLElement = this.template.createElement(
      "div",
      "pause-modal__exercise-name",
      this.exercise.title
    );
    const exerciseGif: HTMLImageElement = document.createElement("img");
    exerciseGif.className = "pause-modal__exercise-gif";
    exerciseGif.src = this.exercise.example;
    exerciseInfo.append(exerciseName, exerciseGif);
    this.modal.append(title, exerciseInfo);
    this.createModalButtons();
    return this.backLayer;
  }

  private createModalButtons() {
    const modalButtons: HTMLElement = this.template.createElement(
      "div",
      "pause-modal__buttons"
    );
    const restartBtn: HTMLButtonElement = this.template.createBtn(
      "pause-modal__button-restart",
      "Restart Exercise"
    );
    const continueBtn: HTMLButtonElement = this.template.createBtn(
      "pause-modal__button-continue",
      "Continue"
    );
    modalButtons.append(restartBtn, continueBtn);
    this.modal.append(modalButtons);

    restartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.closeModal();
    });

    continueBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.closeModal();
    });
  }

  closeModal() {
    const backLayer = <HTMLElement>(
      document.querySelector(".pause-modal__backlayer")
    );
    backLayer.remove();
  }
}

export default PauseModal;
