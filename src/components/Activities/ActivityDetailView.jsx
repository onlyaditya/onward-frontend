import React from "react";
import { ActivityDetailHead } from "../ActivityCard.jsx/ActivityDetailHead";
import { Box } from "@chakra-ui/react";
import { JoinWhatssappCard } from "../ActivityCard.jsx/JoinWhatssappCard";

export const ActivityDetailView = () => {
  return (
    <Box width={"full"}>
      <ActivityDetailHead />
      <JoinWhatssappCard />
    </Box>
  );
};
