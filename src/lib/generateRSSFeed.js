import RSS from 'rss';
import { getAllFilesFrontMatter } from "../lib/mdx";
import fs from "fs";

const formatText = (text) => {
    return text.replace("<![CDATA[", "").replace("]]>", "")
}
const generateRssFeed = async() => {
    const allPosts = await getAllFilesFrontMatter("blog");
    const site_url = 'https://www.tshiteej.com';

    const feedOptions = {
        title: 'Blog posts | RSS Feed',
        description: 'Welcome to this blog posts!',
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        image_url: `${site_url}/logo.png`,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
    };

    const feed = new RSS(feedOptions);

    allPosts.map((post) => {
        feed.item({
            title: formatText(post.title).trim(),
            description: formatText(post.summary).trim(),
            url: `${site_url}/blog/${post.slug}`,
            date: post.publishedDate,
        });
    });

    fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}

module.exports = {
    generateRssFeed
}