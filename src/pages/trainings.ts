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
import AddNewComplex from "../components/addNewComplex";

class TrainingsPage {
  template: ITemplate;
  workoutBlock: IWorkoutBlock;
  public router?: IRouter;
  slider: ISlider;
  addNewComplex;
  constructor() {
    this.template = new Template();
    this.workoutBlock = new WorkoutBlock();
    this.slider = new Slider();
    this.addNewComplex = new AddNewComplex();
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
      this.workoutBlock.createAddWorkoutPlanCont("Add new workout", true),
      this.createWrapper(),
      this.createModal()
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

  private createWrapper(): HTMLElement {
    const wrapper = this.template.createElement(
      "div",
      "trainings__content-wrapper"
    );
    wrapper.append(this.createContent());
    return wrapper;
  }

  private createContent(): HTMLElement {
    const contentContainer: HTMLElement = this.template.createElement(
      "div",
      "workout-content-cont"
    );
    const workoutPlansInStore = JSON.parse(
      localStorage.getItem("workoutPlans") || "[]"
    );
    const data = [...workoutPlansInStore, ...workout_plans];
    for (let i = 0; i < data.length; i++) {
      const workoutBlock: HTMLElement = this.workoutBlock.createWorkoutBlockCont(
        data[i].title
      );
      const wrapper = this.template.createElement("div", "workout-wrapper");
      workoutBlock.append(wrapper);
      contentContainer.append(workoutBlock);
      const buttons = this.slider.createNextPrevBtns(
        data[i].block.length,
        wrapper,
        false
      );
      workoutBlock.append(buttons);
      for (let j = 0; j < data[i].block.length; j++) {
        const link = this.template.createElement("a", "link-to-exerc");
        const id: number = data[i].block[j].id;
        link.addEventListener("click", (e) => {
          e.preventDefault();
          if (this.router) {
            const mainElement: HTMLElement | null = document.querySelector(
              "main"
            );
            if (mainElement) {
              mainElement.innerHTML = "";
              this.router.navigate(`workouts/${id}`);
            }
          }
        });
        const block: IWorkoutMiniBlock = data[i].block[j];
        const content: HTMLElement = this.workoutBlock.createWorkoutContent(
          block,
          i,
          j,
          false,
          data.length
        );
        this.workoutBlock.colorBackground(content);
        link.append(content);
        wrapper.append(link);
      }
    }
    return contentContainer;
  }

  private createModal(): HTMLElement {
    const modal: HTMLElement = this.template.createElement(
      "div",
      "modal-addNewComplex"
    );
    modal.classList.add("invisible");
    const wrapper: HTMLElement = this.template.createElement(
      "div",
      "modal-addNewComplex__addName"
    );
    const title: HTMLElement = this.template.createElement(
      "h2",
      "modal-addNewComplex__title",
      "Create New Workout"
    );
    const input: HTMLInputElement = document.createElement("input");
    input.placeholder = "Workout Name";
    input.className = "modal-addNewComplex__input";
    const buttons: HTMLElement = this.template.createElement(
      "div",
      "modal-addNewComplex__btns"
    );
    const cancel: HTMLButtonElement = this.template.createBtn(
      "modal-addNewComplex__cancel",
      "Cancel"
    );
    cancel.addEventListener("click", () => {
      modal.classList.add("invisible");
    });
    const create: HTMLButtonElement = this.template.createBtn(
      "modal-addNewComplex__create",
      "Create"
    );
    create.addEventListener("click", () => {
      this.addNewComplex.addComplexInLocalStore();
      modal.classList.add("invisible");
      const contentWrapper = document.querySelector(
        ".trainings__content-wrapper"
      ) as HTMLElement;
      contentWrapper.innerHTML = "";
      contentWrapper.append(this.createContent());
    });
    buttons.append(cancel, create);
    wrapper.append(title, input, buttons);
    modal.append(wrapper);
    return modal;
  }
}

export default TrainingsPage;
