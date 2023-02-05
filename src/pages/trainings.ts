import Template from "../templates/template";
import {
  IRouter,
  ITemplate,
  IWorkoutMiniBlock,
  IWorkoutBlock,
} from "../types/index";
import { plus_in_circle } from "../components/svg";
import workout_plans from "../utils/workout-plans-en";
import WorkoutBlock from "../components/workoutBlock";
import Slider from "../components/slider";

class TrainingsPage {
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
      const buttons = this.createNextPrevBtns(
        workout_plans[i].block.length,
        wrapper
      );
      workoutBlock.append(buttons);
      for (let j = 0; j < workout_plans[i].block.length; j++) {
        const block: IWorkoutMiniBlock = workout_plans[i].block[j];
        const content: HTMLElement = this.workoutBlock.createWorkoutContent(
          block,
          j,
          i
        );
        if (workout_plans[i].block.length === 1) {
          content.style.background =
            "linear-gradient(90deg, rgba(128,27,150,0.7567401960784313) 0%, rgba(214,189,221,1) 78%)";
        } else if (workout_plans[i].block.length === 3) {
          if (j === 0) {
            content.style.background =
              " linear-gradient(90deg, rgba(135,254,252,1) 0%, rgba(233,244,243,1) 100%)";
          }
          if (j === 1) {
            content.style.background =
              "linear-gradient(90deg, rgba(135,195,254,1) 0%, rgba(233,244,243,1) 100%)";
          }
          if (j === 2) {
            content.style.background =
              "linear-gradient(90deg, rgba(254,151,135,1) 0%, rgba(247,242,242,1) 100%)";
          }
        } else {
          content.style.background =
            "linear-gradient(90deg, rgba(128,27,150,0.7567401960784313) 0%, rgba(214,189,221,1) 78%)";
        }
        wrapper.append(content);
      }
    }
    return contentContainer;
  }

  private createNextPrevBtns(
    length: number,
    wrapper: HTMLElement
  ): HTMLElement {
    const buttonsCont: HTMLElement = this.template.createElement(
      "div",
      "buttons-cont"
    );
    const nextBtn: HTMLButtonElement = this.template.createBtn(
      "next-btn",
      "next"
    );
    if (length <= 2) {
      nextBtn.disabled = true;
    }
    const prevBtn: HTMLButtonElement = this.template.createBtn(
      "prev-btn",
      "prev"
    );
    prevBtn.disabled = true;
    buttonsCont.append(prevBtn, nextBtn);
    let n = 0;
    nextBtn.addEventListener("click", () => {
      console.log(n);
      this.slider.slideRight(n, nextBtn, prevBtn, wrapper, length);
      // if (n < length - 1) {
      //   nextBtn.disabled = false;
      //   n++;
      //   prevBtn.disabled = false;
      //   const delta = 33.33 * n;
      //   wrapper.style.justifyContent = "flex-start";
      //   wrapper.style.transform = `translate(-${delta}%)`;
      // }
      // if (n >= length - 1) {
      //   nextBtn.disabled = true;
      // }
    });
    prevBtn.addEventListener("click", () => {
      if (n < length - 1) {
        nextBtn.disabled = false;
      }
      if (n > 0) {
        n--;
        const delta = 33.33 * n;
        wrapper.style.justifyContent = "flex-start";
        wrapper.style.transform = `translate(-${delta}%)`;
      }
      if (n === 0) {
        prevBtn.disabled = true;
      }
    });
    return buttonsCont;
  }
}

export default TrainingsPage;
