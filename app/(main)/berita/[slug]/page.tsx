"use client";

import { useParams } from "next/navigation";
import { Navbar } from "@/app/(main)/_components/navbar";
import { getClient } from "@/lib/client";
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

export default function Berita() {
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
      <div>{JSON.stringify(data)}</div>
    </main>
  );
}
