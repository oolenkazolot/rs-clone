import Template from "../templates/template";
import { ITemplate } from "../types/index";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

class Calendar {
  template: ITemplate;

  constructor() {
    this.template = new Template();
  }

  public createCalendar(): HTMLElement {
    const calendar: HTMLElement = this.template.createElement(
      "section",
      "calendar"
    );
    calendar.id = "airdatepicker";
    return calendar;
  }
}

export default Calendar;
