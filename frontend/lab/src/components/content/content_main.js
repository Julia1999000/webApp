import React, { Component } from "react";
import NewsList from "./news";

import RestApi from "../service";

const apiReq = new RestApi();

export default class Content_main extends Component {
  constructor(props) {
    super(props);
    this.state = { dataNews: [] };
  }

  addStateItems = () => {
    return apiReq.getAllNews("news/getAllNews").then((item) => {
      return this.setState({
        dataNews: item,
      });
    });
  };
  componentDidMount() {
    this.addStateItems();
  }

  renderNews = () => {
    const { dataNews } = this.state;
    return dataNews.map((item) => {
      const {
        id,
        title,
        lessDescription,
        description,
        image,
        urlYouTubeVideo,
        game,
      } = item;
      return (
        <NewsList
          key={id}
          id={id}
          title={title}
          lessDescription={lessDescription}
          description={description}
          image={image}
          urlYouTubeVideo={urlYouTubeVideo}
          game={game}
        />
      );
    });
  };

  render() {
    // const newsRender = this.renderNews();
    return <div className="content_in">{this.renderNews()}</div>;
    // return <div className="content_in">{newsRender}</div>;
  }
}
