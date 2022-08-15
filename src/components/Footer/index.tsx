import { FC } from "react";
import { Layout } from "../Layout";

export const Footer: FC = () => {
  return (
    <div className="border-t-2 w-full">
      <Layout>
        <div className="bg-white text-slate-600 w-full h-16 flex items-center justify-center">
          <p>© 2022 Shimabu IT University</p>
        </div>
      </Layout>
    </div>
  );
};
