import Image from 'next/image';
import React from 'react';
import whatWeOfferImg from '../../../public/what-we-offer.webp';

export const OurServices = () => {
  return (
    <main className="min-h-full">
      <div className="flex relative">
        <Image
          alt="Rossio Square"
          className="object-cover max-h-96 w-full"
          placeholder="blur"
          src={whatWeOfferImg}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl font-serif tracking-widest text-blue-50 text-center w-full">
          What We Offer
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-2 md:px-12">
        <Card>
          <H2>Residency Planning and Consultation</H2>
          <div className="flex flex-col gap-y-4">
            <p>
              <span className="font-medium">Portugal Residency Expertise:</span> Tailored advice on
              the best residency options in Portugal, including the popular Golden Visa program and
              other visa options for retirees and remote workers.
            </p>
            <p>
              Comprehensive guidance on the legal, financial, and cultural aspects of establishing
              residency in Portugal.
            </p>
          </div>
        </Card>
        <Card>
          <H2>Legal and Financial Services</H2>
          <div className="flex flex-col gap-y-4">
            <p>
              Expert assistance with visa applications, tax planning, and legal requirements
              specific to Portugal, ensuring smooth transitions.
            </p>
            <p>
              Strategies to optimize your financial sovereignty and protect your assets
              internationally.
            </p>
          </div>
        </Card>
        <Card>
          <H2>Cultural Integration and Lifestyle Support</H2>
          <div className="flex flex-col gap-y-4">
            <p>
              Real estate contacts for various locations in mainland Portugal including Madeira and
              the Azores.
            </p>
            <p>
              Resources and support to help you integrate seamlessly into Portuguese communities.
            </p>
            <p>
              Connections to local networks and communities to foster a sense of belonging and
              purpose in Portugal.
            </p>
          </div>
        </Card>
        <Card>
          <H2>Ongoing Support and Community</H2>
          <div className="flex flex-col gap-y-4">
            <p>
              Continuous access to a global network of like-minded individuals who share your vision
              for self-sovereignty.
            </p>
            <p>
              Regular updates and insights on living in Portugal, residency opportunities, and
              lifestyle tips.
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
};

const Card = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
  return <div className="border shadow-lg rounded-lg p-4" {...props}></div>;
};

const H2 = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
) => {
  return <h2 className="text-2xl font-serif text-blue-950 mb-2" {...props} />;
};

export default OurServices;
