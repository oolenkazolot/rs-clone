import Template from "../templates/template";
import {
  IRouter,
  ITemplate,
  IWorkoutMiniBlock,
  IWorkoutBlock,
  ISlider,
} from "../types/index";
import { plus_in_circle } from "../components/svg";
import workout_plans from "../utils/workout-plans-en";
import WorkoutBlock from "../components/workoutBlock";
import Slider from "../components/slider";

class TrainingsPage {
  template: ITemplate;
  workoutBlock: IWorkoutBlock;
  public router?: IRouter;
  slider: ISlider;
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
    mainPageElement.classList.add("workout-plans-page");
    mainElement.append(mainPageElement);
    mainPageElement.append(
      this.createTitle(),
      this.createAddWorkoutPlanCont(),
      this.createContent()
    );
  }

  private createTitle(): HTMLElement {
    const title: HTMLElement = this.template.createElement(
      "h1",
      "page-title",
      "Workout Plans"
    );
    return title;
  }

  private createAddWorkoutPlanCont(): HTMLElement {
    const addWorkoutPlanCont: HTMLElement = this.template.createElement(
      "div",
      "add-workout-plans-cont"
    );
    const text = this.template.createElement(
      "p",
      "add-workouts-text",
      "Add new workout"
    );
    const plus = this.template.createElement("div", "plus-in-circle");
    plus.innerHTML = plus_in_circle;

    addWorkoutPlanCont.append(text, plus);
    return addWorkoutPlanCont;
  }

  private createContent(): HTMLElement {
    const contentContainer: HTMLElement = this.template.createElement(
      "div",
      "workout-content-cont"
    );
    for (let i = 0; i < workout_plans.length; i++) {
      const workoutBlock: HTMLElement = this.workoutBlock.createWorkoutBlockCont(
        workout_plans[i].title
      );
      const wrapper = this.template.createElement("div", "workout-wrapper");
      workoutBlock.append(wrapper);
      contentContainer.append(workoutBlock);
      const buttons = this.slider.createNextPrevBtns(
        workout_plans[i].block.length,
        wrapper,
        false
      );
      workoutBlock.append(buttons);
      for (let j = 0; j < workout_plans[i].block.length; j++) {
        const block: IWorkoutMiniBlock = workout_plans[i].block[j];
        const content: HTMLElement = this.workoutBlock.createWorkoutContent(
          block,
          j,
          i,
          false
        );
        this.workoutBlock.colorBackground(content);
        wrapper.append(content);
      }
    }
    return contentContainer;
  }
}

export default TrainingsPage;
