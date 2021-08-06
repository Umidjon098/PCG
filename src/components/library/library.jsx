import axios from "axios";
import React, { Component } from "react";
import "../../style/library.css";
class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      library: [],
    };
  }
  componentDidMount() {
    const url = "/courses/cs/my/";
    const headers = {
      Authorization: "Bearer  " + localStorage.getItem("accessToken"),
    };
    axios.get(url, { headers: headers }).then((response) => {
      this.setState({ library: response.data });
    });
  }
  render() {
    return (
      <div className="library-box">
        <div className="header">
          <span>Харидлар архиви</span>
        </div>
        {this.state.library.map((data) => {
          if (data.tip === "BOOK") {
            return (
              <div>
                <div className="date">{data.created_at.slice(0, 10)}</div>
                <div key={data.id} className="book-box">
                  <div className="book">
                    <div className="book-img">
                      <img src={data.fon_image} alt="" />
                    </div>
                    <div className="content">
                      <div className="title">{data.title}</div>
                      <div className="short-description">
                        {data.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else if (data.tip === "VIDEO") {
            return (
              <div>
                <div className="date">{data.created_at.slice(0, 10)}</div>
                <div key={data.id} className="video-course">
                  <div className="video">
                    <video controls>
                      <source src={data.file} type="video/mp4" />
                    </video>
                  </div>
                  <div className="content">
                    <div className="title">{data.title}</div>
                    <div className="short-description">{data.description}</div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div>
                <div className="date">{data.created_at.slice(0, 10)}</div>

                <div key={data.id} className="audio-box">
                  <div className="audio-img">
                    <img src={data.fon_image} alt="Audio image" />
                  </div>
                  <div className="audio-data">
                    <div className="item">
                      <audio controls>
                        <source src={data.file} type="audio/mpeg" />
                      </audio>
                    </div>
                    <div className="item">
                      <div>
                        <div className="title">{data.title}</div>
                        <div className="short-description">
                          {data.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Library;
