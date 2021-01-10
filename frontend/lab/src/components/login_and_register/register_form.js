import React from "react";

import logo from "../../img/snail.png";

const Register_form = () => {
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
              type="email"
              class="form-control"
              placeholder="Введите email"
            />
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Введите пароль"
            />
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Повторите пароль"
            />
          </div>

          <button type="submit" class="btn btn_reg">
            <i class="fas fa-sign-in-alt"></i>Зарегистрироваться
          </button>
        </form>

        <div class="col-12 forgot">
          <a href="#"></a>
        </div>
      </div>
    </div>
  );
};

export default Register_form;
