import { Navbar } from "@/app/(main)/_components/navbar";
import { Footer } from "@/app/(main)/_components/footer";
import Image from "next/image";

export default function Structure() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar staticBar={true} />
      <div className="mb-auto py-8 bg-zinc-50">
        <div>
          <Image
            src="/assets/struktur-organisasi.jpg"
            alt="Struktur"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "80%", height: "auto" }}
            className="mx-auto rounded-xl"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
