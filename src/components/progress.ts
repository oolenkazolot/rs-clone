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
    const title: HTMLElement = this.createBlockTitle();
    const canvas: HTMLElement = this.createCanvas();
    const bmiBlock: HTMLElement = this.createBmiBlock();
    progress.append(title, canvas, bmiBlock);
    return progress;
  }

  private createBlockTitle(): HTMLElement {
    const blockTitle: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__title`
    );
    const title: HTMLElement = this.template.createElement(
      "h2",
      `${this.mainClass}__title-content`,
      "Dynamics of weight change"
    );
    blockTitle.append(title);
    return blockTitle;
  }

  private createCanvas(): HTMLElement {
    const canvas: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__canvas`,
      "canvas"
    );
    return canvas;
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
      `${this.mainClassTwo}__line-title`,
      content
    );
    return bmiTitle;
  }
}

export default Progress;
