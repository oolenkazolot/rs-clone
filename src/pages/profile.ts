import Template from "../templates/template";
import {
  ITemplate,
  ICalendar,
  IRouter,
  IInfo,
  IProgress,
} from "../types/index";
import Calendar from "../components/calendar";
import Info from "../components/info";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import Progress from "../components/progress";

class ProfilePage {
  private template: ITemplate;
  private calendar: ICalendar;
  private info: IInfo;
  public router?: IRouter;
  private mainClass: string;
  private progress: IProgress;

  constructor() {
    this.template = new Template();
    this.calendar = new Calendar();
    this.info = new Info();
    this.mainClass = "profile-page";
    this.progress = new Progress();
  }
  public draw(): void {
    const mainElement: HTMLElement | null = document.querySelector(".main");
    if (!mainElement) {
      return;
    }
    mainElement.textContent = "";
    const profilePage: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}`
    );
    const title: HTMLElement = this.template.createElement(
      "h2",
      `${this.mainClass}__title`,
      "My profile"
    );
    const decorEl: HTMLElement = this.createDecorEl();
    const calendar: HTMLElement = this.calendar.createCalendar();
    const info: HTMLElement = this.info.createInfo();
    const container: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__container`
    );
    const progress: HTMLElement = this.progress.createProgress();
    container.append(calendar, info);
    profilePage.append(decorEl, title, container, progress);
    mainElement.append(profilePage);
    new AirDatepicker("#airdatepicker");
  }

  private createDecorEl(): HTMLElement {
    const decorEl: HTMLElement = this.template.createElement("div", "decor");
    return decorEl;
  }
}

export default ProfilePage;
