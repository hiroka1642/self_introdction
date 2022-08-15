import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Title } from "../src/components/Title";

const header = () => {
  return (
    <>
      <Header />
      <div className="mx-56 mt-10 h-full">
        <Title>This is a header</Title>
        <p className="text-sm pt-5 pb-3">2022.07.11</p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.{" "}
        </p>
      </div>
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </>
  );
};

export default header;
