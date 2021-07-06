import { useState } from "react";
// import Nav from "@components/nav";
import Link from "next/link";
import { Nav, Button, Logo } from "@goright/design-system";
import { useRouter } from "next/router";
const navItems = [
  {
    name: "Workshop",
    href: "/hands-on-workshop",
  },
  // {
  //   name: "Services",
  //   href: "/services",
  // },
  {
    name: "About us",
    href: "/about",
  },
];
export default function Header() {
  const { asPath  } = useRouter();
  // In Next.js we cannot just pass a link, because it's not picking classes. See: https://github.com/vercel/next.js/issues/272
  const linkComponent = ({ className, children, ...props }) => (
    <Link {...props}>
      <a className={className}>{children}</a>
    </Link>
  );
  return (
    <header className="flex items-center w-full px-10 pt-8 mx-auto">
      <Link href="/">
        <a>
          <Logo className="mr-auto" />
        </a>
      </Link>
      <Nav
        items={navItems}
        linkComponent={linkComponent}
        className="w-5/12 mx-auto"
        currentPath={asPath}
      />
      <Button
        size="small"
        label="Let's&nbsp;talk"
        as="a"
        href="mailto:hello@goright.io"
        target="_blank"
        rel="noopener"
      />
    </header>
  );
}
