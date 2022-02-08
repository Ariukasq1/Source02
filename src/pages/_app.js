import React from "react";
import "../public/styles/style.min.css";
import "../public/styles/fontawesome/css/all.min.css";
import Router from "next/router";
import NProgress from "nprogress";
import Config, { fetcher } from "../config";
import WPAPI from "wpapi";
import Layout from "../components/layouts/Layout";

const wp = new WPAPI({ endpoint: Config.apiUrl });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, mainMenu, topMenu, contact }) {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu} contact={contact}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async () => {
  const mainMenu = await fetcher(`${Config.menuUrl}/nav-menu`);
  const topMenu = await fetcher(`${Config.menuUrl}/nav-menu-top`);
  const contact = await wp
    .posts()
    .categories()
    .slug(`contact`)
    .embed()
    .then((data) => data[0]);

  return {
    mainMenu,
    topMenu,
    contact,
  };
};

export default MyApp;
