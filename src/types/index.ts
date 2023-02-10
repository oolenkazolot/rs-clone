export interface IRout {
  path: string;
  cb: (param?: string) => void;
}

export interface IRouter {
  navigate: (path: string) => void;
  init: () => void;
}

export interface IErrorPage {
  draw: () => void;
}

export interface IMainPage {
  draw: () => void;
  router?: IRouter;
}

export interface ISingleTrainingPage {
  draw: (id: string | undefined) => void;
  router?: IRouter;
}

export interface IAuthorization {
  registration: (data: IRegistrationData) => Promise<IAnswerAuth | undefined>;
  authorization: (data: IAuthorizationData) => Promise<IAnswerAuth | undefined>;
  addUserInfo: (
    data: Record<string, string>
  ) => Promise<IAnswerAddUserInfo | undefined>;
}

export interface IAnswerAuth {
  message?: string;
  token?: string;
  userId?: string;
}

export interface IRegistrationData {
  email: string;
  password: string;
}

export interface IAuthorizationData {
  email: string;
  password: string;
}

export interface ITemplate {
  createElement: (
    tagName: string,
    myClass: string,
    content?: string
  ) => HTMLElement;
  createLink: (
    myClass: string,
    href: string,
    content?: string
  ) => HTMLAnchorElement;
  createBtn: (
    myClass: string,
    content?: string | HTMLElement | undefined,
    type?: string
  ) => HTMLButtonElement;
  createForm: (className: string, action: string) => HTMLFormElement;
  createIcon: (className: string, classNameIcon: string) => HTMLElement;
  createVideo: (src: string) => HTMLVideoElement;
  createImage: (
    src: string,
    alt: string,
    imgClassName: string
  ) => HTMLImageElement;
  createLabel: (
    className?: string | undefined,
    forName?: string | undefined,
    content?: string | undefined
  ) => HTMLLabelElement;
  createInput: (
    mainClass: string,
    attributes: Record<string, string>
  ) => HTMLInputElement;
  addAttributes: (
    input: HTMLInputElement,
    attributes: Record<string, string>
  ) => void;
}

export interface IHeader {
  draw: () => void;
  router?: IRouter;
}

export interface IFooter {
  draw: () => void;
}

export interface IButton {
  content: string | HTMLElement;
  className?: string[];
  variant?: string;
  type?: string;
  onClick?: (e: Event) => void;
}

export interface IModal {
  createModal: (id: string, content: HTMLElement) => HTMLElement;
}

export interface IInputIcon {
  className?: string[];
  attributes: Record<string, string>;
  classNameIcon: string;
  validate: (inputValue: string) => IValidate;
}

export interface IInputImg {
  className?: string[];
  attributes: Record<string, string>;
  imgSrc: string;
  imgAlt: string;
  validate: (inputValue: string) => IValidate;
}

export interface IModalSignIn {
  draw: () => void;
}

export interface IModalSignUp {
  draw: () => void;
}

export interface IExercise {
  id: number;
  title: string;
  description: string;
  example: string;
  youtube: string;
  quantity: string;
}

export interface IValidate {
  res: boolean;
  message?: string;
}

export interface IDataUser {
  token: string;
  userId: string;
}
export interface IWorkoutBlock {
  createWorkoutBlockCont: (titleText: string) => HTMLElement;
  createTitle: (titleText: string) => HTMLElement;
  createWorkoutContent: (
    data: IWorkoutMiniBlock,

    j: number,

    i: number,
    flag: boolean
  ) => HTMLElement;
  createTextBlock: (
    descrTitleText: string,

    exercAmt: string,

    time: string,

    j: number,

    complexityLevel?: boolean
  ) => HTMLElement;
  createPngImage: (
    i: number,
    j: number,
    additClass: string,
    flag: boolean
  ) => HTMLElement;
  createExercCont: (exercAmt: string) => HTMLElement;
  createTimeCont: (time: string) => HTMLElement;
  createLightnings: (j: number) => HTMLElement;
  colorBackground: (element: HTMLElement) => void;
}

export interface IWorkoutMiniBlock {
  title: string;
  exercisesAmt: string;
  exercisesTime: string;
  complexityLevel?: boolean;
  color: string;
}

export interface IDataInputRadio {
  type: string;
  id: string;
  name: string;
  checked?: string;
  className: string;
  value: string;
  onChange?: (e: Event) => void;
}

export interface IDataLabel {
  forName: string;
  content: string;
  className: string;
}

export interface IDataFormQuestions {
  title: string;
  question: string;
  name: string;
  nameBtn: string[];
  values: string[];
}

export interface IModalQuestions {
  draw: () => void;
}

export interface IAnswerAddUserInfo {
  message: string;
  errors?: IErrorUserInfo[];
}

export interface IErrorUserInfo {
  msg: string;
  param: string;
  location: string;
}

export type IBtnRadio = HTMLInputElement | HTMLLabelElement;
export type ISingleTraining = {
  id: number;
  title: string;
  exercises: IExercise[];
};

export interface ISlider {
  createNextPrevBtns: (
    length: number,
    wrapper: HTMLElement,
    flag: boolean
  ) => HTMLElement;
  slider: (
    nextBtn: HTMLButtonElement,
    prevBtn: HTMLButtonElement,
    wrapper: HTMLElement,
    length: number,
    flag: boolean
  ) => void;
  changeImgSise: (flag: boolean, n: number, length: number) => void;
  slide: (
    nextBtn: HTMLButtonElement,
    prevBtn: HTMLButtonElement,
    wrapper: HTMLElement,
    length: number
  ) => void;
  changeImgSizeInf: (direct: string) => void;
  createExercises: (i: number, j: number) => HTMLElement;
}

export type ICalendar = {
  createCalendar: () => HTMLElement;
};

export type IProfilePage = {
  draw: () => void;
  router?: IRouter;
};

export type IInfo = {
  createInfo: () => HTMLElement;
};

export type IProgressData = {
  name: string;
  value: string;
  units: string;
};

export type IProgress = {
  createProgress: () => HTMLElement;
};

export type ILineItem = {
  className: string;
  value: string[];
};
