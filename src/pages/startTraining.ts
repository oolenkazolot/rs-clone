import Template from "../templates/template";
import { IExercise, ITemplate, IWorkoutPlan } from "../types/index";
import TakeARest from "../components/takeaRest";
import ExerciseBlock from "../components/exerciseBlock";
import PauseModal from "../components/pauseModal";
import workout_plans from "../utils/workout-plans-en";
import Congrats from "../components/congrats";
import router from "../components/routerComponent";
import AddNewComplex from "../components/addNewComplex";
import SingleTrainingPage from "./singleTraining";
import { mug, lightning2 } from "../components/svg";

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

  public async draw() {
    const mainElement: HTMLElement | null = document.querySelector("main");
    if (!mainElement) {
      return;
    }
    mainElement.classList.add("main");

    mainElement.textContent = "";
    const mainPageElement: HTMLElement = document.createElement("div");
    mainPageElement.classList.add("startTraining-page");
    const setttingsModal: HTMLElement = this.template.createElement(
      "div",
      "settingsModal"
    );
    setttingsModal.classList.add("invisible");
    setttingsModal.classList.add("modal-addNewComplex");
    setttingsModal.append(this.createSettingsModal());
    mainElement.append(mainPageElement, setttingsModal);
    const addNewComplex = new AddNewComplex();
    const serverData = await addNewComplex.creatingArrayFromData();
    let data: IWorkoutPlan[] = [];
    const singlePage = new SingleTrainingPage();
    const id = JSON.parse(String(localStorage.getItem("complexId")));
    if (id) {
      const exercises = await singlePage.transformExercises(id);
      for (let i = 0; i < serverData[0].block.length; i++) {
        if (id === serverData[0].block[i].id) {
          serverData[0].block[i].exercises.push(...exercises);
        }
      }
    }
    if (serverData.length && serverData[0].block.length) {
      data = [...serverData, ...workout_plans];
    } else {
      data = [...workout_plans];
    }

    data.forEach((plan) => {
      plan.block.forEach((item) => {
        if (String(item.id) === String(id)) {
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
      }, 3000);
      curExercise.disablePreviousButton();
    }

    const start = Date.now();

    mainPageElement.addEventListener("click", (e) => {
      const target = <HTMLButtonElement>e.target;
      if (target.classList.contains("exercise-block__button-done")) {
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
        mainPageElement.prepend(modal.draw());
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
        }, 3000);
      }
    });

    document.addEventListener("click", (e) => {
      const target = <HTMLElement>e.target;
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

  private async showCongrats(counter: number, time: number) {
    const pageContent = <HTMLElement>(
      document.querySelector(".startTraining-page")
    );
    const congrats = new Congrats(counter, time);
    pageContent.innerHTML = "";
    pageContent.append(await congrats.draw());

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
      if (quantity) {
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
        if (widthEl) {
          const maxWidth = widthEl.clientWidth;
          const track = <HTMLElement>(
            document.querySelector(".exercise-block__track")
          );
          track.style.width = `${(maxWidth / duration) * Number(seconds)}px`;
        }
      }
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
    backLayer.remove();
  }

  private createSettingsModal(): HTMLElement {
    const wrapper: HTMLElement = this.template.createElement(
      "div",
      "modal-addNewComplex__addName"
    );
    wrapper.classList.add("settings__modal");
    const title: HTMLElement = this.template.createElement(
      "h2",
      "modal-addNewComplex__title",
      "Workout Settings"
    );
    const restTimeBlock = this.createSettingsTimeBlock(
      "Rest time",
      "30 secs",
      mug
    );
    const loadBlock = this.createSettingsTimeBlock(
      "Load",
      "3 times per week",
      lightning2
    );
    const doneWrap: HTMLElement = this.template.createElement(
      "div",
      "settings__button-wrap"
    );
    const done: HTMLButtonElement = this.template.createBtn(
      "modal-addNewComplex__create",
      "Done"
    );
    doneWrap.append(done);
    done.classList.add("settings__done-btn");
    done.addEventListener("click", () => {
      const settingsModal = document.querySelector(
        ".settingsModal"
      ) as HTMLElement;
      settingsModal.classList.add("invisible");
    });
    wrapper.append(title, restTimeBlock, loadBlock, doneWrap);
    return wrapper;
  }

  private createSettingsTimeBlock(
    title1: string,
    content: string,
    svg: string
  ): HTMLElement {
    const restTimeBlock: HTMLElement = this.template.createElement(
      "div",
      "settingsMiniBlock"
    );
    const square: HTMLElement = this.template.createElement(
      "div",
      "settings-square"
    );
    square.innerHTML = svg;
    const textWrapper = this.template.createElement(
      "div",
      "settings__text-wrapper"
    );
    const textTitle: HTMLElement = this.template.createElement(
      "div",
      "settings__text-title",
      title1
    );
    const textContent = this.template.createElement(
      "div",
      "settings__text-content",
      content
    );
    textWrapper.append(textTitle, textContent);
    restTimeBlock.append(square, textWrapper);
    return restTimeBlock;
  }
}

export default StartTrainingPage;
