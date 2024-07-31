import Layout from '../../components/layout';
import Section from './section';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        {/* section 1 */}
        <Section>
          <div className="flex justify-between items-center gap-[30px]">
            <div className="flex flex-col space-y-6">
              <h1 className="text-5xl font-mont font-semibold tracking-widest">
                META RECORD <br /> LABEl
              </h1>
              <span className="max-w-[360px] font-mont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-[200px] h-[300px] bg-neutral-900"></div>
              <div className="w-[400px] h-[500px] bg-neutral-900"></div>
              <div className="w-[200px] h-[300px] bg-neutral-900"></div>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Home;
