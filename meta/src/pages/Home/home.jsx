import Layout from '../../components/layout';
import Section from './section';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        {/* section 1 */}
        <Section>
          <div className="flex items-center gap-[30px]">
            <div className="flex flex-col space-y-6">
              <h1 className="font-">META RECORD LABEl</h1>
            </div>
            <div></div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Home;
