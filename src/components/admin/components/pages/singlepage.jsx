import React, { Component } from "react";

//import img
import img from "../icons/img.svg";
import download from "../icons/download.svg";
import yes from "../icons/yes.svg";
import no from "../icons/no.svg";
import userpic from "../icons/userpic.svg";
import instagram from "../icons/instagram.svg";
import facebook from "../icons/facebook.svg";
import telegram from "../icons/telegram.svg";

//import css
import "../css/singlepage.css";
import axios from "axios";

class Singlepage extends Component {
  state = {
    userDetail: [],
  };
  componentDidMount() {
    this.getUserDetail();
  }
  getUserDetail = async () => {
    const id = localStorage.getItem("userID");
    const url = `/backoffice/users/${id}/`;
    await axios(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((response) => {
        this.setState({ userDetail: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  eventUser = async (status, des) => {
    const id = localStorage.getItem("userID");
    const url = `/backoffice/users/${id}/`;
    const data = {
      status: status,
      note_when_cancelled: des,
    };
    axios
      .put(url, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then(() => {})
      .catch(() => {
        alert("Izoh yozilmagan!");
      });
  };
  render() {
    const { userDetail } = this.state;
    console.log(userDetail);
    return (
      <React.Fragment>
        <div className="up_nav">
          <div>
            <h1 className="link_h1">
              Qatnashchilar <span> {">"} Ma'lumot</span>
            </h1>
          </div>
          <div className="user_info">
            <img src={userpic} alt="" />
            <div>
              <h1>Ibrohim Gulyamov</h1>
              <h2>Biznes Egasi</h2>
            </div>
          </div>
        </div>
        <div className="singlepage">
          <div className="single_up">
            <div>
              <div className="single_1">
                <img src={userDetail.image} alt="" />
              </div>
              <div className="single_2">
                <h1>{userDetail.first_name + " " + userDetail.last_name}</h1>
                <h2>{userDetail.birthday}</h2>
              </div>
            </div>
            <div>
              <a href="#">
                <img src={download} alt="" />
                Скачать PDF
              </a>
            </div>
          </div>

          <div className="single_down">
            <h1>Ma'lumotlar</h1>
            <div className="single_info">
              <div className="info_1">
                <div>
                  <h1>Ism</h1>
                </div>
                <div>
                  <p>{userDetail.first_name}</p>
                </div>
              </div>
              <div className="info_1">
                <div>
                  <h1>Familiya</h1>
                </div>
                <div>
                  <p>{userDetail.last_name}</p>
                </div>
              </div>
              <div className="info_1">
                <div>
                  <h1>Otasi ismi</h1>
                </div>
                <div>
                  <p>{userDetail.middle_name}</p>
                </div>
              </div>
              <div className="info_1">
                <div>
                  <h1>Tug'ilgan sana</h1>
                </div>
                <div>
                  <p>{userDetail.birthday}</p>
                </div>
              </div>
              <div className="info_1">
                <div>
                  <h1>Email</h1>
                </div>
                <div>
                  <p>{userDetail.email}</p>
                </div>
              </div>
              <div className="info_1">
                <div>
                  <h1>Telefon raqami</h1>
                </div>
                <div>
                  <p>{userDetail.phone_number}</p>
                </div>
              </div>
              <div className="info_1">
                <div>
                  <h1>Ijtimoiy tarmoqlar</h1>
                </div>
                <div className="info_a1">
                  <a href="#">
                    <img src={instagram} alt="" />
                    {userDetail.instagram}
                  </a>
                  <a href="#">
                    <img src={facebook} alt="" />
                    {userDetail.facebook}
                  </a>
                  <a href="#">
                    <img src={telegram} alt="" />
                    {userDetail.telegram}
                  </a>
                </div>
              </div>
              <div className="info_1">
                <div>
                  <h1>Qatnashchi turi</h1>
                </div>
                <div>
                  <p>
                    {userDetail.psgroups_list === undefined
                      ? ""
                      : userDetail.psgroups_list[0].coaching_type}
                  </p>
                </div>
              </div>
              <div className="info_1">
                <div>
                  <h1>Nomi</h1>
                </div>
                <div>
                  <p>
                    {userDetail.psgroups_list === undefined
                      ? ""
                      : userDetail.psgroups_list[0].coaching_number +
                        " - " +
                        userDetail.psgroups_list[0].coaching_type}
                  </p>
                </div>
              </div>
              <div className="info_1">
                <div>
                  <h1>Guruh</h1>
                </div>
                <div>
                  <p>
                    {userDetail.psgroups_list === undefined
                      ? ""
                      : userDetail.psgroups_list[0].group_number + " - gurux"}
                  </p>
                </div>
              </div>
              {/* <div className="info_1 info_a2">
                <div>
                  <h1>Dokumentlar</h1>
                </div>
                <div>
                  <a href="#">Паспорт.pdf</a>,{" "}
                  <a href="#">IELTS Certificate.pdf</a>,{" "}
                  <a href="#">Diploma.pdf</a>
                </div>
              </div> */}
            </div>
            <div className="info_btn">
              <button>
                <img src={no} alt="" />
                Rad etish
              </button>
              <button>
                <img src={yes} alt="" />
                Tasdiqlash
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Singlepage;
