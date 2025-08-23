import {
  // generateStaticParamsFor,
  importPage,
} from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../../mdx-components";
import { Metadata } from "next";
import { JSX } from "react/jsx-runtime";

// export const generatesStaticParams = generateStaticParamsFor('mdxPath');

type Props = {
  params: Promise<{
    mdxPath: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);

  return metadata;
}

const Wrapper = getMDXComponents({}).wrapper!;

export default async function Page(props: Props): Promise<JSX.Element> {
  const params = await props.params;
  const result = await importPage(params.mdxPath);

  const { default: MDXContent, toc, metadata, sourceCode } = result;

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
