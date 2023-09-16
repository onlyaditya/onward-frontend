import React from "react";
import DetailCard from "../../components/Courses/DetailCard";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { courseDetail, generalDetails } from "../../utils/myCourses";

const CoursePage = ({ activeCourse }) => {
  return (
    <>
      <Box>
        <Text fontWeight={700} fontSize={"18px"}>
          Software Development
        </Text>
        <Flex gap={2}>
          <Text
            color={"rgba(110, 113, 204, 1)"}
            fontWeight={700}
            fontSize={"sm"}
          >
            Extensive Learning Course
          </Text>
          <Box
            fontSize={"xs"}
            bg={"rgba(246, 237, 231, 1)"}
            p={1}
            borderRadius={"12px"}
          >
            <Text
              color={"rgba(204, 146, 110, 1)"}
              fontWeight={600}
              fontSize={"10px"}
            >
              Full Time
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mt={6} display={"flex"} gap={2}>
        {generalDetails.map((detail) => (
          <DetailCard icon={detail.icon} text={detail.detailText} />
        ))}
      </Box>
      <Box mt={14}>
        <Box>
          <Text fontWeight={700} fontSize={"16px"}>
            Course Details
          </Text>
          <Text fontSize="12px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            labore, assumenda fugit quos voluptates architecto pariatur aperiam
            ad debitis veniam
          </Text>
        </Box>
        <Box mt={6} display={"flex"} gap={2}>
          {courseDetail.map((detail) => (
            <DetailCard text={detail.detailText} icon={detail.icon} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CoursePage;
