import React, { Component } from "react";
import "../../style/register.css";
import Camera from "../../image/icons/camera.png";
import axios from "axios";
class EditData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      file: null,
      avatar: "",
      first_name: "",
      last_name: "",
      middle_name: "",
      birthday: "",
      email: "",
      phone_number: null,
      instagram: null,
      facebook: null,
      telegram: null,
      numberChacking: null,
    };
  }

  componentDidMount() {
    const url = "/profile/user/";
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    };
    axios(url, { headers: headers }).then((data) => {
      this.setState({
        avatar: data.data.image,
        first_name: data.data.first_name,
        last_name: data.data.last_name,
        middle_name: data.data.middle_name,
        birthday: data.data.birthday,
        email: data.data.email,
        phone_number: data.data.phone_number,
        instagram: data.data.instagram,
        facebook: data.data.facebook,
        telegram: data.data.telegram,
        numberChacking: false,
      });
    });
  }
  componentDidUpdate() {
    if (this.state.phone_number.length >= 11 && this.state.check === true) {
      this.phoneNumberChecking();
    }
  }
  updateUserData = async (e) => {
    e.preventDefault();
    const url = "/profile/history/";
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    };
    var userForm = new FormData();
    if (this.state.file !== null) {
      userForm.append("image", this.state.file);
    }
    userForm.append("first_name", this.state.first_name);
    userForm.append("last_name", this.state.last_name);
    userForm.append("middle_name", this.state.middle_name);
    userForm.append("birthday", this.state.birthday);
    userForm.append("email", this.state.email);
    userForm.append("phone_number", this.state.phone_number);
    userForm.append("instagram", this.state.instagram);
    userForm.append("telegram", this.state.telegram);
    userForm.append("facebook", this.state.facebook);
    await axios({
      method: "POST",
      url: url,
      headers: headers,
      data: userForm,
    })
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
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
  phoneNumberChecking = () => {
    const url = "/profile/phone-number/";
    let data = {
      phone_number: this.state.phone_number,
    };
    axios.post(url, data).then((data) => {
      this.setState({ numberChacking: data.data.check, check: false });
    });
  };
  render() {
    return (
      <div className="register-box">
        <div className="avatar-box">
          <div className="avatar">
            <img src={this.state.avatar} alt="User icon" />
          </div>
          <span className="warning">Расмингизни жойлаштиринг!</span>
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
            <span>Рўйҳатдан ўтиш</span>
          </div>
          <form onSubmit={this.updateUserData}>
            <input
              type="text"
              placeholder="*Исмингиз"
              name="first_name"
              onChange={this.handleInput}
              value={this.state.first_name}
              required
            />
            <input
              type="text"
              placeholder="*Фамилиянгиз"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleInput}
              required
            />
            <input
              className="mb-4"
              type="text"
              placeholder="*Отангизнинг исми"
              name="middle_name"
              value={this.state.middle_name}
              onChange={this.handleInput}
              required
            />
            <span>Туғилган санангиз</span>
            <div className="birth-date">
              <input
                type="text"
                placeholder="Тугилган сана"
                name="birthday"
                value={this.state.birthday}
                onChange={this.handleInput}
                required
              />
            </div>
            <input
              type="email"
              placeholder="Э-маил"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
              required
            />
            <input
              type="number"
              placeholder="*Телефон рақамингиз"
              name="phone_number"
              value={this.state.phone_number}
              onChange={this.handleInput}
              required
            />
            <span
              className={this.state.numberChacking ? "text-danger" : "d-none"}
            >
              Телефон рақам аллақачон рўйхатдан ўтган
            </span>
            <br />
            <span>Ижтимоий тармоғлардаги ҳаволангизни қолдиринг</span>
            <div style={{ marginTop: "-10px" }}>
              <input
                type="text"
                placeholder="Instagram"
                value={this.state.instagram}
                onChange={this.handleInput}
                name="instagram"
              />
              <input
                type="url"
                placeholder="Telegram"
                value={this.state.telegram}
                onChange={this.handleInput}
                name="telegram"
              />
              <input
                type="text"
                placeholder="Facebook"
                value={this.state.facebook}
                onChange={this.handleInput}
                name="facebook"
              />
            </div>
            <button className="mt-3" onClick={this.passDataToParent}>
              САҚЛАШ
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default EditData;
