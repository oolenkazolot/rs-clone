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

export interface IAuthorization {
  registration: (data: IRegistrationData) => Promise<void>;
}

export interface IRegistrationData {
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
}

export interface IHeader {
  draw: () => void;
  router?: IRouter;
}

export interface IButton {
  content: string | HTMLElement;
  className?: string[];
  variant?: string;
  type?: string;
  onClick?: () => void;
}

export interface IModal {
  createModal: (id: string, content: HTMLElement) => HTMLElement;
}

export interface IInputBlock {
  className?: string[];
  attributes: Record<string, string>;
  classNameIcon: string;
}

export interface IModalSignIn {
  draw: () => void;
}

export interface IModalSignUp {
  draw: () => void;
}

export interface ITraining {
  id: number;
  title: string;
  description: string;
  example: string,
  youtube: string;
  quantity: string
}

export interface IWorkoutBlock {
  createWorkoutBlockCont: (titleText: string) => HTMLElement;
  createTitle: (titleText: string) => HTMLElement;
  createWorkoutContent: (
    data: IWorkoutMiniBlock,
    j: number,
    i: number
  ) => HTMLElement;
  createTextBlock: (
    descrTitleText: string,
    exercAmt: string,
    time: string,
    j: number,
    complexityLevel?: boolean
  ) => HTMLElement;
  createPngImage: (i: number, j: number) => HTMLElement;
  createExercCont: (exercAmt: string) => HTMLElement;
  createTimeCont: (time: string) => HTMLElement;
  createLightnings: (j: number) => HTMLElement;
}

export interface IWorkoutMiniBlock {
  title: string;
  exercisesAmt: string;
  exercisesTime: string;
  complexityLevel?: boolean;
}
