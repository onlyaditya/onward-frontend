import { Box, Button, Flex, Image, Text, border } from "@chakra-ui/react";
import React from "react";
import sampleThumbNail from "../../assets/images/sampleActivityThumbnail.png";
import fire_icon from "../../assets/images/fire-icon.png";
import { TimeLine } from "./TimeLine";

export const Card = () => {
  return (
    <Box
      border={"1px solid var(--neutral-grey-100, #E5E5E5)"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"2"}
      width={"sm"}
      borderRadius={12}
      bg={"#FFF"}
      boxShadow={
        "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10);"
      }
    >
      <Box h={""}>
        <Image
          src={sampleThumbNail}
          minH={"100%"}
          fit={"fill"}
          borderTopRadius={12}
        />
      </Box>
      <Box
        h={"fit-content"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"4"}
        // border={"1px solid red"}
        width={"100%"}
        px={4}
        py={"5"}
      >
        <Text
          bg={"var(--extended-blue-50, #F2F6FF);"}
          borderRadius={"100"}
          px={4}
          py={2}
          color={"var(--secondary-blue-500, #3470E4);"}
          fontWeight={"600"}
          fontSize={"lg"}
        >
          Masterclass
        </Text>
        <Text alignSelf={"stretch"} fontWeight={"bold"} fontSize={"x-large"}>
          Prompt Engineering
        </Text>
        <TimeLine />
        <Button
          bg={"#3470E4"}
          color={"white"}
          rounded={"12"}
          w={"full"}
          fontSize={"small"}
          letterSpacing={"widest"}
        >
          REGISTER NOW WITH 1 CLICK
        </Button>
        <Box
          w={"full"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image src={fire_icon} />
          <Text as={"b"} mx={"2"} color={"#ED0331"}>
            924
          </Text>
          <Text> people have already registered</Text>
        </Box>
      </Box>
    </Box>
  );
};
