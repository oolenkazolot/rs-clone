import { ITemplate, IWorkoutMiniBlock } from "../types";
import Template from "../templates/template";
import absPng from "../assets/png/abs3.png";
import butt from "../assets/png/butt.png";
import thigh from "../assets/png/thigh.png";
import wholeBody from "../assets/png/whole_body2.png";
import morning from "../assets/images/morning_evening.jpg";
import evening from "../assets/images/morning_evening2.jpg";
import { burbell, clock, lightning } from "../components/svg";
import { plus_in_circle } from "../components/svg";
import AddNewComplex from "./addNewComplex";

class WorkoutBlock {
  template: ITemplate;
  addNewComplex;

  constructor() {
    this.template = new Template();
    this.addNewComplex = new AddNewComplex();
  }

  public createWorkoutBlockCont(titleText: string): HTMLElement {
    const workoutBlockCont: HTMLElement = this.template.createElement(
      "div",
      "workout-block-cont"
    );

    workoutBlockCont.append(this.createTitle(titleText));

    return workoutBlockCont;
  }

  public createTitle(titleText: string): HTMLElement {
    const blockTitle: HTMLElement = this.template.createElement(
      "div",
      "workout-block-title"
    );
    const span: HTMLElement = this.template.createElement(
      "span",
      "span",
      titleText
    );
    blockTitle.append(span);
    return blockTitle;
  }

  public createWorkoutContent(
    data: IWorkoutMiniBlock,
    i: number,
    j: number,
    flag: boolean,
    length: number
  ): HTMLElement {
    const workoutContentCont: HTMLElement = this.template.createElement(
      "div",
      "workout-content-container"
    );
    workoutContentCont.setAttribute("name", data.title);
    workoutContentCont.append(
      this.createTextBlock(
        data.title,
        data.exercisesAmt,
        data.exercisesTime,
        j,
        data.complexityLevel
      )
    );
    const additClass = data.title.split(" ")[0];
    if (
      workoutContentCont.getAttribute("name") === "sleepy time stretch" ||
      workoutContentCont.getAttribute("name") === "morning warmup"
    ) {
      workoutContentCont.style.background = "#fff";
    }
    if (i < 5) {
      workoutContentCont.append(
        this.createPngImage(i, j, additClass, flag, length)
      );
    }

    return workoutContentCont;
  }

  public createTextBlock(
    descrTitleText: string,
    exercAmt: string,
    time: string,
    j: number,
    complexityLevel?: boolean
  ): HTMLElement {
    const textBlock: HTMLElement = this.template.createElement(
      "div",
      "text-block"
    );
    const title: HTMLElement = this.template.createElement(
      "p",
      "workout-content-title",
      descrTitleText
    );
    textBlock.append(
      title,
      this.createExercCont(exercAmt),
      this.createTimeCont(time)
    );
    if (complexityLevel === true) {
      textBlock.append(this.createLightnings(j));
    }
    return textBlock;
  }

  public createPngImage(
    i: number,
    j: number,
    additClass: string,
    flag: boolean,
    length: number
  ): HTMLImageElement {
    let png;
    if (length - 1 - i === 3) {
      png = absPng;
    } else if (length - 1 - i === 2) {
      png = butt;
    } else if (length - 1 - i === 1) {
      png = thigh;
    } else if (length - 1 - i === 0) {
      if (j === 0) {
        png = morning;
      } else {
        png = evening;
      }
    } else {
      png = wholeBody;
    }
    const pngImage: HTMLImageElement = this.template.createImage(
      png,
      "abs image",
      "workout-plans-png"
    );
    pngImage.classList.add(additClass);
    if (pngImage.src === wholeBody) {
      pngImage.style.right = "-2px";
    }
    if (flag) {
      pngImage.classList.add("adaptPng");
    }
    return pngImage;
  }

  public createExercCont(exercAmt: string): HTMLElement {
    const descrCont: HTMLElement = this.template.createElement(
      "div",
      "descr-cont"
    );
    const image: HTMLElement = this.template.createElement("div", "barbell");
    image.innerHTML = burbell;
    const text: HTMLElement = this.template.createElement(
      "p",
      "desctiption-text",
      `${exercAmt} exercises`
    );
    descrCont.append(image, text);
    return descrCont;
  }

  public createTimeCont(time: string): HTMLElement {
    const descrCont: HTMLElement = this.template.createElement(
      "div",
      "descr-cont"
    );
    const image: HTMLElement = this.template.createElement("div", "descr-time");
    image.innerHTML = clock;
    image.style.fill = "rgb(58, 57, 58)";
    const text: HTMLElement = this.template.createElement(
      "p",
      "desctiption-text",
      `${time} minutes`
    );
    descrCont.append(image, text);
    return descrCont;
  }

  public createLightnings(j: number): HTMLElement {
    const lightningsCont: HTMLElement = this.template.createElement(
      "div",
      "lightnings-cont"
    );
    for (let i = 0; i < 4; i++) {
      const image: HTMLElement = this.template.createElement(
        "div",
        "lightning"
      );
      image.innerHTML = lightning;
      if (i <= j) {
        image.style.fill = "rgb(58, 57, 58)";
      } else {
        image.style.fill = "rgb(158, 156, 158)";
      }
      lightningsCont.append(image);
    }
    return lightningsCont;
  }

  public colorBackground(element: HTMLElement): void {
    const elNameAttribute: string | null = element.getAttribute("name");
    let nameAttribute = "";
    if (elNameAttribute) {
      nameAttribute = elNameAttribute.split(" ")[1];
    }
    if (nameAttribute === "beginner") {
      element.style.background =
        "linear-gradient(90deg, rgba(135,254,252,1) 0%, rgba(233,244,243,1) 100%)";
    } else if (nameAttribute === "intermediate") {
      element.style.background =
        "linear-gradient(90deg, rgba(135,195,254,1) 0%, rgba(233,244,243,1) 100%)";
    } else if (nameAttribute === "advanced") {
      element.style.background =
        "linear-gradient(90deg, rgba(254,151,135,1) 0%, rgba(247,242,242,1) 100%)";
    } else if (nameAttribute === "Warmup" || nameAttribute === "Time") {
      element.style.background =
        "linear-gradient(90deg, rgba(128,27,150,0.75674019604313) 0%, rgba(214,189,221,1) 78%)";
    } else {
      element.style.background =
        " linear-gradient(90deg, rgba(241,147,215,1) 0%, rgba(245,237,238,1) 100%)";
    }
  }

  public createAddWorkoutPlanCont(
    description: string,
    flag: boolean
  ): HTMLElement {
    const addWorkoutPlanCont: HTMLElement = this.template.createElement(
      "div",
      "add-workout-plans-cont"
    );
    const text: HTMLElement = this.template.createElement(
      "p",
      "add-workouts-text",
      description
    );
    const plus: HTMLElement = this.template.createElement(
      "div",
      "plus-in-circle"
    );
    plus.innerHTML = plus_in_circle;

    addWorkoutPlanCont.append(text, plus);
    plus.addEventListener("click", () => {
      this.clickOnPlus(flag);
    });
    return addWorkoutPlanCont;
  }

  private clickOnPlus(flag: boolean): void {
    const modal: HTMLElement = document.querySelector(
      ".modal-addNewComplex"
    ) as HTMLElement;
    if (flag) {
      const input: HTMLInputElement = document.querySelector(
        ".modal-addNewComplex__input"
      ) as HTMLInputElement;
      input.value = "";
      modal.classList.remove("invisible");
    } else {
      const exercisesWrapper: HTMLElement = document.querySelector(
        ".training__exercises"
      ) as HTMLElement;
      exercisesWrapper.innerHTML = "";
      exercisesWrapper.append(
        this.addNewComplex.createSelectExercises(),
        this.addNewComplex.showExercises()
      );
    }
  }
}

export default WorkoutBlock;
