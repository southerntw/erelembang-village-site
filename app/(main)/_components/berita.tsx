import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { DusunCard } from "./dusunCard";
import { Dusun } from "./dusun";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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

export const Berita = async () => {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return (
    <div className="flex flex-col bg-zinc-50 pt-8 px-8 sm:px-16 w-full pb-8">
      <h2 className="text-xl font-semibold pb-2 w-full text-center">
        Pusat Informasi
      </h2>
      <p className="text-sm text-muted-foreground text-center pb-2">
        Berita terkini dari Desa Erelembang
      </p>
      <Separator className="mb-8 w-10 mx-auto" />
      <div className="grid grid-cols-2 sm:grid-cols-3 place-items-center justify-between gap-4 pb-8">
        {data.posts.edges.slice(0, 6).map((edge, index) => (
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
      <Button className="bg-transparent text-emerald-700 hover:bg-emerald-900 hover:text-white mx-auto">
        Tampilkan Selengkapnya
      </Button>
    </div>
  );
};
