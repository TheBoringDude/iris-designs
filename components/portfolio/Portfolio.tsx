import { useState } from 'react';
import Image from 'next/image';
import FsLightbox from 'fslightbox-react';

import { projects } from '../../data/projects';

const MainPortfolio = () => {
  const [imageToggle, setToggleImage] = useState(false);
  const [sources, setSources] = useState([]);
  const [srcKey, setSrcKey] = useState('');

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="w-full h-full">
            <div className="group relative">
              <div className="absolute z-40 w-full bottom-0 hidden group-hover:block">
                <div className="bg-grad-1 py-4 px-6 text-white relative w-full">
                  <p className="text-lg flex items-center justify-center">
                    [{project.design}]{' '}
                    <span className="font-bold text-2xl ml-2">{project.name}</span>
                  </p>
                </div>
              </div>
              <button
                title="View project image"
                onClick={() => {
                  setSources(
                    project.images.map((image) => {
                      return `/projects/${project.design}/${image}`;
                    })
                  );
                  setSrcKey(project.name);
                  setToggleImage(!imageToggle);
                }}
              >
                <Image
                  src={`/projects/${project.design}/${project.image}`}
                  height="500"
                  width="500"
                  objectFit="cover"
                  className="hover:scale-110 transform duration-500 z-0 cursor-pointer"
                  alt={`Iris Designs - ${project.name}`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <FsLightbox toggler={imageToggle} sources={sources} key={srcKey} type="image" />
    </div>
  );
};

export default MainPortfolio;
