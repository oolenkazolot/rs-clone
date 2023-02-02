import Template from "../templates/template";
import { ITemplate } from "../types/index";

class Modal {
  template: ITemplate;

  constructor() {
    this.template = new Template();
  }

  public createModal(id: string, content: HTMLElement): HTMLElement {
    const modal: HTMLElement = this.template.createElement("div", "modal");
    modal.id = id;
    const modalInner: HTMLElement = this.createModalInner();
    modalInner.append(content);
    modal.append(modalInner);
    return modal;
  }

  private createModalInner(): HTMLElement {
    const modalInner: HTMLElement = this.template.createElement(
      "div",
      "modal__inner"
    );
    const icon = this.createIconClose();
    const btnClose: HTMLButtonElement = this.template.createBtn(
      "btn-close",
      icon
    );
    modalInner.append(btnClose);
    return modalInner;
  }

  private createIconClose(): HTMLElement {
    const icon: HTMLElement = this.template.createElement("i", "icon-close");
    return icon;
  }
}

export default Modal;
