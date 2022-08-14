import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Title: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="font-bold text-3xl border-b-2">
      <h2 className="py-5">{children}</h2>
    </div>
  );
};
