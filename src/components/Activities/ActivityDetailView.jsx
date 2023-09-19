import React from "react";
import { ActivityDetailHead } from "../ActivityCard/ActivityDetailHead";
import { Box } from "@chakra-ui/react";
import { JoinWhatssappCard } from "../ActivityCard/JoinWhatssappCard";
import { AboutEvent } from "../ActivityCard/AboutEvent";

export const ActivityDetailView = () => {
  return (
    <Box width={"full"}>
      <ActivityDetailHead />
      <JoinWhatssappCard />
      <AboutEvent />
    </Box>
  );
};
