import Template from "../templates/template";
import { IExercise, IRouter, ITemplate } from "../types/index";
import TakeARest from "../components/takeaRest";
import ExerciseBlock from "../components/exerciseBlock";
import workout_plans from "../utils/workout-plans-en";
import Congrats from "../components/congrats";

class StartTrainingPage {
  template: ITemplate;
  public router?: IRouter;
  takeARest: TakeARest;
  exerciseArray: IExercise[];
  currentExerciseIndex: number;
  counter: number;

  constructor() {
    this.template = new Template();
    this.takeARest = new TakeARest();
    this.exerciseArray = workout_plans[2].block[0].exercises; //get from local storage
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

    document.addEventListener("click", (e) => {
      const target = <HTMLButtonElement>e.target;
      if (target.classList.contains("exercise-block__button-done")) {
        this.showRestModal();
        this.counter++;
      }
      if (target.classList.contains("exercise-block__button-next")) {
        if (this.currentExerciseIndex === this.exerciseArray.length - 1) {
          this.counter++;
          this.showCongrats(this.counter);
        } else {
          this.showRestModal();
          this.counter++;
        }
      }
      if (target.classList.contains("exercise-block__button-skip")) {
        if (this.currentExerciseIndex === this.exerciseArray.length - 1) {
          this.showCongrats(this.counter);
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
  }

  private showCongrats(counter: number) {
    const pageContent = <HTMLElement>(
      document.querySelector(".startTraining-page")
    );
    const congrats = new Congrats(counter);
    pageContent.innerHTML = "";
    pageContent.append(congrats.draw());
  }
}

export default StartTrainingPage;
