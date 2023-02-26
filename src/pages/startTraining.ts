import Template from "../templates/template";
import { IExercise, ITemplate } from "../types/index";
import TakeARest from "../components/takeaRest";
import ExerciseBlock from "../components/exerciseBlock";
import PauseModal from "../components/pauseModal";
import workout_plans from "../utils/workout-plans-en";
import Congrats from "../components/congrats";
import router from "../components/routerComponent";

class StartTrainingPage {
  template: ITemplate;
  takeARest: TakeARest;
  exerciseArray: IExercise[];
  currentExerciseIndex: number;
  counter: number;
  interval: NodeJS.Timer | undefined;

  constructor() {
    this.template = new Template();
    this.takeARest = new TakeARest();
    this.exerciseArray = [];
    this.currentExerciseIndex = 0;
    this.counter = 0;
    this.interval;
  }

  public draw(): void {
    const mainElement: HTMLElement | null = document.querySelector("main");
    if (!mainElement) {
      return;
    }
    mainElement.classList.add("main");

    mainElement.textContent = "";
    const mainPageElement: HTMLElement = document.createElement("div");
    mainPageElement.classList.add("startTraining-page");
    mainElement.append(mainPageElement);

    const complexId: string = localStorage.complexId || "1";
    workout_plans.forEach((plan) => {
      plan.block.forEach((item) => {
        if (item.id === Number(complexId)) {
          this.exerciseArray = item.exercises;
        }
      });
    });

    this.currentExerciseIndex = 0;
    const curExercise = new ExerciseBlock(
      this.exerciseArray[this.currentExerciseIndex]
    );
    mainPageElement.append(curExercise.draw());
    if (
      this.currentExerciseIndex === 0 &&
      this.exerciseArray[this.currentExerciseIndex].quantity
        .toLowerCase()
        .includes("x")
    ) {
      curExercise.createCountDown();
      document.body.style.pointerEvents = "none";
      curExercise.hideExerciseLinks();
      curExercise.disablePreviousButton();
      curExercise.disableSkipButton();
    } else {
      clearInterval(this.interval);
      curExercise.createThreeCount();
      setTimeout(() => {
        const duration = this.getExerciseDuration(
          this.exerciseArray[this.currentExerciseIndex]
        );
        this.setTimeCounter(duration);
        document.body.style.pointerEvents = "";
      }, 3000);
      curExercise.disablePreviousButton();
    }

    const start = Date.now();

    document.addEventListener("click", (e) => {
      const target = <HTMLButtonElement>e.target;
      if (target.classList.contains("exercise-block__button-done")) {
        clearInterval(this.interval);
        this.showRestModal();
        this.counter++;
      }
      if (target.classList.contains("exercise-block__button-next")) {
        if (this.currentExerciseIndex === this.exerciseArray.length - 1) {
          clearInterval(this.interval);
          this.counter++;
          const resultMins = this.getResultMinutes(start);
          this.showCongrats(this.counter, resultMins);
        } else {
          clearInterval(this.interval);
          this.showRestModal();
          this.counter++;
        }
      }
      if (target.classList.contains("exercise-block__button-skip")) {
        if (this.currentExerciseIndex === this.exerciseArray.length - 1) {
          clearInterval(this.interval);
          const resultMins = this.getResultMinutes(start);
          this.showCongrats(this.counter, resultMins);
        } else {
          clearInterval(this.interval);
          this.loadNextExercise();
        }
      }
      if (target.classList.contains("rest__skip-btn")) {
        clearInterval(this.interval);
        this.loadNextExercise();
      }
      if (target.classList.contains("exercise-block__button-prev")) {
        if (this.currentExerciseIndex === 0) {
          return;
        } else {
          clearInterval(this.interval);
          this.loadPreviousExercise();
        }
      }
      if (target.classList.contains("pause-modal__button-restart")) {
        this.closeModal();
        clearInterval(this.interval);
        document.body.style.overflow = "";
        this.restartExercise();
      }
      if (target.classList.contains("exercise-block__button-pause")) {
        clearInterval(this.interval);
        document.body.style.overflow = "hidden";
        const modal = new PauseModal(
          this.exerciseArray[this.currentExerciseIndex]
        );
        modal.draw();
      }
      if (target.classList.contains("pause-modal__button-continue")) {
        this.closeModal();
        document.body.style.overflow = "";
        clearInterval(this.interval);
        this.createThreeCount();
        setTimeout(() => {
          const duration = this.getExerciseDuration(
            this.exerciseArray[this.currentExerciseIndex]
          );
          this.setTimeCounter(duration);
          document.body.style.pointerEvents = "";
        }, 3000);
      }
      if (
        target.classList.contains("header__link") ||
        target.classList.contains("header__btn")
      ) {
        clearInterval(this.interval);
      }
      e.preventDefault();
    });
  }

  private getResultMinutes(startNum: number) {
    const resultTime = Date.now() - startNum;
    const resultMins = new Date(resultTime).getMinutes();
    return resultMins;
  }

  private loadNextExercise(): void {
    this.currentExerciseIndex = this.currentExerciseIndex + 1;
    this.showExercise();
  }

  private loadPreviousExercise(): void {
    this.currentExerciseIndex = this.currentExerciseIndex - 1;
    this.showExercise();
  }

  private restartExercise(): void {
    this.showExercise();
  }

  private showExercise(): void {
    const page = <HTMLElement>document.querySelector(".startTraining-page");
    const curExercise = new ExerciseBlock(
      this.exerciseArray[this.currentExerciseIndex]
    );
    if (
      !this.exerciseArray[this.currentExerciseIndex].quantity
        .toLowerCase()
        .includes("x")
    ) {
      clearInterval(this.interval);
      curExercise.createThreeCount();
      setTimeout(() => {
        const duration = this.getExerciseDuration(
          this.exerciseArray[this.currentExerciseIndex]
        );
        this.setTimeCounter(duration);
        document.body.style.pointerEvents = "";
      }, 3000);
    }
    page.innerHTML = "";
    page.append(curExercise.draw());
  }

  private showRestModal(): void {
    const pageContent = <HTMLElement>(
      document.querySelector(".startTraining-page")
    );
    pageContent.innerHTML = "";
    pageContent.append(
      this.takeARest.draw(this.currentExerciseIndex, this.exerciseArray)
    );
    this.autoChange();
  }

  private showCongrats(counter: number, time: number): void {
    const pageContent = <HTMLElement>(
      document.querySelector(".startTraining-page")
    );
    const congrats = new Congrats(counter, time);
    pageContent.innerHTML = "";
    pageContent.append(congrats.draw());

    const completeBtn = <HTMLAnchorElement>(
      document.querySelector(".congrats__button-complete")
    );
    completeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const mainElement: HTMLElement | null = document.querySelector("main");
      if (mainElement) {
        mainElement.innerHTML = "";
        router.navigate("exercises");
      }
    });
  }

  private autoChange(): void {
    let counter = 0;
    const addBtn = document.querySelector(".rest__add-btn") as HTMLElement;
    const skipBtn = document.querySelector(".rest__skip-btn") as HTMLElement;
    addBtn.addEventListener("click", () => {
      counter = counter - 20;
    });
    const int = setInterval(() => {
      if (counter < 30) {
        counter++;
        if (counter === 30) {
          this.loadNextExercise();
          counter = 0;
          clearInterval(int);
        }
      }
    }, 1000);
    skipBtn.addEventListener("click", () => {
      counter = 0;
      clearInterval(int);
    });
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
          const nextBtn = <HTMLButtonElement>(
            document.querySelector(".exercise-block__button-next")
          );
          nextBtn.style.display = "block";
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

  getExerciseDuration(exercise: IExercise): number {
    const durMins = Number(exercise.quantity.slice(0, 2));
    const durSeconds = Number(exercise.quantity.slice(3));
    const duration: number =
      durMins !== 0 ? durMins * 60 + durSeconds : durSeconds;
    return duration;
  }

  createThreeCount(): void {
    document.body.style.pointerEvents = "none";
    const threeCounter: HTMLElement = this.template.createElement(
      "div",
      "counter-three"
    );
    const counter = <HTMLElement>(
      document.querySelector(".exercise-block__counter")
    );
    counter.append(threeCounter);
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

  closeModal() {
    const backLayer = <HTMLElement>(
      document.querySelector(".pause-modal__backlayer")
    );
    document.body.removeChild(backLayer);
  }
}

export default StartTrainingPage;
