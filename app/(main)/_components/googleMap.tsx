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
      const { AdvancedMarkerElement, PinElement } =
        (await google.maps.importLibrary(
          "marker",
        )) as google.maps.MarkerLibrary;

      map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -5.153022216009128, lng: 119.8995287133637 },
        zoom: 15,
        mapId: "4504f8b37365c3d0",
        streetViewControl: false,
        mapTypeControlOptions: {
          mapTypeIds: ["satellite"],
        },
      });

      const pinElement = new PinElement({
        background: "#047857",
        borderColor: "#047857",
        glyphColor: "#fde68a",
      });

      const marker = new AdvancedMarkerElement({
        map,
        position: { lat: -5.153022216009128, lng: 119.8995287133637 },
        title: `Kantor Desa Erelembang`,
        content: pinElement.element,
      });
    });
  });

  return <div id="map" className="w-full h-full rounded-xl bg-zinc-200"></div>;
};
