export const Footer = () => {
  return (
    <footer>
      <div className="bg-emerald-700 w-full text-white px-6">
        <div className="pt-6 pb-4 grid grid-cols-3">
          <p className="text-xs w-3/4 col-span-2 leading-relaxed">
            <b>Desa Erelembang</b> merupakan salah satu dari 8 (delapan) desa
            dan 1 (satu) kelurahan di Kecamatan Tombolo Pao di Kabupaten Gowa
            yang terletak paling barat di wilayah Kecamatan Tombolo Pao yang
            berbatasan dengan Kabupaten Bone dan Maros.
          </p>
          <div>
            <p className="text-xs leading-relaxed">
              Alamat: Kantor Desa Erelembang. Dusun Erelembang, Desa Erelembang,
              Kec. Tombolo Pao, Kabupaten Gowa, Sulawesi Selatan 92171,
              Indonesia.
            </p>
          </div>
        </div>
      </div>
      <div className="container bg-emerald-900 mx-auto px-6 pb-2 pt-3 items-center">
        <div>
          <p className="text-white text-xs font-medium text-center">
            2024 © KKNT 111 Universitas Hasanuddin
          </p>
        </div>
      </div>
    </footer>
  );
};
