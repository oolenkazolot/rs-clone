import Template from "../templates/template";
import {
  IRouter,
  ITemplate,
  IWorkoutBlock,
  IWorkoutMiniBlock,
} from "../types/index";
import workout_plans from "../utils/workout-plans-en";
import WorkoutBlock from "../components/workoutBlock";
import Slider from "../components/slider";
import Exercise from "../components/exercise";

class ExercisesPage {
  template: ITemplate;
  workoutBlock: IWorkoutBlock;
  slider;
  public router?: IRouter;
  constructor() {
    this.template = new Template();
    this.workoutBlock = new WorkoutBlock();
    this.slider = new Slider();
  }

  public draw(): void {
    const mainElement: HTMLElement | null = document.querySelector("main");
    if (!mainElement) {
      return;
    }
    mainElement.classList.add("main");

    mainElement.textContent = "";
    const mainPageElement: HTMLElement = document.createElement("div");
    mainPageElement.classList.add("exercises-page");
    mainElement.append(this.createDecorationEl(), mainPageElement);
    mainPageElement.append(
      this.createMiniHeader(),
      this.createWeekGoalCont(),
      this.createExercisesBlock(),
      this.createExercises()
    );
  }

  private createMiniHeader(): HTMLElement {
    const container: HTMLElement = this.template.createElement(
      "div",
      "mini-header-cont"
    );
    const workoutsCont: HTMLElement = this.miniHeaderBlock(
      "../assets/png/weight2.png",
      "0",
      "Workouts"
    );
    const timeCont: HTMLElement = this.miniHeaderBlock(
      "../assets/png/stopwatch.png",
      "0",
      "Minutes"
    );
    container.append(workoutsCont, timeCont);
    return container;
  }

  private miniHeaderBlock(
    source: string,
    content: string,
    miniTitle: string
  ): HTMLElement {
    const container: HTMLElement = this.template.createElement(
      "div",
      "mini-workouts-cont"
    );
    const img: HTMLImageElement = this.template.createImage(
      source,
      "barbell",
      "mini-cont-img"
    );
    const wrapper: HTMLElement = this.template.createElement(
      "div",
      "stat-wrapper"
    );
    const statNum: HTMLElement = this.template.createElement(
      "div",
      "stat-number",
      content
    );
    const title: HTMLElement = this.template.createElement(
      "p",
      "stat-title",
      miniTitle
    );
    wrapper.append(statNum, title);
    container.append(img, wrapper);
    return container;
  }

  private createWeekGoalCont(): HTMLElement {
    const weekGoalCont: HTMLElement = this.template.createElement(
      "div",
      "week-goal-cont"
    );
    const statCont: HTMLElement = this.template.createElement(
      "div",
      "week-goal-stat"
    );
    const weekGoalText = this.template.createElement(
      "p",
      "week-goal-text",
      "Week Goal"
    );
    const weekGoalNum: HTMLElement = this.template.createElement(
      "div",
      "week-goal-num",
      "0/0"
    );
    statCont.append(weekGoalText, weekGoalNum);
    const daysCont: HTMLElement = this.createDaysCont();
    weekGoalCont.append(statCont, daysCont);
    return weekGoalCont;
  }

  private createDaysCont(): HTMLElement {
    const WEEKDAYS: string[] = [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ];
    const daysCont: HTMLElement = this.template.createElement(
      "div",
      "days-cont"
    );
    for (let i = 0; i < 7; i++) {
      const circle: HTMLElement = this.template.createElement(
        "div",
        "days-circle",
        WEEKDAYS[i]
      );
      daysCont.append(circle);
      const checkMark = this.template.createElement("div", "check-mark");
      checkMark.classList.add("hidden");
      circle.append(checkMark);
    }
    return daysCont;
  }

  private createExercisesBlock(): HTMLElement {
    const exercBlock: HTMLElement = this.template.createElement(
      "div",
      "exerc-block"
    );
    const exercSlider: HTMLElement = this.template.createElement(
      "div",
      "exerc-slider"
    );
    let length = 0;
    for (let i = 0; i < workout_plans.length; i++) {
      for (let j = 0; j < workout_plans[i].block.length; j++) {
        length++;
        const block: IWorkoutMiniBlock = workout_plans[i].block[j];
        const workoutBlock: HTMLElement = this.workoutBlock.createWorkoutContent(
          block,
          i,
          j
        );
        workoutBlock.classList.add("blur");
        if (length === 2 || length === 4) {
          workoutBlock.classList.add("smallerImg");
        }
        if (length === 3) {
          workoutBlock.classList.add("largerImg");
          workoutBlock.classList.remove("blur");
          workoutBlock.children[1].classList.add("largerPng");
        }
        exercSlider.append(workoutBlock);
      }
    }
    const buttons: HTMLElement = this.slider.createNextPrevBtns(
      length,
      exercSlider,
      true
    );
    exercBlock.append(exercSlider, buttons);
    return exercBlock;
  }

  private createDecorationEl(): HTMLElement {
    const decorEl = this.template.createElement("div", "decor-circle");
    return decorEl;
  }

  private createExercises(): HTMLElement {
    const container: HTMLElement = this.template.createElement(
      "div",
      "exercises-container"
    );
    for (let i = 0; i < workout_plans.length; i++) {
      for (let j = 0; j < workout_plans[i].block.length; j++) {
        const block = workout_plans[i].block[j];
        for (let k = 0; k < block.exercises.length; k++) {
          const exerciseData = block.exercises[k];
          const exercise = new Exercise(exerciseData).draw();
          container.append(exercise);
        }
      }
    }
    return container;
  }
}

export default ExercisesPage;
