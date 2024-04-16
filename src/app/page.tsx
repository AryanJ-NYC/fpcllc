import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import portugalLandscapeImage from '/public/portugal-landscape.webp';

export default function Home() {
  return (
    <main className="min-h-full">
      <HomeSection className="bg-anzac-50 flex flex-col-reverse md:flex-row relative">
        <div className="flex flex-col md:absolute md:top-1/3 md:left-4 lg:left-16 xl:left-32 md:w-96 gap-y-2 py-16 px-8 bg-blue-950">
          <p className="font-serif text-blue-100 text-2xl">
            The Global Leader in Residence and Citizenship by Investment
          </p>
          <p className="text-blue-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus voluptatem
            numquam consequatur asperiores recusandae neque, totam impedit reiciendis ea doloribus
            placeat nihil porro esse aspernatur, qui nam, ad tenetur repellat.
          </p>
          <button className="mx-auto mt-16 text-anzac-950 bg-anzac-400 px-16 py-4 rounded-sm font-serif text-xl font-medium tracking-widest">
            CONTACT US
          </button>
        </div>
        <Image
          alt="Portugal landscape"
          className="object-cover h-3/4 w-full"
          src={portugalLandscapeImage}
        />
      </HomeSection>
      <HomeSection className="bg-blue-50">I AM FORM</HomeSection>
    </main>
  );
}

const HomeSection = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) => (
  <section {...props} className={twMerge('md:pl-8 lg:pr-3 lg:pl-32 xl:pl-96', props.className)} />
);
