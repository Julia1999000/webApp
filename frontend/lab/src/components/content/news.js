import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewsList extends Component {
  render() {
    const {
      id,
      title,
      lessDescription,
      description,
      image,
      urlYouTubeVideo,
      game,
    } = this.props;
    return (
      <div className="in_box" key={id}>
        <div className="box_top">
          <div className="top_img">
            <Link to={`/onenews${id}`} className="img_link">
              <img
                src={`data:image/jpeg;base64,${image.imageBase64}`}
                alt={image.name}
              />
            </Link>
          </div>
          <div className="top_title">
            <Link to={`/onenews${id}`} className="title_link">
              {title}
            </Link>
          </div>
        </div>
        <div className="box_bottom">
          <div className="bottom_description">{lessDescription}</div>
          <div className="bottom_button">
            <Link to={`/onenews${id}`} className="button_link">
              Читать далее
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
