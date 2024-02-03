import { getClient } from "@/lib/client";
import { Navbar } from "@/app/(main)/_components/navbar";
import { Footer } from "@/app/(main)/_components/footer";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { DusunCard } from "@/app/(main)/_components/dusunCard";

interface Edge {
  node: Node;
}

interface Node {
  title?: string;
  excerpt?: string;
  slug?: string;
  mediaItemUrl?: string;
  extraPostInfo?: ExtraPostInfo;
  name?: string;
}

interface ExtraPostInfo {
  authorExcerpt?: string;
  thumbImage?: ThumbImage;
}

interface ThumbImage {
  node: Node;
}

interface Author {
  node: Node;
}

interface Posts {
  edges: Edge[];
}

interface Data {
  posts: Posts;
}

interface DebugLog {
  type: string;
  message: string;
}

interface Extensions {
  debug: DebugLog[];
}

interface Context {
  data: Data;
  extensions: Extensions;
}

const query = gql`
  query postsQuery {
    posts {
      edges {
        node {
          title
          excerpt
          slug
          author {
            node {
              name
            }
          }
          extraPostInfo {
            authorExcerpt
            thumbImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`;

export default async function Berita() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar staticBar={true} />
      <div className="flex flex-col mb-auto pt-8 px-8 sm:px-16 w-full pb-8">
        <h2 className="text-3xl font-semibold pb-2 w-full text-center">
          Berita Terkini
        </h2>
        <Separator className="mb-8 w-10 mx-auto" />
        <div className="grid grid-cols-2 sm:grid-cols-3 place-items-center justify-between gap-4 pb-8">
          {data.posts.edges.map((edge: any, _index: any) => (
            <DusunCard
              key={edge.node.title}
              slug={edge.node.slug}
              nama={edge.node.title}
              foto={edge.node.extraPostInfo?.thumbImage?.node.mediaItemUrl}
              excerpt={edge.node.excerpt}
              author={edge.node.author?.node.name}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
