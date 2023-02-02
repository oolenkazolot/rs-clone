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
  createLink: (myClass: string, pathName: string) => HTMLAnchorElement;
  createBtn: (
    myClass: string,
    content: string,
    myClassTwo?: string,
    myClassThree?: string
  ) => HTMLButtonElement;
}

export interface IHeader {
  draw: () => void;
}
