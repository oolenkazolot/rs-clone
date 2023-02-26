import Template from "../templates/template";
import { IExercise, IRouter, ITemplate } from "../types/index";
import TakeARest from "../components/takeaRest";
import ExerciseBlock from "../components/exerciseBlock";
import workout_plans from "../utils/workout-plans-en";
import Congrats from "../components/congrats";
import router from "../components/routerComponent";

class StartTrainingPage {
  template: ITemplate;
  takeARest: TakeARest;
  exerciseArray: IExercise[];
  currentExerciseIndex: number;
  counter: number;

  constructor() {
    this.template = new Template();
    this.takeARest = new TakeARest();
    this.exerciseArray = [];
    this.currentExerciseIndex = 0;
    this.counter = 0;
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

    const complexId: string = localStorage.complexID || "1";
    workout_plans.forEach((plan) => {
      plan.block.forEach((item) => {
        if (item.id === Number(complexId)) {
          this.exerciseArray = item.exercises;
        }
      });
    });

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
      curExercise.disablePreviousButton();
    }

    const start = Date.now();

    document.addEventListener("click", (e) => {
      const target = <HTMLButtonElement>e.target;
      if (target.classList.contains("exercise-block__button-done")) {
        this.showRestModal();
        this.counter++;
      }
      if (target.classList.contains("exercise-block__button-next")) {
        if (this.currentExerciseIndex === this.exerciseArray.length - 1) {
          this.counter++;
          const resultMins = this.getResultMinutes(start);
          this.showCongrats(this.counter, resultMins);
        } else {
          this.showRestModal();
          this.counter++;
        }
      }
      if (target.classList.contains("exercise-block__button-skip")) {
        if (this.currentExerciseIndex === this.exerciseArray.length - 1) {
          const resultMins = this.getResultMinutes(start);
          this.showCongrats(this.counter, resultMins);
        } else {
          this.loadNextExercise();
        }
      }
      if (target.classList.contains("rest__skip-btn")) {
        this.loadNextExercise();
      }
      if (target.classList.contains("exercise-block__button-prev")) {
        if (this.currentExerciseIndex === 0) {
          return;
        } else {
          this.loadpreviousExercise();
        }
      }
      if (target.classList.contains("pause-modal__button-restart")) {
        document.body.style.overflow = "";
        this.restartExercise();
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
    const page = <HTMLElement>document.querySelector(".startTraining-page");
    page.innerHTML = "";
    this.currentExerciseIndex = this.currentExerciseIndex + 1;
    const nextExercise = new ExerciseBlock(
      this.exerciseArray[this.currentExerciseIndex]
    );
    page.append(nextExercise.draw());
  }

  private loadpreviousExercise(): void {
    const page = <HTMLElement>document.querySelector(".startTraining-page");
    page.innerHTML = "";
    this.currentExerciseIndex = this.currentExerciseIndex - 1;
    const prevExercise = new ExerciseBlock(
      this.exerciseArray[this.currentExerciseIndex]
    );
    page.append(prevExercise.draw());
  }

  private restartExercise() {
    const page = <HTMLElement>document.querySelector(".startTraining-page");
    const curExercise = new ExerciseBlock(
      this.exerciseArray[this.currentExerciseIndex]
    );
    page.innerHTML = "";
    page.append(curExercise.draw());
  }

  private showRestModal() {
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
}

export default StartTrainingPage;
