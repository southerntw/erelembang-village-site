import { Navbar } from "@/app/(main)/_components/navbar";
import { Footer } from "@/app/(main)/_components/footer";
import { Separator } from "@/components/ui/separator";
import { GoogleMap } from "@/app/(main)/_components/googleMap";

export default function Kontak() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar staticBar={true} />
      <div className="mb-auto py-8">
        <h2 className="text-2xl font-semibold mb-2 w-full text-center">
          Peta Interaktif
        </h2>
        <Separator className="mb-8 w-10 mx-auto" />
        <div className="sm:w-dvh w-dvh h-dvh bg-zinc-100 mx-auto">
          <GoogleMap />
        </div>
      </div>
      <Footer />
    </div>
  );
}
