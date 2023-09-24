import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import activity_logo from "../../assets/images/activities-logo.png";
import activity_polygon from "../../assets/images/activities-polygon.png";

export const Banner = ({ bgColor, text }) => {
  return (
    <Box
      background={bgColor}
      display={"flex"}
      alignItems={"center"}
      pr={6}
      m={["2", "5"]}
      w={["343px", "900px"]}
      borderRadius={"md"}
    >
      <Flex justifyContent={"center"} alignItems="center" flexGrow={1}>
        <Text
          textAlign="center"
          p="16px"
          color="#fff"
          fontSize={"2xl"}
          fontWeight={"bold"}
        >
          {text}
        </Text>
      </Flex>

      <Image
        src={activity_logo}
        minHeight={"10"}
        padding={"4"}
        backgroundImage={activity_polygon}
      />
    </Box>
  );
};
