import React from "react";
import Navbar from "./Navbar/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import { SideBar } from "./Sidebar/Sidebar";

export const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        <Box width={"full"}>
          <Flex>
            <SideBar />
            <Box w={"88%"} marginLeft={{ lg: "12%", md: "64px", sm: "64px" }}>
              {children}
            </Box>
          </Flex>
        </Box>
      </div>
    </div>
  );
};
