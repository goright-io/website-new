import React from "react";
import { Text, Emoji, Card, Icon } from "@goright/design-system";
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
import { getAllPosts } from '../../lib/api'


export default function Blog({ canonical, baseUrl,  pageProps: {posts}, ...props }, arg1) {
  console.log("props", posts)
  console.log("props", posts.length > 0)
  return (
    <>
     <NextSeo
        title="GoRight Blog"
        description="Sharing our knowledge on design systems with the world"
        keywords="design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development"
        canonical={canonical}
        openGraph={{
          type: "website",
          locale: "en_IE",
          site_name: "GoRight.io",
        }}
    />
      {/***** HERO SECTION *****/}
      <div className="leading-normal tracking-normal text-center text-light-on-background-900">
        {/* <Text as="p" variant="xlBolder" className="mt-24">
          <Emoji symbol="👋 " label="hand" />
          Hands-on
        </Text> */}
        <Text as="h1" variant="6Xl" className="max-w-3xl mx-auto mt-4">
          Our Blog
        </Text>
        <Text variant="xlBolder" className="mt-16">
          <Emoji symbol="💡" label="ideas" />
          {" "}The knowlegde we share
        </Text>
        <div className="grid grid-cols-1 gap-10 mt-6 max-w-3xl mx-auto mt-4">
          {posts && posts.length > 0 && posts.map(post => {
            console.log(post)
            return (<Link href={"./test"} key={post.title}>
              
            <Text as="h3" variant="3Xl">{post.title}</Text>
            <Text as="p" variant="3Xl">{post.description}</Text>
            </Link>)
          })}
          </div>
      </div>
    </>
  );
}


export async function getStaticProps() {
  const posts = getAllPosts()
  console.log("==>", posts)
  return {
   props: {posts},
  }
}