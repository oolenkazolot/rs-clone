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

    this.createItem(info);

    return info;
  }

  private async createItem(info: HTMLElement): Promise<void> {
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
    for (const key in userInfo) {
      const item: HTMLElement = this.template.createElement(
        "div",
        `${this.mainClass}__item`
      );
      const content: HTMLElement = this.template.createElement(
        "div",
        `${this.mainClass}__item-content`
      );
      const title: HTMLElement = this.template.createElement(
        "div",
        `${this.mainClass}__item-title`,
        `${key}:`
      );
      const description: HTMLElement = this.template.createElement(
        "div",
        `${this.mainClass}__item-description`,
        userInfo[key]
      );
      content.append(title, description);
      const btn: HTMLElement = this.template.createBtn(
        `${this.mainClass}__btn`,
        "edit"
      );
      item.append(content, btn);
      items.push(item);
    }

    info.append(...items);
  }
}

export default Info;
