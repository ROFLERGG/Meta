import Layout from '../../components/layout';
import Section from './section';

const Home = () => {
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
                <div className="w-1 min-h-full bg-green-500"></div>
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
        <div className="py-[60px] overflow-hidden select-none">
          <div className="flex items-center gap-[120px] whitespace-nowrap">
            <div className="flex justify-between items-center gap-[120px] animate-rightToLeft font-mont">
              <span className="text-7xl">ARTISTS</span>
              <span className="text-7xl">ARTISTS</span>
              <span className="text-7xl">ARTISTS</span>
              <span className="text-7xl">ARTISTS</span>
            </div>
            <div className="flex justify-between items-center gap-[120px] animate-rightToLeft font-mont">
              <span className="text-7xl">ARTISTS</span>
              <span className="text-7xl">ARTISTS</span>
              <span className="text-7xl">ARTISTS</span>
              <span className="text-7xl">ARTISTS</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
