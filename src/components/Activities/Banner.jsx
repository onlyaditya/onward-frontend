import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import activity_logo from "../../assets/images/activities-logo.png";
import activity_polygon from "../../assets/images/activities-polygon.png";

export const Banner = () => {
  return (
    <Box
      background={
        "radial-gradient(112.5% 111.22% at 104.39% 0%, #84BAC7 0%, #1A9FBD 100%)"
      }
      display={"flex"}
      alignItems={"center"}
      pr={6}
      m={5}
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
          Activities
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
