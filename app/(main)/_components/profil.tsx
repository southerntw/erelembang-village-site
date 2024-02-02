import { Poppins } from "next/font/google";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Montserrat, Open_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useDialog } from "@/hooks/use-dialog";
import { DusunDialog } from "./dusunDialog";

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const openSans = Open_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const Profil = () => {
  return (
    <div>
      <div className="px-16 w-full pb-16 ">
        <div className="flex flex-col gap-24 items-center justify-center">
          <p className="w-full sm:w-3/4 text-center leading-loose mt-4 py-4 px-8 bg-zinc-50 rounded-xl">
            <i>Erelembang</i> berasal dari Bahasa Konjo yang terdiri dari 'Ere'
            yang berarti sungai dan 'Lembang' yang berarti lembah. Desa
            Erelembang merupakan sebuah kawasan yang memikat hati dengan
            pesonanya yang alami dan keindahan alamnya yang menakjubkan. Desa
            ini diisi oleh perkebunan, perbukitan, dan hutan pinus yang
            membentang sejauh mata memandang. Erelembang tidak hanya menawarkan
            keindahan alam, tetapi juga kehangatan masyarakatnya yang ramah dan
            bersahaja.{" "}
          </p>
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:w-5/6">
            <div className="h-full flex items-center justify-start">
              <Image
                src="/assets/picture-1.jpg"
                alt="foto pemandangan"
                width={400}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="h-full flex flex-col align-middle justify-center gap-3 ">
              <h1 className="text-xl font-bold ">Informasi Geografis</h1>
              <Separator className="mb-2 w-5" />
              <ul className="px-4 list-disc space-y-2 text-zinc-700">
                <li>Terletak di Kecamatan Tombolo Pao, Kabupaten Gowa.</li>

                <li>Terdiri atas 7 dusun.</li>
                <li>Berbatasan dengan Kabupaten Bone dan Kabupaten Maros.</li>
                <li>
                  Luas wilayah Desa Erelembang mencapai 59,84 km², menjadikannya
                  desa terluas di Kabupaten Gowa.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:w-5/6">
            <div className="h-full flex flex-col justify-center gap-3 ">
              <h1 className="text-xl font-bold ">
                Topografi dan Keindahan Alam
              </h1>
              <Separator className="mb-3 w-5" />
              <ul className="px-4 list-disc space-y-2 text-zinc-700">
                <li>
                  Menawarkan keindahan perbukitan, hutan, dan dataran tinggi
                  yang memukau.
                </li>
                <li>
                  Dikelilingi oleh perkebunan dan perbukitan yang melahirkan
                  pemandangan spektakuler.
                </li>
                <li>
                  Destinasi wisata yang potensial dengan udara sejuk dan
                  pemandangan alam yang indah.
                </li>
              </ul>
            </div>
            <div className="h-full flex items-center justify-end">
              <Image
                src="/assets/picture-2.jpeg"
                alt="foto pemandangan"
                width={400}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
