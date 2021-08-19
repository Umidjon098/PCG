import React, { Component } from "react";

class DeleteModal extends Component {
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
            <div className="title">Ўчиришни истайсизми?</div>
            <div
              className="close-btn"
              onClick={() => this.props.toggleModal(false)}
            >
              <i className="fas fa-times"></i>
            </div>
          </section>
          <div className="menu-item">
            <div className="item" onClick={() => this.props.selectItem(true)}>
              <i className="fas fa-check"></i>
              <span>Ҳа</span>
            </div>
            <div className="item">
              <i className="fas fa-times"></i>
              <span>Йўқ</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
