import React from "react";
import WPAPI from "wpapi";
import FirstPart from "../../components/industries/firstPart";
import Config from "../../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default function Capabilities({ data }) {
  return (
    <div className="page">
      <FirstPart data={data} parent="capabilities" />
    </div>
  );
}

export async function getStaticProps() {
  const catId = await wp
    .categories()
    .slug(`capabilities`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  return {
    props: { data },
  };
}
