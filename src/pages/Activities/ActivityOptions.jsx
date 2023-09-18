import { Box } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../../components/Activities/Banner";
import { ActivitiesTabs } from "../../components/Activities/ActivitiesTabs";
import { ActivityCard } from "../../components/ActivityCard.jsx/ActivityCard";

export const ActivityOptions = () => {
  return (
    <Box
      w={"75%"}
      px={["4", "6", "7"]}
      marginLeft={{ lg: "240px", md: "64px", sm: "64px" }}
      bg={"var(--extended-blue-50, #F2F6FF)"}
    >
      <Banner />
      <ActivitiesTabs />
      <ActivityCard />
    </Box>
  );
};
