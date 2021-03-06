import React, { Component } from "react";
import "../../style/register.css";
import Camera from "../../image/icons/camera.png";
import User from "../../image/icons/user.png";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      avatar: "",
      first_name: "",
      last_name: "",
      middle_name: "",
      birthday: "",
      email: "",
      day: "",
      month: "",
      year: "",
      phone_number: "",
      instagram: null,
      facebook: null,
      telegram: null,
      password: "",
      password2: "",
      numberChacking: null,
      check: false,
    };
  }
  componentDidUpdate() {
    if (this.state.phone_number.length >= 11 && this.state.check === true) {
      this.phoneNumberChecking();
    }
  }
  passDataToParent = () => {
    this.props.callBackRegisterData(this.state);
    this.props.history.push("/register/coursedata");
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (this.state.phone_number.length >= 11) {
      this.setState({ check: true });
    }
  };
  fileSelectedHandler = (event) => {
    let file = event.target.files[0];
    this.setState({ file });

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ avatar: reader.result });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  phoneNumberChecking = (e) => {
    const url = "/profile/phone-number/";
    let data = {
      phone_number: this.state.phone_number,
    };
    axios.post(url, data).then((data) => {
      this.setState({ numberChacking: data.data.check, check: false });
    });
  };
  render() {
    const { url } = this.props.match;
    return (
      <div className="register-box">
        <div className="avatar-box">
          <div className={this.state.avatar === "" ? "user-avatar" : "avatar"}>
            <img
              src={this.state.avatar === "" ? User : this.state.avatar}
              alt="User icon"
            />
          </div>
          <span
            className={
              this.state.file === null ? "warning text-danger" : "d-none"
            }
          >
            ?????????????????????? ????????????????????????!
          </span>
          <div className="set-avatar">
            <input
              type="file"
              name="file"
              style={{ display: "none" }}
              onChange={(e) => this.fileSelectedHandler(e)}
              ref={(fileInput) => (this.fileInput = fileInput)}
              required
            />
            <img
              src={Camera}
              alt="camera icon"
              onClick={() => this.fileInput.click()}
            />
          </div>
        </div>
        <section className="form-box">
          <div className="form-title">
            <span>?????????????????? ????????</span>
          </div>
          <form onSubmit={this.passDataToParent}>
            <input
              type="text"
              placeholder="*????????????????"
              name="first_name"
              onChange={this.handleInput}
              required
            />
            <span
              className={
                this.state.first_name.length === 0 ? "text-danger" : "d-none"
              }
            >
              ?????????? ???????????????? ??????????????????
            </span>
            <input
              type="text"
              placeholder="*??????????????????????"
              name="last_name"
              onChange={this.handleInput}
              required
            />
            <span
              className={
                this.state.last_name.length === 0 ? "text-danger" : "d-none"
              }
            >
              ?????????? ???????????????? ??????????????????
            </span>
            <input
              type="text"
              placeholder="*?????????????????????? ????????"
              name="middle_name"
              onChange={this.handleInput}
              required
            />
            <span
              className={
                this.state.middle_name.length === 0 ? "text-danger" : "d-none"
              }
            >
              ?????????? ???????????????? ??????????????????
            </span>
            <br />
            <span>???????????????? ???????????????? </span>
            <span
              className={this.state.day.length === 0 ? "text-danger" : "d-none"}
            >
              ?????????? ???????????????? ??????????????????
            </span>
            <div className="birth-date">
              <input
                type="text"
                placeholder="????????"
                name="day"
                onChange={this.handleInput}
                required
              />
              <select onChange={this.handleInput} name="month" required>
                <option>????</option>
                <option value="1">??????????</option>
                <option value="2">????????????</option>
                <option value="3">????????</option>
                <option value="4">??????????</option>
                <option value="5">??????</option>
                <option value="6">??????</option>
                <option value="7">??????</option>
                <option value="8">????????????</option>
                <option value="9">??????????????</option>
                <option value="10">????????????</option>
                <option value="11">??a??????</option>
                <option value="12">????????????</option>
              </select>
              <input
                type="text"
                placeholder="??????"
                onChange={this.handleInput}
                name="year"
                required
              />
            </div>
            <input
              type="email"
              placeholder="??-????????"
              name="email"
              onChange={this.handleInput}
              required
            />
            <input
              type="number"
              placeholder="*?????????????? ????????????????????"
              name="phone_number"
              onChange={this.handleInput}
              required
            />
            <span
              className={this.state.numberChacking ? "text-danger" : "d-none"}
            >
              ?????????????? ?????????? ?????????????????? ?????????????????? ??????????
            </span>
            <input
              type="password"
              placeholder="*??????????"
              name="password"
              onChange={this.handleInput}
              required
            />
            <span
              className={
                this.state.password.length < 8 ? "text-danger" : "d-none"
              }
            >
              8 ???? ???????????????? ?????? ???????????????? ?????????? ????????????????!
            </span>
            <input
              type="password"
              placeholder="*??????????????????"
              name="password2"
              onChange={this.handleInput}
              required
            />
            <span
              className={
                this.state.password.length !== this.state.password2.length
                  ? "text-danger"
                  : "d-none"
              }
            >
              ???????????????? ?????? ????????????????.
            </span>
            <br />
            <span>???????????????? ?????????????????????????? ???????????????????????? ??????????????????</span>
            <br />
            <span>Na'muna: https://instagram.com</span>
            <div style={{ marginTop: "-10px" }}>
              <input
                type="text"
                placeholder="Instagram"
                onChange={this.handleInput}
                name="instagram"
              />
              <input
                type="url"
                placeholder="Telegram"
                onChange={this.handleInput}
                name="telegram"
              />
              <input
                type="text"
                placeholder="Facebook"
                onChange={this.handleInput}
                name="facebook"
              />
            </div>
            <div className="indecator-box">
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>
            <button type="submit">??????????????????</button>
          </form>
        </section>
      </div>
    );
  }
}

export default withRouter(Register);
