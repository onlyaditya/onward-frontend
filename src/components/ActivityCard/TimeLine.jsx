import { Box, Slider, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import React from "react";
import { convertTime } from "../../utils/convertTime";
import { findDuration } from "../../utils/findDuration";

export const TimeLine = ({ startDate, endDate }) => {
  const [startH, startM, startAP] = convertTime(startDate);
  const [endH, endM, endAP] = convertTime(endDate);
  return (
    <Box gap={2} display={"flex"} width={"full"}>
      <Box textAlign={"left"}>
        <Text>
          {startH}:{startM}
        </Text>
        <Text>{startAP}</Text>
      </Box>
      <Box
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
        flexGrow={"1"}
      >
        <Text>{findDuration(startDate, endDate)}</Text>
        <Slider value={100}>
          <SliderTrack bg={"rgba(255, 205, 30, 1)"}></SliderTrack>
          <SliderThumb />
        </Slider>
        <Text>Duration</Text>
      </Box>
      <Box textAlign={"right"}>
        <Text>
          {endH}:{endM}
        </Text>
        <Text>{endAP}</Text>
      </Box>
    </Box>
  );
};
