import { ITemplate, IWorkoutMiniBlock } from "../types";
import Template from "../templates/template";
import absPng from "../assets/png/abs3.png";
import butt from "../assets/png/butt.png";
import thigh from "../assets/png/thigh.png";
import wholeBody from "../assets/png/whole_body2.png";
import morning from "../assets/images/morning_evening.jpg";
import evening from "../assets/images/morning_evening2.jpg";
import { burbell, clock, lightning } from "../components/svg";

class WorkoutBlock {
  template: ITemplate;

  constructor() {
    this.template = new Template();
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
    j: number,
    i: number
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
      workoutContentCont.append(this.createPngImage(i, j, additClass));
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
    additClass: string
  ): HTMLImageElement {
    let png;
    if (i === 0) {
      png = absPng;
    } else if (i === 1) {
      png = butt;
    } else if (i === 2) {
      png = thigh;
    } else if (i === 3) {
      if (j === 0) {
        png = morning;
      } else {
        png = evening;
      }
    } else if (i === 4) {
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
}

export default WorkoutBlock;
