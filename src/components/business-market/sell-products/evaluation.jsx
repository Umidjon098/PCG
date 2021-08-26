import React, { Component } from "react";

class Evaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="evaluation">
        <div className="overlay"></div>
        <div className="evaluation-card">
          <div className="title">Кўрилган товар (услуга) ни баҳоланг</div>
          <div className="evaluation-star">
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <div className="alert-text">Юлдузчаларни устига босинг</div>
        </div>
      </div>
    );
  }
}

export default Evaluation;
