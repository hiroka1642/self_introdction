import { Box, Group, Textarea, TextInput } from "@mantine/core";
import { Button } from "../src/components/Button";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Title } from "../src/components/Title";

const header = () => {
  return (
    <>
      <Header />
      <div className="mx-56 mt-10 h-full">
        <Title>Contact</Title>
        <Box mx="auto" className="mt-10">
          <form>
            <TextInput label="Email" placeholder="your@email.com" />
          </form>
        </Box>
        <Box mx="auto" className="mt-10">
          <form>
            <TextInput label="Name" placeholder="Taro Yamada" />
          </form>
        </Box>
        <Box mx="auto" className="mt-10">
          <Textarea placeholder="Your comment" label="Your comment" />
        </Box>
        <Group position="center" className="py-8">
          <Button>Send message</Button>
        </Group>
      </div>
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </>
  );
};

export default header;
