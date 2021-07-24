import axios from "axios";
import React, { Component } from "react";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      library: [],
    };
  }
  componentDidMount() {
    const url = "/courses/my";
    const headers = {
      Authorization: "Bearer  " + localStorage.getItem("accessToken"),
    };
    axios.get(url, { headers: headers }).then((response) => {
      this.setState({ library: response.data });
      console.log(response);
    });
  }
  render() {
    return <div className="library-box"></div>;
  }
}

export default Library;
