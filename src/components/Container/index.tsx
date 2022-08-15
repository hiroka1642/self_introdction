import { FC, ReactNode } from "react";
import { Button } from "../Button";
import { Title } from "../Title";

type Props = {
  children: ReactNode;
  title: string;
  button: string;
};

export const Container: FC<Props> = (props) => {
  const { children, title, button } = props;
  return (
    <div className="items-center mt-20 w-full">
      <Title>{title}</Title>
      {children}
      <div className="flex justify-center">
        <Button>{button}</Button>
      </div>
    </div>
  );
};
