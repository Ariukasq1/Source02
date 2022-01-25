import React from "react";
import config from "../config";
import WPAPI from "wpapi";
import Error from "next/error";
import Layout from "../components/layouts/Layout";
import { getData } from "../utils";

function Post({ post, loading }) {
  if (!post) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout
      loading={loading}
      title={post.title.rendered}
      image={getData(post._embedded, "image") || ""}
    >
      <div className=" my-50">
        <h2>{post.title.rendered}</h2>
        <img src={getData(post._embedded, "image")} />
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </Layout>
  );
}

Post.getInitialProps = async (ctx) => {
  const slug = ctx.query.slug;
  const wp = new WPAPI({ endpoint: config(ctx).apiUrl });
  const post = await wp
    .posts()
    .slug(slug)
    .embed()
    .then((data) => {
      return data[0];
    });

  return { post: post, loading: true };
};

export default Post;
