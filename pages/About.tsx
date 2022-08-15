import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Title } from "../src/components/Title";

const About = () => {
  return (
    <>
      <Header />
      <div className="mx-56 mt-10 h-full">
        <Title>About</Title>
        <h4 className="text-2xl font-semibold py-6">Lightsound Shimabu </h4>
        <p className="text-lg">
          ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
        </p>
      </div>
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </>
  );
};

export default About;
