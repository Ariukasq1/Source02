import React from "react";
import WPAPI from "wpapi";
import Config, { fetcher } from "../config";
import Layout from "../components/layouts/Layout";

export default function Industries({ mainMenu, topMenu, contact }) {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu} contact={contact}>
      <div className="page"></div>
    </Layout>
  );
}

export async function getStaticProps() {
  const wp = new WPAPI({ endpoint: Config.apiUrl });

  const mainMenu = await fetcher(`${Config.apiUrl}/menus/v1/menus/nav-menu`);
  const topMenu = await fetcher(`${Config.apiUrl}/menus/v1/menus/nav-menu-top`);
  const contact = await wp
    .posts()
    .categories()
    .slug(`contact`)
    .embed()
    .then((data) => data[0]);

  return {
    props: { mainMenu, topMenu, contact },
  };
}
