import { Header } from "./_components/header";
import { Dusun } from "./_components/dusun";
import { Profil } from "./_components/profil";
import { Wisata } from "./_components/wisata";
import { Visit } from "./_components/visit";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { GoogleMap } from "./_components/googleMap";
import { Berita } from "./_components/berita";
import { Informasi } from "./_components/informasi";
import { Galeri } from "./_components/galeri";
import { DusunDialog } from "./_components/dusunDialog";
import { useDialog } from "@/hooks/use-dialog";

export default function Home() {
  // TODO: Handle smaller screens, especially mobile!
  //

  return (
    <div className="bg-[url('/assets/home-banner-1.png')] bg-no-repeat bg-clip-content">
      <Navbar />
      <Header />
      <Profil />
      <Wisata />
      <Berita />
      <Visit />
      <Footer />
    </div>
  );
}
