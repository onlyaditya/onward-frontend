import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import timeProgress from "../../assets/allsvgimages/timeProgress.svg";

const RedirectToMsat = () => {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        w="196px"
        height={"48px"}
        padding={"12px 0px 12px 30px"}
      >
        <Image src={timeProgress} />
        <Text
          ml={"20px"}
          textAlign={"right"}
          fontFamily={"Orbitron"}
          fontSize={"20px"}
          fontStyle={"normal"}
          fontWeight={"600"}
          lineHeight={"24px"}
          textTransform={"uppercase"}
        >
          00 : 11
        </Text>

        <Text
          fontFamily={"Orbitron"}
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={"600"}
          lineHeight={"24px"}
        >
          sec
        </Text>
      </Box>
      <Text
        width={"513px"}
        textAlign="center"
        /* Heading 2 */
        fontFamily="Poppins"
        fontSize="34px"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="40px "
      >
        You are being redirected to our MSAT Platform.
      </Text>
    </Box>
  );
};

export default RedirectToMsat;
