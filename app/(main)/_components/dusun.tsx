"use client";
import { DusunCard } from "./dusunCard";
import useSWR from "swr";

interface Dusun {
  dusunId: number;
  nama: string;
  foto: string;
}

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

// TODO: Fetch Data from json.
export const Dusun = () => {
  const { data: dusuns } = useSWR<Dusun[]>("/api/dusun", fetcher);
  if (!dusuns) return <div>Loading...</div>;

  return (
    <div className="pt-8 px-8 w-full pb-8">
      <div className="grid grid-cols-4 gap-4">
        {dusuns.map((dusun) => (
          <DusunCard
            key={dusun.dusunId}
            nama={dusun.nama}
            foto="/assets/home-banner-2.png"
          />
        ))}
      </div>
    </div>
  );
};
