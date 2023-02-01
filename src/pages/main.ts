import { IRouter } from "../types/index";
import v1 from "../assets/video/v11.mp4";
import v2 from "../assets/video/v2.mp4";
import v3 from "../assets/video/v3.mp4";
import v4 from "../assets/video/v4.mp4";

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

  public draw(): void {
    const mainElement: HTMLElement | null = document.querySelector("main");
    if (!mainElement) {
      return;
    }
    mainElement.classList.add("main");

    mainElement.innerHTML = "";
    mainElement.append(this.mainPageElement);

    this.createIntroSection();
  }
}

export default MainPage;
