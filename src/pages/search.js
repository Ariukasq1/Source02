import React from "react";
import Layout from "../components/layouts/Layout";
import Search from "../components/layouts/Search";

export default function SearchPage() {
  return (
    <Layout title="Хайлт">
      <h2 className="title">Хайлт</h2>
      <Search />
    </Layout>
  );
}
