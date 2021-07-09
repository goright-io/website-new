import Head from "next/head";
import { LayoutDefault, LayoutWorkshop } from "@components/layout";
import "@goright/design-system/dist/styles.css";
import "tailwindcss/tailwind.css";

const BASE_URL = "https://goright.io";

function MyApp({ Component, pageProps }) {
  const canonical =
    pageProps && pageProps.canonical ? pageProps.canonical : null;
  const { baseUrl } = { pageProps };
  const LayoutComponent = canonical ? LayoutWorkshop : LayoutDefault;

  return (
    <LayoutComponent>
      <Head>
        <title>GoRight</title>
        <meta name="Description" content="Design system consulting services" />
        {canonical && <link rel="canonical" href={canonical} />}
        {/* OG tags */}
        <meta
          property="og:title"
          content="GoRight - design systems consulting and workshops"
        />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content={baseUrl + "/logo.png"} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Design systems consulting services and workshops"
        />
        <meta property="og:locale" content="en_GB" />
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

  if (!exportedSubpath) return { baseUrl: BASE_URL };

  let pageProps = { canonical: BASE_URL + pathname, baseUrl: BASE_URL };
  return { pageProps };
};

export default MyApp;
