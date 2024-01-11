import { Navbar } from "./navbar";

//TODO: Fill H2 later.

export const Header = () => {
  return (
    <div className="top-0 w-full h-[470px] bg-[url('/assets/home-banner-2.png')]">
      <Navbar />
      <div className="w-full h-full items-center flex justify-center pb-20">
        <h2 className="text-white"></h2>
      </div>
    </div>
  );
};
