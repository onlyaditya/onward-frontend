import { Box } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../../components/Activities/Banner";
import { ActivitiesTabs } from "../../components/Activities/ActivitiesTabs";
import { ActivityCard } from "../../components/ActivityCard.jsx/ActivityCard";

export const ActivityOptions = () => {
  return (
    <Box
      width={"full"}
      height={"full"}
      py={"4"}
      bg={"var(--extended-blue-50, #F2F6FF)"}
    >
      <Banner />
      <ActivitiesTabs />
      <ActivityCard />
    </Box>
  );
};
