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
