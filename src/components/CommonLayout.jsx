import React from "react";
import Navbar from "./Navbar/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import { SideBar } from "./Sidebar/Sidebar";
import RightSidebar from "./RightSidebar/RightSidebar";

export const CommonLayout = ({ children }) => {
  return (
    <Box>
    <Navbar />
    <Flex  border="1px solid red">
      <Box display={{ base: "none", lg: "inline-block" }} width={"15%"}>
        <SideBar />
      </Box>
      <Box
        display={"inline-block"}
        width={"60%"}
        // padding={"16px 251px 0px 24px"}
      >
        {children}
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


