import Template from "../templates/template";
import { ITemplate } from "../types/index";
import { onCloseModal } from "../utils/component-utils";

class ModalMobileMenu {
  template: ITemplate;
  mainClass: string;

  constructor() {
    this.template = new Template();
    this.mainClass = "modal-mobile";
  }

  public createModal(
    id: string,
    content: HTMLElement,
    isShowIconClose: boolean
  ): HTMLElement {
    this.resizeWindowCloseMobModal();
    const modal: HTMLElement = this.template.createElement(
      "div",
      this.mainClass
    );
    modal.id = id;
    const backDrop: HTMLElement = this.createBackDrop(id, isShowIconClose);
    const modalInner: HTMLElement = this.createModalInner(id, isShowIconClose);
    modalInner.append(content);
    modal.append(backDrop, modalInner);
    return modal;
  }

  private resizeWindowCloseMobModal(): void {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 768) {
        onCloseModal("modal-mobile")();
      }
    });
  }

  private createBackDrop(id: string, isShowIconClose: boolean): HTMLElement {
    const backDrop = this.template.createElement(
      "div",
      `${this.mainClass}__backdrop`
    );
    if (!isShowIconClose) {
      return backDrop;
    } else {
      backDrop.onclick = onCloseModal(id);
      return backDrop;
    }
  }

  private createModalInner(id: string, isShowIconClose: boolean): HTMLElement {
    const modalInner: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__inner`
    );
    if (isShowIconClose) {
      const icon: HTMLElement = this.createIconClose();
      const btnClose: HTMLButtonElement = this.template.createBtn(
        `${this.mainClass}__btn-close`,
        icon
      );
      btnClose.onclick = onCloseModal(id);
      modalInner.append(btnClose);
      return modalInner;
    } else {
      return modalInner;
    }
  }

  private createIconClose(): HTMLElement {
    const icon: HTMLElement = this.template.createIcon(
      `${this.mainClass}__icon`,
      "icon-close"
    );
    return icon;
  }
}

export default ModalMobileMenu;
