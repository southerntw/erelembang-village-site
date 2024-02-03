import { Header } from "./_components/header";
import { Profil } from "./_components/profil";
import { Visit } from "./_components/visit";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { Berita } from "./_components/berita";

export default function Home() {
  return (
    <div className="bg-[url('/assets/home-banner-1.png')] bg-no-repeat bg-clip-content">
      <Navbar />
      <Header />
      <Profil />
      <Berita />
      <Visit />
      <Footer />
    </div>
  );
}
