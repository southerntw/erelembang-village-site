import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Wisata = () => {
  return (
    <div className="pt-8 px-8 w-full pb-8 ">
      <div className="flex flex-col w-full justify-center">
        <h2 className="text-xl font-semibold pb-2 w-full text-center">
          Destinasi Wisata
        </h2>
        <div>
          <Carousel>
            <CarouselContent>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};
