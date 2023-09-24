"use client";

import { Box, Text, Image } from "@chakra-ui/react";

export default function Instructor({ image, name, company, exp }) {
  return (
    <Box height={"210px"} borderRadius={"12px"} flexShrink={"0"}>
      <Image
        w="203px"
        h="179px"
        src={image}
        alt="#"
        borderTopLeftRadius={"12px"}
        borderTopRightRadius={"12px"}
      />
      <Text
        color={"black"}
        fontWeight={600}
        textAlign={"center"}
        fontSize={"13px"}
      >
        {name}
      </Text>
      <Text
        top={"147px"}
        gap={"6px"}
        color={"grey"}
        textAlign={"center"}
        fontSize={"12px"}
      >
        {" "}
        {company} | {exp}
      </Text>
    </Box>
  );
}
