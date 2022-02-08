import React from "react";
<<<<<<< HEAD
import "../public/styles/style.min.css";
import Router from "next/router";
import NProgress from "nprogress";

=======
import App from "next/app";
import "../public/styles/style.min.css";
import "../public/styles/fontawesome/css/all.min.css";
import Router from "next/router";
import NProgress from "nprogress";
import Config, { fetcher } from "../config";
import WPAPI from "wpapi";
import Layout from "../components/layouts/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import "antd/dist/antd.css";

const wp = new WPAPI({ endpoint: Config.apiUrl });

>>>>>>> f88cf0b68111189bf736632f48cd72b5b727bbd5
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => NProgress.done());
<<<<<<< HEAD
=======

function MyApp({ Component, pageProps, mainMenu, topMenu, contact }) {
  React.useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.init({ disable: "mobile" });
    AOS.refresh();
  }, []);
>>>>>>> f88cf0b68111189bf736632f48cd72b5b727bbd5

  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <Component {...pageProps} />
    </Layout>
  );
}

<<<<<<< HEAD
=======
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const mainMenu = await fetcher(`${Config.menuUrl}/nav-menu`);

  const topMenu = await fetcher(`${Config.menuUrl}/nav-menu-top`);

  return {
    ...appProps,
    mainMenu,
    topMenu,
  };
};

>>>>>>> f88cf0b68111189bf736632f48cd72b5b727bbd5
export default MyApp;
