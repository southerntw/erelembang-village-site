"use client";
import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { MapFrame } from "./map";

export const Visit = () => {
  return (
    <div className="flex flex-col pt-8 px-8 w-full pb-8 justify-center">
      <h2 className="pb-8 font-bold text-lg text-center">
        Kunjungi Desa Erelembang!
      </h2>
      <MapFrame />
    </div>
  );
};
