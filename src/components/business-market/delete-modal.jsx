import React, { Component } from "react";

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="evaluation">
        <div className="overlay"></div>
        <div className="evaluation-card delete-modal">
          <div className="title">Ўчиришни истайсизми?</div>
          <div className="submit-box">
            <div className="ok">Ҳа</div>
            <div className="not">Йўқ</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
