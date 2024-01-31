"use client";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState, useRef } from "react";

interface GoogleMapProps {
  location: latlng;
}

interface latlng {}

export const GoogleMap = () => {
  let map: google.maps.Map;

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string);
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      version: "weekly",
    });

    loader.load().then(async () => {
      const { Map } = (await google.maps.importLibrary(
        "maps",
      )) as google.maps.MapsLibrary;
      map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  });

  return <div id="map" className="w-full h-full rounded-xl bg-zinc-200"></div>;
};
