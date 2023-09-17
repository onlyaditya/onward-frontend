import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import Home from "../components/DashboardHome/Home";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import { Box, Flex } from "@chakra-ui/layout";

const DashboardLanding = () => {
  return (
    <Box>
      <Navbar />
      <Flex gap="0px">
        <Box display={{ base: "none", lg: "inline-block" }} width={"16%"}>
          <Sidebar />
        </Box>
        <Box
          display={"inline-block"}
          width={"60%"}
          // padding={"16px 251px 0px 24px"}
        >
          <Home />
        </Box>
        <Box
          display={{ base: "none", lg: "inline-block" }}
          width={"18%"}
          position={"fixed"}
          right={"0"}
          height={"100vh"}
          overflow={"scroll"}
          scrollbarWidth="none"
          sx={{
            /* Hide scrollbar for Chrome, Safari, and Opera */
            "&::-webkit-scrollbar": {
              display: "none",
            },
            /* Hide scrollbar for IE and Edge */
            msOverflowStyle: "none",
            /* Hide scrollbar for Firefox */
            scrollbarWidth: "none",
          }}
        >
          <RightSidebar />
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLanding;
