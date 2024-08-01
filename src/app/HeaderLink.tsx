'use client';

import clsx from 'clsx/lite';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const HeaderLink = ({ children, href }: React.ComponentProps<typeof Link>) => {
  const pathname = usePathname();

  return (
    <Link
      className={clsx('px-4 py-8', href === pathname && 'underline underline-offset-4')}
      href={href}
    >
      {children}
    </Link>
  );
};
