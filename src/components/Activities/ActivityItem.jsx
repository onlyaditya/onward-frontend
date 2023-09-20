import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export const ActivityItem = ({ image, text, bg1, bg2, changeType }) => {
  return (
    <Box
      as="button"
      minWidth={"66px"}
      maxW="80px"
      minH={"66px"}
      py={"3"}
      px={"12"}
      rounded="13px"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"6px"}
      boxShadow={"md"}
      bgGradient={`linear(to-b,${bg1}, ${bg2})`}
      onClick={changeType}
    >
      <Image src={image} minH={"6"} minW={"6"} />
      <Text color={"#5E5E5E"}>{text}</Text>
    </Box>
  );
};
