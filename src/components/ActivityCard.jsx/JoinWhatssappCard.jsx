import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import whatssapp from "../../assets/images/WhatsApp.png";
import calender from "../../assets/images/activities-events.png";
import clock from "../../assets/images/Clock.png";
import qrCode from "../../assets/images/qrCode.png";

export const JoinWhatssappCard = () => {
  return (
    <Box
      w={"85%"}
      h={"10.75rem"}
      borderRadius={"0.75rem"}
      border={"1px solid var(--secondary-blue-500, #3470E4)"}
      p={"4"}
      mx={"auto"}
      mt={"4"}
    >
      <Flex
        justifyContent={"space-between"}
        flexDirection={["column", "column", "row"]}
      >
        <Box
          h={"full"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          w={"50%"}
        >
          <Flex alignItems={"center"} gap={"0.5rem"}>
            <Image src={whatssapp} w={"3.5rem"} h={"3.5rem"} />
            <Text fontSize={"1.25rem"} fontWeight={"bold"}>
              Join this event’s Whatsapp Group to get
            </Text>
          </Flex>
          <Flex
            alignItems={"center"}
            ml={"5rem"}
            h={"4.5rem"}
            gap={"1rem"}
            color={"#6E71CC"}
            fontWeight={"bold"}
          >
            <Flex alignItems={"center"} gap={"0.875rem"}>
              <Image src={clock} />
              <Text>Timely Updates</Text>
            </Flex>
            <Flex alignItems={"center"} gap={"0.875rem"}>
              <Image src={calender} />
              <Text>Access to Exclusive Events</Text>
            </Flex>
          </Flex>
        </Box>
        <Box mr={"5%"} width={"fit-content"}>
          <Flex flexDirection={"column"}>
            <Text>Scan this to join</Text>
            <Image src={qrCode} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
