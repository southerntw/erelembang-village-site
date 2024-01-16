import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const Profil = () => {
  return (
    <div>
      <div className="pt-4 px-8 w-full pb-8 ">
        <div className="flex items-center justify-center">
          <p className="w-3/4 text-center">
            Desa Erelembang, sebuah kawasan yang memikat hati dengan pesonanya
            yang alami dan keindahan alamnya yang menakjubkan. Terletak di tepi
            perbukitan, desa ini dikelilingi oleh sawah hijau yang membentang
            sejauh mata memandang. Erelembang tidak hanya menawarkan keindahan
            alam, tetapi juga kehangatan masyarakatnya yang ramah dan bersahaja.
            Dengan sejarahnya yang kaya dan tradisi yang dijaga dengan baik,
            Desa Erelembang menjadi tempat yang menggambarkan kekayaan budaya
            dan kehidupan pedesaan yang autentik. Penduduknya yang beragam aktif
            menjaga warisan nenek moyang mereka, menciptakan suasana yang kental
            dengan nilai-nilai tradisional.
            <br />
            <br /> Pada Desa Erelembang, terdapat tujuh dusun:
          </p>
        </div>
      </div>
    </div>
  );
};
