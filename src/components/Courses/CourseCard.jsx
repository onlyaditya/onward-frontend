import { Box, Text } from "@chakra-ui/layout";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import Icons from "./Icons";

const CourseCard = ({ title, applied, icon, handleChangeCourse }) => {
  return (
    <>
      <Box
        width={"340px"}
        left={"24px"}
        top={"349px"}
        gap={"24px"}
        borderRadius={"12px"}
        bg={"rgba(255, 255, 255, 1)"}
        display={"flex"}
        justifyContent={"center"}
        p={1}
        _hover={{ cursor: "pointer" }}
        boxShadow={"0px 1px 3px 0px rgba(110, 113, 204, 0.2)"}
        onClick={() => handleChangeCourse(title)}
      >
        <Box display={"flex"} width="330px" height="64px" left="16px" gap="8px">
          <Box
            p={4}
            borderRadius={"100px"}
            height="64px"
            width="64px"
            border="1px solid rgba(229, 229, 229, 1)"
            background="linear-gradient(0deg, #EEFFF7, #EEFFF7))"
          >
            <h1>
              <Icons iconName={icon} />
            </h1>
          </Box>

          <Box w="85%" p={1} color="black">
            <Text fontSize={12} fontWeight={"bold"} marginBottom={1}>
              {title}
            </Text>
            <Box display={"flex"} justifyContent={"flex-start"} marginRight={2}>
              <Text fontSize={10} marginRight={5} marginBottom={1}>
                30-Aug-2023
              </Text>
              <Text fontSize={10} marginRight={5} marginBottom={1}>
                30 Weeks
              </Text>
              <Text fontSize={10} marginRight={5} marginBottom={1}>
                11am - 11pm
              </Text>
            </Box>
            {applied === true ? (
              <Text
                bg={"lightgreen"}
                color={"green"}
                fontSize={9}
                w={"60px"}
                borderRadius={8}
                letterSpacing={2}
                textAlign={"center"}
              >
                APPLIED
              </Text>
            ) : null}
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <IoIosArrowForward size={15} color="black" textAlign={"center"} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CourseCard;
