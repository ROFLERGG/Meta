import Layout from '../../components/layout';
import Section from './section';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        {/* section 1 */}
        <Section>
          <div className="flex justify-center items-center gap-[30px] max-lg:flex-col-reverse">
            {/* left side */}
            <div className="flex flex-col max-lg:text-center max-lg:items-center space-y-12">
              <div className="flex flex-col space-y-6 max-lg:items-center">
                <h1 className="text-5xl font-mont font-semibold tracking-widest whitespace-nowrap">
                  META RECORD <br /> LABEl
                </h1>
                <span className="max-w-[360px] font-mont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</span>
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
      </div>
    </Layout>
  );
};

export default Home;
