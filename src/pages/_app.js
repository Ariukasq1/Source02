import React from "react";
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
import "slick-carousel/slick/slick.css";
import "antd/dist/antd.css";

const wp = new WPAPI({ endpoint: Config.apiUrl });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, mainMenu, topMenu, contact }) {
  React.useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.init({ disable: "mobile" });
    AOS.refresh();
  }, []);

  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu} contact={contact}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const mainMenu = await fetcher(`${Config.menuUrl}/nav-menu`);

  const topMenu = await fetcher(`${Config.menuUrl}/nav-menu-top`);

  const contact = await wp
    .posts()
    .categories()
    .slug(`contact`)
    .embed()
    .then((data) => data[0]);

  return {
    ...appProps,
    mainMenu,
    topMenu,
    contact,
  };
};

export default MyApp;
