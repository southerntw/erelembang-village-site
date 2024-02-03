import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <div className={`lg:hidden ${isOpen ? "block" : "hidden"} `}>
      <ul className="py-4 flex flex-col items-center gap-y-4 bg-white rounded-b-xl text-emerald-700 drop-shadow-xl ">
        <li>
          <Link href="/">
            <p className="text-sm font-bold hover:text-emerald-500">
              Halaman Utama
            </p>
          </Link>
        </li>
        <li>
          <Link href="/berita">
            <p className="text-sm font-bold hover:text-emerald-500">Berita</p>
          </Link>
        </li>
        <li>
          <Link href="/peta">
            <p className="text-sm font-bold hover:text-emerald-500">
              Peta Interaktif
            </p>
          </Link>
        </li>
        <li>
          <Link href="/struktur">
            <p className="text-sm font-bold hover:text-emerald-500">
              Struktur Organisasi
            </p>
          </Link>
        </li>
        <li>
          <Link href="/kontak">
            <p className="text-sm font-bold hover:text-emerald-500">Kontak</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
