"use client";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState, useRef } from "react";
import { DusunDialog } from "./dusunDialog";
import { useDialog } from "@/hooks/use-dialog";

interface GoogleMapsProps {
  domEvent: any;
  latLng: any;
}

const dusunProperties = [
  {
    description: "Dusun Biring Panting",
    position: {
      lat: -5.227655,
      lng: 119.904843,
    },
    pinSvg: "/assets/map/glyph-biring-panting.png",
    gallery: ["", ""],
    summary:
      "Dusun Biring Panting, yang membentang luas seluas 9,00 KM², merupakan dusun terluas di Desa Erelembang. Keseharian warganya banyak dihabiskan di kebun, menghasilkan komoditas seperti kentang, daun bawang, cabai, dan kol. Kebun-kebun yang menjalar sejauh mata memandang menjadi ciri khasnya. Wilayah ini berbatasan dengan Malino, menambah pesona alamnya.",
  },
  {
    description: "Dusun Ma'lenteng",
    position: {
      lat: -5.117945,
      lng: 119.888637,
    },
    pinSvg: "/assets/map/glyph-malenteng.png",
    gallery: ["", ""],
    summary:
      "Dusun Ma’lenteng, dengan luas 7,00 km², menjadi pusat kegiatan kebun dan sawah. Terdapat sawah beras merah, kebun kopi, dan hutan pinus yang luas. Potensi wisata yang besar, seperti bukit teletubbies, menjadi daya tarik utama di dusun ini.",
  },
  {
    description: "Dusun Erelembang",
    position: {
      lat: -5.153661,
      lng: 119.898761,
    },
    pinSvg: "/assets/map/glyph-erelembang.png",
    gallery: ["", ""],
    summary:
      "Dusun Erelembang, seluas 7,03 km², merupakan pusat administrasi Desa Erelembang. Selain menjadi pusat administratif, dusun ini juga dikenal dengan komoditas perkebunan cabai, kebun kopi, dan hutan pinus. Keberagaman aktivitas ekonomi dan alaminya memberikan warna tersendiri.",
  },
  {
    description: "Dusun Bontorannu",
    position: {
      lat: -5.168662,
      lng: 119.919104,
    },
    pinSvg: "/assets/map/glyph-bontorannu.png",
    gallery: ["", ""],
    summary:
      "Dusun Bontorannu, dengan luas 4,02 km², dikenal dengan komoditas utamanya yaitu getah pinus. Hutan pinus yang melimpah memperkuat karakteristiknya, menciptakan lingkungan yang asri dan sejuk.",
  },
  {
    description: "Dusun Bontomanai",
    position: {
      lat: -5.178579,
      lng: 119.931324,
    },
    pinSvg: "/assets/map/glyph-bontomanai.png",
    gallery: ["", ""],
    summary:
      "Dusun Bontomanai, seluas 4,10 km², menonjolkan pesona sawah yang luas. Keindahan hamparan sawah menjadi ciri khasnya, menciptakan pemandangan yang memukau di tengah-tengah desa.",
  },
  {
    description: "Dusun Matteko",
    position: {
      lat: -5.175343,
      lng: 119.890731,
    },
    pinSvg: "/assets/map/glyph-matteko.png",
    gallery: ["", ""],
    summary:
      "Dusun Matteko, dengan luas 5,05 km², menawarkan keindahan hutan pinus dan sawah yang melimpah. Kombinasi antara hutan pinus dan sawah menciptakan harmoni alam yang memesona di dusun ini.",
  },
  {
    description: "Dusun Simbang",
    position: {
      lat: -5.180953,
      lng: 119.944932,
    },

    pinSvg: "/assets/map/glyph-simbang.png",
    gallery: ["", ""],
    summary:
      "Dengan luas sekitar 5,15 km², Dusun Simbang adalah tempat di mana warga sering berkebun, fokus pada komoditas utama seperti tomat. Kebun tomat yang luas dan sungai yang berbatasan dengan desa Pao menambah daya tarik keseharian warga Simbang.",
  },
];

export const GoogleMap = () => {
  let map: google.maps.Map;
  const dialog = useDialog();
  const isOpen = useDialog((store) => store.isOpen);
  const onClose = useDialog((store) => store.onClose);

  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [gallery, setGallery] = useState([""]);

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
        zoom: 11,
        mapId: "4504f8b37365c3d0",
        streetViewControl: false,
      });

      for (const property of dusunProperties) {
        const imgElement = document.createElement("img");
        imgElement.src = property.pinSvg;

        const pinElement = new PinElement({
          glyph: imgElement,
          glyphColor: "rgba(255, 255, 255, 0)",
          background: "rgba(255, 255, 255, 0)",
          borderColor: "rgba(255, 255, 255, 0)",
        });

        const advancedMarkerElement = new AdvancedMarkerElement({
          map,
          title: property.description,
          position: property.position,
          content: pinElement.element,
        });

        advancedMarkerElement.addListener(
          "click",
          ({ domEvent, latLng }: GoogleMapsProps) => {
            const { target } = domEvent;
            setName(property.description);
            setSummary(property.summary);
            dialog.onOpen();
          },
        );
      }
    });
  });

  return (
    <>
      <DusunDialog name={name} summary={summary} gallery={gallery} />
      <div id="map" className="w-full h-full rounded-xl bg-zinc-200"></div>
    </>
  );
};
