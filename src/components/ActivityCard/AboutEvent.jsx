import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const AboutEvent = ({ title, type, description }) => {
  return (
    <Box display={"flex"} width={"full"} px={"4"} py={"12"}>
      <Flex
        flexDirection={"column"}
        width={"25%"}
        borderRight={"2px solid #D9D9D9"}
        gap={"2"}
      >
        <Text fontSize={"x-small"}>About the event</Text>
        <Text fontWeight={"bold"}>{title}</Text>
        <Text fontWeight={"extrabold"} color={"#6E71CC"}>
          {type}
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"2"} ml={"4"} fontSize={"small"}>
        <Text>
          Behind every successful business decision is a Data Analyst with a
          sharp mind and sharper skills.
        </Text>
        <Text>{description}</Text>
      </Flex>
    </Box>
  );
};
