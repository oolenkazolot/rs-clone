import Template from "../templates/template";
import Authorization from "../utils/auth.routes";
import {
  ITemplate,
  IAuthorization,
  ILineItem,
  IUserInfo,
} from "../types/index";
import { getUserIdLocalStorage } from "../utils/auth";

class Progress {
  private template: ITemplate;
  private mainClass: string;
  private mainClassTwo: string;
  private authorization: IAuthorization;
  private bmiData: Record<string, string>;

  constructor() {
    this.template = new Template();
    this.mainClass = "progress";
    this.mainClassTwo = "bmi";
    this.authorization = new Authorization();
    this.bmiData = {};
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
      "Weight dynamics"
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

  private calculateBmi(userInfo: IUserInfo): void {
    const height = Number(userInfo.height);
    const weight = Number(userInfo.weight);
    const bmiValue: number = parseFloat(
      (weight / Math.pow(height / 100, 2)).toFixed(1)
    );
    this.bmiData.value = bmiValue.toString();
    if (bmiValue <= 18.5) {
      this.bmiData.content = "underweight";
      this.bmiData.className = `${this.mainClassTwo}__line-underweight`;
    } else if (bmiValue > 18.5 && bmiValue <= 25) {
      this.bmiData.content = "normal";
      this.bmiData.className = `${this.mainClassTwo}__line-normal`;
    } else if (bmiValue > 25 && bmiValue <= 30) {
      this.bmiData.content = "overweight";
      this.bmiData.className = `${this.mainClassTwo}__line-overweight`;
    } else if (bmiValue > 30 && bmiValue <= 35) {
      this.bmiData.content = "obesity 1 degree";
      this.bmiData.className = `${this.mainClassTwo}__line-obesity1`;
    } else if (bmiValue > 35 && bmiValue <= 40) {
      this.bmiData.content = "obesity 2 degree";
      this.bmiData.className = `${this.mainClassTwo}__line-obesity2`;
    } else if (bmiValue > 40) {
      this.bmiData.content = "obesity 3 degree";
      this.bmiData.className = `${this.mainClassTwo}__line-obesity3`;
    }
  }

  private createBmiBlock(): HTMLElement {
    const bmiBlock: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}`
    );
    this.calculateBmi({
      userId: "gggg",
      goal: "fffff",
      load: "ggggg",
      weight: "87",
      height: "177",
      units: "kg",
    });
    const titleContainer: HTMLElement = this.createBmiTitle();
    const bmiContainer: HTMLElement = this.createBmiContainer();
    bmiBlock.append(titleContainer, bmiContainer);
    return bmiBlock;
  }

  private createBmiTitle(): HTMLElement {
    const titleContainer: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}__title-container`
    );
    const title: HTMLElement = this.template.createElement(
      "h2",
      `${this.mainClassTwo}__title`,
      "Body Mass Index"
    );
    titleContainer.append(title);
    return titleContainer;
  }

  private createBmiContainer(): HTMLElement {
    const bmiContainer: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}__container`
    );
    const parametersBlock: HTMLElement = this.createParametersBlock(
      this.bmiData.value
    );
    const bmiLine: HTMLElement = this.createBmiLine();
    const bmiTitle: HTMLElement = this.createBmiParametersTitle(
      this.bmiData.content,
      this.bmiData.className
    );
    bmiContainer.append(parametersBlock, bmiLine, bmiTitle);
    return bmiContainer;
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
      `${this.mainClassTwo}__parameters-title`,
      "BMI:"
    );
    const subtitle: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}__parameters-subtitle`,
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

    const lineThumb: HTMLElement = this.createLineThumb();
    bmiLine.append(lineThumb);
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

  private createLineThumb(): HTMLElement {
    const lineThumb: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}__line-thumb`
    );

    if (Number(this.bmiData.value) < 15) {
      lineThumb.style.left = "0%";
      return lineThumb;
    }
    if (Number(this.bmiData.value) > 40) {
      lineThumb.style.left = "100%";
      return lineThumb;
    }

    const left = ((Number(this.bmiData.value) - 15) * 100) / 25;

    lineThumb.style.left = left.toString() + "%";
    return lineThumb;
  }

  private createBmiParametersTitle(
    content: string,
    className: string
  ): HTMLElement {
    const bmiTitle: HTMLElement = this.template.createElement(
      "div",
      className,
      content
    );
    return bmiTitle;
  }

  // private async getUserData(): Promise<void> {
  //   const userId: string | undefined = getUserIdLocalStorage();
  //   if (!userId) {
  //     return;
  //   }
  //   const res: IUserInfo | undefined = await this.authorization.getUserInfo(
  //     userId
  //   );
  //   console.log(res);

  //   if (res && res.message) {
  //     console.log(res.message);
  //   }
  // }
}

export default Progress;
