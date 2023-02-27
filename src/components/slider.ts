import { ITemplate, IWorkoutPlan } from "../types";
import Template from "../templates/template";
import workout_plans from "../utils/workout-plans-en";
import Exercise from "./exercise";
import Complex from "../utils/сomplex.routes";
import AddNewComplex from "./addNewComplex";
import SingleTrainingPage from "../pages/singleTraining";

class Slider {
  template: ITemplate;
  complex;

  constructor() {
    this.template = new Template();
    this.complex = new Complex();
  }

  public createNextPrevBtns(
    length: number,
    wrapper: HTMLElement,
    flag: boolean,
    largeWrapper: HTMLElement
  ): HTMLElement {
    const buttonsCont: HTMLElement = this.template.createElement(
      "div",
      "buttons-cont"
    );
    const nextBtn: HTMLButtonElement = this.template.createBtn("next-btn");
    const iconNext: HTMLElement = this.template.createIcon(
      "prev-btn__icon",
      "icon-arrow_forward_ios"
    );
    nextBtn.append(iconNext);
    if (length <= 1 && !flag) {
      nextBtn.disabled = true;
    }
    const prevBtn: HTMLButtonElement = this.template.createBtn("prev-btn");
    const iconPrev: HTMLElement = this.template.createIcon(
      "prev-btn__icon",
      "icon-arrow_back_ios"
    );
    prevBtn.append(iconPrev);
    if (!flag) {
      prevBtn.disabled = true;
    }
    buttonsCont.append(prevBtn, nextBtn);
    if (flag) {
      this.slide(nextBtn, prevBtn, wrapper, length, largeWrapper);
    } else {
      this.slider(nextBtn, prevBtn, wrapper, length, flag);
    }
    if (flag) {
      slider.changeExerciseContent(prevBtn, nextBtn);
    }

    return buttonsCont;
  }

  public slider(
    nextBtn: HTMLButtonElement,
    prevBtn: HTMLButtonElement,
    wrapper: HTMLElement,
    length: number,
    flag: boolean
  ): void {
    function nCalc() {
      let n = 0;
      nextBtn.addEventListener("click", () => {
        if (n < length - 1) {
          nextBtn.disabled = false;
          n++;
          slider.changeImgSise(flag, n, length);
          prevBtn.disabled = false;
          const delta: number = (100 / length) * n;
          wrapper.style.justifyContent = "flex-start";
          wrapper.style.transform = `translate(-${delta}%)`;
        }
        if (n >= length - 1) {
          nextBtn.disabled = true;
        }
      });
      prevBtn.addEventListener("click", () => {
        if (n <= length - 1) {
          nextBtn.disabled = false;
        }
        if (n > 0) {
          n--;
          slider.changeImgSise(flag, n, length);
          const delta = (100 / length) * n;
          wrapper.style.justifyContent = "flex-start";
          wrapper.style.transform = `translate(-${delta}%)`;
        }
        if (n === 0) {
          prevBtn.disabled = true;
        }
      });
    }
    nCalc();
  }

  changeImgSise(flag: boolean, n: number, length: number): void {
    const containers = document.querySelectorAll(".workout-content-container");
    const pngs = document.querySelectorAll(".workout-plans-png");
    if (flag) {
      containers.forEach((el) => {
        el.classList.remove("largerImg");
        el.classList.remove("smallerImg");
        el.classList.remove("blur");
      });
      pngs.forEach((el) => el.classList.remove("largerPng"));
      containers[n].classList.add("smallerImg");
      containers[n].classList.add("blur");
      if (n < length - 1) {
        pngs[1 + n].classList.add("largerPng");
        containers[1 + n].classList.add("largerImg");
        if (n < length - 2) {
          containers[2 + n].classList.add("smallerImg");
          containers[2 + n].classList.add("blur");
        }
      }
    }
  }

  slide(
    nextBtn: HTMLButtonElement,
    prevBtn: HTMLButtonElement,
    wrapper: HTMLElement,
    length: number,
    largeWrapper: HTMLElement
  ): void {
    let direction: number;
    const delta = 100 / length;
    nextBtn.addEventListener("click", function () {
      direction = -1;
      nextBtn.disabled = true;
      // largeWrapper.style.alignItems = "flex-start";
      wrapper.style.transform = `translate(-${delta}%)`;
      slider.changeImgSizeInf("forward");
    });
    prevBtn.addEventListener("click", function () {
      direction = 1;
      prevBtn.disabled = true;
      // largeWrapper.style.alignItems = "flex-end";
      wrapper.style.transform = `translate(${delta}%)`;
      slider.changeImgSizeInf("backward");
    });

    wrapper.addEventListener("transitionend", function () {
      if (direction === -1) {
        if (nextBtn.disabled) {
          if (wrapper.firstElementChild) {
            wrapper.appendChild(wrapper.firstElementChild);
          }
          nextBtn.disabled = false;
        }
      } else if (direction === 1) {
        if (prevBtn.disabled) {
          if (wrapper.lastElementChild) {
            wrapper.prepend(wrapper.lastElementChild);
          }
          prevBtn.disabled = false;
        }
      }

      wrapper.style.transition = "none";
      wrapper.style.transform = "translate(0)";
      setTimeout(function () {
        wrapper.style.transition = "ease 0.3s";
      });
    });
  }

  changeImgSizeInf(direct: string): void {
    const containers = document.querySelectorAll(".workout-content-container");
    const pngs = document.querySelectorAll(".workout-plans-png");
    containers.forEach((el) => {
      el.classList.remove("largerImg");
      el.classList.remove("smallerImg");
    });
    pngs.forEach((el) => {
      el.classList.remove("largerPng");
    });
    if (direct === "forward") {
      containers[3].classList.add("largerImg");
      pngs[3].classList.add("largerPng");
      containers[3].classList.remove("blur");
      containers[2].classList.add("smallerImg");
      containers[2].classList.add("blur");
      containers[4].classList.add("smallerImg");
      containers[4].classList.add("blur");
    } else {
      containers[1].classList.add("largerImg");
      pngs[1].classList.add("largerPng");
      containers[1].classList.remove("blur");
      containers[0].classList.add("smallerImg");
      containers[0].classList.add("blur");
      containers[2].classList.add("smallerImg");
      containers[2].classList.add("blur");
    }
  }

  async createExercises(i: number, j: number) {
    const container: HTMLElement = this.template.createElement(
      "div",
      "exercises-container"
    );
    // const workoutPlansInStore = JSON.parse(
    //   localStorage.getItem("workoutPlans") || "[]"
    // );
    const addNewComplex = new AddNewComplex();
    const serverData = await addNewComplex.creatingArrayFromData();
    let data: IWorkoutPlan[] = [];
    const singlePage = new SingleTrainingPage();
    const id = localStorage.getItem("complexId");
    if (id) {
      const exercises = await singlePage.transformExercises(JSON.parse(id));
      for (let i = 0; i < serverData[0].block.length; i++) {
        if (JSON.parse(id) === serverData[0].block[i].id) {
          serverData[0].block[i].exercises.push(...exercises);
        }
      }
    }
    if (serverData.length && serverData[0].block.length) {
      data = [...serverData, ...workout_plans];
    } else {
      data = [...workout_plans];
    }
    const block = data[i].block[j];
    if (block.exercises.length) {
      for (let k = 0; k < block.exercises.length; k++) {
        const exerciseData = block.exercises[k];
        const exercise = new Exercise(exerciseData, false).draw();
        container.append(exercise);
      }
    }
    return container;
  }

  async changeExerciseContent(prevBtn: HTMLElement, nextBtn: HTMLElement) {
    const addNewComplex = new AddNewComplex();
    const serverData = await addNewComplex.creatingArrayFromData();
    let data: IWorkoutPlan[] = [];
    if (serverData.length && serverData[0].block.length) {
      data = [...serverData, ...workout_plans];
    } else {
      data = [...workout_plans];
    }
    let i = 0;
    let j = 0;
    if (data[i].block.length === 1) {
      i = 1;
      j = 1;
    } else if (data[i].block.length === 2) {
      i = 1;
      j = 0;
    } else if (data[i].block.length === 0) {
      i = 1;
      j = 2;
    } else {
      i = 0;
      j = 2;
    }
    localStorage.setItem("complexId", JSON.stringify(data[i].block[j].id));
    nextBtn.addEventListener("click", async () => {
      if (j < data[i].block.length - 1) {
        j++;
      } else {
        if (i < data.length - 1) {
          j = 0;
          i++;
        } else {
          i = 0;
          j = 0;
        }
      }
      localStorage.setItem("complexId", JSON.stringify(data[i].block[j].id));
      const exercisesContainer = document.querySelector(
        ".exercises-wrapper"
      ) as HTMLElement;
      const newExercises = await slider.createExercises(i, j);
      exercisesContainer.innerHTML = "";
      exercisesContainer.append(newExercises);
    });
    prevBtn.addEventListener("click", async () => {
      if (j > 0) {
        j--;
      } else {
        if (i > 0) {
          i--;
          j = data[i].block.length - 1;
        } else {
          i = data.length - 1;
          j = data[i].block.length - 1;
        }
      }
      localStorage.setItem("complexId", JSON.stringify(data[i].block[j].id));
      const exercisesContainer = document.querySelector(
        ".exercises-wrapper"
      ) as HTMLElement;
      const newExercises = await slider.createExercises(i, j);
      exercisesContainer.innerHTML = "";
      exercisesContainer.append(newExercises);
    });
  }

  async getComplexParam(id: number) {
    const workoutPlansInStore = JSON.parse(
      localStorage.getItem("workoutPlans") || "[]"
    );
    const addNewComplex = new AddNewComplex();
    const serverData = await addNewComplex.creatingArrayFromData();
    const data = [...serverData, ...workout_plans];
    const array: number[] = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].block.length; j++) {
        if (data[i].block[j].id === id) {
          array.push(i, j);
        }
      }
    }
    return array;
  }
}

const slider = new Slider();

export default Slider;
