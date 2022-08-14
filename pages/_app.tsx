import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";

type Props = {
  Component: React.ComponentType<any>;
  pageProps: unknown[];
};

const MyApp = (props: Props) => {
  const { Component, pageProps } = props;
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default MyApp;
