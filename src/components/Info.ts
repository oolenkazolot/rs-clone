import Template from "../templates/template";
import { ITemplate, IUserInfo, IAuthorization } from "../types/index";
import Authorization from "../utils/auth.routes";
import { getUserIdLocalStorage } from "../utils/auth";

class Info {
  private template: ITemplate;
  private mainClass: string;
  private authorization: IAuthorization;

  constructor() {
    this.template = new Template();
    this.mainClass = "info";
    this.authorization = new Authorization();
  }

  public createInfo(): HTMLElement | undefined {
    const info: HTMLElement = this.template.createElement(
      "section",
      `${this.mainClass}`
    );
    this.createItems(info);
    return info;
  }

  private async createItems(info: HTMLElement): Promise<void> {
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
    // if (res && res.message) {
    //   console.log(res.message);
    // }
    const items: HTMLElement[] = [];
    const units: string[] = userInfo.units.split("-");

    for (const key in userInfo) {
      switch (key) {
        case "goal": {
          const itemGoal: HTMLElement = this.createItem(
            `${key}:`,
            userInfo.goal
          );
          items.push(itemGoal);
          break;
        }
        case "load": {
          const itemLoad: HTMLElement = this.createItem(
            `${key}:`,
            userInfo.load
          );
          items.push(itemLoad);
          break;
        }

        case "weight": {
          const itemWeight: HTMLElement = this.createItem(
            `${key}:`,
            `${userInfo.weight} ${units[0]}`
          );
          items.push(itemWeight);
          break;
        }

        case "height": {
          const itemHeight: HTMLElement = this.createItem(
            `${key}:`,
            `${userInfo.height} ${units[1]}`
          );
          items.push(itemHeight);
          break;
        }
      }
    }

    info.append(...items);
  }

  private createItem(nameTitle: string, nameDescription: string): HTMLElement {
    const item: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__item`
    );
    const content: HTMLElement = this.createContent(nameTitle, nameDescription);
    const btn: HTMLElement = this.template.createBtn(
      `${this.mainClass}__btn`,
      "edit"
    );
    item.append(content, btn);
    return item;
  }

  private createContent(
    nameTitle: string,
    nameDescription: string
  ): HTMLElement {
    const content: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__item-content`
    );
    const title: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__item-title`,
      nameTitle
    );
    const description: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__item-description`,
      nameDescription
    );
    content.append(title, description);
    return content;
  }
}

export default Info;
