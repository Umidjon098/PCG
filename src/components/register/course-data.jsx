import React, { Component } from "react";
import "../../style/course.css";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
class CourseData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      number_type: "",
      number_of_group: "",
      groupData: [],
    };
  }
  componentDidMount() {
    this.getGroupData();
  }
  getGroupData = async () => {
    const url = "/profile/coaching-type/";
    await axios(url).then((response) => {
      // console.log(response);
      this.setState({ groupData: response.data });
    });
  };
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  passDataToParent = () => {
    this.props.callBackGroupID(this.state.number_of_group);
  };

  render() {
    const { groupData } = this.state;

    return (
      <div className="course-box">
        <form>
          <span>Қайси курс ўқувчиси эканлигингизни белгиланг</span>
          <select onChange={this.handleInput} name="type">
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
          <select onChange={this.handleInput} name="number_type">
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
          <select onChange={this.handleInput} name="number_of_group">
            <option>---</option>

            {groupData.map((data) => {
              return data.id === parseInt(this.state.type)
                ? data.numbers.map((number) => {
                    return number.id === parseInt(this.state.number_type)
                      ? number.groups.map((data) => {
                          return (
                            <option key={data.id} value={data.id}>
                              {data.number + " - гурух"}
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
            <span></span>
          </div>
          <Link
            to={`${this.props.url}/business`}
            onClick={this.passDataToParent}
          >
            КЕЙИНГИСИ
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(CourseData);
