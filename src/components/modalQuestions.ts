import Modal from "../components/modal";
import Template from "../templates/template";
import {
  IModal,
  ITemplate,
  IBtnRadio,
  IDataFormQuestions,
  IAnswerAddUserInfo,
  IAuthorization,
} from "../types/index";
import { ButtonRadio } from "../components/ButtonRadio";
import Button from "../components/Button";
import { InputImg } from "../components/InputImg";
import { isHeightValid } from "../utils/validate";
import { isScalesValid } from "../utils/validate";
import { formSlider, IFormSlider } from "../utils/formSlider";
import Authorization from "../utils/auth.routes";
import { onCloseModal } from "../utils/component-utils";
import { getUserIdLocalStorage } from "../utils/auth";

class ModalQuestions {
  template: ITemplate;
  modal: IModal;
  mainClass: string;
  mainClassSecond: string;
  slider: IFormSlider;
  authorization: IAuthorization;

  constructor() {
    this.modal = new Modal();
    this.template = new Template();
    this.mainClass = "slider-questions";
    this.mainClassSecond = "slide-info";
    this.slider = formSlider({ slideCount: 3 });
    this.authorization = new Authorization();
  }

  public draw(): void {
    const sliderWrap: HTMLElement = this.createSliderWrap();
    const modal: HTMLElement = this.modal.createModal(
      "modal-questions",
      sliderWrap
    );
    document.body.append(modal);
  }

  private createSliderWrap(): HTMLElement {
    const mainClass = "slider-wrapper";
    const sliderWrap: HTMLElement = this.template.createElement(
      "div",
      mainClass
    );
    const slider: HTMLElement = this.createSlider();
    const sliderControl: HTMLElement = this.sliderControl();

    sliderWrap.append(slider, sliderControl);
    return sliderWrap;
  }

  private sliderControl(): HTMLElement {
    const mainClass = "slider-control";
    const sliderControl: HTMLElement = this.template.createElement(
      "div",
      mainClass
    );
    const arrowBack: HTMLElement = this.template.createElement(
      "i",
      `${mainClass}__back`
    );
    arrowBack.classList.add("icon-arrow_back_ios");
    arrowBack.onclick = this.slider.prevSlide;
    this.slider.setPrevBtn(arrowBack);
    const sliderPoints: HTMLElement = this.createSliderPoints();
    this.slider.setPointerContainer(sliderPoints);
    const arrowForward: HTMLElement = this.template.createElement(
      "i",
      `${mainClass}__forward`
    );
    arrowForward.classList.add("icon-arrow_forward_ios");
    arrowForward.onclick = this.slider.nextSlide;
    this.slider.setNextBtn(arrowForward);
    sliderControl.append(arrowBack, sliderPoints, arrowForward);
    return sliderControl;
  }

  private createSlider(): HTMLElement {
    const slider: HTMLElement = this.template.createElement(
      "div",
      this.mainClass
    );
    const sliderForm: HTMLElement = this.createSliderForm();
    slider.append(sliderForm);
    return slider;
  }

  private createSliderForm(): HTMLElement {
    const sliderForm: HTMLFormElement = this.template.createForm(
      `${this.mainClass}__form`,
      "/"
    );
    const slideList: HTMLElement = this.createSliderList();
    sliderForm.append(slideList);
    sliderForm.addEventListener("submit", (e) => {
      this.onSubmitHandlerForm(e, sliderForm);
    });
    return sliderForm;
  }

  private onSubmitHandlerForm(e: Event, form: HTMLFormElement) {
    e.preventDefault();
    const questions: string[] = ["goal", "load", "weight", "height", "units"];
    const formData: FormData = new FormData(form);
    const valuesForm: Record<string, string> = {};
    questions.forEach((question) => {
      const val: string | null | File = formData.get(question);
      if (val) {
        valuesForm[question] = val.toString();
      }
    });
    const userId: string | undefined = getUserIdLocalStorage();
    if (!userId) {
      return;
    }
    valuesForm.id = userId;
    this.sendInfoUser(valuesForm);
  }

  private createSliderList(): HTMLElement {
    const dataFormQuestions: IDataFormQuestions[] = [
      {
        title: "Before we start",
        question: "What is your goal?",
        name: "goal",
        nameBtn: ["Keep Fit", "Lose Weight", "Get Stronger"],
        values: ["keep-fit", "lose-weight", "get-stronger"],
      },
      {
        title: "Load",
        question: "What load would you like?",
        name: "load",
        nameBtn: ["Low", "Middle", "High"],
        values: ["Low", "Middle", "High"],
      },
    ];

    const sliderList: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__list`
    );
    this.slider.setContainer(sliderList);
    dataFormQuestions.forEach((slideData: IDataFormQuestions) => {
      const slide: HTMLElement = this.createSlide(slideData);
      sliderList.append(slide);
    });
    const createSlideAboutMe: HTMLElement = this.createSlideAboutMe();
    sliderList.append(createSlideAboutMe);
    return sliderList;
  }

  private createSlide({
    title,
    question,
    name,
    nameBtn,
    values,
  }: IDataFormQuestions): HTMLElement {
    const slide: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__slide`
    );
    const slideContent: HTMLElement[] = this.createSlideContent(
      title,
      question
    );
    const btnWrap: HTMLElement = this.createBtnWrap(name, nameBtn, values);
    const message: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClass}__message`
    );
    slide.append(...slideContent, btnWrap, message);
    return slide;
  }

  private createSlideContent(title: string, question: string): HTMLElement[] {
    const titleEl: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__title`,
      title
    );
    const questionEl: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClass}__question`,
      question
    );
    return [titleEl, questionEl];
  }

  private createSlideAboutMe(): HTMLElement {
    const slide: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__slide`
    );
    const titleEl: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__title`,
      "Tell us about yourself"
    );
    const inputWrap: HTMLElement = this.createSlideAboutMeInputWrap();
    const btnBlock: HTMLElement = this.createSlideAboutMeBtnBlock();
    const message: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClass}__message-form`
    );
    const btnSubmit: HTMLButtonElement = this.createBtnSubmitForm();
    slide.append(titleEl, inputWrap, btnBlock, message, btnSubmit);
    return slide;
  }

  private createSlideAboutMeInputWrap(): HTMLElement {
    const inputWrap: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassSecond}__input-wrap`
    );
    const inputBlockOne: HTMLElement = InputImg({
      className: [],
      attributes: {
        id: "weight",
        name: "weight",
        type: "number",
        placeholder: "Enter weight",
        required: "true",
      },
      imgSrc: "../assets/svg/scales.svg",
      imgAlt: "scales-img",
      validate: isScalesValid,
    });

    const inputBlockTwo: HTMLElement = InputImg({
      className: [],
      attributes: {
        id: "height",
        name: "height",
        type: "number",
        placeholder: "Enter height",
        required: "true",
      },
      imgSrc: "../assets/svg/height.svg",
      imgAlt: "height-img",
      validate: isHeightValid,
    });
    const unitsWeight: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClass}__units-weight`,
      "kg"
    );
    inputBlockOne.append(unitsWeight);
    const unitsHeight: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClass}__units-height`,
      "cm"
    );
    inputBlockTwo.append(unitsHeight);

    inputWrap.append(inputBlockOne, inputBlockTwo);
    return inputWrap;
  }

  private onChangeHandlerBtnRadio(e: Event): void {
    const input: HTMLInputElement = e.currentTarget as HTMLInputElement;
    const value: string = input.value;
    const unitsWeight: HTMLElement | null = document.querySelector(
      ".slider-questions__units-weight"
    );
    const unitsHeight: HTMLElement | null = document.querySelector(
      ".slider-questions__units-height"
    );

    if (unitsWeight && unitsHeight && value === "Lbs-inches") {
      unitsWeight.textContent = "Lbs";
      unitsHeight.textContent = "inches";
    }
    if (unitsWeight && unitsHeight && value === "kg-cm") {
      unitsWeight.textContent = "kg";
      unitsHeight.textContent = "cm";
    }
  }

  private createSlideAboutMeBtnBlock(): HTMLElement {
    const btnWrapOne: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassSecond}__btn-wrap`
    );
    const messageOne: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClassSecond}__message`
    );
    const btnOne: HTMLElement[] = ButtonRadio(
      {
        type: "radio",
        id: "kg-cm",
        name: "units",
        className: `${this.mainClassSecond}__btn`,
        value: "kg-cm",
        checked: "checked",
        onChange: this.onChangeHandlerBtnRadio,
      },
      {
        forName: "kg-cm",
        content: "kg/cm",
        className: `${this.mainClassSecond}__btn-title`,
      }
    );

    btnWrapOne.append(...btnOne, messageOne);
    const btnWrapTwo: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassSecond}__btn-wrap`
    );
    const messageTwo: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClassSecond}__message`
    );
    const btnTwo: HTMLElement[] = ButtonRadio(
      {
        type: "radio",
        id: "Lbs-inches",
        name: "units",
        className: `${this.mainClassSecond}__btn`,
        value: "Lbs-inches",
        onChange: this.onChangeHandlerBtnRadio,
      },
      {
        forName: "Lbs-inches",
        content: "Lbs/inches",
        className: `${this.mainClassSecond}__btn-title`,
      }
    );
    btnWrapTwo.append(...btnTwo, messageTwo);
    const btnBlock: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassSecond}__buttons`
    );
    btnBlock.append(btnWrapOne, btnWrapTwo);
    return btnBlock;
  }

  private createBtnWrap(
    name: string,
    nameBtn: string[],
    values: string[]
  ): HTMLElement {
    const btnWrap: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__buttons`
    );
    values.forEach((value, index) => {
      const btnRadio: IBtnRadio[] = ButtonRadio(
        {
          type: "radio",
          value: value,
          id: name + index,
          name: name,
          className: `${this.mainClass}__input`,
          checked: index === 1 ? "checked" : "",
        },
        {
          forName: name + index,
          content: nameBtn[index],
          className: `${this.mainClass}__label`,
        }
      );
      btnWrap.append(...btnRadio);
    });
    return btnWrap;
  }

  private createBtnSubmitForm(): HTMLButtonElement {
    const btn: HTMLButtonElement = Button({
      content: "Submit",
      className: [`${this.mainClass}__btn-submit`, "btn"],
      type: "submit",
    });
    return btn;
  }

  private createSliderPoints(): HTMLElement {
    const mainClass = "slider-points";
    const sliderPoints: HTMLElement = this.template.createElement(
      "div",
      `${mainClass}`
    );
    for (let i = 0; i < 3; i++) {
      const sliderItem: HTMLElement = this.createSliderPointsElements(
        mainClass
      );
      sliderItem.onclick = this.slider?.goToSlide(i);
      sliderPoints.append(sliderItem);
    }
    return sliderPoints;
  }

  private createSliderPointsElements(className: string): HTMLElement {
    const sliderItem: HTMLElement = this.template.createElement(
      "div",
      `${className}__item`
    );
    return sliderItem;
  }

  private async sendInfoUser(
    dataInfoUser: Record<string, string>
  ): Promise<void> {
    const res:
      | IAnswerAddUserInfo
      | undefined = await this.authorization.addUserInfo(dataInfoUser);

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
      onCloseModal("modal-questions")();
    }
  }

  private ErrorHandler(res: IAnswerAddUserInfo): void {
    console.log(res.message);
    const inputs: NodeList = document.querySelectorAll(
      `${this.mainClassSecond}__input`
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

export default ModalQuestions;
