import React, { Component } from "react";
import "../../style/register.css";
import Camera from "../../image/icons/camera-blue.png";
import CameraWhite from "../../image/icons/camera.png";
import Banner from "../../image/banner.png";
import Map from "../YMap/map";
import "../../style/business.css";
import axios from "axios";

class BusinessEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: "",
      file: null,
      images: [],
      name: "",
      lat_long: "",
      position: "",
      website: "",
      instagram: "https://instagram",
      facebook: "https://facebook",
      telegram: "https://telegram",
      activity_name: "",
      region: "",
      regions: [],
      gallery: "",
    };
    this.handleMapClick = this.handleMapClick.bind(this);
  }
  componentDidMount() {
    const url = "/profile/business-region";
    axios(url).then((response) => {
      this.setState({ regions: response.data });
    });
  }
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  fileSelectedHandler = (event) => {
    this.setState({ file: event.target.files[0] });

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ logo: reader.result });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  businessImgHandler = (event) => {
    this.setState((prevState) => {
      this.setState({ images: [event.target.files[0], ...prevState.images] });
    });
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ gallery: reader.result });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  handleMapClick = (ref, map, ev) => {
    const location = ev.latLng;
    this.setState((prevState) => ({
      locations: [...prevState.locations, location],
    }));
    map.panTo(location);
  };
  callBackData = (data) => {
    this.setState({ lat_long: data });
  };

  createBusiness = async () => {
    const URL = "/profile/user-business";
    var businessData = new FormData();
    businessData.append("name", this.state.name);
    businessData.append("activity_name", this.state.activity_name);
    businessData.append("logo", this.state.file);
    this.state.images.forEach((img) => {
      businessData.append("galleries[]", img);
    });
    businessData.append(
      "lat_long",
      this.state.lat_long[0] + ":" + this.state.lat_long[1]
    );
    businessData.append("position", this.state.position);
    businessData.append("about", this.state.about);
    businessData.append("website", this.state.website);
    businessData.append("instagram", this.state.instagram);
    businessData.append("facebook", this.state.facebook);
    businessData.append("telegram", this.state.telegram);
    businessData.append("region", this.state.region);

    await axios({
      method: "POST",
      url: URL,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
        "Access-Control-Allow-Origin": "*",
      },
      data: businessData,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
        this.props.history.push("/register/success");
      });
  };

  render() {
    return (
      <div className="business-box">
        <div className="page-title">
          <small>Бизнесингиз ҳақида маълумотларни тўлдиринг</small>
        </div>
        <div className="banner">
          <img src={this.state.logo === "" ? Banner : this.state.logo} alt="" />
          <div className="banner-title">
            <small>Логотипингиз расмини жойланг</small>
          </div>
          <div className="upload-box">
            <input
              type="file"
              style={{ display: "none" }}
              onChange={this.fileSelectedHandler}
              ref={(imgFile) => (this.imgFile = imgFile)}
            />
            <img
              src={Camera}
              alt="camera icon"
              onClick={() => this.imgFile.click()}
            />
          </div>
        </div>
        <div className="register-box">
          <section className="form-box">
            <form onSubmit={this.createUser}>
              <input
                type="text"
                placeholder="*Бизнесингиз номи"
                name="name"
                onChange={this.handleInput}
              />
              <input
                className="mb-4"
                type="text"
                placeholder="*Лавозимингиз"
                name="position"
                onChange={this.handleInput}
              />
              <input
                className="mb-4"
                type="text"
                placeholder="*Фаолият тури"
                name="activity_name"
                onChange={this.handleInput}
              />
              <select name="region" onChange={this.handleInput}>
                {this.state.regions.map((region) => {
                  return (
                    <option key={region.id} value={region.id}>
                      {region.name}
                    </option>
                  );
                })}
              </select>
              <input
                className="mb-4"
                type="text"
                placeholder="Веб сайтингиз"
                name="website"
                onChange={this.handleInput}
              />
              <span className="social-title">
                Бизнесингизнинг ижтимоий тармоқлардаги саҳифалар ҳаволасини
                киритинг (агар бўлса)
              </span>
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
              <span className="social-title">
                Бизнесингизга оид фото суратларни <br /> жойлаштиришингиз мункун
              </span>
              <div className="upload-image">
                <input
                  type="file"
                  multiple
                  style={{ display: "none" }}
                  onChange={this.businessImgHandler}
                  ref={(fileInput) => (this.fileInput = fileInput)}
                />
                <img
                  src={CameraWhite}
                  alt="camera icon"
                  onClick={() => this.fileInput.click()}
                />
              </div>
              <span className="social-title">
                Картадан иш жойингизни белгиланг
              </span>
              <div className="map-box">
                <Map callBackData={this.callBackData} />
              </div>
              <button id="margin" type="submit">
                САҚЛАШ
              </button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default BusinessEdit;
