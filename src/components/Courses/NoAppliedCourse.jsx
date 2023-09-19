import { Button } from "@chakra-ui/button";
import { Box, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { LiaBookSolid } from "react-icons/lia";

const NoAppliedCourse = () => {
  return (
    <Box mt={10}>
      <Box display={"flex"} justifyContent={"center"}>
        <LiaBookSolid size={"96px"} color="rgba(214, 226, 250, 1)" />
      </Box>
      <Stack
        h={"109px"}
        gap={"8px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Text
            fontWeight={700}
            fontSize={"16px"}
            textAlign={"center"}
            lineHeight={"24px"}
          >
            No Applied Courses
          </Text>
          <Text
            fontWeight={400}
            fontSize={"12px"}
            textAlign={"center"}
            lineHeight={"24px"}
          >
            You haven't applied to any of the courses now
          </Text>
        </Box>
        <Button
          color={"white"}
          fontSize={"10px"}
          size={"sm"}
          letterSpacing={2}
          bg={"rgba(52, 112, 228, 1)"}
          mt={2}
        >
          START APPLYING
        </Button>
      </Stack>
    </Box>
  );
};

export default NoAppliedCourse;
