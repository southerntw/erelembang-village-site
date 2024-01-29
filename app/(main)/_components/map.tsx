"use client";
import Map from "react-map-gl";

export const MapFrame = () => {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  return (
    <div className="w-600 h-400  flex flex-col items-center justify-center">
      <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={{
          longitude: 119.8,
          latitude: -5.1,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
      ></Map>
    </div>
  );
};
