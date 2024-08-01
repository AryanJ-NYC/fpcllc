import Image from 'next/image';
import React, { PropsWithChildren } from 'react';

export const PageSplashHeader = ({ alt, children, src }: PropsWithChildren<Props>) => {
  return (
    <div className="flex relative">
      <Image alt={alt} className="object-cover max-h-96 w-full" placeholder="blur" src={src} />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl font-serif tracking-wider text-blue-50 text-center w-full">
        {children}
      </h1>
    </div>
  );
};

type Props = Pick<React.ComponentProps<typeof Image>, 'alt' | 'src'>;
