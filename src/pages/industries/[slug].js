import React from "react";
import WPAPI from "wpapi";
import Config from "../../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default function IndustriesDetail({ post }) {
  console.log(post, "---");
  return <div className="page"></div>;
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  const post = await wp
    .posts()
    .slug(`${slug}`)
    .embed()
    .then((data) => data[0]);

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const catId = await wp
    .categories()
    .slug(`industries`)
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
      content: { ...post },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
