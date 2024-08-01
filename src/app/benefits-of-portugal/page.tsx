import Image from 'next/image';
import React, { ReactNode } from 'react';
import { PageSection } from '../PageSection';
import { PageSplashHeader } from '../PageSplashHeader';
import marginalPrediosImg from '../../../public/marginal-predios.webp';
import praiaDaBordeiraImg from '../../../public/praia-da-bordeira-algarve-portugal.webp';
import lisbonCitySkylineImg from '../../../public/lisbon-portugal-city-skyline.webp';
import {
  Award,
  Castle,
  Flower2,
  Grape,
  PiggyBank,
  Plane,
  PlugZap,
  Shield,
  Sun,
  Utensils,
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const BenefitsOfPortugal = () => {
  return (
    <div className="flex flex-col">
      <PageSplashHeader alt="Marginal Predios" src={marginalPrediosImg}>
        Benefits of Portugal
      </PageSplashHeader>
      <PageSection className="px-0 grid-cols-1 xl:grid-cols-2 items-center">
        <InfoBulletsContainer>
          <InfoBullet
            icon={<Award />}
            title="High Quality of Life"
            info="Portugal offers a high standard of living with excellent healthcare, education, and
            infrastructure."
          />
          <InfoBullet
            icon={<Sun />}
            title="Beautiful Climate"
            info="Enjoy mild winters and warm summers, with over 300 days of
            sunshine a year with various ranges of climates (depending on where you decide to
            settle)"
          />
          <InfoBullet
            icon={<Castle />}
            title="Rich Culture and History"
            info="Portugal is home to historic cities, stunning architecture,
            and a vibrant cultural scene. Portugal contains the most castles & monestatries per
            square mile than any other country on earth."
          />
          <InfoBullet
            icon={<Grape />}
            title="Thriving Agriculture"
            info="Portugal has a rich agricultural tradition, offering fresh and
            locally produced fruits, vegetables, olive oil, and wines. This provides a sustainable
            and healthy lifestyle with access to high-quality, organic produce."
          />
          <InfoBullet
            icon={<PlugZap />}
            title="Advanced Infrastructure"
            info="Portugal has a modern and reliable electrical grid, with
            significant investments in renewable energy sources like wind and solar power. This
            ensures consistent and eco-friendly power supply, contributing to a sustainable living
            environment."
          />
        </InfoBulletsContainer>
        <Image
          alt="Praia da Bordeira"
          className="object-cover w-full md:rounded-md max-h-96 order-first xl:order-last"
          placeholder="blur"
          src={praiaDaBordeiraImg}
        />
      </PageSection>
      <PageSection className="px-0 grid-cols-1 xl:grid-cols-2 items-center">
        <Image
          alt="Lisbon Skyline"
          className="object-cover w-full md:rounded-md"
          placeholder="blur"
          src={lisbonCitySkylineImg}
        />
        <InfoBulletsContainer>
          <InfoBullet
            icon={<PiggyBank />}
            title="Affordable Living"
            info="Compared to other Western European countries, Portugal offers a lower
            cost of living, making it a great value for expatriates."
          />
          <InfoBullet
            icon={<Shield />}
            title="Safety and Stability"
            info="Portugal is known for its safety, political stability, and
            friendly locals, making it an ideal place to live and raise a family."
          />

          <InfoBullet
            icon={<Utensils />}
            title="Gastronomy"
            info="Savor the renowned Portuguese cuisine, including fresh seafood, world-class
            wines, and traditional pastries."
          />
          <InfoBullet
            icon={<Flower2 />}
            title="Natural Beauty"
            info="From the scenic beaches of Algarve to the lush landscapes of the Douro
            Valley, Portugal boasts diverse and breathtaking natural beauty."
          />
          <InfoBullet
            icon={<Plane />}
            title="Easy Travel"
            info="Portugal's strategic location and excellent transportation links make
            it easy to travel within Europe and beyond."
          />
        </InfoBulletsContainer>
      </PageSection>
    </div>
  );
};

const InfoBulletsContainer = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
  return (
    <div
      {...props}
      className={twMerge(
        'grid grid-cols-1 lg:grid-cols-2 gap-8 justify-evenly order-2 lg:order-none px-2 lg:px-0',
        props.className
      )}
    />
  );
};

const InfoBullet = ({ icon, info, title }: { icon: ReactNode; info: string; title: string }) => {
  return (
    <div className="flex flex-col border border-green-900/40 p-4 rounded gap-y-1 text-green-950">
      <div className="flex gap-x-2">
        {icon}
        <p className="font-bold tracking-wide text-lg">{title}</p>
      </div>
      <p>{info}</p>
    </div>
  );
};

export default BenefitsOfPortugal;
