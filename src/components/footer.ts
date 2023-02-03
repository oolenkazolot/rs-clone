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
    const gitHubs = this.template.createElement("div", "footer__hubs");
    const firstLink = this.template.createLink(
      "footer__hubs-link",
      "https://github.com/oolenkazolot"
    );
    firstLink.textContent = "oolenkazolot";
    const secondLink = this.template.createLink(
      "footer__hubs-link",
      "https://github.com/alisatonks"
    );
    secondLink.textContent = "alisatonks";
    const thirdLink = this.template.createLink(
      "footer__hubs-link",
      "https://github.com/svetik-k"
    );
    thirdLink.textContent = "svetik-k";
    gitHubs.append(firstLink, secondLink, thirdLink);
    this.footer.append(gitHubs);
  }

  public draw(): HTMLElement {
    this.createGitHubs();

    const year = this.template.createElement("div", "footer__year", "2023");
    this.footer.append(year);

    const school = this.template.createLink(
      "footer__school",
      "https://rs.school/js/"
    );
    school.target = "_blank";
    this.footer.append(school);

    return this.footer;
  }
}

export default Footer;
