import WPAPI from "wpapi";
import React from "react";
import Layout from "../components/layouts/Layout";
import config from "../config";
import { getData } from "../utils";

const renderPosts = (posts) => {
  if (!posts || posts.length === 0) {
    return "Empty";
  }
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="flex">
          <h5>{post.title && post.title.rendered}</h5>
          <img
            src={getData(post._embedded, "image")}
            alt={post.title && post.title.rendered}
          />
        </li>
      ))}
    </ul>
  );
};

function Category({ category, loading, posts }) {
  if (!category) {
    return <Error statusCode={404} />;
  }
  return (
    <Layout
      loading={loading}
      title={category.name}
      image={getData(category._embedded, "image") || ""}
    >
      <h1>{category.name}</h1>
      {renderPosts(posts)}
    </Layout>
  );
}

Category.getInitialProps = async (ctx) => {
  const slug = ctx.query.slug;
  const wp = new WPAPI({ endpoint: config(ctx).apiUrl });
  const category = await wp
    .categories()
    .slug(slug)
    .embed()
    .then((data) => {
      return data[0];
    });
  if (category) {
    let posts = await wp.posts().categories(category.id).perPage(100).embed();

    return { category: category, posts: posts, loading: true };
  }
  return { category: category, loading: true };
};

export default Category;
