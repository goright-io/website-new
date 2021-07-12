import Head from "next/head";
import { LayoutDefault, LayoutWorkshop } from "@components/layout";
import "@goright/design-system/dist/styles.css";
import "tailwindcss/tailwind.css";
import { DefaultSeo } from "next-seo";
const BASE_URL = "https://goright.io";

function MyApp({ Component, baseUrl, canonical, ...pageProps }) {
  console.log("🚀 ~ file: _app.js ~ line 9 ~ MyApp ~ pageProps", pageProps);
  const LayoutComponent = canonical ? LayoutWorkshop : LayoutDefault;

  return (
    <LayoutComponent>
      <DefaultSeo
        title="GoRight - design systems consulting and workshops"
        description="Design systems consulting services and workshops"
        keywords="design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development"
        canonical={canonical}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: baseUrl,
          site_name: "GoRight.io",
          images: [
            {
              url: baseUrl + "/logo.png",
              width: 800,
              height: 600,
              alt: "GoRight logo",
            },
          ],
        }}
        twitter={{
          // handle: '@handle',
          // site: '@goright.io',
          cardType: "summary_large_image",
        }}
      />
      <Component canonical={canonical} baseUrl={baseUrl} {...pageProps} />
    </LayoutComponent>
  );
}

MyApp.getInitialProps = async ({ ctx: { pathname } }) => {
  const exportedSubpath = process.env.GORIGHT_EXPORT;

  let pageProps = { baseUrl: BASE_URL };
  if (!exportedSubpath) return pageProps;

  return { ...pageProps, canonical: BASE_URL + pathname };
};

export default MyApp;
