import { IRout } from "../types/index";

class Router {
  private routes: IRout[];
  private root: string;
  private subscribers: (() => void)[];
  private errorAction: () => void;
  private currentRout: string;
  public subscribersOnce: (() => void)[];

  constructor(routes: IRout[], errorAction: () => void) {
    this.routes = routes;
    this.subscribers = [];
    this.subscribersOnce = [];
    this.currentRout = "";
    this.root = "/rs-clone-deploy/"; //добавить наименование репозитория перед деплоем /women-workouts-clone/
    this.errorAction = errorAction;
  }

  //метод для перехода на страницу
  public navigate = (path: string): void => {
    window.history.pushState(null, "", this.root + path);
    this.action(path);
    this.currentRout = path;
    this.startSubscribers();
  };

  //метод для проверки какая сейчас страница при перезагрузке
  public init(): void {
    const path: string = window.location.pathname.replace(this.root, "");
    this.currentRout = path.replace(/\/$/, "");
    this.action(path.replace(/\/$/, ""));

    window.addEventListener("popstate", (e) => {
      //перерисовка при нажатии кнопок в браузере forward/back
      this.action(window.location.pathname.replace(this.root, "")); //берет текущий путь, после того как сделал шаг назад
    });
    this.startSubscribers();
  }

  public addSubscribers(func: () => void): void {
    this.subscribers.push(func);
  }

  public isActiveRout(rout: string, exact = false): boolean {
    if (exact) {
      return rout === this.currentRout;
    }
    const re = new RegExp(`^([\\w-]+\\/|)${rout}(\\/[\\w-]*|)$`);
    return re.test(this.currentRout);
  }

  private startSubscribers(): void {
    if (this.subscribers.length) {
      this.subscribers.forEach((func: () => void) => {
        func();
      });
    }

    if (this.subscribersOnce.length) {
      this.subscribersOnce.forEach((func: () => void) => {
        func();
      });
    }

    this.subscribersOnce = [];
  }

  //метод для вызова колбека соответствущего роута
  private action(path: string): void {
    const current: IRout | undefined = this.routes.find((rout: IRout) => {
      if (rout.path.indexOf("/:") !== -1) {
        return rout.path.replace(/\/:.+$/, "") === path.replace(/\/[\w]+$/, "");
      }
      return rout.path === path;
    });

    if (current) {
      const param: string | undefined = this.getParam(path, current.path);
      current.cb(param);
    } else {
      this.errorAction();
    }
  }

  //метод возвращвет параметр для ссылки вида products/:id
  private getParam(path: string, current: string): string | undefined {
    if (current.indexOf("/:") === -1) {
      return;
    }
    const match: string[] | null = path.match(/\/.+$/);

    let param: string | undefined;
    if (match) {
      param = match[0].replace("/", "");
    }

    return param;
  }
}

export default Router;
