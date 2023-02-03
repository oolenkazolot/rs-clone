import Template from "../templates/template";
import { ITemplate } from "../types/index";
import { onCloseModal } from "../utils/component-utils";

class Modal {
  template: ITemplate;
  mainClass: string;

  constructor() {
    this.template = new Template();
    this.mainClass = "modal";
  }

  public createModal(id: string, content: HTMLElement): HTMLElement {
    const modal: HTMLElement = this.template.createElement(
      "div",
      this.mainClass
    );
    modal.id = id;
    const backDrop: HTMLElement = this.createBackDrop(id);
    const modalInner: HTMLElement = this.createModalInner(id);
    modalInner.append(content);
    modal.append(backDrop, modalInner);
    return modal;
  }

  private createBackDrop(id: string): HTMLElement {
    const backDrop = this.template.createElement(
      "div",
      `${this.mainClass}__backdrop`
    );
    backDrop.onclick = onCloseModal(id);
    return backDrop;
  }

  private createModalInner(id: string): HTMLElement {
    const modalInner: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__inner`
    );
    const icon = this.createIconClose();
    const btnClose: HTMLButtonElement = this.template.createBtn(
      "btn-close",
      icon
    );
    btnClose.onclick = onCloseModal(id);
    modalInner.append(btnClose);
    return modalInner;
  }

  private createIconClose(): HTMLElement {
    const icon: HTMLElement = this.template.createElement("i", "icon-close");
    return icon;
  }
}

export default Modal;
