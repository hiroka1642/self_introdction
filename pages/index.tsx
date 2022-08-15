import { Container } from "../src/components/Container";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Layout } from "../src/components/Layout";
import { LeadSentence } from "../src/components/LeadSentence";

const Home = () => {
  return (
    <>
      <Header />
      <LeadSentence />
      <Layout>
        <Container title="Blog" button="View All">
          テキストテキストテキストテキストテキストテキストテキスト
        </Container>
      </Layout>
      <Layout>
        <Container title="Portfolio" button="View All">
          テキストテキストテキストテキストテキストテキストテキスト
        </Container>
      </Layout>
      <Layout>
        <div className="flex flex-row gap-16 mb-20">
          <Container title="GitHub" button="View on GitHub">
            テキストテキストテキストテキストテキストテキストテキスト
          </Container>
          <Container title="Twitter" button="View on Twitter">
            テキストテキストテキストテキストテキストテキストテキスト
          </Container>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
