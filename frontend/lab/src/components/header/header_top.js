import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestApi from "../service";

const apiReq = new RestApi();
const Header_top = () => {
  const [state, setState] = useState({ info: [], bool: false });
  // добавили bool , чтобы компонент не перезапрашивал данные и не падал в loop

  useEffect(() => {
    addStateInfo();
  }, []);

  const addStateInfo = () => {
    apiReq.getInfo("info/getInfo").then((item) => {
      setState({
        bool: true,
        info: item,
      });
    });
  };

  return state.info.map((info) => {
    const { id, number, number2, logo } = info;
    return (
      <div key={id}>
        <div className="header_top">
          <div className="top_left">
            <div className="left_logo">
              <Link to="/" className="logo">
                <img
                  src={`data:image/jpeg;base64,${logo.imageBase64}`}
                  alt={logo.name}
                />
              </Link>
            </div>
            <div className="left_title">
              <div className="title_in">
                <a href="" className="in_link">
                  SNAIL
                </a>
              </div>
              <div className="title_description">
                Новости из мира компьютерных и мобильных игр
              </div>
            </div>
          </div>
          <div className="top_right">
            <div className="right_addres">
              <div className="addres_ico"></div>
              <div className="addres_in">
                <div className="in_title">Разместить рекламу</div>
                <div className="in_description"></div>
                <div className="in_number">
                  <a href={`#${number}`} className="number_cool">
                    {number}
                  </a>
                  <a href={`#${number2}`} className="number_cool">
                    {number2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_menu">
          <ul className="menu_in">
            <li className="in_after">
              <a href="/" className="after_in">
                Главная
              </a>
              <Link to="/about" className="after_in">
                О нас
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  });
};

export default Header_top;
