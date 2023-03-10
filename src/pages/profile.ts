import Template from "../templates/template";
import {
  ITemplate,
  ICalendar,
  IInfo,
  IProgress,
  IModalEditProfile,
} from "../types/index";
import Calendar from "../components/calendar";
import Info from "../components/info";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import Progress from "../components/progress";
import ModalEditProfile from "../components/modalEditProfile";
import { inActivePreloader } from "../utils/preloader";

class ProfilePage {
  private template: ITemplate;
  private calendar: ICalendar;
  private info: IInfo;
  private mainClass: string;
  private progress: IProgress;
  private modalEditProfile: IModalEditProfile;

  constructor() {
    this.template = new Template();
    this.calendar = new Calendar();
    this.info = new Info();
    this.mainClass = "profile-page";
    this.modalEditProfile = new ModalEditProfile();
    this.progress = new Progress();
  }
  public async draw(): Promise<void> {
    document.body.classList.remove("loaded");
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

    const info: HTMLElement | undefined = await this.info.createInfo();
    if (!info) {
      return;
    }

    const container: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__container`
    );
    const progress: HTMLElement = await this.progress.createProgress();

    container.append(calendar, info);
    const modalEditProfile:
      | HTMLElement
      | undefined = await this.modalEditProfile.createModal(
      this.draw.bind(this)
    );
    if (!modalEditProfile) {
      return;
    }
    inActivePreloader(document.body);

    profilePage.append(decorEl, title, container, progress, modalEditProfile);
    mainElement.append(profilePage);
    new AirDatepicker("#airdatepicker");
  }

  private createDecorEl(): HTMLElement {
    const decorEl: HTMLElement = this.template.createElement("div", "decor");
    return decorEl;
  }
}

export default ProfilePage;
