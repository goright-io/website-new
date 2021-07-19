import { MDXProvider } from "@mdx-js/react";
import Link from "@components/link";
import { Text, CtaLink } from "@goright/design-system";
import { useRouter } from "next/router";

const MDXComponents = {
  a: Link,
};
export default function HandoutLayout(props) {
  const router = useRouter();
  const currentPath = router.asPath;

  const getParentPath = (currentPath) => {
    if (currentPath.endsWith("/")) {
      currentPath = currentPath.substring(0, currentPath.length - 1); //make sure there is no trailing slash
    }
    const pathParts = currentPath.split("/");
    pathParts.pop();

    return pathParts.join("/") + "/"; // add trailing slash
  };

  const mainPagePath = currentPath ? getParentPath(currentPath) : "./";

  return (
    <>
      <div className="flex-grow py-8 bg-white border-b">
        <div className="flex bg-white min-w-100">
          <div
            className="container max-w-2xl py-2 mx-auto mb-8 text-xl text-left"
            underline
          >
            <CtaLink arrow="start" as={Link} href={mainPagePath}>
              Back to the Main page
            </CtaLink>
          </div>
        </div>
        <Text
          variant="6Xl"
          className="w-full my-2 text-center text-light-on-background-900"
        >
          {props.meta.title}
        </Text>
        <div className="px-4 mx-auto my-8 prose text-justify ">
          <MDXProvider components={MDXComponents}>{props.children}</MDXProvider>
        </div>
      </div>
    </>
  );
}
