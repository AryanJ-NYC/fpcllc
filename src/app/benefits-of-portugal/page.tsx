import React from 'react';
import { PageSplashHeader } from '../PageSplashHeader';
import marginalPrediosImg from '../../../public/marginal-predios.webp';
import portoPortugalImg from '../../../public/porto-portugal.webp';
import praiaDaBordeiraImg from '../../../public/praia-da-bordeira-algarve-portugal.webp';
import lisbonCitySkylineImg from '../../../public/lisbon-portugal-city-skyline.webp';
import Image from 'next/image';

const BenefitsOfPortugal = () => {
  return (
    <main className="min-h-full">
      <PageSplashHeader alt="Marginal Predios" src={marginalPrediosImg}>
        Benefits of Portugal
      </PageSplashHeader>
      <Section>
        <InfoBulletsContainer>
          <p>
            High Quality of Life: Portugal offers a high standard of living with excellent
            healthcare, education, and infrastructure.
          </p>
          <p>
            Beautiful Climate: Enjoy mild winters and warm summers, with over 300 days of sunshine a
            year with various ranges of climates (depending on where you decide to settle)
          </p>
          <p>
            Rich Culture and History: Portugal is home to historic cities, stunning architecture,
            and a vibrant cultural scene. Portugal contains the most castles & monestatries per
            square mile than any other country on earth.{' '}
          </p>
          <p>
            Thriving Agriculture: Portugal has a rich agricultural tradition, offering fresh and
            locally produced fruits, vegetables, olive oil, and wines. This provides a sustainable
            and healthy lifestyle with access to high-quality, organic produce.
          </p>
          <p>
            Advanced Infrastructure: Portugal has a modern and reliable electrical grid, with
            significant investments in renewable energy sources like wind and solar power. This
            ensures consistent and eco-friendly power supply, contributing to a sustainable living
            environment.
          </p>
        </InfoBulletsContainer>
        <Image
          alt="Praia da Bordeira"
          className="w-full"
          placeholder="blur"
          src={praiaDaBordeiraImg}
        />
      </Section>
      <Section>
        <Image
          alt="Lisbon Skyline"
          className="w-full"
          placeholder="blur"
          src={lisbonCitySkylineImg}
        />
        <InfoBulletsContainer>
          <p>
            Affordable Living: Compared to other Western European countries, Portugal offers a lower
            cost of living, making it a great value for expatriates.
          </p>
          <p>
            Safety and Stability: Portugal is known for its safety, political stability, and
            friendly locals, making it an ideal place to live and raise a family.
          </p>
          <p>
            Gastronomy: Savor the renowned Portuguese cuisine, including fresh seafood, world-class
            wines, and traditional pastries.
          </p>
          <p>
            Natural Beauty: From the scenic beaches of Algarve to the lush landscapes of the Douro
            Valley, Portugal boasts diverse and breathtaking natural beauty.
          </p>
          <p>
            Easy Travel: Portugal&apos;s strategic location and excellent transportation links make
            it easy to travel within Europe and beyond.
          </p>
        </InfoBulletsContainer>
      </Section>
    </main>
  );
};

const InfoBulletsContainer = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
  return (
    <div
      className="flex flex-col justify-evenly gap-y-8 px-2 md:px-4 order-2 md:order-none"
      {...props}
    />
  );
};

const Section = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
  return (
    <div
      className="odd:bg-red-50 even:bg-green-50 flex flex-col md:flex-row gap-x-2 gap-y-4 py-4"
      {...props}
    />
  );
};

export default BenefitsOfPortugal;