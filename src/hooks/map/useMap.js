import React, { useRef, useEffect, useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// Access token can be acessed in the .env file in root folder.
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

export const useMap = ({ expandLeft, expandRight }) => {
  const map = useRef(null);
  const mapContainer = useRef(null);
  const [expandedLeft, setExpandedLeft] = useState(!!false);
  const [expandedRight, setExpandedRight] = useState(!!false);
  const [lng, setLng] = useState(32.58252);
  const [lat, setLat] = useState(0.347596);
  const [zoom, setZoom] = useState(9);

  // parsing expansion states
  expandLeft(expandedLeft);
  expandRight(expandedRight);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <section className="container p-0">
      <div style={floatingBarStyles}>
        <div className="d-inline-flex pl-4 pr-4 justify-content-between align-items-center container-fluid">
          <button
            type="button"
            className="btn border text-white btn-sm custom-hover-1"
            onClick={() => setExpandedLeft(!expandedLeft)}
          >
            {!expandedLeft ? (
              <FaAngleDoubleLeft className="icon" />
            ) : (
              <FaAngleDoubleRight className="icon" />
            )}
          </button>
          <span>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </span>
          <button
            type="button"
            className="btn border text-white btn-sm custom-hover-1"
            onClick={() => setExpandedRight(!expandedRight)}
          >
            {!expandedRight ? (
              <FaAngleDoubleRight className="icon" />
            ) : (
              <FaAngleDoubleLeft className="icon" />
            )}
          </button>
        </div>
      </div>
      <div ref={mapContainer} style={mapContainerStyles} />;
    </section>
  );
};

// css in js
const mapContainerStyles = {
  height: '100vh',
  width: '100%',
  position: 'relative',
};

const floatingBarStyles = {
  backgroundColor: 'rgba(206, 212, 218, 0.9)',
  color: '#5E72E4',
  padding: '6px 12px',
  fontFamily: 'monospace',
  fontSize: '12px',
  zIndex: 1,
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  marginTop: '12px',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: '4px',
  width: '90%',
};
