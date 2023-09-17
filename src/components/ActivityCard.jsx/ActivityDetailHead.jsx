import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import registered from "../../assets/images/event_registered.png";
import calenderImage from "../../assets/images/activities-events.png";
import clock from "../../assets/images/Clock.png";
import eventImage from "../../assets/images/sample_event_detai_image.png";

export const ActivityDetailHead = () => {
  return (
    <Box pt={"4"} pl={"6"} bg={"#FFF7F9"} w={"full"}>
      <Flex alignItems={"center"}>
        <Image src={registered} w={"2.92731rem"} h={"2.8125rem"} />
        <Text
          as={"b"}
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          lineHeight={"2rem"}
          color={"var(--neutral-grey-800, #3B3435)"}
        >
          You have been successfully registered for this event!
        </Text>
      </Flex>
      <Flex width={"full"} justifyContent={"space-between"}>
        <Box width={"60%"}>
          <Flex flexDirection={"column"} width={"55%"} lineHeight={"3.875rem"}>
            <Text fontWeight={"extrabold"} fontSize={"3rem"}>
              Roadmap To Become
            </Text>
            <Text
              fontWeight={"extrabold"}
              fontSize={"3rem"}
              color={"var(--primary-red-500, #ED0331);"}
            >
              A Full Stack Developer At Walmart
            </Text>
          </Flex>
          <Text
            fontSize={"1rem"}
            lineHeight={"1.5rem"}
            color={"var(--primary-red-900, #0A0103)"}
            py={"2"}
          >
            By Aman Vats, Senior Director, Business Head Masai
          </Text>
          <Flex gap={"0.6875rem"} py={"2"}>
            <Flex
              gap={"0.375rem"}
              borderRight={"1px solid #A5A5A5"}
              w={"12.125rem"}
            >
              <Image src={calenderImage} />
              <Text>26th august, saturday</Text>
            </Flex>
            <Flex gap={"0.375rem"}>
              <Image src={clock} />
              <Text>6pm - 7pm</Text>
            </Flex>
          </Flex>
        </Box>
        <Box width={"40%"} display={"flex"} justifyContent={"flex-end"}>
          <Image src={eventImage} />
        </Box>
      </Flex>
    </Box>
  );
};
