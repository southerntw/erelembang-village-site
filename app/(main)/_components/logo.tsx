// TODO: Change font.
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"] });

export const Logo = () => {
  return (
    <div className="flex flex-row ">
      <img src="./logo.png" className="h-14 w-16 pr-2" />
      <p className="text-white w-20 leading-tight my-auto">
        Situs Desa <b>Erelembang</b>
      </p>
    </div>
  );
};
