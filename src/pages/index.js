import React from "react";
import WPAPI from "wpapi";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default function Index({ sliders }) {
  return <div className="page"></div>;
}

export async function getStaticProps() {
  const sliderCat = await wp
    .categories()
    .slug("slider")
    .embed()
    .then((data) => data[0]);

  const sliders = await wp.posts().categories(sliderCat.id).embed();

  return {
    props: { sliders },
  };
}
