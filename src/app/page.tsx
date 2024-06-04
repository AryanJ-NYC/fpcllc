import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Mail, Phone } from 'lucide-react';
import portugalLandscapeImage from '../../public/portugal-landscape.webp';
import { InquiryForm } from './InquiryForm';

export default function Home() {
  return (
    <main className="min-h-full">
      <HomeSection className="bg-blue-50 flex flex-col-reverse md:flex-row relative lg:pr-0 lg:pl-32 xl:pl-96">
        <div className="flex flex-col md:absolute md:top-1/4 md:left-4 lg:left-16 xl:left-32 gap-y-6 py-12 px-16 md:py-16 md:px-8 bg-blue-950 items-center">
          <p className="font-serif text-blue-100 text-2xl md:max-w-96">
            The Global Leader in Residence and Citizenship by Investment
          </p>
          <p className="text-blue-300 md:max-w-96">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus voluptatem
            numquam consequatur asperiores recusandae neque, totam impedit reiciendis ea doloribus
            placeat nihil porro esse aspernatur, qui nam, ad tenetur repellat.
          </p>
          <a
            className="mx-auto mt-8 text-anzac-950 bg-anzac-400 px-16 py-4 rounded-sm font-serif text-xl font-medium tracking-widest"
            href="#contact-us"
          >
            CONTACT US
          </a>
        </div>
        <Image
          alt="Portugal landscape"
          className="object-cover h-3/4 w-full"
          placeholder="blur"
          src={portugalLandscapeImage}
        />
      </HomeSection>
      <HomeSection
        className="grid grid-cols-5 bg-blue-100 px-8 lg:px-16 xl:px-24 py-16 gap-y-8 gap-x-16"
        id="contact-us"
      >
        <div className="flex flex-col gap-y-1 col-span-5">
          <h2 className="font-serif text-3xl text-blue-950">Contact Us Today</h2>
          <p className="text-blue-900 text-sm">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <InquiryForm />

        <div className="flex flex-col gap-y-8 lg:gap-y-16 col-span-5 lg:col-span-2 text-blue-800">
          <a className="flex flex-col" href="mailto:FirstPointConsulting@protonmail.com">
            <Mail size={32} />
            <p className="font-bold">Email</p>
            <p>FirstPointConsulting@protonmail.com</p>
          </a>
          <a href="tel:5555555555">
            <Phone size={32} />
            <p className="font-bold">Phone</p>
            <p>(555) 555-5555</p>
          </a>
        </div>
      </HomeSection>
    </main>
  );
}

const HomeSection = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) => <section {...props} className={twMerge(props.className)} />;
