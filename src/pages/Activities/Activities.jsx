import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Activities = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Box>
          <Sidebar />
        </Box>
      </div>
    </div>
  );
};
