import { IRouter } from "../types/index";
import v1 from "../assets/video/v11.mp4";
import v2 from "../assets/video/v2.mp4";
import v3 from "../assets/video/v3.mp4";
import v4 from "../assets/video/v4.mp4";
import pic1 from "../assets/images/pic1.jpg";

class MainPage {
  public router?: IRouter;
  mainPageElement: HTMLDivElement;

  constructor() {
    this.mainPageElement = document.createElement("div");
    this.mainPageElement.classList.add("main-page");
  }

  private createIntroSection() {
    const introSection = document.createElement("section");
    introSection.className = "main__intro intro";

    const introWrapper = document.createElement("div");
    introWrapper.className = "intro__wrapper";
    introSection.append(introWrapper);

    const leftVideos = document.createElement("div");
    leftVideos.className = "intro__left";
    introWrapper.append(leftVideos);

    const upperVideo = document.createElement("video");
    upperVideo.src = v1;
    upperVideo.autoplay = true;
    upperVideo.muted = true;
    upperVideo.loop = true;
    leftVideos.append(upperVideo);

    const bottomVideo = document.createElement("video");
    bottomVideo.src = v2;
    bottomVideo.autoplay = true;
    bottomVideo.muted = true;
    bottomVideo.loop = true;
    leftVideos.append(bottomVideo);

    const central = document.createElement("div");
    central.className = "intro__center";
    introWrapper.append(central);

    const centralText = document.createElement("h2");
    centralText.className = "intro__text";
    centralText.innerHTML =
      "Find Your Inner Energy and Strength.<br> Join Our Comunity for Support.";
    central.append(centralText);

    const googleLink = document.createElement("a");
    googleLink.className = "intro__link";
    googleLink.href =
      "https://play.google.com/store/apps/details?id=com.betterlifewithapps.womenworkouts&hl=en&gl=US";
    googleLink.target = "_blank";
    central.append(googleLink);

    const rightVideos = document.createElement("div");
    rightVideos.className = "intro__left";
    introWrapper.append(rightVideos);

    const upperRightVideo = document.createElement("video");
    upperRightVideo.src = v3;
    upperRightVideo.autoplay = true;
    upperRightVideo.muted = true;
    upperRightVideo.loop = true;
    rightVideos.append(upperRightVideo);

    const bottomRightVideo = document.createElement("video");
    bottomRightVideo.src = v4;
    bottomRightVideo.autoplay = true;
    bottomRightVideo.muted = true;
    bottomRightVideo.loop = true;
    rightVideos.append(bottomRightVideo);

    this.mainPageElement.append(introSection);
  }

  private createAboutSection() {
    const aboutSection = document.createElement("section");
    aboutSection.className = "main__about about";

    const aboutWrapper = document.createElement("div");
    aboutWrapper.className = "about__wrapper";
    aboutSection.append(aboutWrapper);

    const aboutInfo = document.createElement("div");
    aboutInfo.className = "about__info";
    aboutWrapper.append(aboutInfo);

    const aboutTitle = document.createElement("h3");
    aboutTitle.className = "about__title";
    aboutTitle.textContent = "Why Our App?";
    aboutInfo.append(aboutTitle);

    const aboutText = document.createElement("p");
    aboutText.className = "about__text";
    aboutText.innerHTML = `The best way to loose wight and burn fat is to choose exercise routines that incorporate many muscle groups and will spike your heart rate.<br> 
      In our application we have chosen the best exercises that can surve this goal.<br>
      They burn your fat and tone your entire body, and the best part - <b>you don't need any exercise equipment at all!</b>`;
    aboutInfo.append(aboutText);

    const aboutPicture = document.createElement("div");
    aboutPicture.className = "about__picture";
    aboutWrapper.append(aboutPicture);

    const aboutImage = document.createElement("img");
    aboutImage.src = pic1;
    aboutPicture.append(aboutImage);

    this.mainPageElement.append(aboutSection);
  }

  private createFeaturesSection() {
    const features = [
      "The best app for female fitness, weight loss and health",
      "Beginner, Intermediate and Advanced routines",
      "Workout at home & get your body fit on",
      "Track your weight and bmi",
    ];

    const featuresSection = document.createElement("section");
    featuresSection.className = "main__features features";

    const featuresWrapper = document.createElement("div");
    featuresWrapper.className = "features__wrapper";
    featuresSection.append(featuresWrapper);

    const featuresList = document.createElement("ul");
    featuresList.className = "features__list";
    featuresWrapper.append(featuresList);

    features.forEach((feature) => {
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
  }
}

export default MainPage;
