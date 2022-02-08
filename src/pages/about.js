import React from "react";
import WPAPI from "wpapi";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default function About({
  service,
  serviceCats,
  data,
  contact,
  timeline,
}) {
  return <div className="page"></div>;
}

export async function getStaticProps() {
  const contact = await wp
    .posts()
    .categories()
    .slug(`contact`)
    .embed()
    .then((data) => data[0]);

  const catId = await wp
    .categories()
    .slug(`about`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(100)
    .embed();

  const childCats = await wp
    .categories()
    .parent((catId || {}).id)
    .embed();

  const serviceCats = await wp
    .categories()
    .parent((childCats[0] || {}).id)
    .embed();

  const service = await wp
    .posts()
    .categories(serviceCats.map((service) => service.id))
    .embed();

  const history = await wp
    .categories()
    .slug(`timeline`)
    .embed()
    .then((data) => data[0]);

  const timeline = await wp
    .posts()
    .categories((history || {}).id)
    .embed();

  return {
    props: { service, serviceCats, data, contact, timeline },
  };
}
