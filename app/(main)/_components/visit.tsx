"use client";
import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface VisitProps {
  address: string;
}

interface LoaderOptions {
  apiKey: string;
  version: string;
}

export const Visit = ({ address }: VisitProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loaderConfig: LoaderOptions = {
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      version: "weekly",
    };

    const loader = new Loader(loaderConfig);

    loader.importLibrary("maps").then(() => {
      const geocoder = new google.maps.Geocoder();
      const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          const map = new google.maps.Map(mapRef.current!, {
            center: results[0]?.geometry?.location,
            zoom: 8,
          });

          const marker = new google.maps.Marker({
            map: map,
            position: results[0]?.geometry?.location,
          });
        } else {
          console.error(
            `Geocode was not successful for the following reason: ${status}`,
          );
        }
      });
    });
  }, [address]);

  return (
    <div className="flex pt-8 px-8 w-full pb-8 justify-center">
      <h2 className="pb-8 font-bold text-lg text-center">
        Kunjungi Desa Erelembang!
      </h2>
      <div className="w-full h-[400px]" ref={mapRef}></div>
    </div>
  );
};
