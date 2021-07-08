import { Text, Emoji, Card, Icon, CtaLink } from "@goright/design-system";
import Link from "@components/link";

export default function IndexPage() {
  return (
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
  );
}
