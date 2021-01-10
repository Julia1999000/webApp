import React, { useState, useEffect } from "react";
import RestApi from "../service";

const apiReq = new RestApi();

const About_main = () => {
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
    const { id, description } = info;
    return (
      <div className="wr_in" key={id} style={{ height: "450px" }}>
        <h1 className="wr_h1">О нас</h1>
        {description}
      </div>
    );
  });
};

export default About_main;
