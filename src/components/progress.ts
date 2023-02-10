import Template from "../templates/template";
import { ITemplate, IProgressData, ILineItem } from "../types/index";

class Progress {
  private template: ITemplate;
  private mainClass: string;
  private mainClassTwo: string;

  constructor() {
    this.template = new Template();
    this.mainClass = "progress";
    this.mainClassTwo = "bmi";
  }
  public createProgress(): HTMLElement {
    const progress: HTMLElement = this.template.createElement(
      "section",
      `${this.mainClass}`
    );
    const items: HTMLElement[] = this.createItems();
    progress.append(...items);
    return progress;
  }

  private createItems(): HTMLElement[] {
    const progressWeight: IProgressData = {
      name: "height",
      value: "53",
      units: "kg",
    };
    const progressHeight: IProgressData = {
      name: "weight",
      value: "53",
      units: "kg",
    };
    const itemOne: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__item`
    );
    const containerOne: HTMLElement = this.createContainer(progressWeight);
    const canvas: HTMLElement = this.createCanvas();
    itemOne.append(containerOne, canvas);
    const itemTwo: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__item`
    );
    const containerTwo: HTMLElement = this.createContainer(progressHeight);
    const bmiBlock: HTMLElement = this.createBmiBlock();
    itemOne.append(containerOne, canvas);
    itemTwo.append(containerTwo, bmiBlock);
    return [itemOne, itemTwo];
  }

  private createCanvas(): HTMLElement {
    const canvas: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__canvas`,
      "canvas"
    );
    return canvas;
  }

  private createContainer(progressData: IProgressData): HTMLElement {
    const container: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__container`
    );
    const contentBlock: HTMLElement = this.createContentBlock(progressData);
    const btn: HTMLElement = this.template.createBtn(
      `${this.mainClass}__btn`,
      "edit"
    );
    container.append(contentBlock, btn);
    return container;
  }

  private createContentBlock(progressData: IProgressData): HTMLElement {
    const contentBlock: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__content`
    );
    const title: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClass}__title`,
      progressData.name
    );
    const subTitle: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClass}__subtitle`,
      `${progressData.value} ${progressData.units}`
    );
    contentBlock.append(title, subTitle);
    return contentBlock;
  }

  private createBmiBlock(): HTMLElement {
    const bmiBlock: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}`
    );
    const parametersBlock: HTMLElement = this.createParametersBlock("19.5");
    const bmiLine: HTMLElement = this.createBmiLine();
    const bmiTitle: HTMLElement = this.createBmiTitle("normal");
    bmiBlock.append(parametersBlock, bmiLine, bmiTitle);
    return bmiBlock;
  }

  private createParametersBlock(bmi: string): HTMLElement {
    const parametersBlock: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}__parameters`
    );
    const titles: HTMLElement[] = this.createTitles(bmi);
    parametersBlock.append(...titles);
    return parametersBlock;
  }

  private createTitles(bmi: string): HTMLElement[] {
    const title: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}__title`,
      "Body Mass Index(BMI):"
    );
    const subtitle: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}__subtitle`,
      bmi
    );
    return [title, subtitle];
  }

  private createBmiLine(): HTMLElement {
    const contentLineItem: ILineItem[] = [
      {
        className: "blue",
        value: ["15"],
      },
      {
        className: "green",
        value: ["18.5"],
      },
      {
        className: "yellow",
        value: ["25"],
      },
      {
        className: "orange",
        value: ["30"],
      },
      {
        className: "red",
        value: ["35", "40"],
      },
    ];
    const bmiLine: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}__line`
    );
    contentLineItem.forEach((content) => {
      const lineItem: HTMLElement = this.createLineItem(content);
      bmiLine.append(lineItem);
    });
    return bmiLine;
  }

  private createLineItem(content: ILineItem): HTMLElement {
    const lineItem: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}__line-item`
    );
    lineItem.classList.add(content.className);
    content.value.forEach((value) => {
      const lineNumber: HTMLElement = this.template.createElement(
        "div",
        `${this.mainClassTwo}__line-number`,
        value
      );
      lineItem.append(lineNumber);
    });
    return lineItem;
  }

  private createBmiTitle(content: string): HTMLElement {
    const bmiTitle: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}__title`,
      content
    );
    return bmiTitle;
  }
}

export default Progress;
