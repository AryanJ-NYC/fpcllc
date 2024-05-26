import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import portugalLandscapeImage from '../../public/portugal-landscape.webp';

export default function Home() {
  return (
    <main className="min-h-full">
      <HomeSection className="bg-cyan-50 flex flex-col-reverse md:flex-row relative lg:pr-0 lg:pl-32 xl:pl-96">
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
          src={portugalLandscapeImage}
        />
      </HomeSection>
      <HomeSection
        className="grid grid-cols-5 bg-blue-50 px-8 lg:px-16 xl:px-24 py-16 gap-y-8"
        id="contact-us"
      >
        <div className="flex flex-col gap-y-1 col-span-5">
          <h2 className="font-serif text-2xl text-slate-950">Contact Us Today</h2>
          <p className="text-blue-950">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <form className="flex flex-col gap-y-12 col-span-5 lg:col-span-3 xl:col-span-2">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-sm md:text-base">
            <div className="flex flex-col gap-y-6">
              <InputLabel>
                Your Name
                <Input />
              </InputLabel>
              <InputLabel>
                Your Phone Number
                <Input type="tel" />
              </InputLabel>
              <InputLabel>
                Your Email Address
                <Input type="email" />
              </InputLabel>
            </div>
            <InputLabel>
              Anything Else You&apos;d Like to Tell Us
              <TextArea />
            </InputLabel>
          </div>
          <button
            className="bg-anzac-400 w-full px-16 py-4 rounded-sm font-serif text-xl font-medium tracking-widest self-end"
            type="submit"
          >
            Get in Touch
          </button>
        </form>

        <div>
          <p>CONTACT INFO HERE</p>
        </div>
      </HomeSection>
    </main>
  );
}

const HomeSection = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) => <section {...props} className={twMerge(props.className)} />;

const InputLabel = (
  props: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
) => <label {...props} className={twMerge('flex flex-col gap-y-0.5', props.className)} />;

const Input = (
  props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => (
  <input
    {...props}
    className={twMerge(
      'border border-slate-500 focus:border-slate-800 rounded-sm py-1 px-2',
      props.className
    )}
  />
);

const TextArea = (
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) => (
  <textarea
    {...props}
    className={twMerge(
      'border border-slate-500 focus:border-slate-800 rounded-sm h-36 p-2',
      props.className
    )}
  />
);
