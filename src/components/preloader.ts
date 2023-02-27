import Template from "../templates/template";
import { ITemplate } from "../types/index";

export default class Preloader {
  template: ITemplate;
  mainClass: string;
  constructor() {
    this.template = new Template();
    this.mainClass = "preloader";
  }

  public draw(): void {
    const preloader: HTMLElement = this.createPreloader();
    document.body.classList.add("loaded");
    document.body.prepend(preloader);
  }

  private createPreloader(): HTMLElement {
    const preloader: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}`
    );
    const row: HTMLElement = this.createRow();
    preloader.append(row);
    return preloader;
  }

  private createRow() {
    const row: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__row`
    );
    row.append(this.createItem(), this.createItem());
    return row;
  }

  private createItem(): HTMLElement {
    const item: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__item`
    );
    return item;
  }
}
