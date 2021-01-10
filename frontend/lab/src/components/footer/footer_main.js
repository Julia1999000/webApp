import React, { useState, useEffect } from "react";
import RestApi from "../service";

const apiReq = new RestApi();

const Footer_main = () => {
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
    const {
      id,
      logoVk,
      logoInstagram,
      logoTwitter,
      logoFacebook,
      logoTelegram,
      urlVk,
      urlInstagram,
      urlTwitter,
      urlFacebook,
      urlTelegram,
    } = info;

    return (
      <div className="footer_in" key={id}>
        <div className="in_button"></div>
        <div className="in_social">
          <div className="social_button">
            <a href="#!">ТАКЖЕ МЫ</a>
          </div>
          <div className="social_in">
            <div className="in_box">
              <div className="box_instagram">
                <a href={urlInstagram} className="link_soc">
                  <img
                    src={`data:image/jpeg;base64,${logoInstagram.imageBase64}`}
                    alt={logoInstagram.name}
                    style={{ width: "42px" }}
                  />
                </a>
              </div>

              <div className="box_twitter">
                <a href={urlTwitter} className="link_soc">
                  <img
                    src={`data:image/jpeg;base64,${logoTwitter.imageBase64}`}
                    alt={logoTwitter.name}
                    style={{ width: "42px" }}
                  />
                </a>
              </div>

              <div className="box_vk">
                <a href={urlVk} className="link_soc">
                  <img
                    src={`data:image/jpeg;base64,${logoVk.imageBase64}`}
                    alt={logoVk.name}
                    style={{ width: "42px" }}
                  />
                </a>
              </div>

              <div className="box_facebook">
                <a href={urlFacebook} className="link_soc">
                  <img
                    src={`data:image/jpeg;base64,${logoFacebook.imageBase64}`}
                    alt={logoFacebook.name}
                    style={{ width: "42px" }}
                  />
                </a>
              </div>

              <div className="box_telega">
                <a href={urlTelegram} className="link_soc">
                  <img
                    src={`data:image/jpeg;base64,${logoTelegram.imageBase64}`}
                    alt={logoTelegram.name}
                    style={{ width: "42px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Footer_main;
