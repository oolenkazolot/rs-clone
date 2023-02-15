import { ITemplate } from "../types";
import Template from "../templates/template";
import workout_plans from "../utils/workout-plans-en";
import Exercise from "./exercise";

class Slider {
  template: ITemplate;

  constructor() {
    this.template = new Template();
  }

  public createNextPrevBtns(
    length: number,
    wrapper: HTMLElement,
    flag: boolean
  ): HTMLElement {
    const buttonsCont: HTMLElement = this.template.createElement(
      "div",
      "buttons-cont"
    );
    const nextBtn: HTMLButtonElement = this.template.createBtn(
      "next-btn",
      "next"
    );
    if (length <= 1 && !flag) {
      nextBtn.disabled = true;
    }
    const prevBtn: HTMLButtonElement = this.template.createBtn(
      "prev-btn",
      "prev"
    );
    if (!flag) {
      prevBtn.disabled = true;
    }
    buttonsCont.append(prevBtn, nextBtn);
    if (flag) {
      this.slide(nextBtn, prevBtn, wrapper, length);
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
    length: number
  ): void {
    let direction: number;
    const delta = 100 / length;
    nextBtn.addEventListener("click", function () {
      direction = -1;
      nextBtn.disabled = true;
      wrapper.style.justifyContent = "flex-start";
      wrapper.style.transform = `translate(-${delta}%)`;
      slider.changeImgSizeInf("forward");
    });
    prevBtn.addEventListener("click", function () {
      direction = 1;
      prevBtn.disabled = true;
      wrapper.style.justifyContent = "flex-end";
      wrapper.style.transform = `translate(${delta}%)`;
      slider.changeImgSizeInf("backward");
    });

    wrapper.addEventListener("transitionend", function () {
      if (direction === -1) {
        if (wrapper.firstElementChild) {
          wrapper.appendChild(wrapper.firstElementChild);
        }
        nextBtn.disabled = false;
      } else if (direction === 1) {
        if (wrapper.lastElementChild) {
          wrapper.prepend(wrapper.lastElementChild);
        }
        prevBtn.disabled = false;
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

  createExercises(i: number, j: number): HTMLElement {
    const container: HTMLElement = this.template.createElement(
      "div",
      "exercises-container"
    );
    const workoutPlansInStore = JSON.parse(
      localStorage.getItem("workoutPlans") || "[]"
    );
    const data = [...workoutPlansInStore, ...workout_plans];
    const block = data[i].block[j];
    for (let k = 0; k < block.exercises.length; k++) {
      const exerciseData = block.exercises[k];
      const exercise = new Exercise(exerciseData).draw();
      container.append(exercise);
    }
    return container;
  }

  changeExerciseContent(prevBtn: HTMLElement, nextBtn: HTMLElement): void {
    const workoutPlansInStore = JSON.parse(
      localStorage.getItem("workoutPlans") || "[]"
    );
    const data = [...workoutPlansInStore, ...workout_plans];
    let i = 0;
    let j = 0;
    if (data[i].block.length === 1) {
      i = 1;
      j = 1;
    } else if (data[i].block.length === 2) {
      i = 1;
      j = 0;
    } else {
      i = 0;
      j = 2;
    }
    nextBtn.addEventListener("click", () => {
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
      const exercisesContainer = document.querySelector(
        ".exercises-wrapper"
      ) as HTMLElement;
      exercisesContainer.innerHTML = "";
      exercisesContainer.append(slider.createExercises(i, j));
    });
    prevBtn.addEventListener("click", () => {
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
      const exercisesContainer = document.querySelector(
        ".exercises-wrapper"
      ) as HTMLElement;
      exercisesContainer.innerHTML = "";
      exercisesContainer.append(slider.createExercises(i, j));
    });
  }
}

const slider = new Slider();

export default Slider;
