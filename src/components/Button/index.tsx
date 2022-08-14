import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Button: FC<Props> = (props) => {
  const { children } = props;
  return (
    <button className="bg-black px-5 py-4 rounded-full font-bold text-white">
      {children}
    </button>
  );
};
