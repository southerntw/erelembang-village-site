"use client";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

interface CardProps {
  nama: string;
  foto: string;
  slug: string;
  excerpt: string;
  author: string;
}

export const DusunCard = ({ nama, foto, slug, excerpt, author }: CardProps) => {
  const sanitizedExcerpt = DOMPurify.sanitize(excerpt, {
    USE_PROFILES: { html: false },
  });

  return (
    <Link href={`/berita/${slug}`}>
      <Card className="hover:bg-zinc-100">
        <CardHeader>
          <Image
            src={foto}
            alt="Foto dusun"
            width={300}
            height={300}
            className="rounded-xl mx-auto justify-center"
          />
        </CardHeader>
        <CardContent>
          <CardTitle>
            <p className="text-base font-medium">{nama}</p>
          </CardTitle>
          <p className="text-sm mt-5 text-muted-foreground line-clamp-5">
            {sanitizedExcerpt}
          </p>
        </CardContent>
        <CardFooter>
          <div className="grid grid-cols-2">
            <p className="text-xs text-zinc-400 capitalize">oleh {author}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
