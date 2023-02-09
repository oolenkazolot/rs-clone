import './sass/style.scss';
import Router from './utils/Routing';
import MainPage from './pages/main';
import ErrorPage from './pages/error';
import Header from './components/header';
import Footer from './components/footer';
import ModalSignIn from './components/modalSignIn';
import ModalSignUp from './components/modalSignUp';
import ModalQuestions from './components/modalQuestions';
import TrainingsPage from './pages/trainings';
import SingleTrainingPage from './pages/singleTraining';
import ExercisesPage from './pages/exercises';
import ChangeElements from './components/changeElements';
import ProfilePage from './pages/profile';

import { IMainPage, IErrorPage, IRout, IHeader, IModalSignIn, IModalSignUp, IModalQuestions, ISingleTrainingPage, IProfilePage, IFooter } from './types/index';

const mainPage: IMainPage = new MainPage();
const errorPage: IErrorPage = new ErrorPage();

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

//router start
//список страниц с колбеками: путь и что делать
const routs: IRout[] = [
  {
    path: '',
    cb: mainPage.draw.bind(mainPage),
  },
  {
    path: 'workouts',
    cb: trainingsCreationPage.draw.bind(trainingsCreationPage),
  },
  {
    path: 'exercises',
    cb: exercisesPage.draw.bind(exercisesPage),
  },
  {
    path: 'profile',
    cb: profilePage.draw.bind(profilePage),
  },
  {
    path: 'workouts/:id',
    cb: (id) => {
      singleTrainingPage.draw(id);
    },
  },
];
//объект роутера
const router = new Router(routs, errorPage.draw);

//проврка какая скйчас страница
mainPage.router = router;
header.router = router;
trainingsCreationPage.router = router;
singleTrainingPage.router = router;
profilePage.router = router;
router.init();
