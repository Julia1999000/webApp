import React from "react";
import Content_main from "../content/content_main";
import Header from "../pages/header";
import Footer from "../pages/footer";
const Content = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Content_main />
      </div>
      <Footer />
    </>
  );
};

export default Content;
