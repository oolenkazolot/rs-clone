import Template from "../templates/template";
import Authorization from "../utils/auth.routes";
import {
  ITemplate,
  IAuthorization,
  ILineItem,
  IWeightChartComponent,
} from "../types/index";
import { getUserIdLocalStorage } from "../utils/auth";
import WeightChartComponent from "../components/WeightChartComponent";

class Progress {
  private template: ITemplate;
  private mainClass: string;
  private mainClassTwo: string;
  private authorization: IAuthorization;
  private bmiValue: number;
  private bmiContent: string;
  private bmiClassName: string;

  constructor() {
    this.template = new Template();
    this.mainClass = "progress";
    this.mainClassTwo = "bmi";
    this.authorization = new Authorization();
    this.bmiValue = 0;
    this.bmiContent = "";
    this.bmiClassName = "";
  }
  public async createProgress(): Promise<HTMLElement> {
    await this.calculateBmi();

    const progress: HTMLElement = this.template.createElement(
      "section",
      `${this.mainClass}`
    );

    const bmiBlock: HTMLElement = this.createBmiBlock();

    progress.append(bmiBlock);
    return progress;
  }

  // private createBlockTitle(): HTMLElement {
  //   const blockTitle: HTMLElement = this.template.createElement(
  //     "div",
  //     `${this.mainClass}__title`
  //   );
  //   const title: HTMLElement = this.template.createElement(
  //     "h2",
  //     `${this.mainClass}__title-content`,
  //     "Weight dynamics"
  //   );
  //   blockTitle.append(title);
  //   return blockTitle;
  // }

  // private createCanvas(): HTMLElement {
  //   const weightChart: IWeightChartComponent = new WeightChartComponent({
  //     className: `${this.mainClass}__canvas`,
  //     data: [
  //       {
  //         date: new Date("2023-02-20"),
  //         weight: 56,
  //       },
  //       {
  //         date: new Date("2023-02-23"),
  //         weight: 60,
  //       },
  //       {
  //         date: new Date(),
  //         weight: 102,
  //       },
  //     ],
  //   });

  //   return weightChart.getChart();
  // }

  private async calculateBmi(): Promise<void> {
    const userId: string | undefined = getUserIdLocalStorage();
    if (!userId) {
      return;
    }
    const userInfo:
      | Record<string, string>
      | undefined = await this.authorization.getUserInfo(userId);
    if (!userInfo) {
      return;
    }

    let height = Number(userInfo.height);
    let weight = Number(userInfo.weight);

    if (userInfo.units === "Lbs-inches") {
      height = Number(userInfo.height) * 2.54;
      weight = Number(userInfo.weight) * 0.45;
    }

    this.bmiValue = parseFloat((weight / Math.pow(height / 100, 2)).toFixed(1));

    this.createBmiData();
  }

  private createBmiData(): void {
    if (this.bmiValue <= 18.5) {
      this.bmiContent = "underweight";
      this.bmiClassName = `${this.mainClassTwo}__line-underweight`;
    } else if (this.bmiValue > 18.5 && this.bmiValue <= 25) {
      this.bmiContent = "normal";
      this.bmiClassName = `${this.mainClassTwo}__line-normal`;
    } else if (this.bmiValue > 25 && this.bmiValue <= 30) {
      this.bmiContent = "overweight";
      this.bmiClassName = `${this.mainClassTwo}__line-overweight`;
    } else if (this.bmiValue > 30 && this.bmiValue <= 35) {
      console.log("ggg");
      this.bmiContent = "obesity 1 degree";
      this.bmiClassName = `${this.mainClassTwo}__line-obesity1`;
    } else if (this.bmiValue > 35 && this.bmiValue <= 40) {
      this.bmiContent = "obesity 2 degree";
      this.bmiClassName = `${this.mainClassTwo}__line-obesity2`;
    } else if (this.bmiValue > 40) {
      this.bmiContent = "obesity 3 degree";
      this.bmiClassName = `${this.mainClassTwo}__line-obesity3`;
    }
  }

  private createBmiBlock(): HTMLElement {
    const bmiBlock: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}`
    );
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
    const parametersBlock: HTMLElement = this.createParametersBlock();
    const bmiLine: HTMLElement = this.createBmiLine();
    const bmiTitle: HTMLElement = this.createBmiParametersTitle(
      this.bmiContent,
      this.bmiClassName
    );
    bmiContainer.append(parametersBlock, bmiLine, bmiTitle);
    return bmiContainer;
  }

  private createParametersBlock(): HTMLElement {
    const parametersBlock: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassTwo}__parameters`
    );
    const titles: HTMLElement[] = this.createTitles(this.bmiValue.toString());
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

    if (this.bmiValue < 15) {
      lineThumb.style.left = "0%";
      return lineThumb;
    }
    if (this.bmiValue > 40) {
      lineThumb.style.left = "100%";
      return lineThumb;
    }

    const left = ((this.bmiValue - 15) * 100) / 25;
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
}

export default Progress;
