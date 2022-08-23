import { Layout } from "../Layout";

export const Header = () => {
  return (
    <Layout>
      <div className="bg-white w-full flex h-16 items-center flex-row justify-between">
        <div className="font-bold">
          <p>Shimabu&nbsp;IT&nbsp;University</p>
        </div>
        <div className="flex gap-6 justify-between">
          <div className="font-bold">
            <p>About</p>
          </div>
          <div className="font-bold">
            <p>Blog</p>
          </div>
          <div className="font-bold">
            <p>Portfolio</p>
          </div>
          <div className="font-bold">
            <p>Contact</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
