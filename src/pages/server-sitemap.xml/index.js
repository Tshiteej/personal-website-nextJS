import { getServerSideSitemap } from "next-sitemap";
import { getAllFilesFrontMatter } from "../../lib/mdx";

export const getServerSideProps = async (ctx) => {
    const allPosts = await getAllFilesFrontMatter("blog");
    const newsSitemaps = allPosts.map((item) => {

        return {
            loc: `${item.url}`,
            lastmod: item.date.toISOString(),
        }
    });
    const fields = [...newsSitemaps];

    return getServerSideSitemap(ctx, fields);
};

export default function Site() { }