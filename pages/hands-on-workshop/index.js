import React from "react";
import { Text, Emoji, Card, Icon } from "@goright/design-system";
import Link from "next/link";
import WorkshopContent from "@components/WorkshopContent";
import Deliverables from "@components/Deliverables";
import WhyAttend from "@components/WhyAttend";
import TeamsAttended from "@components/TeamsAttended";
import WhoAreWe from "@components/WhoAreWe";
import PeopleSay from "@components/PeopleSay";
import WhatYouWillLearn from "@components/WhatYouWillLearn";
import CustomWorkshop from "@components/CustomWorkshop";

import Head from "next/head";

export default function Workshop({ canonical }) {
  return (
    <>
      {canonical && (
        <Head>
          <link rel="canonical" href={canonical} />
        </Head>
      )}
      {/***** HERO SECTION *****/}
      <div className="leading-normal tracking-normal text-center text-light-on-background-900">
        <Text as="p" variant="xlBolder" className="mt-24">
          <Emoji symbol="👋 " label="hand" />
          Hands-on
        </Text>
        <Text as="h1" variant="6Xl" className="max-w-3xl mx-auto mt-4">
          2-day workshop on building{"\u00A0"}a{"\u00A0"}design{"\u00A0"}system
          {"\u00A0"}with{" "}
          <Text as="span" variant="6Xl" highlight="yellow-100">
            Figma
          </Text>
          {"\u00A0"}and{"\u00A0"}
          <Text as="span" variant="6Xl" highlight="primary-100">
            React
          </Text>
          .
        </Text>
        <Text variant="xlBolder" className="mt-16">
          Upcoming workshops
          <Emoji symbol="👇" label="hand" />
        </Text>
        <div className="grid grid-cols-3 gap-10 mt-6">
          <Card
            key="september"
            heading="1 &amp; 2 SEPTEMBER 11-15 EEST"
            link={{
              text: "Get early-bird tickets",
              href:
                "https://www.eventbrite.fi/e/hands-on-with-design-systems-september-tickets-154073882129",
            }}
          >
            <div className="mb-8">
              <Text variant="smBolder" className="mb-3">
                Available tickets:
              </Text>
              <p>Designers: 10</p>
              <p>Developers: 10</p>
            </div>
          </Card>
          <Card
            heading="Need a custom workshop for your team?"
            link={{ text: "Let's talk", href: "/contact" }}
          />
        </div>
      </div>
      <WhatYouWillLearn />
      <WorkshopContent />
      <Deliverables />
      <WhyAttend />
      {/* Hidden until confirmation that we can use these logos */}
      {/* <TeamsAttended /> */}
      <PeopleSay />
      <WhoAreWe />
      <CustomWorkshop />
    </>
  );
}

Workshop.getInitialProps = async ({
  req,
  pathname,
  query: { hasCanonical },
}) => {
  const getFullUrl = () =>
    req ? req.protocol + "://" + req.get("host") + req.originalUrl : pathname;
  return { canonical: hasCanonical ? getFullUrl() : null };
};
