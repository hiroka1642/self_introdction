import "../styles/globals.css";

type Props = {
  Component: React.ComponentType<any>;
  pageProps: unknown[];
};

const MyApp = (props: Props) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

export default MyApp;
