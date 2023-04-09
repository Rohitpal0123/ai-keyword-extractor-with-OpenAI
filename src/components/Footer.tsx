import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from "../assets/openai-svgrepo-com.svg";

const Footer = () => {
  return (
    <>
      <Box marginTop={50}>
        <Flex justifyContent="center" alignItems="center">
          <Image src={logo} width="40px" height="40px" marginRight={1} />
          <Text>Powered by OpenAI</Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
