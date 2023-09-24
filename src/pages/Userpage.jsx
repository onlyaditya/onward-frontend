import React from "react";
import { Text, Box, Image } from "@chakra-ui/react";
import UserImage from "../assets/UserImage.svg";
import UserProfile from "../components/UserProfile";
import IncrmentIcons from "../assets/IncrmentIcons.svg";

function Userpage(props) {
  return (
    <Box bg={"#F2F6FF"} w={"100vw"} h={"100vh"}>
      <Box margin={"16px 0 0 24px"} display={"flex"}>
        <Text>Home</Text>
        <Image src={IncrmentIcons} />
        <Text>My Profile</Text>
      </Box>
      <Box>
        <Text>My Profile</Text>
      </Box>
      <Box>
        <Image src={UserImage} />
        <Text>{"Shaban Khan"}</Text>
      </Box>
      <Box>
        <UserProfile Title={"Name"} data={"Shaban"} />
      </Box>
    </Box>
  );
}

export default Userpage;
