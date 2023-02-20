import "./sass/style.scss";
import MainPage from "./pages/main";
import Header from "./components/header";
import Footer from "./components/footer";
import ModalSignIn from "./components/modalSignIn";
import ModalSignUp from "./components/modalSignUp";
import ModalQuestions from "./components/modalQuestions";
import TrainingsPage from "./pages/trainings";
import SingleTrainingPage from "./pages/singleTraining";
import ExercisesPage from "./pages/exercises";
import ProfilePage from "./pages/profile";
import StartTrainingPage from "./pages/startTraining";
import router from "./components/routerComponent";

import {
  IMainPage,
  IHeader,
  IModalSignIn,
  IModalSignUp,
  IModalQuestions,
  ISingleTrainingPage,
  IProfilePage,
  IFooter,
} from "./types/index";

const mainPage: IMainPage = new MainPage();

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

const trainingsCreationPage = new TrainingsPage();

const singleTrainingPage: ISingleTrainingPage = new SingleTrainingPage();
const exercisesPage = new ExercisesPage();
const profilePage: IProfilePage = new ProfilePage();

const startTrainingPage = new StartTrainingPage();

//проврка какая скйчас страница
mainPage.router = router;
trainingsCreationPage.router = router;
singleTrainingPage.router = router;
profilePage.router = router;
startTrainingPage.router = router;
exercisesPage.router = router;
router.init();
