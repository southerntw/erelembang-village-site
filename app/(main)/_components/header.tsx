import { Button } from "@/components/ui/button";

export const Header = () => {
  // <h2 className="text-white relative w-[max-content] [text-shadow:1px_1px_2px_var(--tw-shadow-color)] text-3xl font-bold text-center bg-emerald-700 px-4 py-2 before:animate-typewriter before:inset-0 before:absolute after:animate-caret">
  return (
    <div>
      <div className="w-full h-[430px]">
        <div className="w-full h-2/3 items-center flex flex-col gap-8 justify-center pt-10">
          <h2 className="text-white text-3xl font-bold text-center bg-emerald-700 px-4 py-2">
            Selamat datang di Desa Erelembang.
          </h2>
          <Button className="bg-emerald-700 hover:bg-emerald-900">
            Jelajahi Erelembang
          </Button>
        </div>
      </div>
    </div>
  );
};
