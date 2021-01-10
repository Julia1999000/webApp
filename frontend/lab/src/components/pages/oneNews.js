import React from "react";
import News_main from "../news/mainNews";
import Header from "./header";
import Footer from "./footer";

const oneNews = ({ id }) => {
  return (
    <>
      <Header />
      <News_main id={id} />
      <Footer />
    </>
  );
};

export default oneNews;
