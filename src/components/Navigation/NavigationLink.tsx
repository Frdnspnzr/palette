"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface NavigationLinkProps extends PropsWithChildren {
  href: string;
}

export default function NavigationLink({
  href,
  children,
}: NavigationLinkProps) {
  const pathname = usePathname();
  const active = pathname.startsWith(href);
  return (
    <Link href={href} className={classNames("button", { ["active"]: active })}>
      {children}
    </Link>
  );
}
