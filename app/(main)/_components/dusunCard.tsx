import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface CardProps {
  nama: string;
  foto: string;
}

export const DusunCard = ({ nama, foto }: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <p className="font-light text-base">{nama}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={foto} alt="Foto dusun" width={300} height={300} />
      </CardContent>
    </Card>
  );
};
