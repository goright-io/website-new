import React from "react";
import { Text, Emoji, Card } from "@goright/design-system";
import { ArrowRight24 } from "@carbon/icons-react";
import WorkshopContent from "@components/WorkshopContent";
import Deliverables from "@components/Deliverables";
import WhyAttend from "@components/WhyAttend";
import TeamsAttended from "@components/TeamsAttended";
import WhoAreWe from "@components/WhoAreWe";
import PeopleSay from "@components/PeopleSay";
import WhatYouWillLearn from "@components/WhatYouWillLearn";
import CustomWorkshop from "@components/CustomWorkshop";
import Link from "@components/link";
import { NextSeo } from "next-seo";
import { getAllPosts } from "../../lib/api";

export default function Blog(
  { canonical, baseUrl, pageProps: { posts }, ...props },
  arg1
) {
  return (
    <>
      <NextSeo
        title="GoRight Blog"
        description="Sharing our knowledge with the world"
        keywords="design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development"
        canonical={canonical}
        openGraph={{
          type: "website",
          locale: "en_IE",
          site_name: "GoRight.io",
        }}
      />
      <div className="leading-normal tracking-norma text-light-on-background-900">
        <Text as="h1" variant="6Xl" className="mt-4">
         Blog.
        </Text>
        <div className="mx-auto mt-16 border-b border-light-on-background-900">
          {posts &&
            posts.length > 0 &&
            posts.map((post) => {
              return (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.title}
                  className="flex flex-wrap md:flex-nowrap items-center py-6 text-left border-t border-light-on-background-900 group"
                >
                  <Text
                    as="h3"
                    variant="xlBolder"
                    className="w-full md:w-4/12 group-hover:text-primary-500 md:mb-0 mb-5"
                  >
                    {post.title}
                  </Text>
                  <Text
                    as="p"
                    variant="xl"
                    className="w-full md:w-7/12 md:ml-10 group-hover:text-primary-500"
                  >
                    {post.description}
                  </Text>
                  <ArrowRight24 className="hidden md:flex ml-10 mr-4 transition duration-200 transform opacity-0 group-hover:opacity-100 group-hover:text-primary-500 group-hover:translate-x-1 motion-reduce:transform-none" />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}
