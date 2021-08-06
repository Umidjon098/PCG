import React, { Component } from "react";
import {
  Switch,
  Route,
  withRouter,
  BrowserRouter as Router,
} from "react-router-dom";
import CourseData from "./course-data";
import Register from "./register";
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      groupData: "",
      businessData: [],
    };
  }

  callBackRegisterData = (data) => {
    this.setState({ userData: data });
  };

  callBackGroupID = (id) => {
    this.setState({ groupData: id });
  };
  render() {
    const { path, url } = this.props.match;
    return (
      <div>
        <Switch>
          <Route exact path={path}>
            <Register callBackRegisterData={this.callBackRegisterData} />
          </Route>
          <Route path={`${path}/coursedata`}>
            <CourseData
              url={url}
              userData={this.state.userData}
              callBackGroupID={this.callBackGroupID}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Registration);
