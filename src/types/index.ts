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
  createUserInfo: (
    data: Record<string, string>
  ) => Promise<IAnswerAddUserInfo | undefined>;
  getUserInfo: (id: string) => Promise<Record<string, string> | undefined>;
  updateUserInfo: (
    dataEditProfile: IDataEditProfile
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
  createModal: (
    id: string,
    content: HTMLElement,
    isShowIconClose: boolean
  ) => HTMLElement;
}

export interface IModalMobileMenu {
  createModal: (
    id: string,
    content: HTMLElement,
    isShowIconClose: boolean
  ) => HTMLElement;
}

export interface IInputIcon {
  className?: string[];
  attributes: Record<string, string>;
  classNameIcon: string;
  validate: (inputValue: string) => IValidate;
}

export interface IInputImg {
  mainClass: string;
  className?: string[];
  attributes: Record<string, string>;
  imgSrc: string;
  imgAlt: string;
  validate: (inputValue: string, units: string) => IValidate;
  units: string;
  classNameUnits: string;
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

export interface IExerciseAdd {
  id: number;
  title: string;
  description: string;
  example: string;
  youtube: string;
  quantity: string;
  serverId?: string;
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
    flag: boolean,
    length: number
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
    flag: boolean,
    length: number
  ) => HTMLElement;
  createExercCont: (exercAmt: string) => HTMLElement;
  createTimeCont: (time: string) => HTMLElement;
  createLightnings: (j: number) => HTMLElement;
  colorBackground: (element: HTMLElement) => void;
  createAddWorkoutPlanCont: (description: string, flag: boolean) => HTMLElement;
}

export interface IWorkoutMiniBlock {
  title: string;
  exercisesAmt: string;
  exercisesTime: string;
  complexityLevel?: boolean;
  color: string;
  exercises: IExercise[];
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
  id: number | string;
  title: string;
  image: string;
  exercisesAmt: string;
  exercisesTime: string;
  color: string;
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
  changeExerciseContent: (prevBtn: HTMLElement, nextBtn: HTMLElement) => void;
}

export type ICalendar = {
  createCalendar: () => HTMLElement;
};

export type IProfilePage = {
  draw: () => Promise<void>;
  router?: IRouter;
};

export type IInfo = {
  createInfo: () => Promise<HTMLElement | undefined>;
};

export type IProgressData = {
  name: string;
  value: string;
  units: string;
};

export type IProgress = {
  createProgress: () => Promise<HTMLElement>;
};

export type ILineItem = {
  className: string;
  value: string[];
};

export type IModalEditProfile = {
  createModal: (
    drawProfilePage: () => Promise<void>
  ) => Promise<HTMLElement | undefined>;
};

export interface IDataEditProfile {
  id: string;
  weight: string;
  height: string;
}

export interface IWorkoutPlan {
  title: string;
  image: string;
  block: ISingleTraining[];
}

export interface IDataComplex {
  _id: string;
  userId: string;
  name: string;
  __v: string;
}

export interface ICreateExercise {
  idComplex: string;
  idExercise: string;
  count: string;
}

export interface IServerExercises {
  _id: string;
  idComplex: string;
  idExercise: string;
  count: string;
  __v: number;
}

export interface IPointWeightChart {
  date: Date;
  weight: number;
}

export interface IParamsWeightChart {
  className?: string;
  data: IPointWeightChart[];
}

export interface IWeightChartComponent {
  getChart: () => HTMLElement;
}

export interface ICompletedComplexesReceived {
  totalCompletedComplexes: number;
  totalTime: {
    hours: number;
    minutes: number;
  };
}

export interface IFulfilledComplexReturned {
  userId: string;
  idComplex: string;
  date: string;
  time: number;
  _id: "string";
  _v: number;
}

export interface IWeeklyStat {
  weeklyWorkouts: number[];
  load: string;
}

export interface IPreloader {
  draw: () => void;
}

export interface IUserSettings {
  _id: string;
  userId: string;
  goal: string;
  timeRest: string;
  load: string;
  weight: string;
  height: string;
  units: string;
  __v: number;
}
