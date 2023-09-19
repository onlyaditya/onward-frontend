import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const AboutEvent = () => {
  return (
    <Box display={"flex"}>
      <Flex>
        <Text>About the event</Text>
        <Text>A Prompt Engineering</Text>
        <Text>MASTERCLASS</Text>
      </Flex>
      <Flex></Flex>
    </Box>
  );
};
