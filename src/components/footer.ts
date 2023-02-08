import Template from "../templates/template";
import { ITemplate } from "../types/index";

class Footer {
  template: ITemplate;
  footer: HTMLElement;

  constructor() {
    this.template = new Template();
    this.footer = this.template.createElement("footer", "footer");
  }

  private createGitHubs(): void {
    const gitHubs: HTMLElement = this.template.createElement(
      "div",
      "footer__hubs"
    );
    const firstLink: HTMLAnchorElement = this.template.createLink(
      "footer__hubs-link",
      "https://github.com/oolenkazolot"
    );
    firstLink.target = "_blank";
    firstLink.textContent = "oolenkazolot";
    const secondLink: HTMLAnchorElement = this.template.createLink(
      "footer__hubs-link",
      "https://github.com/alisatonks"
    );
    secondLink.target = "_blank";
    secondLink.textContent = "alisatonks";
    const thirdLink: HTMLAnchorElement = this.template.createLink(
      "footer__hubs-link",
      "https://github.com/svetik-k"
    );
    thirdLink.target = "_blank";
    thirdLink.textContent = "svetik-k";
    gitHubs.append(firstLink, secondLink, thirdLink);
    this.footer.append(gitHubs);
  }

  public draw(): HTMLElement {
    this.footer.textContent = "";
    this.createGitHubs();

    const year: HTMLElement = this.template.createElement(
      "div",
      "footer__year",
      "2023"
    );
    this.footer.append(year);

    const school: HTMLAnchorElement = this.template.createLink(
      "footer__school",
      "https://rs.school/js/"
    );
    school.target = "_blank";

    this.footer.append(school);

    return this.footer;
  }
}

export default Footer;
