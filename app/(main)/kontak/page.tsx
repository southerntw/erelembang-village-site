"use client";
import { Navbar } from "@/app/(main)/_components/navbar";
import { Footer } from "@/app/(main)/_components/footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { GoogleMap } from "@/app/(main)/_components/googleMap";

export default function Kontak() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar staticBar={true} />
      <div className="mb-auto py-8">
        <h2 className="text-2xl font-semibold mb-2 w-full text-center">
          Hubungi Kami
        </h2>
        <Separator className="mb-8 w-10 mx-auto" />
        <div className="sm:w-3/4 md:grid md:grid-cols-3 md:gap-6 flex flex-col gap-6 mx-auto px-4 md:px-0">
          <div className="col-span-2">
            <form>
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block  text-sm font-bold mb-2">
                      Nama
                    </label>
                    <input
                      className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <label className="block  text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-bold mb-2">Pesan</label>
                <textarea
                  className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows={6}
                  placeholder="Pesan Anda"
                />
              </div>
              <Button className="bg-emerald-700 hover:bg-emerald-900">
                Kirim
              </Button>
            </form>
          </div>
          <div>
            <h1 className="font-bold mb-2 text-sm text-center md:text-start">
              Lokasi
            </h1>
            <p className="text-sm leading-relaxed mb-2">
              Kantor Desa Erelembang. <br />
              Dusun Erelembang, Desa Erelembang, Kec. Tombolo Pao, Kabupaten
              Gowa, Sulawesi Selatan 92171, Indonesia.
            </p>
            <div className="w-full h-[240px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15894.74031128033!2d119.8993545!3d-5.154284099999988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbe91c735b28afb%3A0xd197d6205f1b08a4!2sKantor%20Desa%20Erelembang!5e0!3m2!1sen!2sid!4v1706694848282!5m2!1sen!2sid"
                allowFullScreen={true}
                loading="lazy"
                className="w-full h-full rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
