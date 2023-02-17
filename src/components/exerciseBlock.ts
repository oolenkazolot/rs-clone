import Template from "../templates/template";
import { ITemplate, IExercise } from "../types/index";
import PauseModal from "../components/pauseModal";

class ExerciseBlock {
  template: ITemplate;
  exerciseBlock: HTMLElement;
  counter: HTMLElement;
  interval: NodeJS.Timer | undefined;
  exercise: IExercise;

  constructor(exercise: IExercise) {
    this.template = new Template();
    this.exerciseBlock = this.template.createElement("div", "exercise-block");
    this.counter = this.template.createElement(
      "div",
      "exercise-block__counter"
    );
    this.exercise = exercise;
    this.interval;
  }

  public draw(): HTMLElement {
    this.createBlocksHeader();
    const exerciseGif: HTMLImageElement = document.createElement("img");
    exerciseGif.className = "exercise-block__gif";
    const path: string = this.exercise.example;
    exerciseGif.src = path;
    this.exerciseBlock.append(exerciseGif);
    this.createExerciseInfo();
    this.createCounter();
    this.createNavigationButtons();

    document.addEventListener("click", (e) => {
      const target = <HTMLButtonElement>e.target;
      if (target.classList.contains("pause-modal__button-continue")) {
        clearInterval(this.interval);
        this.createThreeCount();
        setTimeout(() => {
          const duration = this.getExerciseDuration();
          this.setTimeCounter(duration);
          document.body.style.pointerEvents = "";
        }, 3000);
      }
    });

    return this.exerciseBlock;
  }

  private getExerciseDuration(): number {
    const durMins = Number(this.exercise.quantity.slice(0, 2));
    const durSeconds = Number(this.exercise.quantity.slice(3));
    const duration: number =
      durMins !== 0 ? durMins * 60 + durSeconds : durSeconds;
    return duration;
  }

  private createBlocksHeader(): void {
    const blockHeader: HTMLElement = this.template.createElement(
      "div",
      "exercise-block__header"
    );
    this.exerciseBlock.append(blockHeader);
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

  private createExerciseInfo(): void {
    const exerciseInfo: HTMLElement = this.template.createElement(
      "div",
      "exercise-block__info"
    );
    const exerciseName: HTMLElement = this.template.createElement(
      "div",
      "exercise-block__name",
      this.exercise.title
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
      this.exercise.youtube,
      "Watch"
    );
    youtubeLink.target = "_blank";
    extraInfo.append(infoLink, youtubeLink);
    exerciseInfo.append(exerciseName, extraInfo);
    this.exerciseBlock.append(exerciseInfo, extraInfo);
  }

  private createCounter(): void {
    const currentQuantity: HTMLElement = this.template.createElement(
      "span",
      "exercise-block__current-quantity",
      this.exercise.quantity
    );
    this.counter.append(currentQuantity);

    if (this.exercise.quantity.toLowerCase().includes("x")) {
      const doneButton: HTMLButtonElement = this.template.createBtn(
        "exercise-block__button-done",
        "Done"
      );
      this.counter.append(doneButton);
    } else {
      const countdownBar: HTMLElement = this.createCountdownBar();
      this.counter.append(countdownBar);
    }
    this.exerciseBlock.append(this.counter);
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
    const nextButton = this.template.createBtn(
      "exercise-block__button-next",
      "Next"
    );
    timeBar.append(track, pauseButton, nextButton);

    clearInterval(this.interval);
    this.createThreeCount();
    setTimeout(() => {
      const duration = this.getExerciseDuration();
      this.setTimeCounter(duration);
      document.body.style.pointerEvents = "";
    }, 3000);

    pauseButton.addEventListener("click", (e) => {
      e.preventDefault();
      clearInterval(this.interval);
      const pauseModal = new PauseModal(this.exercise);
      pauseModal.draw();
    });

    return timeBar;
  }

  setTimeCounter(duration: number): void {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      const quantity = <HTMLElement>(
        document.querySelector(".exercise-block__current-quantity")
      );
      const timeLeft = quantity.textContent;
      let minutes = timeLeft?.slice(0, 2);
      let seconds = timeLeft?.slice(3);
      if (Number(seconds) === 0) {
        if (Number(minutes) === 0) {
          clearInterval(this.interval);
          this.showNextButton();
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
      quantity.textContent = `${minutes}:${seconds}`;
      const widthEl = <HTMLElement>(
        document.querySelector(".exercise-block__time-bar")
      );
      const maxWidth = widthEl.clientWidth;
      const track = <HTMLElement>(
        document.querySelector(".exercise-block__track")
      );
      track.style.width = `${(maxWidth / duration) * Number(seconds)}px`;
    }, 1000);
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
    const delim: HTMLElement = this.template.createElement(
      "div",
      "exercise-block__delim"
    );
    const skipButton: HTMLButtonElement = this.template.createBtn(
      "exercise-block__button-skip",
      "Skip"
    );
    navigationButtons.append(previousButton, delim, skipButton);
    this.exerciseBlock.append(navigationButtons);

    previousButton.addEventListener("click", () => {
      if (this.interval !== undefined) {
        clearInterval(this.interval);
      }
    });

    skipButton.addEventListener("click", () => {
      if (this.interval !== undefined) {
        clearInterval(this.interval);
      }
    });
  }

  hideExerciseLinks(): void {
    const linksBlock = <HTMLElement>(
      document.querySelector(".exercise-block__extra")
    );
    linksBlock.style.visibility = "hidden";
  }

  showExerciseLinks(): void {
    const linksBlock = <HTMLElement>(
      document.querySelector(".exercise-block__extra")
    );
    linksBlock.style.visibility = "visible";
  }

  showNextButton(): void {
    const nextBtn = <HTMLButtonElement>(
      document.querySelector(".exercise-block__button-next")
    );
    nextBtn.style.display = "block";
  }

  disablePreviousButton(): void {
    const previousBtn = <HTMLButtonElement>(
      document.querySelector(".exercise-block__button-prev")
    );
    previousBtn.classList.add("inactive");
    previousBtn.disabled = true;
  }

  enablePreviousButton(): void {
    const previousBtn = <HTMLButtonElement>(
      document.querySelector(".exercise-block__button-prev")
    );
    previousBtn.classList.remove("inactive");
    previousBtn.disabled = false;
  }

  disableSkipButton(): void {
    const skipBtn = <HTMLButtonElement>(
      document.querySelector(".exercise-block__button-skip")
    );
    skipBtn.classList.add("inactive");
    skipBtn.disabled = true;
  }

  enableSkipButton(): void {
    const skipBtn = <HTMLButtonElement>(
      document.querySelector(".exercise-block__button-skip")
    );
    skipBtn.classList.remove("inactive");
    skipBtn.disabled = false;
  }

  createThreeCount() {
    document.body.style.pointerEvents = "none";
    const threeCounter: HTMLElement = this.template.createElement(
      "div",
      "counter-three"
    );
    this.counter.append(threeCounter);
    let count = 3;
    threeCounter.textContent = `${count}`;
    threeCounter.classList.add("fading");
    const updateCounter = () => {
      count = count - 1;
      threeCounter.textContent = `${count}`;
    };
    threeCounter.addEventListener("animationiteration", updateCounter);
    threeCounter.addEventListener("animationend", updateCounter);
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
        this.showExerciseLinks();
        this.enableSkipButton();
      }
      countNumber.textContent = `${curNumber}`;
      svgCircle2.style.strokeDashoffset = `${440 - (440 * curNumber) / 10}`;
      countDot.style.transform = `rotateZ(${curNumber * 36}deg)`;
    }, 1000);
  }
}

export default ExerciseBlock;
