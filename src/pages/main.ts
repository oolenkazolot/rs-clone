import { IAuthorization } from "../types/index";
import video1 from "../assets/video/v11.mp4";
import video2 from "../assets/video/v2.mp4";
import video3 from "../assets/video/v3.mp4";
import video4 from "../assets/video/v4.mp4";
import pic1 from "../assets/images/pic1.jpg";
import Authorization from "../utils/auth.routes";
import Template from "../templates/template";
import { ITemplate } from "../types/index";
import { inActivePreloader } from "../utils/preloader";

class MainPage {
  public authorization: IAuthorization;
  mainPageElement: HTMLDivElement;
  template: ITemplate;
  isLoaded: number;

  constructor() {
    this.authorization = new Authorization();
    this.mainPageElement = document.createElement("div");
    this.mainPageElement.classList.add("main-page");
    this.template = new Template();
    this.isLoaded = 0;
  }

  private createIntroSection(): void {
    document.body.classList.remove("loaded");
    const mainClass = "intro";
    const introSection: HTMLElement = this.template.createElement(
      "section",
      `main__${mainClass}`
    );
    introSection.classList.add(mainClass);
    const introWrapper: HTMLElement = this.template.createElement(
      "div",
      `${mainClass}__wrapper`
    );
    const leftVideos: HTMLElement = this.createVideoBlock(
      [video1, video2],
      `${mainClass}__left`
    );
    const rightVideos: HTMLElement = this.createVideoBlock(
      [video3, video4],
      `${mainClass}__left`
    );
    const central: HTMLElement = this.template.createElement(
      "div",
      `${mainClass}__center`
    );
    const centralText: HTMLElement = this.template.createElement(
      "h2",
      `${mainClass}__text`
    );
    centralText.innerHTML =
      "Find Your Inner Energy and Strength.<br> Join Our Comunity for Support.";
    introWrapper.append(leftVideos, central, rightVideos);
    const googleLink: HTMLAnchorElement = this.template.createLink(
      `${mainClass}__link`,
      "https://play.google.com/store/apps/details?id=com.betterlifewithapps.womenworkouts&hl=en&gl=US"
    );
    googleLink.target = "_blank";
    central.append(centralText, googleLink);
    introSection.append(introWrapper);
    this.mainPageElement.append(introSection);
  }

  private createVideoBlock(
    videoFiles: string[],
    className: string
  ): HTMLElement {
    const block: HTMLElement = this.template.createElement("div", className);
    videoFiles.map((video) => {
      const videoEl: HTMLVideoElement = this.template.createVideo(video);
      videoEl.addEventListener("canplay", handlerVideoCanplay);
      return block.append(videoEl);
    });
    return block;
  }

  private createAboutSection(): void {
    const aboutSection: HTMLElement = document.createElement("section");
    aboutSection.className = "main__about about";

    const aboutWrapper: HTMLElement = this.template.createElement(
      "div",
      "about__wrapper"
    );
    aboutSection.append(aboutWrapper);

    const aboutInfo: HTMLElement = this.template.createElement(
      "div",
      "about__info"
    );
    aboutWrapper.append(aboutInfo);

    const aboutTitle: HTMLElement = this.template.createElement(
      "h3",
      "about__title",
      "Why Our App?"
    );
    aboutInfo.append(aboutTitle);

    const aboutText: HTMLElement = document.createElement("p");
    aboutText.className = "about__text";
    aboutText.innerHTML = `The best way to loose wight and burn fat is to choose exercise routines that incorporate many muscle groups and will spike your heart rate.<br> 
      In our application we have chosen the best exercises that can surve this goal.<br>
      They burn your fat and tone your entire body, and the best part - <b>you don't need any exercise equipment at all!</b>`;
    aboutInfo.append(aboutText);

    const aboutPicture: HTMLElement = this.template.createElement(
      "div",
      "about__picture"
    );
    aboutWrapper.append(aboutPicture);

    const aboutImage: HTMLImageElement = document.createElement("img");
    aboutImage.src = pic1;
    aboutPicture.append(aboutImage);

    this.mainPageElement.append(aboutSection);
  }

  private createFeaturesSection(): void {
    const features: string[] = [
      "The best app for female fitness, weight loss and health",
      "Beginner, Intermediate and Advanced routines",
      "Workout at home & get your body fit on",
      "Track your weight and bmi",
    ];

    const featuresSection: HTMLElement = document.createElement("section");
    featuresSection.className = "main__features features";

    const featuresWrapper: HTMLElement = this.template.createElement(
      "div",
      "features__wrapper"
    );
    featuresSection.append(featuresWrapper);

    const featuresList: HTMLUListElement = document.createElement("ul");
    featuresList.className = "features__list";
    featuresWrapper.append(featuresList);

    features.forEach((feature: string) => {
      const featureItem = document.createElement("li");
      featureItem.className = "features__list-item";
      featureItem.textContent = feature;
      featuresList.append(featureItem);
    });

    this.mainPageElement.append(featuresSection);
  }

  public draw(): void {
    const mainElement: HTMLElement | null = document.querySelector("main");
    if (!mainElement) {
      return;
    }

    mainElement.classList.add("main");

    mainElement.innerHTML = "";
    this.mainPageElement.textContent = "";

    this.createIntroSection();

    this.createAboutSection();

    this.createFeaturesSection();

    mainElement.append(this.mainPageElement);
  }
}

function handlerVideoCanplay(e: Event): void {
  handlerVideoCanplay.prototype.isLoaded += 1;

  if (handlerVideoCanplay.prototype.isLoaded === 4) {
    handlerVideoCanplay.prototype.isLoaded = 0;
    inActivePreloader(document.body);
  }
  if (e.currentTarget) {
    e.currentTarget.removeEventListener("canplay", handlerVideoCanplay);
  }
}

handlerVideoCanplay.prototype.isLoaded = 0;

export default MainPage;
