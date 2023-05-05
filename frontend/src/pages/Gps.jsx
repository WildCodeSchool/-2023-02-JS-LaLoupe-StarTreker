import { useEffect, useState } from "react";
import { MapContainer, ImageOverlay, Marker } from "react-leaflet";
import PropTypes from "prop-types";
import L from "leaflet";
import ActuSlide from "@components/ActuSlide";
import seedrandom from "seedrandom";
import PlanetButton from "../components/PlanetButton";
import icon from "../assets/Rotating_Planet.gif";
import bgimg from "../assets/Map-Milky-Way.png";
import Search from "../components/Search";

const bounds = [
  [-90, -180],
  [90, 180],
];
const url = bgimg;
const mapStyles = {
  width: "100%",
  height: "100%",
};

const myIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 30],
  iconAnchor: [0, 0],
  popupAnchor: [-3, -76],
});

function Gps({ planets }) {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const rng = seedrandom("42");
    function getRandomNumber(min, max) {
      return rng() * (max - min) + min;
    }

    const newMarkers = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 80; i++) {
      const marker = L.marker([
        getRandomNumber(-45, 45),
        getRandomNumber(-90, 90),
      ]);
      newMarkers.push(marker);
    }

    setMarkers(newMarkers);
  }, []);

  return (
    <main>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        maxZoom={7}
        minZoom={3}
        scrollWheelZoom
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        style={mapStyles}
      >
        <ImageOverlay url={url} bounds={bounds} />

        {markers.map((marker) => (
          // eslint-disable-next-line react/no-array-index-key
          <>
            <Marker position={marker.getLatLng()} icon={myIcon} />
            {/* <GpsPopUp trigger>
              <h1>Coucou</h1>
            </GpsPopUp> */}
          </>
        ))}
      </MapContainer>

      <PlanetButton />
      <Search planets={planets} />
      <ActuSlide />
    </main>
  );
}
Gps.propTypes = { planets: PropTypes.string.isRequired };

export default Gps;
