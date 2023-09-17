import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import { Sidebar } from "../../components/Sidebar/Sidebar";

import { Box, Flex } from "@chakra-ui/react";
// import { Sidear } from "../../components/Sidebar/Sidebar";

export const Activities = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        <Box width={"full"}>
          <Flex>
            <Sidebar />
            {children}
          </Flex>
        </Box>
      </div>
    </div>
  );
};
