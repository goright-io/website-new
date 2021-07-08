import Head from "next/head";
import { LayoutDefault, LayoutWorkshop } from "@components/layout";
import "@goright/design-system/dist/styles.css";
import "tailwindcss/tailwind.css";

const BASE_URL = "https://goright.io";

function MyApp({ Component, pageProps }) {
  const canonical =
    pageProps && pageProps.canonical ? pageProps.canonical : null;

  const LayoutComponent = canonical ? LayoutWorkshop : LayoutDefault;

  return (
    <LayoutComponent>
      <Head>
        <title>Hands-on with design systems workshop</title>
        <meta
          name="Description"
          content="This workshop helps you learn and practice design systems working in a team. You can join as a designer or developer."
        />
        {canonical && <link rel="canonical" href={canonical} />}
        {/* OG tags */}
        <meta
          property="og:title"
          content="Hands-on with Design Systems: 2-day workshop with Figma & React"
        />
        <meta property="og:url" content="https://hands-on-workshop.varya.me/" />
        <meta
          property="og:image"
          content="https://hands-on-workshop.varya.me/poster.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="This workshop helps you learn and practice design systems working in a team. You can join as a designer or developer."
        />
        <meta property="og:locale" content="en_GB" />
        <meta
          name="description"
          content="Hands-on with Design Systems: 2-day workshop with Figma & React. This workshop helps you learn and practice design systems working in a team. You can join as a designer or developer."
        />
        <meta
          name="keywords"
          content="design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <Component {...pageProps} />
    </LayoutComponent>
  );
}

MyApp.getInitialProps = async ({ ctx: { pathname } }) => {
  const exportedSubpath = process.env.GORIGHT_EXPORT;

  if (!exportedSubpath) return {};

  let pageProps = { canonical: BASE_URL + pathname };
  return { pageProps };
};

export default MyApp;
