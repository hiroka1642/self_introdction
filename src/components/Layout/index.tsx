import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <div className="mx-52">{children}</div>
    </>
  );
};
