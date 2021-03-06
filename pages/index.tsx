import Image from 'next/image';

import Layout from '../components/Layout';
import Showcase from '../components/index/Showcase';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <Layout title="Iris Designs | Official Website">
      {/* seo */}
      <NextSeo
        title="Iris Designs | Official Website"
        description="The production team for your perfect business needs."
        openGraph={{
          url: 'https://irisdesigns.cf',
          title: 'Iris Designs | Official Website',
          description:
            'Official website for Iris Designs. The production team for your perfect business needs.'
        }}
      />

      {/* showcase */}
      <Showcase />

      <hr />

      <div className="w-5/6 mx-auto py-24">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 dark:text-gray-100 underline">
          We believe that a good design should be...
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-4/5 lg:w-3/4 py-8">
          <div className="pr-0 md:pr-2 lg:pr-4 pl-4 lg:pl-8 border-l-12">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-grad-1">
              Stylish
            </h3>
            <p className="text-2xl md:text-3xl lg:text-4xl mt-2 text-gray-700 dark:text-gray-300">
              fashionably elegant and sophisticated
            </p>
          </div>
          <div className="mt-4 xs:w-3/4 mx-auto md:w-full md:mt-0">
            <Image alt="Stylish Design" src="/showcase/stylish.svg" height={400} width={400} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-4/5 lg:w-3/4 py-8 ml-auto">
          <div className="pr-0 md:pr-2 lg:pr-4 pl-4 lg:pl-8 border-l-12">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-grad-1">
              Modern
            </h3>
            <p className="text-2xl md:text-3xl lg:text-4xl mt-2 text-gray-700 dark:text-gray-300">
              adheres to the design trends of today
            </p>
          </div>
          <div className="mt-4 xs:w-3/4 mx-auto md:w-full md:mt-0">
            <Image alt="Modern Design" src="/showcase/modern.svg" height="400" width="400" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-4/5 lg:w-3/4 py-8">
          <div className="pr-0 md:pr-2 lg:pr-4 pl-4 lg:pl-8 border-l-12">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-grad-1">
              Minimal
            </h3>
            <p className="text-2xl md:text-3xl lg:text-4xl mt-2 text-gray-700 dark:text-gray-300">
              focuses on the details not on the strokes
            </p>
          </div>
          <div className="mt-4 xs:w-3/4 mx-auto md:w-full md:mt-0">
            <Image alt="Minimal Design" src="/showcase/minimal.svg" height="400" width="400" />
          </div>
        </div>
      </div>

      <CTA text="Do you want to have a stylish, modern and minimal design for your business?" />

      <Footer />
    </Layout>
  );
};

export default Home;
