import Template from "../templates/template";
import { ITemplate } from "../types/index";

class Info {
  template: ITemplate;
  mainClass: string;

  constructor() {
    this.template = new Template();
    this.mainClass = "info";
  }

  public createInfo(): HTMLElement {
    const info: HTMLElement = this.template.createElement(
      "section",
      `${this.mainClass}`
    );
    const items: HTMLElement[] = this.createItem();
    info.append(...items);
    return info;
  }

  private createItem(): HTMLElement[] {
    const obj: Record<string, string> = {
      goal: "My goal: lose weight",
      load: "My load: medium",
    };
    const items: HTMLElement[] = [];
    for (const key in obj) {
      const item: HTMLElement = this.template.createElement(
        "div",
        `${this.mainClass}__item`
      );
      const content: HTMLElement = this.template.createElement(
        "div",
        `${this.mainClass}__content`,
        obj[key]
      );
      const btn: HTMLElement = this.template.createBtn(
        `${this.mainClass}__btn`,
        "edit"
      );
      item.append(content, btn);
      items.push(item);
    }

    return items;
  }
}

export default Info;
