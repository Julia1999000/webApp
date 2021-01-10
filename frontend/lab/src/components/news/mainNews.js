import React, { useState, useEffect } from "react";
import RestApi from "../service";

const apiReq = new RestApi();

const News_main = ({ id }) => {
  const [state, setState] = useState({ newArr: [] });

  useEffect(() => {
    apiReq.getAllNews("news/getAllNews").then((item) => {
      return setState(() => {
        return searchElem(Number(id), item);
      });
    });
  }, []);

  const searchElem = (id, item) => {
    const index = item.findIndex((elem) => elem.id === id);
    const newArr = item.slice(index, index + 1);
    return { newArr };
  };

  console.log(state.newArr);
  return state.newArr.map((item) => {
    const { id, title, lessDescription, urlYouTubeVideo, game } = item;
    return (
      <div key={id}>
        <div className="block_text">
          <b>{title}</b>
          <p>{lessDescription}</p>
          <iframe
            width="100%"
            height="350px"
            src={urlYouTubeVideo}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="news_block">
          <div className="wrap_top">Игра из новости:</div>
          <div className="wrap_bottom">
            <div className="bottom_left">
              <img
                src={`data:image/jpeg;base64,${game.cover.imageBase64}`}
                alt={game.cover.name}
              />
            </div>
            <div className="bottom_right">
              <div className="right_title">{game.nameGame}</div>
              <div className="right_description">
                <p>Платформа</p>
                <a href="">{game.platform}</a>;
                <br />
                <br />
                Жанр:
                <a href="">{game.genre}</a>
              </div>
              <div className="right_data">Дата выхода: {game.dateReleased}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default News_main;
