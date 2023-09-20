import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import timeProgress from "../../assets/allsvgimages/timeProgress.svg";

const MsatThanku = () => {
  return (
    <Flex
      bgColor={"#010A1B"}
      opacity={"0.7"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap="16px"
      >
        <Box>
          <Image src={timeProgress} />
        </Box>
        <Text
          color="var(--primary-white-fff, #FFF)"
          textAlign="center"
          fontFamily="Poppins"
          fontSize="24px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="32px"
        >
          Thank you for attempting MSAT!
        </Text>
        <Text
          color="var(--neutral-grey-50, #F3F2F2)"
          textAlign="center"
          fontFamily="Open Sans"
          fontSize="24px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="34px"
        >
          Please wait while we are getting your scores.
        </Text>
      </Box>
    </Flex>
  );
};

export default MsatThanku;
