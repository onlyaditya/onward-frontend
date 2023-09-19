import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Vector from "../assets/Vector_145.svg";

export default function HeroBottom() {
  return (
    <div>
      <Box
        w={"100%"}
        h={"100px"}
        display={"flex"}
        justifyContent={"center"}
        textAlign={"center"}
        flexWrap={"wrap"}
      >
        <Text
          color={"#0A0103"}
          fontFamily={"Poppins"}
          fontSize={"34px"}
          fontStyle={"normal"}
          lineHeight={"40px"}
          display={"flex"}
          margin={"auto 0px"}
        >
          Driven by
        </Text>

        <Box
          className="bottomheadingSpam"
          margin={"auto 5px"}
          color={"#ED0331"}
        >
          <Text
            color={"#ED0331"}
            fontFamily={"Poppins"}
            fontSize={"34px"}
            fontStyle={"normal"}
            lineHeight={"40px"}
            display={"flex"}
            alignItems={"center"}
          >
            outcomes
          </Text>
          <Image
            className="vectorimageinbottom"
            position={"absolute"}
            w={"176px"}
            h={"20px"}
            flexShrink={"0"}
            top={{ xl: "", lg: "", md: "", sm: "" }}
            src={Vector}
          />
        </Box>

        <Text
          margin={"auto 0px"}
          color={"#0A0103"}
          fontFamily={"Poppins"}
          fontSize={"34px"}
          fontStyle={"normal"}
          lineHeight={"40px"}
          display={"flex"}
        >
          to launch your career in Tech
        </Text>
      </Box>
    </div>
  );
}
