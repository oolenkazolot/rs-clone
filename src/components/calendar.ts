import Template from "../templates/template";
import { ITemplate } from "../types/index";

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
    const calendarWrap: HTMLElement = this.createCalendarWrap();
    calendar.append(calendarWrap);
    return calendar;
  }

  private createCalendarWrap(): HTMLElement {
    const calendarWrap: HTMLElement = this.template.createElement(
      "div",
      "calendar-wrap"
    );
    calendarWrap.id = "airdatepicker";
    return calendarWrap;
  }
}

export default Calendar;
