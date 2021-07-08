import { useState } from "react";
import Link from "@components/link";
import { Nav, Button, Logo } from "@goright/design-system";
import { useRouter } from "next/router";

export default function Header({ navItems }) {
  const { asPath } = useRouter();

  return (
    <header className="flex items-center w-full px-10 pt-8 mx-auto">
      <Link href="https://goright.io">
        <Logo className="mr-auto" />
      </Link>
      <Nav
        items={navItems}
        linkComponent={Link}
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
