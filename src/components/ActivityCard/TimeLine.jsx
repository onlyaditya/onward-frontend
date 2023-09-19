import { Box, Slider, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import React from "react";

export const TimeLine = () => {
  return (
    <Box gap={2} display={"flex"} width={"full"}>
      <Box textAlign={"left"}>
        <Text>6:00</Text>
        <Text>PM</Text>
      </Box>
      <Box
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
        flexGrow={"1"}
      >
        <Text>1h 30min</Text>
        <Slider value={100}>
          <SliderTrack bg={"rgba(255, 205, 30, 1)"}></SliderTrack>
          <SliderThumb />
        </Slider>
        <Text>Duration</Text>
      </Box>
      <Box textAlign={"right"}>
        <Text>7:30</Text>
        <Text>PM</Text>
      </Box>
    </Box>
  );
};
