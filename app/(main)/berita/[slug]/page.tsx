"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/app/(main)/_components/navbar";
import { Footer } from "@/app/(main)/_components/footer";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

interface Post {
  title: string;
  content: string;
}

const query = gql`
  query PostBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      title
      content
      extraPostInfo {
        thumbImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

const images = ["/assets/home-banner-2.png", "/assets/home-banner-4.jpeg"];

export default function Berita() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  const params = useParams();
  const { data } = useSuspenseQuery(query, {
    variables: {
      id: params.slug,
      idType: "SLUG",
    },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return (
    <main>
      <Navbar staticBar={true} />
      <div className="w-full items-center align-middle">
        <img src={images[currentIndex]} />
        <div className="py-16 w-2/3 items-center align-middle">
          <h1 className="font-black text-2xl pb-8">{data.post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.post.content }}></div>
        </div>
        <Footer className="mt-auto" />
      </div>
    </main>
  );
}
