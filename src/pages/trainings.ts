import Template from "../templates/template";
import router from "../components/routerComponent";
import {
  ITemplate,
  IWorkoutMiniBlock,
  IWorkoutBlock,
  ISlider,
} from "../types/index";
import workout_plans from "../utils/workout-plans-en";
import WorkoutBlock from "../components/workoutBlock";
import Slider from "../components/slider";
import AddNewComplex from "../components/addNewComplex";
import Complex from "../utils/сomplex.routes";
import SingleTrainingPage from "./singleTraining";

class TrainingsPage {
  template: ITemplate;
  workoutBlock: IWorkoutBlock;
  slider;
  addNewComplex;
  complex;
  constructor() {
    this.template = new Template();
    this.workoutBlock = new WorkoutBlock();
    this.slider = new Slider();
    this.addNewComplex = new AddNewComplex();
    this.complex = new Complex();
  }

  public async draw() {
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
      await this.createWrapper(),
      await this.createModal()
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

  private async createWrapper() {
    const wrapper = this.template.createElement(
      "div",
      "trainings__content-wrapper"
    );
    wrapper.append(await this.createContent());
    return wrapper;
  }

  private async createContent() {
    const contentContainer: HTMLElement = this.template.createElement(
      "div",
      "workout-content-cont"
    );
    const serverData = await this.addNewComplex.creatingArrayFromData();
    // const workoutPlansInStore = JSON.parse(
    //   localStorage.getItem("workoutPlans") || "[]"
    // );
    for (let i = 0; i < serverData[0].block.length; i++) {
      const id = String(serverData[0].block[i].id);
      const singleTraining = new SingleTrainingPage();
      const exercisesTransformed = await singleTraining.transformExercises(id);
      for (let i = 0; i < serverData[0].block.length; i++) {
        if (id === serverData[0].block[i].id) {
          serverData[0].block[i].exercises.push(...exercisesTransformed);
        }
      }
    }
    let data = [];
    if (serverData.length && serverData[0].block.length) {
      data = [...serverData, ...workout_plans];
    } else {
      data = [...workout_plans];
    }
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
        false,
        wrapper
      );
      workoutBlock.append(buttons);
      for (let j = 0; j < data[i].block.length; j++) {
        const link = this.template.createElement("a", "link-to-exerc");
        const id: number | string = data[i].block[j].id;
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const mainElement: HTMLElement | null = document.querySelector(
            "main"
          );
          if (mainElement) {
            mainElement.innerHTML = "";
            router.navigate(`workouts/${id}`);
          }
          localStorage.setItem("complexId", JSON.stringify(id));
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

  private async createModal() {
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
    cancel.classList.add("btn");
    cancel.classList.add("btn--second");
    cancel.addEventListener("click", () => {
      modal.classList.add("invisible");
    });
    const create: HTMLButtonElement = this.template.createBtn(
      "modal-addNewComplex__create",
      "Create"
    );
    create.classList.add("btn");
    create.addEventListener("click", async () => {
      await this.addNewComplex.addComplexInLocalStore();
      modal.classList.add("invisible");
      const contentWrapper = document.querySelector(
        ".trainings__content-wrapper"
      ) as HTMLElement;
      contentWrapper.innerHTML = "";
      contentWrapper.append(await this.createContent());
    });
    buttons.append(cancel, create);
    wrapper.append(title, input, buttons);
    modal.append(wrapper);
    return modal;
  }
}

export default TrainingsPage;
