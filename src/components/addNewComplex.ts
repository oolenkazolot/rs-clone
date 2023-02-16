import { ITemplate, ISingleTraining, IWorkoutPlan } from "../types";
import Template from "../templates/template";
import workout_plans from "../utils/workout-plans-en";
import Exercise from "./exercise";
import ExerciseDetails from "./exerciseDetails";

class AddNewComplex {
  template: ITemplate;

  constructor() {
    this.template = new Template();
  }

  showExercises(): HTMLElement {
    const exercisesWrapper = this.template.createElement(
      "div",
      "exercises-wrapper"
    );
    for (let i = 0; i < workout_plans.length; i++) {
      for (let j = 0; j < workout_plans[i].block.length; j++) {
        for (let k = 0; k < workout_plans[i].block[j].exercises.length; k++) {
          const exercWrapper = this.template.createElement(
            "div",
            "wrap-exercise"
          );
          const exerciseData = workout_plans[i].block[j].exercises[k];
          const exercise = new Exercise(exerciseData).draw();
          exercWrapper.append(exercise);
          exercisesWrapper.append(exercWrapper);
          const button = this.template.createBtn("add-exerc-btn", "add");
          button.setAttribute(
            "id",
            `${i} ${j} ${workout_plans[i].block[j].exercises[k].id}`
          );
          button.addEventListener("click", () => {
            const exerciseDetails = new ExerciseDetails(exerciseData);
            const modal = document.querySelector(
              ".modal-addNewComplex"
            ) as HTMLElement;
            modal.innerHTML = "";
            modal.append(
              exerciseDetails.draw(workout_plans[i].block[j].exercises)
            );
            modal.classList.remove("invisible");
          });
          exercWrapper.append(button);
        }
      }
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

  addComplexInLocalStore(): void {
    const input: HTMLInputElement = document.querySelector(
      ".modal-addNewComplex__input"
    ) as HTMLInputElement;
    const dataInStorage: IWorkoutPlan[] = JSON.parse(
      localStorage.getItem("workoutPlans") || "[]"
    );

    let newBlock: ISingleTraining;
    if (dataInStorage.length) {
      newBlock = {
        id: dataInStorage[0].block[dataInStorage[0].block.length - 1].id + 1,
        title: input.value || "no name",
        exercisesAmt: "0",
        exercisesTime: "0",
        image: "../assets/png/whole_body2.png",
        color:
          "linear-gradient(90deg, rgb(241, 147, 215) 0%, rgb(245, 237, 238) 100%)",
        exercises: [],
      };
    } else {
      newBlock = {
        id: 12,
        title: input.value || "no name",
        exercisesAmt: "0",
        exercisesTime: "0",
        image: "../assets/png/whole_body2.png",
        color:
          "linear-gradient(90deg, rgb(241, 147, 215) 0%, rgb(245, 237, 238) 100%)",
        exercises: [],
      };
    }
    let data: IWorkoutPlan[];

    if (dataInStorage.length) {
      dataInStorage[0].block.push(newBlock);
      data = dataInStorage;
    } else {
      data = [
        {
          title: "Workouts you created",
          image: "",
          block: [newBlock],
        },
      ];
    }
    localStorage.setItem("workoutPlans", JSON.stringify(data));
  }

  createSelectExercises(): HTMLElement {
    const text: HTMLElement = this.template.createElement(
      "div",
      "singl-train__empty-text",
      "Select An Exercise"
    );
    return text;
  }
}

export default AddNewComplex;
