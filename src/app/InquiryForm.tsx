'use client';

import { twMerge } from 'tailwind-merge';
import { sendFormEmail } from './sendFormEmail';
import toast from 'react-hot-toast';
import { useRef } from 'react';

export const InquiryForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    await sendFormEmail(formData);
    toast.success("Thank you for reaching out! We'll be in touch soon");
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <form
      action={handleSubmit}
      className="flex flex-col gap-y-12 col-span-5 lg:col-span-3"
      ref={formRef}
    >
      <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-sm md:text-base">
        <div className="flex flex-col gap-y-6">
          <InputLabel>
            Your Name
            <Input name="name" />
          </InputLabel>
          <InputLabel>
            Your Phone Number
            <Input name="phone" type="tel" />
          </InputLabel>
          <InputLabel>
            Your Email Address
            <Input name="email" type="email" />
          </InputLabel>
        </div>
        <InputLabel>
          Anything Else You&apos;d Like to Tell Us
          <TextArea name="message" />
        </InputLabel>
      </div>
      <button
        className="bg-anzac-400 w-full px-16 py-4 rounded-sm font-serif text-xl font-medium tracking-widest self-end"
        type="submit"
      >
        Get in Touch
      </button>
    </form>
  );
};

const InputLabel = (
  props: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
) => <label {...props} className={twMerge('flex flex-col gap-y-0.5', props.className)} />;

const Input = (
  props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => (
  <input
    {...props}
    className={twMerge(
      'border border-slate-300 focus:border-slate-500 rounded-sm py-1 px-2',
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
      'border border-slate-300 focus:border-slate-500 rounded-sm h-36 p-2',
      props.className
    )}
  />
);
