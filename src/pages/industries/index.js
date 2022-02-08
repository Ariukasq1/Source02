import React from "react";
import WPAPI from "wpapi";
import FirstPart from "../../components/industries/firstPart";
import Config from "../../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default function Industries({ data }) {
  return (
    <div className="page">
      <FirstPart data={data} />
    </div>
  );
}

export async function getStaticProps() {
  const catId = await wp
    .categories()
    .slug(`industries`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(100)
    .embed();

  return {
    props: { data },
  };
}
