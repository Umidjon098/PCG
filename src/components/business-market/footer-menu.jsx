import React, { Component } from "react";

class MarketModalMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          className={this.props.v_toggle ? "v-menu active" : "v-menu "}
        ></div>
        <div className={this.props.v_toggle ? "v-item active" : "v-item "}>
          <div
            className="close-line"
            onClick={() => this.props.toggleModal(false)}
          ></div>
          <section>
            <div className="title">Қўшимча</div>
            <div
              className="close-btn"
              onClick={() => this.props.toggleModal(false)}
            >
              <i className="fas fa-times"></i>
            </div>
          </section>
          <div className="menu-item">
            <div className="item mb-1">
              <span>Ўзгартириш</span>
            </div>
            <div className="item mb-1">
              <span>Реклама қилиш</span>
            </div>
            <div className="item mb-1">
              <span>Товарни ўчириш</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarketModalMenu;
