import React from "react";
import WPAPI from "wpapi";
import Config, { fetcher } from "../config";

export default function About({ mainMenu, topMenu }) {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      hello
    </Layout>
  );
}

export async function getStaticProps() {
  const wp = new WPAPI({ endpoint: Config.apiUrl });

  const mainMenu = await fetcher(`${Config.apiUrl}/menus/v1/menus/nav-menu`);
  const topMenu = await fetcher(`${Config.apiUrl}/menus/v1/menus/nav-menu-top`);

  return {
    props: { mainMenu, topMenu },
  };
}
