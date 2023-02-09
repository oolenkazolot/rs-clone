import Template from "../templates/template";
import { ITemplate, IExercise } from "../types/index";

class ExerciseModal {
  template: ITemplate;
  exercise: IExercise;
  backLayer: HTMLElement;
  modal: HTMLElement;

  constructor(exercise: IExercise) {
    this.template = new Template();
    this.exercise = exercise;
    this.backLayer = this.template.createElement(
      "div",
      "exercise-modal__backlayer"
    );
    this.modal = this.template.createElement("div", "exercise-modal");
  }

  public draw(): void {
    this.backLayer.append(this.modal);

    const closeButton: HTMLButtonElement = this.template.createBtn(
      "exercise-modal__button-close"
    );
    this.modal.append(closeButton);

    const exerciseGif: HTMLImageElement = document.createElement("img");
    exerciseGif.className = "exercise-modal__gif";
    const path: string = this.exercise.example;
    exerciseGif.src = path;
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

    closeButton.addEventListener("click", () => {
      this.closeExerciseModal();
    });

    window.addEventListener("click", (e) => {
      const target = <HTMLElement>e.target;
      if (target.classList.contains("exercise-modal__backlayer")) {
        this.closeExerciseModal();
      }
    });
  }

  private closeExerciseModal() {
    this.backLayer.style.display = "none";
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
    youtubeLink.target = "_blank";
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
    const currentQuantity: HTMLElement = this.template.createElement(
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

    cancelButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.closeExerciseModal();
    });

    plusButton.addEventListener("click", this.addExerciseQuantity);

    minusButton.addEventListener("click", this.reduceExerciseQuantity);

    this.modal.append(changeBlock);
  }

  private reduceExerciseQuantity() {
    const curQuantitySpan = <HTMLElement>(
      document.querySelector(".exercise-modal__current-quantity")
    );
    const exerciseText = <string>curQuantitySpan.textContent;
    if (exerciseText.toLowerCase().includes("x")) {
      const curNumber = Number(exerciseText.slice(1));
      if (curNumber === 0) {
        return;
      }
      curQuantitySpan.textContent = `X${curNumber - 1}`;
    }
  }

  private addExerciseQuantity() {
    const curQuantitySpan = <HTMLElement>(
      document.querySelector(".exercise-modal__current-quantity")
    );
    const exerciseText = <string>curQuantitySpan.textContent;
    if (exerciseText.toLowerCase().includes("x")) {
      const curNumber = Number(exerciseText.slice(1));
      curQuantitySpan.textContent = `X${curNumber + 1}`;
    }
  }
}

export default ExerciseModal;
