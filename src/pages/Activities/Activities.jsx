import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import { Sidebar } from "../../components/Sidebar/Sidebar";

import { Box, Flex } from "@chakra-ui/react";
import { Banner } from "../../components/Activities/Banner";
import { ActivitiesTabs } from "../../components/Activities/ActivitiesTabs";
import { ActivityCard } from "../../components/ActivityCard.jsx/ActivityCard";


export const Activities = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Box width={"full"}>
          <Flex>
            <Sidebar />
            <Box w={"8xl"} px={"4"} margin={"0 auto"}>
              <Banner />
              <ActivitiesTabs />
              <ActivityCard />
            </Box>
          </Flex>
        </Box>
      </div>
    </div>
  );
};
