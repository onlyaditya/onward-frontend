import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { SideBar } from "./Sidebar/Sidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import BottomNavbar from "./Navbar/BottmNavbar";
import PhoneRightSidebar from "./RightSidebar/PhoneRightSidebar";

export const CommonLayout = ({ children, rightsidebar }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Box>
      <Navbar />
      <Flex mt="70px" width={"100%"}>
        <Box
          display={{ base: "none", lg: "block" }}
          background="white"
          borderRight="1px solid #D9D9D9"
        >
          <SideBar />
        </Box>
        <Box width={{base:"80%",md:"67%"}} flexGrow={{base:"0",md:"1"}}>{children}</Box>

        <Box
        
          display={{
            base: "none",
            lg: rightsidebar == "no" ? "none" : "block",
          }}
          // width={"260px"}
          width={"17%"}
          position={"sticky"}
          // right="0"
          height={"89vh"}
          overflow={"scroll"}
          scrollbarWidth="none"
          sx={{
            //Hide scrollbar for Chrome, Safari, and Opera
            "&::-webkit-scrollbar": {
              display: "none",
            },
            //Hide scrollbar for IE and Edge
            msOverflowStyle: "none",
            //Hide scrollbar for Firefox
            scrollbarWidth: "none",
          }}
          top="70px"
          // flexShrink="0"
          flexGrow="0"
        >
          <RightSidebar />
        </Box>
      </Flex>

      {/* <Box display={{ base: "block", md: "none" }}>
        <PhoneRightSidebar />
      </Box> */}

      {/* <Box
        w="100%"
        display={{ base: "block", md: "none" }}
        position={"fixed"}
        bottom={0}
      >
        <BottomNavbar />
      </Box> */}
    </Box>
  );
};
