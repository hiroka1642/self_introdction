import { FC } from "react";
import { FacebookIcon } from "../Icons/facebook";
import { RssIcon } from "../Icons/rss";
import { TwitterIcon } from "../Icons/twitter";
import { Layout } from "../Layout";

export const LeadSentence: FC = () => {
  return (
    <>
      <div className="bg-[#E64980]">
        <Layout>
          <div className="flex justify-between text-white font-bold h-64 items-center">
            <div>
              <h1 className="text-4xl py-2">Shimabu&nbsp;IT&nbsp;University</h1>
              <p>しまぶーのポートフォリオのためのページです</p>
            </div>
            <div className="flex gap-2 justify-between ">
              <TwitterIcon size={"25"} />
              <FacebookIcon size={"25"} />
              <RssIcon size={"25"} />
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};
