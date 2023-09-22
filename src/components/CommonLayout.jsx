import React,{useState} from "react";
import Navbar from "./Navbar/Navbar";
import { Box, Flex ,Image ,Text} from "@chakra-ui/react";
import { SideBar } from "./Sidebar/Sidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import BottomNavbar from "./Navbar/BottmNavbar";
import PhoneRightSidebar from "./RightSidebar/PhoneRightSidebar";

export const CommonLayout = ({ children }) => {
  const [slideIndex, setSlideIndex] = useState(0);
 
 
 
  return (
    <Box >
    <Navbar />
    <Flex  
        bgColor={"#F2F6FF"}
    height={"100vh"}
    >
      <Box display={{ base: "none", lg: "inline-block" }} width={"15%"}>
        <SideBar />
      </Box>
      <Box
        display={"inline-block"}
        width={"60%"}
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

<Box  display={{ base: "block", md: "none" }}>
  <PhoneRightSidebar/>
</Box>

    
    <Box w="100%"  display={{base:'block',md:"none"}} position={"fixed"} bottom={0} >
       <BottomNavbar/>
    </Box>
  </Box>
  );
};


