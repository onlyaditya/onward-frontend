import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const AboutEvent = () => {
  return (
    <Box display={"flex"} width={"full"} px={"4"} py={"12"}>
      <Flex
        flexDirection={"column"}
        width={"25%"}
        borderRight={"2px solid #D9D9D9"}
        gap={"2"}
      >
        <Text fontSize={"x-small"}>About the event</Text>
        <Text fontWeight={"bold"}>A Prompt Engineering</Text>
        <Text fontWeight={"extrabold"} color={"#6E71CC"}>
          MASTERCLASS
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"2"} ml={"4"} fontSize={"small"}>
        <Text>
          Behind every successful business decision is a Data Analyst with a
          sharp mind and sharper skills.
        </Text>
        <Text>
          Want to be that key player? Join Aman Vats, senior director of
          curriculum at Masai, on August 25th and know the secrets no one tells
          you about to become an in-demand data professional. Oh, and the best
          part? It’s absolutely FREE! Save your seat now
        </Text>
      </Flex>
    </Box>
  );
};
