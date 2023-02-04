import { ITemplate, IWorkoutMiniBlock } from "../types";
import Template from "../templates/template";
import absPng from "../assets/png/abs3.png";
import { burbell } from "../components/svg";
import { clock } from "../components/svg";
import { lightning } from "../components/svg";

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

  public createWorkoutContent(data: IWorkoutMiniBlock): HTMLElement {
    const workoutContentCont: HTMLElement = this.template.createElement(
      "div",
      "workout-content-container"
    );
    workoutContentCont.append(
      this.createTextBlock(data.title, data.exercisesAmt, data.exercisesTime),
      this.createPngImage()
    );
    return workoutContentCont;
  }

  public createTextBlock(
    descrTitleText: string,
    exercAmt: string,
    time: string
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
      this.createTimeCont(time),
      this.createLightnings()
    );
    return textBlock;
  }

  public createPngImage(): HTMLImageElement {
    const pngImage: HTMLImageElement = this.template.createImage(
      absPng,
      "abs image",
      "workout-plans-png"
    );
    pngImage.alt = "abg image";
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

  public createLightnings(): HTMLElement {
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
      image.style.fill = "rgb(58, 57, 58)";
      lightningsCont.append(image);
    }
    return lightningsCont;
  }
}

export default WorkoutBlock;
