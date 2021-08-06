import React, { Component } from "react";
import "../../style/register.css";
import Camera from "../../image/icons/camera-blue.png";
import CameraWhite from "../../image/icons/camera.png";
import Banner from "../../image/banner.png";
import Map from "../YMap/map";
import "../../style/business.css";
import axios from "axios";
import Alert from "../alert/alert";
import AlertError from "../alert/alert-error";
import Loader from "../../image/preloader.gif";
class BusinessEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: null,
      file: null,
      images: [],
      name: null,
      lat_long: null,
      position: null,
      website: null,
      instagram: null,
      facebook: null,
      telegram: null,
      activity_type: null,
      region: null,
      regions: [],
      gallery: [],
      current_gallery: [],
      deleted_img: [],
      businessData: [],
      showalert: null,
      event: false,
    };
    this.handleMapClick = this.handleMapClick.bind(this);
  }
  componentDidMount() {
    const url = "/profile/business-region/";
    axios(url)
      .then((response) => {
        this.setState({ regions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    this.getBusinessActivity();
    this.getCurrentBusiness();
  }
  getCurrentBusiness = () => {
    const id = localStorage.getItem("businesseditID");
    axios(`/profile/user-business/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }).then((response) => {
      this.setState({
        logo: response.data.logo,
        name: response.data.name,
        lat_long: response.data.location,
        position: response.data.position,
        website: response.data.website,
        instagram: response.data.instagram,
        facebook: response.data.facebook,
        telegram: response.data.telegram,
        activity_type: response.data.activity_type,
        region: response.data.region,
        current_gallery: response.data.gallery,
      });
    });
  };
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
        this.setState((prevState) =>
          this.setState({ gallery: [reader.result, ...prevState.gallery] })
        );
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
  createBusiness = (e) => {
    this.setState({ event: true });
    e.preventDefault();
    const id = localStorage.getItem("businesseditID");
    const URL = `/profile/user-business/${id}/`;
    var businessData = new FormData();
    if (this.state.file != null) {
      businessData.append("logo", this.state.file);
    }
    businessData.append("name", this.state.name);
    businessData.append("activity_type", this.state.activity_type);
    this.state.images.forEach((img) => {
      businessData.append("galleries[]", img);
    });
    this.state.deleted_img.forEach((id) => {
      businessData.append("deleted_images", id);
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
    axios({
      method: "PUT",
      url: URL,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      data: businessData,
    })
      .then(() => {
        this.setState({ showalert: true, event: false });
        setTimeout(() => {
          this.setState({ showalert: null });
        }, 3000);
        setTimeout(() => {
          this.props.history.push("/addbusiness");
        }, 4000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getBusinessActivity = () => {
    const url = "/profile/business-activity/";
    axios(url).then((response) => {
      this.setState({ businessData: response.data });
    });
  };
  removeItem = (id) => {
    if (id > -1) {
      this.state.gallery.splice(id, 1);
      this.state.images.splice(id, 1);
      this.setState({ gallery: this.state.gallery });
    }
  };
  deleteImg = (id, index) => {
    this.setState((prevState) => {
      this.setState({ deleted_img: [id, ...prevState.deleted_img] });
    });
    if (index > -1) {
      this.state.current_gallery.splice(index, 1);
      this.setState({ current_gallery: this.state.current_gallery });
    }
  };
  render() {
    return (
      <div className="business-box">
        <Alert showalert={this.state.showalert} />
        <AlertError showalert={this.state.showalert} />
        <div className={this.state.event ? "waiting-event" : "d-none"}>
          <img src={Loader} alt="" />
        </div>
        <div className="page-title">
          <small>Бизнесингиз ҳақида маълумотларни тахрирлаш</small>
        </div>
        <div className="banner">
          <img
            src={this.state.logo === null ? Banner : this.state.logo}
            alt=""
          />
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
            <form>
              <input
                type="text"
                placeholder="*Бизнесингиз номи"
                name="name"
                value={this.state.name}
                onChange={this.handleInput}
              />
              <input
                className="mb-4"
                type="text"
                placeholder="*Лавозимингиз"
                name="position"
                value={this.state.position}
                onChange={this.handleInput}
              />
              <select
                name="activity_type"
                value={this.state.activity_type}
                onChange={this.handleInput}
              >
                <option>*Фаолият тури</option>
                {this.state.businessData.map((data) => {
                  return (
                    <option key={data.id} value={data.id}>
                      {data.name}
                    </option>
                  );
                })}
              </select>
              <select
                name="region"
                value={this.state.region}
                onChange={this.handleInput}
              >
                <option>Manzil</option>
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
                value={this.state.website}
                onChange={this.handleInput}
              />
              <div style={{ marginTop: "-10px" }}>
                <input
                  type="text"
                  placeholder="Instagram"
                  onChange={this.handleInput}
                  name="instagram"
                  value={this.state.instagram}
                />
                <input
                  type="url"
                  placeholder="Telegram"
                  onChange={this.handleInput}
                  name="telegram"
                  value={this.state.telegram}
                />
                <input
                  type="text"
                  placeholder="Facebook"
                  onChange={this.handleInput}
                  name="facebook"
                  value={this.state.facebook}
                />
              </div>
              <div className="image-item">
                {this.state.gallery.map((data, index) => {
                  return (
                    <div key={index} className="item">
                      <i
                        className="fas fa-times"
                        onClick={() => this.removeItem(index)}
                      ></i>
                      <img src={data} alt="" />
                    </div>
                  );
                })}
                {this.state.current_gallery.map((data, index) => {
                  return (
                    <div key={data.id} className="item">
                      <i
                        className="fas fa-times"
                        onClick={() => this.deleteImg(data.id, index)}
                      ></i>
                      <img src={data.image} alt="" />
                    </div>
                  );
                })}
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
              </div>
              <span className="social-title">
                Жойлашувни ўзгартириш учун янги жойлашувни танланг
              </span>
              <div className="map-box mb-5">
                <Map callBackData={this.callBackData} />
              </div>
              <button onClick={this.createBusiness}>Сақлаш</button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default BusinessEdit;
