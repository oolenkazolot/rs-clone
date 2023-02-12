import Template from "../templates/template";
import { IExercise, IRouter, ITemplate } from "../types/index";
import TakeARest from "../components/takeaRest";
import ExerciseBlock from "../components/exerciseBlock";
import workout_plans from "../utils/workout-plans-en";

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
    this.exerciseArray = workout_plans[0].block[0].exercises;
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

    const curExercise = new ExerciseBlock();
    mainPageElement.append(
      curExercise.draw(this.exerciseArray[this.currentExerciseIndex])
    );
    if (this.currentExerciseIndex === 0) {
      curExercise.createCountDown();
    }

    document.addEventListener("click", (e) => {
      const target = <HTMLButtonElement>e.target;
      if (
        target.classList.contains("exercise-block__button-done") ||
        target.classList.contains("exercise-block__button-skip")
      ) {
        mainPageElement.innerHTML = "";
        mainPageElement.append(
          this.takeARest.draw(this.currentExerciseIndex, this.exerciseArray)
        );
      }
      if (target.classList.contains("rest__skip-btn")) {
        this.loadNextExercise();
      }
    });
  }

  private loadNextExercise(): void {
    const page = <HTMLElement>document.querySelector(".startTraining-page");
    const nextExercise = new ExerciseBlock();
    page.innerHTML = "";
    this.currentExerciseIndex = this.currentExerciseIndex + 1;
    page.append(
      nextExercise.draw(this.exerciseArray[this.currentExerciseIndex])
    );
  }
}

export default StartTrainingPage;
