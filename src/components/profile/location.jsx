import React, { Component } from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  SearchControl,
  ZoomControl,
  GeolocationControl,
} from "react-yandex-maps";
class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapState: {
        center: [41.311153, 69.279729],
        zoom: 9,
      },
    };
  }
  render() {
    return (
      <div className="multimedia">
        <YMaps>
          <Map
            modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
            onClick={this.onMapClick}
            defaultState={{ center: this.props.location, zoom: 9 }}
            width="100%"
            height="210px"
          >
            <ZoomControl />
            <FullscreenControl />
            <GeolocationControl />
          </Map>
        </YMaps>
      </div>
    );
  }
}

export default Location;
