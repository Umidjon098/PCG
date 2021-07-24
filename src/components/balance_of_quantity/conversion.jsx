import React, { Component } from "react";

class Conversion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="buy-box">
        <div className="topbar">
          <div className="title">Харид қилиш</div>
        </div>
        <section className="form-box">
          <span>Тўлов миқдори</span>
          <form>
            <input
              className="text-center text-success"
              type="text"
              name="total"
              value="000 SO'M"
            />
            <button className="mt-3">Tўловни ўтказиш</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Conversion;
