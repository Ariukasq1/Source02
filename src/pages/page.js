import React from "react";
import config from "../config";
import WPAPI from "wpapi";
import Error from "next/error";
import Layout from "../components/layouts/Layout";
import { getData } from "../utils";

function Page({ page, loading }) {
  if (!page) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout
      loading={loading}
      title={page.title.rendered}
      image={getData(page._embedded, "image") || ""}
    >
      <h1>{page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </Layout>
  );
}

Page.getInitialProps = async (ctx) => {
  const slug = ctx.query.slug;
  const wp = new WPAPI({ endpoint: config(ctx).apiUrl });
  const page = await wp
    .pages()
    .slug(slug)
    .embed()
    .then((data) => {
      return data[0];
    });
  return { page: page, loading: true };
};

export default Page;
