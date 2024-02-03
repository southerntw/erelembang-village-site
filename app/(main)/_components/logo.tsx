// TODO: Change font.
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"] });

export const Logo = () => {
  return (
    <div className="flex lg:flex-row gap-2 lg:gap-0">
      <img src="/assets/logo.png" className="h-12 w-12 lg:mx-0 mt-2 lg:mt-0" />
      <p className="w-20 text-white leading-tight my-auto lg:ml-5 pt-2 lg:pt-0">
        Desa <b>Erelembang</b>
      </p>
    </div>
  );
};
