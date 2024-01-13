import { Header } from "./_components/header";
import { Dusun } from "./_components/dusun";
import { Profil } from "./_components/profil";
import { Wisata } from "./_components/wisata";
import { Visit } from "./_components/visit";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

export default function Home() {
  // TODO: Handle smaller screens, especially mobile!
  // TODO: Change Dusun list font.
  return (
    <div className="bg-[url('/assets/home-banner-2.png')] bg-no-repeat bg-clip-content">
      <Navbar />
      <Header />
      <Profil />
      <Dusun />
      <Wisata />
      <Visit />
      <Footer />
    </div>
  );
}
