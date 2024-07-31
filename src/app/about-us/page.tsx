import React from 'react';
import { PageSplashHeader } from '../PageSplashHeader';
import { PageSection } from '../PageSection';
import penaPalace from '../../../public/pena_palace.webp';

const AboutUs = () => {
  return (
    <div>
      <PageSplashHeader alt="Pena Palace" src={penaPalace}>
        About Us
      </PageSplashHeader>
      <PageSection className="grid grid-cols-1 md:grid-cols-2 items-center">
        <h2 className="font-serif text-3xl text-blue-950">Why Choose First Point Consulting?</h2>
        <div className="flex flex-col gap-y-4">
          <p>
            Professionalism: Our team on the ground in Lisbon is attentive and responsive. We pride
            ourselves in providing the service we would want for ourselves to each of our clients.
          </p>
          <p>
            Expertise in Portugal: Our team of professionals has extensive experience in Portuguese
            law, finance, and cultural integration, ensuring you receive the highest quality advice
            and support tailored to Portugal.
          </p>
          <p>
            Personalized Approach: We understand that each individual&apos;s journey is unique, and
            we tailor our services to meet your specific needs and aspirations in Portugal.
          </p>
        </div>
      </PageSection>
      <PageSection className="grid grid-cols-1 md:grid-cols-2 items-center">
        <h2 className="font-serif text-3xl text-blue-950">
          Discover Portugal with First Point Consulting
        </h2>
        <div className="flex flex-col gap-y-4">
          <p>
            Portugal offers an unparalleled quality of life with its stunning landscapes, vibrant
            culture, and welcoming communities. Whether you are looking to retire, work remotely, or
            invest in European real estate, Portugal provides a range of opportunities for a
            fulfilling life abroad.
          </p>
          <p>
            Join us at First Point Consulting and embark on a journey towards a life of true
            independence and global freedom in Portugal. Let us be your trusted partner in achieving
            residency in this beautiful country and living the life you’ve always envisioned.
          </p>
        </div>
      </PageSection>
    </div>
  );
};

export default AboutUs;
