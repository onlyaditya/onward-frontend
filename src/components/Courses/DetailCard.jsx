import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import Icons from "./Icons";

const DetailCard = ({ icon, text }) => {
  return (
    <Box
      border={"1px solid black"}
      w={"200px"}
      h={"108px"}
      borderRadius={"16px"}
      p={"16px"}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Icons iconName={icon} />
      </Box>
      <Text fontSize={"13px"} mt={2} fontWeight={700} textAlign={"center"}>
        {text}
      </Text>
    </Box>
  );
};

export default DetailCard;
