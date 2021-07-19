import { useState } from "react";
import Link from "@components/link";
import { Nav, Button, Logo } from "@goright/design-system";
import { useRouter } from "next/router";

export default function Header({ navItems }) {
  const { asPath } = useRouter();

  return (
    <header className="relative flex items-center w-full px-10 pt-8 mx-auto">
      <Link href="https://goright.io">
        <Logo className="mr-auto" />
      </Link>
      <Nav
        items={navItems}
        linkComponent={Link}
        className="w-5/12 ml-auto md:mx-auto"
        currentPath={asPath}
      />
      <Button
        className="hidden md:block"
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
