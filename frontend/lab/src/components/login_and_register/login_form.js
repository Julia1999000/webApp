import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/snail.png";

const Login_form = () => {
  return (
    <div class="col-sm-3 main-section">
      <div class="modal-content">
        <div class="col-12 logo-img">
          <img src={logo} />
        </div>
        <form class="col-12">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Введите username"
            />
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Введите пароль"
            />
          </div>

          <button type="submit" class="btn">
            <i class="fas fa-sign-in-alt"></i>Войти
          </button>
        </form>

        <div class="col-12 forgot">
          <Link to="/register">Регистрация</Link>
        </div>
      </div>
    </div>
  );
};

export default Login_form;
