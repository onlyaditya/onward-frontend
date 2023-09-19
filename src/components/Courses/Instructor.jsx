"use client";

import { Box, Text, Image } from "@chakra-ui/react";

export default function Instructor({ image, name, company, exp }) {
  return (
    <Box height={"179px"} borderRadius={"12px"}>
      <Image
        height={"130px"}
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
