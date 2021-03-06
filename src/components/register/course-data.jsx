import React, { Component } from "react";
import "../../style/course.css";
import { withRouter } from "react-router-dom";
import Loader from "../../image/preloader.gif";

import axios from "axios";
import AlertError from "../alert/alert-error";
class CourseData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      number_type: null,
      number_of_group: null,
      groupData: [],
      event: false,
      error: [],
      showalert: true,
    };
  }
  componentDidMount() {
    this.getGroupData();
  }
  getGroupData = async () => {
    const url = "/profile/coaching-type/";
    await axios(url).then((response) => {
      this.setState({ groupData: response.data });
    });
  };
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  closeAlert = (showalert) => {
    this.setState({ showalert });
  };
  createUser = async (e) => {
    e.preventDefault();
    if (this.state.number_of_group === null) {
      this.setState({ showalert: false });
    } else {
      this.setState({ event: true });
      const { userData, groupData } = this.props;
      const URL = "/profile/register/";
      var userFrom = new FormData();
      if (userData.telegram != null) {
        userFrom.append("telegram", userData.telegram);
      }
      if (userData.instagram != null) {
        userFrom.append("instagram", userData.instagram);
      }
      if (userData.facebook != null) {
        userFrom.append("facebook", userData.facebook);
      }
      userFrom.append("image", userData.file);
      userFrom.append("group_id", this.state.number_of_group);
      userFrom.append("password", userData.password);
      userFrom.append("password2", userData.password2);
      userFrom.append("first_name", userData.first_name);
      userFrom.append("last_name", userData.last_name);
      userFrom.append("middle_name", userData.middle_name);
      userFrom.append(
        "birthday",
        userData.year + "-" + userData.month + "-" + userData.day
      );
      userFrom.append("phone_number", userData.phone_number);
      userFrom.append("email", userData.email);
      await axios({
        method: "post",
        url: URL,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: userFrom,
      })
        .then((response) => {
          this.setState({ event: false });
          if (response.data.success) {
            this.props.history.push("/success");
          }
          setTimeout(() => {
            this.props.history.push("/");
          }, 4000);
        })
        .catch((error) => {
          this.setState({ event: false });
        });
    }
  };
  render() {
    const { groupData } = this.state;
    return (
      <div className="course-box">
        <AlertError
          showalert={this.state.showalert}
          closeAlert={this.closeAlert}
        />
        <div className={this.state.event ? "waiting-event" : "d-none"}>
          <img src={Loader} alt="" />
        </div>
        <form onSubmit={this.createUser}>
          <span>?????????? ???????? ???????????????? ???????????????????????????? ??????????????????</span>
          <select onChange={this.handleInput} name="type" required>
            <option>---</option>
            {groupData === undefined
              ? console.log("0")
              : groupData.map((data) => {
                  return (
                    <option key={data.id} value={data.id}>
                      {data.name}
                    </option>
                  );
                })}
          </select>
          <select onChange={this.handleInput} name="number_type" required>
            <option>---</option>
            {groupData.map((data) => {
              return data.id === parseInt(this.state.type)
                ? data.numbers.map((number) => {
                    return (
                      <option key={number.id} value={number.id}>
                        {number.number + ` - ${data.name}`}
                      </option>
                    );
                  })
                : "";
            })}
          </select>
          <select onChange={this.handleInput} name="number_of_group" required>
            <option>---</option>
            {groupData.map((data) => {
              return data.id === parseInt(this.state.type)
                ? data.numbers.map((number) => {
                    return number.id === parseInt(this.state.number_type)
                      ? number.groups.map((data) => {
                          return (
                            <option key={data.id} value={data.id}>
                              {data.number + " - ??????????"}
                            </option>
                          );
                        })
                      : "";
                  })
                : "";
            })}
          </select>
          <div className="indecator-box">
            <span className="active"></span>
            <span className="active"></span>
            <span></span>
          </div>
          <button type="submit">?????????????????? ????????</button>
        </form>
      </div>
    );
  }
}

export default withRouter(CourseData);
