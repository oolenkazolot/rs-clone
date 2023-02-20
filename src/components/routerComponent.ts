import Router from "../utils/Routing";
import MainPage from "../pages/main";
import ErrorPage from "../pages/error";
import TrainingsPage from "../pages/trainings";
import SingleTrainingPage from "../pages/singleTraining";
import ExercisesPage from "../pages/exercises";
import ProfilePage from "../pages/profile";
import StartTrainingPage from "../pages/startTraining";

import {
  IMainPage,
  IErrorPage,
  IRout,
  ISingleTrainingPage,
  IProfilePage,
} from "../types/index";

//pages
const mainPage: IMainPage = new MainPage();
const errorPage: IErrorPage = new ErrorPage();
const trainingsCreationPage = new TrainingsPage();
const singleTrainingPage: ISingleTrainingPage = new SingleTrainingPage();
const exercisesPage = new ExercisesPage();
const profilePage: IProfilePage = new ProfilePage();
const startTrainingPage = new StartTrainingPage();

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
    path: "profile",
    cb: profilePage.draw.bind(profilePage),
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
export default new Router(routs, errorPage.draw);
