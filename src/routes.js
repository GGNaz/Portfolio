import IntroPage from "./Pages/Intro/IntroPage";

export const publicRoutes = [
    {
      name: "main",
      title: "Main Page",
      component: <IntroPage/>,
      path: "/",
      navroute: "/",
      // showonaccountoptions: false,
    //   showonsidebar: true,
    },
    // {
    //   name: "selectLoginType/",
    //   title: "Select Login",
    //   component: <LoginSelectType />,
    //   path: "select-login-type",
    //   navroute: "select-login-type",
    //   // showonaccountoptions: false,
    //   showonsidebar: true,
    // },
  ];