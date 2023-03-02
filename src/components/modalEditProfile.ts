import Modal from "./modal";
import Template from "../templates/template";
import {
  IModal,
  ITemplate,
  IAuthorization,
  IAnswerAddUserInfo,
  IDataEditProfile,
} from "../types/index";
import { InputImg } from "../components/InputImg";
import { isHeightValid } from "../utils/validate";
import { isWeightValid } from "../utils/validate";
import Authorization from "../utils/auth.routes";
import Button from "../components/Button";
import { onCloseModal } from "../utils/component-utils";
import { getUserIdLocalStorage } from "../utils/auth";

class ModalEditProfile {
  private template: ITemplate;
  private modal: IModal;
  private mainClass: string;
  private authorization: IAuthorization;

  constructor() {
    this.modal = new Modal();
    this.template = new Template();
    this.mainClass = "edit-form";
    this.authorization = new Authorization();
  }

  public async createModal(
    drawProfilePage: () => Promise<void>
  ): Promise<HTMLElement | undefined> {
    const editForm: HTMLElement | undefined = await this.createEditForm(
      drawProfilePage
    );
    if (!editForm) {
      return;
    }
    const modal: HTMLElement = this.modal.createModal(
      "modal-edit-profile",
      editForm,
      true
    );
    return modal;
  }

  private async createEditForm(
    drawProfilePage: () => Promise<void>
  ): Promise<HTMLElement | undefined> {
    const editForm: HTMLElement = this.template.createElement(
      "div",
      this.mainClass
    );
    const title: HTMLElement = this.createTitle();
    const form: HTMLElement | undefined = await this.createForm(
      drawProfilePage
    );
    if (!form) {
      return;
    }
    editForm.append(title, form);

    return editForm;
  }

  private async getUserInfo(): Promise<Record<string, string> | undefined> {
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
    return userInfo;
  }

  private createTitle(): HTMLElement {
    const title: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__title`,
      "Edit your weight/height"
    );
    return title;
  }

  private async createForm(
    drawProfilePage: () => Promise<void>
  ): Promise<HTMLFormElement | undefined> {
    const userInfo:
      | Record<string, string>
      | undefined = await this.getUserInfo();
    if (!userInfo) {
      return;
    }

    const units: string[] = userInfo.units.split("-");
    const form: HTMLFormElement = this.template.createForm(
      `${this.mainClass}__form`,
      "/"
    );

    const inputWrap: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__input-wrap`
    );
    const inputBlockOne: HTMLElement = InputImg({
      mainClass: this.mainClass,
      className: [],
      attributes: {
        id: "weight",
        name: "weight",
        type: "number",
        placeholder: "Enter weight",
        value: userInfo.weight,
      },
      imgSrc: "../assets/svg/scales.svg",
      imgAlt: "scales-img",
      validate: isWeightValid,
      units: units[0],
      classNameUnits: `${this.mainClass}__units-weight`,
    });

    const inputBlockTwo: HTMLElement = InputImg({
      mainClass: this.mainClass,
      className: [],
      attributes: {
        id: "height",
        name: "height",
        type: "number",
        placeholder: "Enter height",
        value: userInfo.height,
      },
      imgSrc: "../assets/svg/height.svg",
      imgAlt: "height-img",
      validate: isHeightValid,
      units: units[1],
      classNameUnits: `${this.mainClass}__units-height`,
    });

    inputWrap.append(inputBlockOne, inputBlockTwo);
    const message: HTMLElement = this.createMessage();
    const btnEdit: HTMLElement = this.createBtnUpdate();
    form.addEventListener("submit", (e) => {
      this.onSubmitHandlerForm(e, form, drawProfilePage, units);
    });

    form.append(inputWrap, message, btnEdit);
    return form;
  }

  private createMessage(): HTMLElement {
    const message: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClass}__message-form`
    );
    return message;
  }

  private createBtnUpdate(): HTMLButtonElement {
    const btnUpdate: HTMLButtonElement = Button({
      content: "update",
      className: [`${this.mainClass}__btn`, "btn"],
      type: "submit",
    });
    return btnUpdate;
  }

  private onSubmitHandlerForm(
    e: Event,
    form: HTMLFormElement,
    drawProfilePage: () => Promise<void>,
    units: string[]
  ): void {
    e.preventDefault();
    const formData: FormData = new FormData(form);
    const valueWeight: string | undefined = formData.get("weight")?.toString();
    const valueHeight: string | undefined = formData.get("height")?.toString();

    if (!valueWeight || !valueHeight) {
      return;
    }
    const heightValid: boolean = isHeightValid(valueHeight, units[1]).res;
    const weightValid: boolean = isWeightValid(valueWeight, units[0]).res;

    if (!weightValid || !heightValid) {
      return;
    }
    const userId: string | undefined = getUserIdLocalStorage();
    if (!userId) {
      return;
    }
    this.updateInfoUser(
      {
        id: userId,
        weight: valueWeight,
        height: valueHeight,
      },
      drawProfilePage
    );
  }

  private async updateInfoUser(
    dataEditProfile: IDataEditProfile,
    drawProfilePage: () => Promise<void>
  ): Promise<void> {
    const res:
      | IAnswerAddUserInfo
      | undefined = await this.authorization.updateUserInfo(dataEditProfile);

    if (!res) {
      return;
    }

    if (res.errors && res.message) {
      this.ErrorHandler(res);
    } else {
      const messageEl: HTMLElement | null = document.querySelector(
        `.${this.mainClass}__message-form`
      );
      if (messageEl) {
        messageEl.textContent = "";
        messageEl.classList.remove("error");
      }
      onCloseModal("modal-edit-profile")();
      drawProfilePage();
    }
  }

  private ErrorHandler(res: IAnswerAddUserInfo): void {
    const inputs: NodeList = document.querySelectorAll(
      `${this.mainClass}__input`
    );
    const arrInputs: HTMLElement[] = Array.prototype.slice.call(inputs);

    arrInputs.forEach((input) => {
      input.classList.add("error");
    });

    const messageEl: HTMLElement | null = document.querySelector(
      `.${this.mainClass}__message-form`
    );
    if (!messageEl) {
      return;
    }
    messageEl.textContent = res.message;
    messageEl.classList.add("error");
  }
}

export default ModalEditProfile;
