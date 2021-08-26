import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Qatnashuvchilar from "./components/pages/Qatnashuvchilar";
import Singlepage from "./components/pages/singlepage";
import user from "./components/icons/User.svg";

class Admin extends Component {
  state = {
    menu: false,
    userID: "",
  };
  handlemenu = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  handlemenuclose = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    const { url, path } = this.props.match;
    return (
      <div className="asos">
        <div className="asos_1">
          <div className="navfixed" id={this.state.menu ? "left0" : ""}>
            <div className="logo">
              <img src="" alt="" />
              <h1>Perfect Consultion Group</h1>
            </div>
            <div className="links">
              <NavLink
                onClick={this.handlemenu}
                activeClassName="activ_p"
                exact
                to={`${url}/singlepage`}
              >
                <img src={user} alt="" />
                Qatnashchilar
              </NavLink>
            </div>
          </div>
        </div>
        <div className="asos_2">
          <button onClick={this.handlemenu} className="burger_btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="switchs" onClick={this.handlemenuclose}>
            <Switch>
              <Route exact path={path}>
                <Qatnashuvchilar url={url} />
              </Route>
              <Route path={`${path}/singlepage`}>
                <Singlepage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
