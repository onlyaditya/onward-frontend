import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";
import { SideBar } from "../../components/SideBar/SideBar";

export const Activities = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Box>
          <SideBar />
        </Box>
      </div>
    </div>
  );
};
