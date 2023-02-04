import Template from "../templates/template";
import { ITemplate } from "../types/index";

class TrainingModal {
  template: ITemplate;

  constructor() {
    this.template = new Template();
  }

  public draw(): void {

  }  
}

export default TrainingModal;