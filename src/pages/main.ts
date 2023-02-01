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
    upperVideo.setAttribute("src", v1);
    upperVideo.setAttribute("autoplay", "");
    upperVideo.setAttribute("mute", "");
    upperVideo.setAttribute("loop", "");
    leftVideos.append(upperVideo);

    const bottomVideo = document.createElement("video");
    bottomVideo.setAttribute("src", v2);
    bottomVideo.setAttribute("autoplay", "");
    bottomVideo.setAttribute("mute", "");
    bottomVideo.setAttribute("loop", "");
    leftVideos.append(bottomVideo);

    const central = document.createElement("div");
    central.className = "intro__center";
    introWrapper.append(central);

    const centralText = document.createElement("h2");
    centralText.className = "intro__text";
    centralText.textContent =
      "Find Your Inner Energy and Strength. Join Our Comunity for Support.";
    central.append(centralText);

    const rightVideos = document.createElement("div");
    rightVideos.className = "intro__left";
    introWrapper.append(rightVideos);

    const upperRightVideo = document.createElement("video");
    upperRightVideo.setAttribute("src", v3);
    upperRightVideo.setAttribute("autoplay", "");
    upperRightVideo.setAttribute("mute", "");
    upperRightVideo.setAttribute("loop", "");
    rightVideos.append(upperRightVideo);

    const bottomRightVideo = document.createElement("video");
    bottomRightVideo.setAttribute("src", v4);
    bottomRightVideo.setAttribute("autoplay", "");
    bottomRightVideo.setAttribute("mute", "");
    bottomRightVideo.setAttribute("loop", "");
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
    aboutText.innerHTML =
      `The best way to loose wight and burn fat is to choose exercise routines that incorporate many muscle groups and will spike your heart rate.<br> 
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
  }
}

export default MainPage;
