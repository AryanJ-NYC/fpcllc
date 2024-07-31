import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Mail, Phone } from 'lucide-react';
import portugalLandscapeImage from '../../public/portugal-landscape.webp';
import { InquiryForm } from './InquiryForm';

export default function Home() {
  return (
    <main className="min-h-full">
      <HomeSection className="bg-blue-50 flex flex-col-reverse md:flex-row relative lg:pr-0 lg:pl-32 xl:pl-96 2xl:h-[80vh]">
        <div className="flex flex-col md:absolute md:top-1/4 md:left-4 lg:left-16 xl:left-32 gap-y-6 py-10 px-16 md:py-12 md:px-8 bg-blue-950 items-center">
          <p className="font-serif text-blue-100 text-2xl md:max-w-96">
            Welcome to First Point Consulting, LLC
          </p>
          <p className="text-blue-300 md:max-w-96">
            With a focus on Portugal, we empower individuals to embrace self-sovereignty and achieve
            multiple residencies abroad. In a rapidly changing world, the ability to navigate
            international landscapes with confidence and independence is more crucial than ever. We
            are dedicated to providing you with the tools, resources, and guidance needed to live a
            life of freedom and fulfillment across borders. We specialize in establishing residency
            in Portugal, one of Europe&apos;s most attractive destinations for expatriates and
            digital nomads.
          </p>
        </div>
        <Image
          alt="Portugal landscape"
          className="object-cover w-full"
          placeholder="blur"
          src={portugalLandscapeImage}
        />
      </HomeSection>
    </main>
  );
}

const HomeSection = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) => <section {...props} className={twMerge(props.className)} />;
