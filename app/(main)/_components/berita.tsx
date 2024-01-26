import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { DusunCard } from "./dusunCard";
import { Dusun } from "./dusun";

interface Edge {
  node: Node;
}

interface Node {
  title?: string;
  excerpt?: string;
  slug?: string;
  mediaItemUrl?: string;
  extraPostInfo?: ExtraPostInfo;
}

interface ExtraPostInfo {
  authorExcerpt?: string;
  thumbImage?: ThumbImage;
}

interface ThumbImage {
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
    <div className="bg-zinc-50 pt-8 px-8 sm:px-16 w-full pb-8">
      <h2 className="text-lg font-semibold pb-8 w-full text-center">
        Berita Terkini
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {data.posts.edges.map((edge, index) => (
          <DusunCard
            key={edge.node.title}
            slug={edge.node.slug}
            nama={edge.node.title}
            foto={edge.node.extraPostInfo?.thumbImage?.node.mediaItemUrl}
          />
        ))}
      </div>
    </div>
  );
};
