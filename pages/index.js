import { Text, Emoji, Card, Icon, CtaLink } from "@goright/design-system";
import { NextSeo } from "next-seo"
import Link from "@components/link";

export default function IndexPage() {
  return (
    <>
      <NextSeo
        title="GoRight"
        description="We team up with designers and developers to build and scale design systems"
        keywords="Design system, design system workshop, design system team"
        openGraph={{
          type: "website",
          locale: "en_US",
          site_name: "GoRight.io",
        }}
      />
      <div className="mt-48 text-center">
        <Text
          as="h1"
          variant="6Xl"
          className="max-w-4xl mx-auto mt-4 animate-fadein animate-reveal"
        >
          We team up with designers and developers to build and scale{"\n"}
          <Text as="span" variant="6Xl" highlight="yellow-100">
            design systems
          </Text>
          .
        </Text>
        <CtaLink
          href="/hands-on-workshop"
          as={Link}
          className="mt-16 animate-fadeindelay"
        >
          Check our workshop
        </CtaLink>
      </div>
    </>
  )
}
