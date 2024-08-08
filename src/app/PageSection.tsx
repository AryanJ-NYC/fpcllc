import React from 'react';
import { twMerge } from 'tailwind-merge';

export const PageSection = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
  return (
    <div
      {...props}
      className={twMerge(
        'odd:bg-red-50 even:bg-green-50 grid gap-x-12 gap-y-4 px-8 lg:px-16 xl:px-24 py-16',
        props.className
      )}
    />
  );
};
