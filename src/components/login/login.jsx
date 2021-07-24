import React, { Component } from "react";
import "../../style/login.css";
import { Link } from "react-router-dom";
import axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: "",
      password: "",
      warning: false,
    };
  }
  componentDidMount() {}

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  Login = (e) => {
    e.preventDefault();
    const { phone_number, password } = this.state;
    const URL = "/profile/token/";
    axios
      .post(URL, {
        phone_number,
        password,
      })
      .then((response) => {
        this.props.history.push("/mainpage");
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
      })
      .catch((error) => {
        console.error(error);
        this.setState({ warning: true });
      });
  };
  render() {
    return (
      <div className="login-box">
        <form>
          <div className="input-box">
            <i className="fas fa-phone"></i>
            <input
              type="text"
              placeholder="Телефон"
              name="phone_number"
              value={this.state.phone_number}
              onChange={this.handleInput}
            />
          </div>
          <div className="input-box">
            <i
              className="fas fa-eye"
              onClick={() => this.setState({ show: !this.state.show })}
            ></i>
            <input
              type={this.state.show ? "text" : "password"}
              placeholder="Парол"
              name="password"
              onChange={this.handleInput}
            />
          </div>
          <label
            className={
              this.state.warning
                ? "warning-volidation "
                : "warning-volidation d-none"
            }
          >
            Telefon raqam yoki parol noto'g'ri!
          </label>
          <div className="register-box">
            <span>
              <span className="text-secondary">Рўйхатдан ўтганмисиз | </span>
              <Link to="/register" className="text-warning">
                Рўйхардан ўтиш
              </Link>
            </span>
          </div>
          <button className="submit-button" onClick={this.Login}>
            КИРИШ
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
