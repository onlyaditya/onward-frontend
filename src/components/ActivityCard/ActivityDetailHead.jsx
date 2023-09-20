import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import registered from "../../assets/images/event_registered.png";
import calenderImage from "../../assets/images/activities-events.png";
import clock from "../../assets/images/Clock.png";
import eventImage from "../../assets/images/sample_event_detai_image.png";
import { convertTime } from "../../utils/convertTime";

export const ActivityDetailHead = ({
  title,
  instructor_name,
  startDate,
  endDate,
}) => {
  const [sHours, sMinutes, sAmPm, sDate, sMonth, sDay] = convertTime(startDate);
  const [eHours, eMinutes, eAmPm] = convertTime(endDate);

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
              Join the Event
            </Text>
            <Text
              fontWeight={"extrabold"}
              fontSize={"3rem"}
              color={"var(--primary-red-500, #ED0331);"}
            >
              {title}
            </Text>
          </Flex>
          <Text
            fontSize={"1rem"}
            lineHeight={"1.5rem"}
            color={"var(--primary-red-900, #0A0103)"}
            py={"2"}
          >
            By {instructor_name}
          </Text>
          <Flex gap={"0.6875rem"} py={"2"}>
            <Flex
              gap={"0.375rem"}
              borderRight={"1px solid #A5A5A5"}
              w={"14.125rem"}
            >
              <Image src={calenderImage} />
              <Text>
                {sDate}th {sMonth}, {sDay}
              </Text>
            </Flex>
            <Flex gap={"0.375rem"}>
              <Image src={clock} />
              <Text>
                {sHours}:{sMinutes}
                {sAmPm} - {eHours}:{eMinutes}
                {eAmPm}
              </Text>
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
