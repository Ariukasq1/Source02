import React from "react";
<<<<<<< HEAD
import Layout from "../components/layouts/Layout";

export default function Index() {
  return (
    <Layout>
      <div className="relative">
        <h2>Gerege wordpress</h2>
        Hello template
      </div>
    </Layout>
  );
}
=======
import WPAPI from "wpapi";
import Config from "../config";
import Fullpage from "../components/Fullpage";
import Footer from "../components/layouts/footer";

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default function Index({
  sliders,
  capability,
  industries,
  brands,
  brandsCat,
  contact,
}) {
  return (
    <Fullpage
      children={
        <div id="fullpage">
          <div className="section">
            <div></div>
          </div>
          <div className="section">
            <div></div>
          </div>
          <div className="section">
            <div></div>
          </div>
          <div className="section">
            <div></div>
          </div>
          <div className="section">
            <Footer contact={contact} />
          </div>
        </div>
      }
    />
  );
}

export async function getStaticProps() {
  const sliderCat = await wp
    .categories()
    .slug("slider")
    .embed()
    .then((data) => data[0]);

  const sliders = await wp.posts().categories(sliderCat.id).embed();

  const capCat = await wp
    .categories()
    .slug("capability-home")
    .embed()
    .then((data) => data[0]);

  const capability = await wp
    .posts()
    .categories(capCat.id)
    .embed()
    .then((data) => data[0]);

  const industriesCat = await wp
    .categories()
    .slug("industries")
    .embed()
    .then((data) => data[0]);

  const industries = await wp.posts().categories(industriesCat.id).embed();

  const brandsID = await wp
    .categories()
    .slug("brands")
    .embed()
    .then((data) => data[0]);

  const brands = await wp.posts().categories(brandsID.id).perPage(100).embed();
  const brandsCat = await wp.categories().parent(brandsID.id).embed();

  const contact = await wp
    .posts()
    .categories()
    .slug(`contact`)
    .embed()
    .then((data) => data[0]);

  return {
    props: { sliders, capability, industries, brands, brandsCat, contact },
  };
}
>>>>>>> f88cf0b68111189bf736632f48cd72b5b727bbd5
