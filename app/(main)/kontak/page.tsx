"use client";
import { Navbar } from "@/app/(main)/_components/navbar";
import { Footer } from "@/app/(main)/_components/footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Kontak() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar staticBar={true} />
      <div className="mb-auto py-8">
        <h2 className="text-2xl font-semibold mb-2 w-full text-center">
          Hubungi Kami
        </h2>
        <Separator className="mb-8 w-10 mx-auto" />
        <div className="sm:w-3/4 grid grid-cols-3 gap-6 mx-auto">
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
          <div className="justify-end">
            <h1 className="font-bold mb-2 text-sm block">Lokasi</h1>
            <p className="text-sm leading-relaxed ">
              Kantor Desa Erelembang. <br />
              Dusun Erelembang, Desa Erelembang, Kec. Tombolo Pao, Kabupaten
              Gowa, Sulawesi Selatan 92171, Indonesia.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
