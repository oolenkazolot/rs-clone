import {
  ITemplate,
  ISingleTraining,
  IWorkoutPlan,
  IDataComplex,
} from "../types";
import Template from "../templates/template";
import workout_plans from "../utils/workout-plans-en";
import Exercise from "./exercise";
import ExerciseDetails from "./exerciseDetails";
import { getUserIdLocalStorage } from "../utils/auth";
import Complex from "../utils/сomplex.routes";
import trainingsData from "../utils/trainings-data-en";

class AddNewComplex {
  template: ITemplate;
  complex;

  constructor() {
    this.template = new Template();
    this.complex = new Complex();
  }

  showExercises(flag: boolean): HTMLElement {
    const exercisesWrapper = this.template.createElement(
      "div",
      "exercises-wrapper"
    );
    for (let i = 0; i < trainingsData.trainings.length; i++) {
      const exercWrapper = this.template.createElement("div", "wrap-exercise");
      const exerciseData = trainingsData.trainings[i];
      const exercise = new Exercise(exerciseData, flag).draw();
      exercWrapper.append(exercise);
      exercisesWrapper.append(exercWrapper);
      const button = this.template.createBtn("add-exerc-btn", "add");
      button.addEventListener("click", () => {
        const exerciseDetails = new ExerciseDetails(exerciseData);
        exerciseDetails.draw(trainingsData.trainings[i], true, true);
      });
      exercWrapper.append(button);
    }
    return exercisesWrapper;
  }

  createExercisesArray(addBtn: HTMLElement) {
    const matrix: string | null = addBtn.getAttribute("id");
    const i = matrix?.split(" ")[0];
    const j = matrix?.split(" ")[1];
    const k = matrix?.split(" ")[2];
  }

  createComplexNameModal(): HTMLElement {
    const modal: HTMLElement = this.template.createElement(
      "div",
      "complex-name-overlay"
    );
    const main: HTMLElement = document.querySelector(".main") as HTMLElement;
    main.append(modal);
    return modal;
  }

  async addComplexInLocalStore() {
    const input: HTMLInputElement = document.querySelector(
      ".modal-addNewComplex__input"
    ) as HTMLInputElement;

    const userId1: string | undefined = getUserIdLocalStorage();
    if (!userId1) {
      return;
    }
    await this.complex.createUserInfo({
      userId: userId1,
      name: input.value || "no name",
    });
  }

  createSelectExercises(): HTMLElement {
    const text: HTMLElement = this.template.createElement(
      "div",
      "singl-train__empty-text",
      "Select An Exercise"
    );
    return text;
  }

  async getComplexes() {
    const userId1: string | undefined = getUserIdLocalStorage();
    if (!userId1) {
      return;
    }
    const result = await this.complex.getComplex(userId1);
    return result;
  }

  async creatingArrayFromData() {
    const data = await this.getComplexes();
    const array: IWorkoutPlan[] = [
      {
        title: "Workouts you created",
        image: "",
        block: [],
      },
    ];
    if (data !== undefined) {
      for (let i = 0; i < Number(data.length); i++) {
        const elem: ISingleTraining = {
          id: data[i]._id,
          title: data[i].name,
          exercisesAmt: "0",
          exercisesTime: "0",
          image: "../assets/png/whole_body2.png",
          color:
            "linear-gradient(90deg, rgb(241, 147, 215) 0%, rgb(245, 237, 238) 100%)",
          exercises: [],
        };
        array[0].block.push(elem);
      }
    }
    return array;
  }
}

export default AddNewComplex;
