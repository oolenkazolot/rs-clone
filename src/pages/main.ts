import { IRouter, IAuthorization, ITraining } from "../types/index";
import Footer from "../components/footer";
import video1 from "../assets/video/v11.mp4";
import video2 from "../assets/video/v2.mp4";
import video3 from "../assets/video/v3.mp4";
import video4 from "../assets/video/v4.mp4";
import pic1 from "../assets/images/pic1.jpg";
import Authorization from "../utils/auth.routes";
import Template from "../templates/template";
import { ITemplate } from "../types/index";
import TrainingModal from "../components/trainingModal";
import allTrainings from "../utils/singleTrainings-en";
// import logo from '../assets/png/img1.png';

class MainPage {
  public authorization: IAuthorization;
  public router?: IRouter;
  mainPageElement: HTMLDivElement;
  footer: Footer;
  template: ITemplate;

  constructor() {
    this.authorization = new Authorization();
    this.mainPageElement = document.createElement("div");
    this.mainPageElement.classList.add("main-page");
    this.footer = new Footer();
    this.template = new Template();
  }

  private createIntroSection(): void {
    const introSection: HTMLElement = document.createElement("section");
    introSection.className = "main__intro intro";

    const introWrapper: HTMLElement = this.template.createElement(
      "div",
      "intro__wrapper"
    );
    introSection.append(introWrapper);

    const leftVideos: HTMLElement = this.template.createElement(
      "div",
      "intro__left"
    );
    introWrapper.append(leftVideos);

    const upperVideo: HTMLVideoElement = this.template.createVideo(video1);
    leftVideos.append(upperVideo);

    const bottomVideo: HTMLVideoElement = this.template.createVideo(video2);
    leftVideos.append(bottomVideo);

    const central: HTMLElement = this.template.createElement(
      "div",
      "intro__center"
    );
    introWrapper.append(central);

    const centralText: HTMLElement = this.template.createElement(
      "h2",
      "intro__text"
    );
    centralText.innerHTML =
      "Find Your Inner Energy and Strength.<br> Join Our Comunity for Support.";
    central.append(centralText);

    const googleLink: HTMLAnchorElement = this.template.createLink(
      "intro__link",
      "https://play.google.com/store/apps/details?id=com.betterlifewithapps.womenworkouts&hl=en&gl=US"
    );
    googleLink.target = "_blank";
    central.append(googleLink);

    const rightVideos: HTMLElement = this.template.createElement(
      "div",
      "intro__left"
    );
    introWrapper.append(rightVideos);

    const upperRightVideo: HTMLVideoElement = this.template.createVideo(video3);
    rightVideos.append(upperRightVideo);

    const bottomRightVideo: HTMLVideoElement = this.template.createVideo(
      video4
    );
    rightVideos.append(bottomRightVideo);

    this.mainPageElement.append(introSection);
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
    mainElement.append(this.mainPageElement);

    this.createIntroSection();

    this.createAboutSection();

    this.createFeaturesSection();

    document.body.append(this.footer.draw());
    // this.registr();
    const tr = new TrainingModal(allTrainings.Abs_beginner[4]);
    tr.draw();
  }

  // private async registr(): Promise<void> {
  //   const res = await this.authorization.registration({ email: 'oolenka.zolot@gmail.com', password: 'gggggggg' });
  //   console.log(res);
  // }
}

export default MainPage;
