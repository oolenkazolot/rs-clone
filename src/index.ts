import "./sass/style.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import ModalSignIn from "./components/modalSignIn";
import ModalSignUp from "./components/modalSignUp";
import ModalQuestions from "./components/modalQuestions";
import router from "./components/routerComponent";

import {
  IHeader,
  IModalSignIn,
  IModalSignUp,
  IModalQuestions,
  IFooter,
} from "./types/index";

const header: IHeader = new Header();
header.draw();

const footer: IFooter = new Footer();
footer.draw();

const modalSignIn: IModalSignIn = new ModalSignIn();
modalSignIn.draw();

const modalSignUp: IModalSignUp = new ModalSignUp();
modalSignUp.draw();

const modalQuestions: IModalQuestions = new ModalQuestions();
modalQuestions.draw();

router.init();
