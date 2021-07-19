import { MDXProvider } from "@mdx-js/react";
import Link from "@components/link";
import { Text, CtaLink } from "@goright/design-system";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Image from "next/image";
import path from "path";

const MDXComponents = {
  a: Link,
  NextImage: (props) => <Image {...props} />,
};
export default function LayoutBlog({ title, seo, ...props }) {
  const router = useRouter();
  const currentPath = router.asPath;
  const meta = { title, ...seo };
  const getParentPath = (currentPath) => {
    if (currentPath.endsWith("/")) {
      currentPath = currentPath.substring(0, currentPath.length - 1); //make sure there is no trailing slash
    }
    const pathParts = currentPath.split("/");
    pathParts.pop();

    return pathParts.join("/") + "/"; // add trailing slash
  };

  const blogPagePath = currentPath ? getParentPath(currentPath) : "./";

  return (
    <>
      <NextSeo
        title="Handout materials for Hands-on with Design Systems Workshop"
        description="All the necessary documentation for the participants of the workshop"
        keywords="design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development"
        // canonical={canonical}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://hands-on-workshop.goright.io/handout",
          site_name: "GoRight.io",
        }}
      />
      <div className="flex-grow py-8 bg-white border-b">
        <div className="flex bg-white min-w-100">
          <div className="container max-w-2xl py-2 mx-auto mb-8 text-xl text-left">
            <CtaLink arrow="start" as={Link} href={blogPagePath}>
              Back to Blog
            </CtaLink>
          </div>
        </div>
        <Text
          variant="6Xl"
          className="w-full mt-12 mb-24 text-center text-light-on-background-900"
        >
          {title}
        </Text>
        <div className="px-4 mx-auto my-8 prose text-justify">
          <MDXProvider components={MDXComponents}>{props.children}</MDXProvider>
        </div>
      </div>
    </>
  );
}
