import "./sass/style.scss";
import Router from "./utils/Routing";
import MainPage from "./pages/main";
import ErrorPage from "./pages/error";
import Header from "./components/header";
import ModalSignIn from "./components/modalSignIn";
import ModalSignUp from "./components/modalSignUp";
import ModalQuestions from "./components/modalQuestions";
import TrainingsPage from "./pages/trainings";
import SingleTrainingPage from "./pages/singleTraining";
import ExercisesPage from "./pages/exercises";
import TakeARest from "./components/takeaRest";
import StartTrainingPage from "./pages/startTraining";

import {
  IMainPage,
  IErrorPage,
  IRout,
  IHeader,
  IModalSignIn,
  IModalSignUp,
  IModalQuestions,
  ISingleTrainingPage,
} from "./types/index";

const mainPage: IMainPage = new MainPage();
const errorPage: IErrorPage = new ErrorPage();

const header: IHeader = new Header();
header.draw();

const modalSignIn: IModalSignIn = new ModalSignIn();
modalSignIn.draw();

const modalSignUp: IModalSignUp = new ModalSignUp();
modalSignUp.draw();

const modalQuestions: IModalQuestions = new ModalQuestions();
modalQuestions.draw();

const trainingsCreationPage = new TrainingsPage();

const singleTrainingPage: ISingleTrainingPage = new SingleTrainingPage();
const exercisesPage = new ExercisesPage();

const startTrainingPage = new StartTrainingPage();

//router start
//список страниц с колбеками: путь и что делать
const routs: IRout[] = [
  {
    path: "",
    cb: mainPage.draw.bind(mainPage),
  },
  {
    path: "workouts",
    cb: trainingsCreationPage.draw.bind(trainingsCreationPage),
  },
  {
    path: "exercises",
    cb: exercisesPage.draw.bind(exercisesPage),
  },
  {
    path: "workouts/:id",
    cb: (id) => {
      singleTrainingPage.draw(id);
    },
  },
  {
    path: "startTraining",
    cb: startTrainingPage.draw.bind(startTrainingPage),
  },
];
//объект роутера
const router = new Router(routs, errorPage.draw);

//проврка какая скйчас страница
mainPage.router = router;
header.router = router;
trainingsCreationPage.router = router;
singleTrainingPage.router = router;
startTrainingPage.router = router;
exercisesPage.router = router;
router.init();
