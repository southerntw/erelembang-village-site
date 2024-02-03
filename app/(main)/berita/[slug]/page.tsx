"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/app/(main)/_components/navbar";
import { Footer } from "@/app/(main)/_components/footer";
import { gql, TypedDocumentNode } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";

interface Post {
  title: string;
  content: string;
  extraPostInfo: ExtraPostInfo;
  date: string;
  author: Author;
}

interface ExtraPostInfo {
  authorExcerpt?: string;
  thumbImage?: ThumbImage;
}

interface Author {
  node: Node;
}

interface ThumbImage {
  node: Node;
}

interface Node {
  mediaItemUrl?: string;
  name?: string;
}

const query = gql`
  query PostBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      title
      content
      author {
        node {
          name
        }
      }
      date
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

export default function BeritaSlug() {
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

  const post: Post = data.post;

  // TODO: Find alternative
  const sanitizedContent = DOMPurify.sanitize(post.content);

  const originalDate = new Date(post.date);
  const formattedDate = originalDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    console.log(sanitizedContent);
  }, []);
  return (
    <main className="flex flex-col min-h-screen justify-between">
      <Navbar staticBar={true} />
      <div className="flex flex-col w-full mb-auto items-center align-middle py-16 px-4 md:px-0">
        <div className="justify-center sm:w-[728px]">
          <div className="flex flex-col pb-8 ">
            <div className="relative w-full h-[368px]">
              <Image
                src={post.extraPostInfo.thumbImage?.node.mediaItemUrl ?? ""}
                alt="thumbnail image"
                fill
                className="mx-auto rounded-xl object-cover"
              />
            </div>
            <h1 className="font-medium text-2xl pt-6 pb-2">{post.title}</h1>
            <p className="text-sm text-muted-foreground pb-4 capitalize">
              {formattedDate} - oleh {post.author.node.name}
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            className="leading-7 flex flex-col gap-y-4 object-cover articleContent"
          ></div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
