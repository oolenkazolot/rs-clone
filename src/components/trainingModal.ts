import Template from "../templates/template";
import { ITemplate, IExercise } from "../types/index";

class TrainingModal {
  template: ITemplate;
  backLayer: HTMLElement;
  modal: HTMLElement;
  counter: HTMLElement;

  constructor() {
    this.template = new Template();
    this.backLayer = this.template.createElement(
      "div",
      "training-modal__backlayer"
    );
    this.modal = this.template.createElement("div", "training-modal");
    this.counter = this.template.createElement(
      "div",
      "training-modal__counter"
    );
  }

  public draw(exercise: IExercise): void {
    this.backLayer.append(this.modal);

    const returnButton: HTMLButtonElement = this.template.createBtn(
      "training-modal__button-return"
    );
    this.modal.append(returnButton);

    const exerciseGif: HTMLImageElement = document.createElement("img");
    exerciseGif.className = "training-modal__gif";
    const path: string = exercise.example;
    exerciseGif.src = path;
    this.modal.append(exerciseGif);

    this.createExerciseInfo(exercise);
    this.createCounter(exercise);
    this.createNavigationButtons();
    this.createCountDown();

    document.body.prepend(this.backLayer);

    window.addEventListener("click", (e) => {
      const target = <HTMLElement>e.target;
      if (target.classList.contains("training-modal__backlayer")) {
        this.backLayer.style.display = "none";
      }
    });

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
    youtubeLink.target = "_blank";
    extraInfo.append(infoLink, youtubeLink);
    exerciseInfo.append(exerciseName, exerciseQuantity, extraInfo);
    this.modal.append(exerciseInfo, extraInfo);
  }

  private createCounter(exercise: IExercise): void {
    const currentQuantity: HTMLElement = this.template.createElement(
      "span",
      "training-modal__current-quantity",
      exercise.quantity
    );
    const doneButton: HTMLButtonElement = this.template.createBtn(
      "training-modal__button-done",
      "Done"
    );
    this.counter.append(currentQuantity, doneButton);
    this.modal.append(this.counter);
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

  private createCountDown() {
    const readyText = this.template.createElement(
      "div",
      "ready-text",
      "ready to go"
    );
    const countdown: HTMLElement = this.template.createElement(
      "div",
      "countdown"
    );
    this.counter.append(readyText, countdown);
    const circle: HTMLElement = this.template.createElement(
      "div",
      "countdown__circle"
    );
    countdown.append(circle);
    const countDot: HTMLElement = this.template.createElement(
      "div",
      "countdown__dot"
    );
    const countSvg: SVGElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const svgCircle1: SVGCircleElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    svgCircle1.setAttribute("cx", "70");
    svgCircle1.setAttribute("cy", "70");
    svgCircle1.setAttribute("r", "70");
    const svgCircle2: SVGCircleElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    svgCircle2.setAttribute("cx", "70");
    svgCircle2.setAttribute("cy", "70");
    svgCircle2.setAttribute("r", "70");
    countSvg.append(svgCircle1, svgCircle2);
    const countNumber = this.template.createElement(
      "div",
      "countdown__number",
      "10"
    );

    circle.append(countDot, countSvg, countNumber);

    const counter = setInterval(() => {
      const curNumber = Number(countNumber.textContent) - 1;
      if (curNumber === 0) {
        clearInterval(counter);
        countdown.style.display = "none";
        readyText.style.display = "none";
      }
      countNumber.textContent = `${curNumber}`;
      svgCircle2.style.strokeDashoffset = `${440 - (440 * curNumber) / 10}`;
      countDot.style.transform = `rotateZ(${curNumber * 36}deg)`;
    }, 1000);
  }
}

export default TrainingModal;
