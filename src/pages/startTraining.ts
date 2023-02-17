import Template from "../templates/template";
import { IExercise, IRouter, ITemplate } from "../types/index";
import TakeARest from "../components/takeaRest";
import ExerciseBlock from "../components/exerciseBlock";
import workout_plans from "../utils/workout-plans-en";
import Congrats from "../components/congrats";

class StartTrainingPage {
  template: ITemplate;
  public router?: IRouter;
  takeARest;
  exerciseArray: IExercise[];
  currentExerciseIndex: number;
  done: boolean;

  constructor() {
    this.template = new Template();
    this.takeARest = new TakeARest();
    this.exerciseArray = workout_plans[2].block[0].exercises; //get from local storage
    this.currentExerciseIndex = 0;
    this.done = false;
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
      this.exerciseArray[this.currentExerciseIndex],
      this.currentExerciseIndex
    );
    mainPageElement.append(curExercise.draw());
    curExercise.hideExerciseLinks();
    curExercise.disablePreviousButton();
    curExercise.disableSkipButton();

    document.addEventListener("click", (e) => {
      const target = <HTMLButtonElement>e.target;
      if (target.classList.contains("exercise-block__button-done")) {
        this.showRestModal();
      }
      if (target.classList.contains("exercise-block__button-next")) {
        if (this.currentExerciseIndex === this.exerciseArray.length - 1) {
          this.showCongrats();
        } else {
          this.loadNextExercise();
        }
      }
      if (target.classList.contains("exercise-block__button-skip")) {
        if (this.currentExerciseIndex === this.exerciseArray.length - 1) {
          this.showCongrats();
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
      this.exerciseArray[this.currentExerciseIndex],
      this.currentExerciseIndex
    );
    page.append(nextExercise.draw());
  }

  private loadpreviousExercise(): void {
    const page = <HTMLElement>document.querySelector(".startTraining-page");
    page.innerHTML = "";
    this.currentExerciseIndex = this.currentExerciseIndex - 1;
    const prevExercise = new ExerciseBlock(
      this.exerciseArray[this.currentExerciseIndex],
      this.currentExerciseIndex
    );
    page.append(prevExercise.draw());
  }

  private restartExercise() {
    const page = <HTMLElement>document.querySelector(".startTraining-page");
    const curExercise = new ExerciseBlock(
      this.exerciseArray[this.currentExerciseIndex],
      this.currentExerciseIndex
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

  private showCongrats() {
    const pageContent = <HTMLElement>(
      document.querySelector(".startTraining-page")
    );
    const congrats = new Congrats();
    pageContent.innerHTML = "";
    pageContent.append(congrats.draw());
  }
}

export default StartTrainingPage;
