import React from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";

const App = () => {
  return (
    <>
      <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>
        <Container maxW="3xl" centerContent>
          <Header />
          <Footer />
          <TextInput />
        </Container>
      </Box>
    </>
  );
};

export default App;
