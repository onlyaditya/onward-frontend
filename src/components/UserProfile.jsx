import React from "react";
import { Box, Text } from "@chakra-ui/react";

function UserProfile({ Title, data }) {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      w={"100%"}
      // h={{ base: "64px", md: "80px" }}
      bg={"#FFFFFF"}
      fontFamily={"Open Sans"}
      fontStyle={"normal"}
      borderRadius={{ base: "12px", md: "16px" }}
      border={"1px solid #E5E5E5"}
    >
      <Box
        p={{
          base: "16px 16px",
          md: "10px 12px",
        }}
        lineHeight={"24px"}
        fontWeight={"600"}
      >
        <Text
          marginBottom={"4px"}
          fontSize={"14px"}
          fontWeight={"600"}
          lineHeight={"24px"}
        >
          {Title}
        </Text>
        <Text fontSize={"12px"} fontWeight={"400"} lineHeight={"16px"}>
          {data}
        </Text>
      </Box>

      <Box
        p={{
          base: "16px 16px",
          md: "10px 12px",
        }}
      >
        <Text
          fontSize={"12px"}
          fontWeight={"600"}
          lineHeight={"16px"}
          letterSpacing={"1.25"}
          color={"#3470E4"}
        >
          EDIT
        </Text>
      </Box>
    </Box>
  );
}

export default UserProfile;
