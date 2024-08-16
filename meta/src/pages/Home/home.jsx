import { useState } from 'react';
import Layout from '../../components/layout';
import Section from './section';
import Tabulation from './tabulation';

const Home = () => {
  const artists = [
    { id: 1, name: 'Mark Popson', image: 'https://picsum.photos/240' },
    { id: 2, name: 'Pete Bentz', image: 'https://picsum.photos/240' },
    { id: 3, name: 'Daniela Youth', image: 'https://picsum.photos/240' },
    { id: 4, name: 'Roman Gore', image: 'https://picsum.photos/240' },
    { id: 5, name: 'Tonya', image: 'https://picsum.photos/240' },
    { id: 6, name: 'Ivor', image: 'https://picsum.photos/240' },
    { id: 7, name: 'Somae Petit', image: 'https://picsum.photos/240' },
  ];
  return (
    <Layout>
      <div className="flex flex-col">
        {/* section 1 */}
        <Section>
          <div className="flex justify-between items-center gap-[30px] max-md:flex-col-reverse">
            {/* left side */}
            <div className="flex flex-col max-md:text-center max-md:items-center space-y-12">
              <div className="flex flex-col space-y-6 max-md:items-center">
                <h1 className="font-mont leading-tight font-semibold tracking-widest whitespace-nowrap">
                  META RECORD <br /> LABEl
                </h1>
                <span className="paragraph-md max-w-[360px] font-mont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</span>
              </div>
              <div className="flex">
                <button className="px-6 py-4 leading-none bg-green-500 text-neutral-950">Learn more</button>
              </div>
            </div>
            {/* cards image */}
            <div className="flex items-center space-x-6">
              <div>
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div>
                <img src="https://picsum.photos/400/500" alt="" />
              </div>
              <div>
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
            </div>
          </div>
        </Section>
        {/* section 2 */}
        <Section>
          <div className="flex justify-between items-start gap-[30px] max-md:flex-col">
            {/* left side */}
            <div className="flex flex-col space-y-6">
              <h2 className="font-semibold leading-tight tracking-widest whitespace-nowrap">
                WAVE NFT <br />{' '}
                <span className="text-neutral-400">
                  COLLECTION OF <br /> 777
                </span>
              </h2>
              <div>
                <img src="https://picsum.photos/300/400" alt="" />
              </div>
            </div>
            {/* right side */}
            <div className="flex flex-col space-y-12 max-w-[600px]">
              {/* top */}
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
              {/* button */}
              <div>
                <button className="border-2 px-8 py-2 border-green-500">Get one on OpenSea</button>
              </div>
            </div>
          </div>
        </Section>
        {/* artists */}
        <div className="py-[60px] w-full relative flex overflow-hidden select-none whitespace-nowrap">
          <div className="flex animate-rightToLeft">
            <span className="text-7xl px-[60px]">ARTISTS</span>
            <span className="text-7xl px-[60px]">ARTISTS</span>
            <span className="text-7xl px-[60px]">ARTISTS</span>
            <span className="text-7xl px-[60px]">ARTISTS</span>
            <span className="text-7xl px-[60px]">ARTISTS</span>
            <span className="text-7xl px-[60px]">ARTISTS</span>
            <span className="text-7xl px-[60px]">ARTISTS</span>
            <span className="text-7xl px-[60px]">ARTISTS</span>
          </div>
        </div>
        <Section>
          <div className="flex justify-center flex-wrap gap-[30px]">
            {artists.map((artist) => {
              return (
                <div className="flex flex-col items-center">
                  <div>
                    <img src={artist.image} alt={`artist` + artist.id} />
                  </div>
                  <div>
                    <span className="font-mono paragraph-md">{artist.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
        <Section>
          <div className="flex flex-col space-y-6">
            {/* header */}
            <div className="flex justify-center">
              <h2 className="font-semibold leading-tight tracking-widest whitespace-nowrap text-neutral-100">
                MRL.
                <span className="text-neutral-400">THE STORY.</span>
              </h2>
            </div>
            {/* content */}
            <Tabulation />
          </div>
        </Section>
        {/* image */}
        <div className="py-[60px]">
          <img width={1440} height={240} className="object-cover h-[240px] w-full max-md:h-[120px]" src="https://picsum.photos/1440/240" alt="img" />
        </div>
        <Section className={'relative'}>
          <div className="flex flex-col space-y-6">
            {/* header */}
            <div className="flex justify-center">
              <h2 className="font-semibold leading-tight tracking-widest whitespace-nowrap text-neutral-100">ROADMAP</h2>
            </div>
            {/* content */}
            <div className="flex justify-center z-10">
              <div className="flex flex-col">
                {/* card */}
                <div className="flex flex-col max-w-[540px] w-full bg-neutral-800 border border-green-500 divide-y divide-green-500">
                  {/* top */}
                  <div className="flex items-center space-x-3 p-4">
                    <h2 className="w-12 h-12 bg-green-500 flex justify-center items-center text-neutral-950">1</h2>
                    <div className="flex flex-col justify-center">
                      <p className="text-xs text-green-500">Phase 1 - completed</p>
                      <p className="text-lg uppercase">Spring 2022 - pre launch</p>
                    </div>
                  </div>
                  {/* bottom */}
                  <div className="flex justify-between items-center space-x-6 p-4">
                    <div className="flex flex-col space-y-6">
                      <ul className="list-disc list-inside text-sm">
                        <li>Website 1.2</li>
                        <li>Discord community promotion</li>
                        <li>MINTING WAVE NFTs</li>
                      </ul>
                      <p className="text-sm">WAVE NFTs will be 100% pre-minted and launched as an OpenOcean collection</p>
                    </div>
                    <img className="object-cover" width={128} height={128} src="https://picsum.photos/128" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* circles */}
          <div className="absolute left-0 top-0 flex justify-center items-center">
            <div className=" flex justify-center items-center w-[672px] h-[672px] border border-green-500 rounded-full border-opacity-25">
              <div className=" flex justify-center items-center w-[460px] h-[460px] border border-green-500 rounded-full border-opacity-40">
                <div className=" flex justify-center items-center w-[280px] h-[280px] border border-green-500 rounded-full border-opacity-65">
                  <div className=" flex justify-center items-center w-[160px] h-[160px] border border-green-500 rounded-full border-opacity-80">
                    <div className=" flex justify-center items-center w-[100px] h-[100px] border border-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Home;
