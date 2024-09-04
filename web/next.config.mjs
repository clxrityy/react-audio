import withMdx from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const options = {
    keepBackground: true,
    theme: "github-light",
    defaultLanguage: "plaintext",
}


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "../docs",
    images: {
        unoptimized: true,
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMdx({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, options]],
    },
})(nextConfig);
