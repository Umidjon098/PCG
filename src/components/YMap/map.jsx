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
class YandexMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: [],
      mapState: {
        center: [41.311153, 69.279729],
        zoom: 9,
      },
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.oldCoords !== this.props.oldCoords) {
      this.setState({ coords: this.props.oldCoords });
    }
  }
  onMapClick = (e) => {
    const coords = e.get("coords");
    this.setState({ coords: coords });
    this.props.callBackData(this.state.coords);
  };
  render() {
    return (
      <YMaps>
        <Map
          modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
          onClick={this.onMapClick}
          state={this.state.mapState}
          width="100%"
          height="210px"
        >
          {this.state.coords ? (
            <Placemark geometry={this.state.coords} />
          ) : null}
          <ZoomControl />
          <FullscreenControl />
          <SearchControl />
          <GeolocationControl />
        </Map>
      </YMaps>
    );
  }
}

export default YandexMap;
