import Template from "../templates/template";
import { ITemplate, IExercise } from "../types/index";

class ExerciseBlock {
  template: ITemplate;
  exercise: HTMLElement;
  counter: HTMLElement;

  constructor() {
    this.template = new Template();
    this.exercise = this.template.createElement("div", "exercise-block");
    this.counter = this.template.createElement(
      "div",
      "exercise-block__counter"
    );
  }

  public draw(exercise: IExercise): HTMLElement {
    this.createBlocksHeader();
    const exerciseGif: HTMLImageElement = document.createElement("img");
    exerciseGif.className = "exercise-block__gif";
    const path: string = exercise.example;
    exerciseGif.src = path;
    this.exercise.append(exerciseGif);
    this.createExerciseInfo(exercise);
    this.createCounter(exercise);
    this.createNavigationButtons();

    return this.exercise;
  }

  private createBlocksHeader(): void {
    const blockHeader: HTMLElement = this.template.createElement(
      "div",
      "exercise-block__header"
    );
    this.exercise.append(blockHeader);
    const returnButton: HTMLButtonElement = this.template.createBtn(
      "exercise-block__button-return"
    );
    const settings: HTMLElement = this.template.createElement(
      "div",
      "exercise-block__settings-block"
    );
    const volumeButton: HTMLButtonElement = this.template.createBtn(
      "exercise-block__volume"
    );
    const settingsButton: HTMLButtonElement = this.template.createBtn(
      "exercise-block__settings"
    );
    settings.append(volumeButton, settingsButton);
    blockHeader.append(returnButton, settings);
  }

  private createExerciseInfo(exercise: IExercise): void {
    const exerciseInfo: HTMLElement = this.template.createElement(
      "div",
      "exercise-block__info"
    );
    const exerciseName: HTMLElement = this.template.createElement(
      "span",
      "exercise-block__name",
      exercise.title
    );
    const exerciseQuantity: HTMLSpanElement = this.template.createElement(
      "span",
      "exercise-block__quantity",
      exercise.quantity
    );

    const extraInfo: HTMLElement = this.template.createElement(
      "div",
      "exercise-block__extra"
    );
    const infoLink: HTMLAnchorElement = this.template.createLink(
      "exercise-block__info-link",
      "#",
      "Info"
    );
    const youtubeLink: HTMLAnchorElement = this.template.createLink(
      "exercise-block__youtube",
      exercise.youtube,
      "Watch"
    );
    youtubeLink.target = "_blank";
    extraInfo.append(infoLink, youtubeLink);
    exerciseInfo.append(exerciseName, exerciseQuantity, extraInfo);
    this.exercise.append(exerciseInfo, extraInfo);
  }

  private createCounter(exercise: IExercise): void {
    const currentQuantity: HTMLElement = this.template.createElement(
      "span",
      "exercise-block__current-quantity",
      exercise.quantity
    );
    this.counter.append(currentQuantity);

    if (exercise.quantity.toLowerCase().includes("x")) {
      const doneButton: HTMLButtonElement = this.template.createBtn(
        "exercise-block__button-done",
        "Done"
      );
      this.counter.append(doneButton);
    } else {
      const countdownBar: HTMLElement = this.createCountdownBar();
      this.counter.append(countdownBar);
    }

    this.exercise.append(this.counter);
  }

  private createCountdownBar(): HTMLElement {
    const timeBar: HTMLElement = this.template.createElement(
      "div",
      "exercise-block__time-bar"
    );
    const track: HTMLElement = this.template.createElement(
      "div",
      "exercise-block__track"
    );
    const pauseButton = this.template.createBtn(
      "exercise-block__button-pause",
      "Pause"
    );
    timeBar.append(track, pauseButton);
    return timeBar;
  }

  private createNavigationButtons(): void {
    const navigationButtons: HTMLElement = this.template.createElement(
      "div",
      "exercise-block__buttons"
    );
    const previousButton: HTMLButtonElement = this.template.createBtn(
      "exercise-block__button-prev",
      "Previous"
    );
    const skipButton: HTMLButtonElement = this.template.createBtn(
      "exercise-block__button-skip",
      "Skip"
    );
    navigationButtons.append(previousButton, skipButton);
    this.exercise.append(navigationButtons);
  }

  createCountDown(): void {
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
        const quantity = <HTMLElement>(
          document.querySelector(".exercise-block__quantity")
        );
        quantity.style.display = "none";
      }
      countNumber.textContent = `${curNumber}`;
      svgCircle2.style.strokeDashoffset = `${440 - (440 * curNumber) / 10}`;
      countDot.style.transform = `rotateZ(${curNumber * 36}deg)`;
    }, 1000);
  }
}

export default ExerciseBlock;
