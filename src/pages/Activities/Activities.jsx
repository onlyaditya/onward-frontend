import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import { SideBar } from "../../components/Sidebar/Sidebar";

export const Activities = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        <Box width={"full"}>
          <Flex>
            <SideBar />
            {children}
          </Flex>
        </Box>
      </div>
    </div>
  );
};
