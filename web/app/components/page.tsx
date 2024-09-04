"use client";

import { MDXProvider } from "@mdx-js/react";
import Content from "./content.mdx";

export default function Page() {
    return (
        <div className="page">
            <MDXProvider>
                <Content />
            </MDXProvider>
        </div>
    )
}