import React, { Component } from "react";

class ClubGold extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="detail-box">
        <div className="plan-name">Club Gold</div>
        <div className="title">Lorem ipsum dolor sit amet.</div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam
          expedita ullam accusamus, laudantium dicta dignissimos inventore sequi
          pariatur blanditiis architecto non! Fuga molestiae reprehenderit
          perspiciatis accusamus ad, quos cupiditate! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. A quam expedita ullam accusamus,
          laudantium dicta dignissimos inventore sequi pariatur blanditiis
          architecto non! Fuga molestiae reprehenderit perspiciatis accusamus
          ad, quos cupiditate!
        </div>
        <div className="switch-btn">
          <span>Уланишка розилик бериш</span>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>

        <button>уланиш</button>
      </div>
    );
  }
}

export default ClubGold;
