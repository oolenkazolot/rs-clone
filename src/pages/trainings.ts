import Template from "../templates/template";
import { IRouter, ITemplate, IWorkoutMiniBlock } from "../types/index";
import { plus_in_circle } from "../components/svg";
import workout_plans from "../utils/workout-plans";
import WorkoutBlock from "../components/workoutBlock";

class TrainingsPage {
  template: ITemplate;
  workoutBlock;
  public router?: IRouter;
  constructor() {
    this.template = new Template();
    this.workoutBlock = new WorkoutBlock();
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
      for (let j = 0; j < workout_plans[i].block.length; j++) {
        const block: IWorkoutMiniBlock = workout_plans[i].block[j];
        const content: HTMLElement = this.workoutBlock.createWorkoutContent(
          block
        );

        if (workout_plans[i].block.length === 1) {
          content.style.background =
            "linear-gradient(90deg, rgba(128,27,150,0.7567401960784313) 0%, rgba(214,189,221,1) 78%)";
        } else {
          if (j === 0) {
            content.style.background =
              "linear-gradient(90deg, rgba(24,240,237,1) 0%, rgba(206,247,242,1) 100%)";
          }
          if (j === 1) {
            content.style.background =
              "linear-gradient(90deg, rgba(113,179,235,1) 0%, rgba(202,227,249,1) 100%)";
          }
          if (j === 2) {
            content.style.background =
              "linear-gradient(90deg, rgba(244,117,117,1) 0%, rgba(255,209,209,1) 100%)";
          }
          if (workout_plans[i].block.length === 1) {
            content.style.background =
              "linear-gradient(90deg, rgba(128,27,150,0.7567401960784313) 0%, rgba(214,189,221,1) 78%)";
          }
        }
        wrapper.append(content);
      }
    }
    return contentContainer;
  }
}

export default TrainingsPage;
