// TODO: Change font.
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"] });

export const Logo = () => {
  return (
    <div className="">
      <p className="text-white font-extrabold">Erelembang</p>
    </div>
  );
};
