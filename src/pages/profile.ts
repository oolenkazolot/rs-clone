import Template from "../templates/template";
import { ITemplate, ICalendar, IRouter } from "../types/index";
import Calendar from "../components/calendar";

class ProfilePage {
  private template: ITemplate;
  private calendar: ICalendar;
  public router?: IRouter;

  constructor() {
    this.template = new Template();
    this.calendar = new Calendar();
  }
  public draw(): void {
    const mainElement: HTMLElement | null = document.querySelector(".main");
    if (!mainElement) {
      return;
    }
    mainElement.textContent = "";
    const profilePage: HTMLElement = this.template.createElement(
      "div",
      "profile-page"
    );
    const calendar: HTMLElement = this.calendar.createCalendar();
    profilePage.append(calendar);
    mainElement.append(profilePage);
  }
}

export default ProfilePage;
