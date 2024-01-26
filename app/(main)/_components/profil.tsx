import { Poppins } from "next/font/google";
import { Map } from "./map";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const Profil = () => {
  return (
    <div>
      <div className="px-16 w-full pb-16 ">
        <div className="flex flex-col gap-16 items-center justify-center">
          <p className="w-full sm:w-3/4 text-center leading-loose pb-8">
            Erelembang berasal dari Bahasa Konjo yang terdiri dari 'Ere' yang
            berarti sungai dan 'Lembang' yang berarti lembah. Desa Erelembang
            merupakan sebuah kawasan yang memikat hati dengan pesonanya yang
            alami dan keindahan alamnya yang menakjubkan. Terletak di tepi
            perbukitan, desa ini dikelilingi oleh perkebunan, perbukitan, dan
            hutan pinus yang membentang sejauh mata memandang. Erelembang tidak
            hanya menawarkan keindahan alam, tetapi juga kehangatan
            masyarakatnya yang ramah dan bersahaja.{" "}
          </p>
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2">
            <Map />
            <div className="h-full flex flex-col align-middle gap-3 ">
              <h1 className="text-xl font-bold pb-3">Informasi Geografis</h1>
              <p>
                Desa Erelembang terletak di Kecamatan Tombolo Pao, Kabupaten
                Gowa.
              </p>
              <p>
                Desa Erelembang berbatasan dengan Kabupaten Bone dan Kabupaten
                Maros.
              </p>
              <p>
                Luas wilayah Desa Erelembang mencapai 59,84 km², menjadikannya
                desa terluas di Kabupaten Gowa.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2">
            <div className="h-full flex flex-col align-middle gap-3 ">
              <h1 className="text-xl font-bold pb-3">
                Topografi dan Keindahan Alam
              </h1>
              <p>
                Desa Erelembang menawarkan keindahan perbukitan dan dataran
                tinggi yang memukau
              </p>
              <p>
                Dikelilingi oleh perkebunan dan perbukitan yang melahirkan
                pemandangan spektakuler.
              </p>
              <p>
                Desa Erelembang adalah destinasi wisata yang potensial dengan
                udara sejuk dan pemandangan alam yang indah.
              </p>
            </div>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};
