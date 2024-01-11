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

export const dusunCard = ({ nama, foto }: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <Image src={foto} fill={true} alt="Foto dusun" />
        <CardTitle>{nama}</CardTitle>
      </CardHeader>
    </Card>
  );
};
