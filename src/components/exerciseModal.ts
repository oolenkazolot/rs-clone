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
    document.body.removeChild(this.backLayer);
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
    } else {
      let minutes: string = exerciseText.slice(0, 2);
      let seconds: string = exerciseText.slice(3);
      if (Number(seconds) === 0) {
        if (Number(minutes) === 0) {
          curQuantitySpan.textContent = `${minutes}:${seconds}`;
        }
        if (Number(minutes) > 0 && Number(minutes) <= 10) {
          minutes = `0${Number(minutes) - 1}`;
          seconds = "59";
        }
      } else {
        seconds = `${Number(seconds) - 1}`;
        if (Number(seconds) < 10) {
          seconds = `0${seconds}`;
        }
      }
      curQuantitySpan.textContent = `${minutes}:${seconds}`;
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
    } else {
      let minutes = exerciseText.slice(0, 2);
      let seconds = exerciseText.slice(3);
      if (Number(seconds) === 59) {
        if (Number(minutes) < 10) {
          minutes = `0${Number(minutes) + 1}`;
        } else {
          minutes = `${Number(minutes) + 1}`;
        }
        seconds = "00";
      } else {
        if (Number(seconds) < 9) {
          seconds = `0${Number(seconds) + 1}`;
        } else {
          seconds = `${Number(seconds) + 1}`;
        }
      }
      curQuantitySpan.textContent = `${minutes}:${seconds}`;
    }
  }
}

export default ExerciseModal;
