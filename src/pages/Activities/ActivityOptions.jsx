import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../../components/Activities/Banner";
import { ActivitiesTabs } from "../../components/Activities/ActivitiesTabs";
import { ActivityCard } from "../../components/ActivityCard/ActivityCard";

export const ActivityOptions = () => {
  return (
    <Box
      width={"full"}
      height={"full"}
      minH={"100vh"}
      py={"4"}
      bg={"var(--extended-blue-50, #F2F6FF)"}
    >
      <Banner
        bgColor={
          "radial-gradient(112.5% 111.22% at 104.39% 0%, #84BAC7 0%, #1A9FBD 100%)"
        }
        text={"Activities"}
      />
      <ActivitiesTabs />
      <ActivityCard />
    </Box>
  );
};
