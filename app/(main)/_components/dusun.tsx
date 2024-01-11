import { DusunCard } from "./dusunCard";

// TODO: Fetch Data from json.
export const Dusun = () => {
  return (
    <div className="pt-8 px-8 w-full pb-8">
      <div className="flex w-full justify-center">
        <h2 className="text-lg font-bold pb-8">Dusun di Desa Erelembang</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <DusunCard nama="Biring Panting" foto="/assets/home-banner-2.png" />
        <DusunCard nama="Bonto Manai" foto="/assets/home-banner-2.png" />
        <DusunCard nama="Bonto Rannu" foto="/assets/home-banner-2.png" />
        <DusunCard nama="Erelembang" foto="/assets/home-banner-2.png" />
        <DusunCard nama="Malenteng" foto="/assets/home-banner-2.png" />
        <DusunCard nama="Matteko" foto="/assets/home-banner-2.png" />
        <DusunCard nama="Simbang" foto="/assets/home-banner-2.png" />
      </div>
    </div>
  );
};
