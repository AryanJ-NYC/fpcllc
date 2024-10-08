import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { InquiryForm } from './InquiryForm';

export const ContactUs = () => {
  return (
    <div
      className="grid grid-cols-5 bg-blue-100 px-8 md:px-16 lg:px-16 xl:px-24 py-16 gap-y-8 gap-x-16"
      id="contact-us"
    >
      <div className="flex flex-col gap-y-1 col-span-5">
        <h2 className="font-serif text-3xl text-blue-900">Contact Us Today</h2>
        <p className="text-blue-800 text-sm">
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
        <div>
          <MapPin size={32} />
          <p className="font-bold">Mail</p>
          <p>PO Box 1281</p>
          <p>Manorville, NY 11949</p>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
};
