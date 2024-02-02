import { GoogleMap } from "./googleMap";
import { Separator } from "@/components/ui/separator";

export const Visit = () => {
  return (
    <div className="flex flex-col pt-8 px-8 w-full pb-8 justify-center">
      <h2 className="pb-2 font-bold text-lg text-center">
        Kunjungi Desa Erelembang!
      </h2>
      <p className="text-sm text-muted-foreground text-center pb-2">
        Tekan nama dusun pada peta untuk melihat deskripsi
      </p>
      <Separator className="mb-8 w-10 mx-auto" />
      <div className="mx-auto sm:w-3/4 h-[280px] ">
        <GoogleMap />
      </div>
    </div>
  );
};
