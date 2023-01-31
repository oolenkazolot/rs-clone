import "./sass/style.scss";
import Router from "./utils/Routing";
import MainPage from "./pages/main";
import ErrorPage from "./pages/error";

import { IMainPage, IErrorPage, IRout } from "./types/index";

const mainPage: IMainPage = new MainPage();
const errorPage: IErrorPage = new ErrorPage();

//router start
//список страниц с колбеками: путь и что делать
const routs: IRout[] = [
  {
    path: "",
    cb: mainPage.draw.bind(mainPage),
  },
  // {
  //   path: "cart",
  //   cb: cartPage.draw.bind(cartPage),
  // },
  // {
  //   path: "products/:id",
  //   cb: (id) => {
  //     productPage.draw(id);
  //   },
  // },
];
//объект роутера
const router = new Router(routs, errorPage.draw);

//проврка какая скйчас страница
mainPage.router = router;
router.init();
