import React from "react";
import WPAPI from "wpapi";
import Config from "../../config";
import Fullpage from "../../components/Fullpage";
import FirstPart from "../../components/industries/firstPart";
import SecondPart from "../../components/industries/secondPart";

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default function CapabilitiesDetail({ post, data }) {
  return (
    <Fullpage
      children={
        <div id="fullpage">
          <div className="section">
            <div className="container">
              <FirstPart data={data} parent="capabilities" />
            </div>
          </div>
          <div className="section">
            <SecondPart post={post} />
          </div>
          <div className="section"></div>
          <div className="section"></div>
          <div className="section"></div>
        </div>
      }
    />
  );
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  const post = await wp
    .posts()
    .slug(`${slug}`)
    .embed()
    .then((data) => data[0]);

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
    props: { post, data },
  };
}

export async function getStaticPaths() {
  const catId = await wp
    .categories()
    .slug(`capabilities`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  const paths = data.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
