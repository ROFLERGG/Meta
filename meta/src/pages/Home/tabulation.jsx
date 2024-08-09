import { useState } from 'react';
import clsx from 'clsx';

const Tabulation = () => {
  const [activeTab, setActiveTab] = useState('founders');

  return (
    <div className="flex items-start">
      {/* sidebar */}
      <div className="flex max-w-[300px] w-full flex-col justify-start items-start">
        <button onClick={() => setActiveTab('founders')} className={clsx('relative p-7 w-full text-start duration-150 ease-in-out', activeTab === 'founders' ? 'text-green-500' : '')}>
          <span className="relative z-10">Our founders</span>
          <div className={clsx('absolute right-0 top-0 h-full duration-150 bg-neutral-700 opacity-75', activeTab === 'founders' ? 'w-full' : 'w-0')}></div>
        </button>
        <button onClick={() => setActiveTab('partners')} className={clsx('relative p-7 w-full text-start duration-150 ease-in-out', activeTab === 'partners' ? 'text-green-500' : '')}>
          <span className="relative z-10">Partners</span>
          <div className={clsx('absolute right-0 top-0 h-full duration-150 bg-neutral-700 opacity-75', activeTab === 'partners' ? 'w-full' : 'w-0')}></div>
        </button>
        <button onClick={() => setActiveTab('future')} className={clsx('relative p-7 w-full text-start duration-150 ease-in-out', activeTab === 'future' ? 'text-green-500' : '')}>
          <span className="relative z-10">The future</span>
          <div className={clsx('absolute right-0 top-0 h-full duration-150 bg-neutral-700 opacity-75', activeTab === 'future' ? 'w-full' : 'w-0')}></div>
        </button>
      </div>
      {/* tab content */}
      <div className="flex-1 w-2/3 p-12 bg-neutral-700 bg-opacity-75">
        {activeTab === 'founders' && (
          <div className="flex items-start space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-6">
            <img src="https://picsum.photos/180/250" alt="img" />
            <div className="flex flex-col space-y-6">
              <div className="flex space-x-3">
                <div className="w-2 min-h-full bg-green-500"></div>
                <h3 className="text-green-500">META WAVE NFT is your pass to Meta Record Label ecosystem. It is your access to our industry experts, established artists, and partners.</h3>
              </div>
              {/* center */}
              <div className="paragraph-md font-mont flex flex-col space-y-6">
                <p>Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.</p>
                <p>Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.</p>
                <p>Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'partners' && (
          <div className="flex items-start space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-6">
            <img src="https://picsum.photos/180/250" alt="img" />
            <div className="flex flex-col space-y-6">
              <div className="flex space-x-3">
                <div className="w-2 min-h-full bg-green-500"></div>
                <h3 className="text-green-500">META WAVE NFT is your pass to Meta Record Label ecosystem. It is your access to our industry experts, established artists, and partners.</h3>
              </div>
              {/* center */}
              <div className="paragraph-md font-mont flex flex-col space-y-6">
                <p>Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.</p>
                <p>Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.</p>
                <p>Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit quos aspernatur quam, libero tempore facere iste esse tempora! Reiciendis.</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'future' && (
          <div className="flex items-start space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-6">
            <img src="https://picsum.photos/180/250" alt="img" />
            <div className="flex flex-col space-y-6">
              <div className="flex space-x-3">
                <div className="w-2 min-h-full bg-green-500"></div>
                <h3 className="text-green-500">META WAVE NFT is your pass to Meta Record Label ecosystem. It is your access to our industry experts, established artists, and partners.</h3>
              </div>
              {/* center */}
              <div className="paragraph-md font-mont flex flex-col space-y-6">
                <p>Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.</p>
                <p>Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.</p>
                <p>Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ullam?</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabulation;
