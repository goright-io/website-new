import { Text, CtaLink } from "@goright/design-system";
export default function Footer() {
  return (
    <footer className="bg-light-on-background-900 text-light-on-background-100">
      <div className="container px-8 py-2 mx-auto">
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex py-2 md:flex-row md:mr-8">
            ©{"\u00A0"}
            <a
              href="https://goright.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:no-underline "
            >
              GoRight
            </a>
            {"\u00A0"}2021
          </div>
          <div className="flex flex-col items-baseline justify-center flex-grow md:flex-row">
            <Text variant="lg">
              Upcoming workshop: 1{"\u00A0"}&{"\u00A0"}2{"\u00A0"}SEPTEMBER,
              {"\u00A0"}
              11-15{"\u00A0"}EEST
            </Text>
            <CtaLink
              className="md:ml-8 text-light-on-background-50 hover:!text-light-on-background-50 whitespace-nowrap"
              target="_blank"
              rel="noopener"
              href="https://www.eventbrite.fi/e/hands-on-with-design-systems-september-tickets-154073882129"
            >
              Get early-bird tickets
            </CtaLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
