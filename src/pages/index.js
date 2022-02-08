import React from "react";
import WPAPI from "wpapi";
import Config from "../config";
import Fullpage from "../components/Fullpage";
import Footer from "../components/layouts/footer";

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default function Index({ contact }) {
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
  const contact = await wp
    .posts()
    .categories()
    .slug(`contact`)
    .embed()
    .then((data) => data[0]);

  return {
    props: { contact },
  };
}
