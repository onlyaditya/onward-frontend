import React, { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CourseCard from "../../components/Courses/CourseCard";
import { instructors, myCourses } from "../../utils/myCourses";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Instructor from "../../components/Courses/Instructor";
import NoAppliedCourse from "../../components/Courses/NoAppliedCourse";
import CoursePage from "./CoursePage";
import { Banner } from "../../components/Activities/Banner";
import { SideBar } from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { CommonLayout } from "../../components/CommonLayout";
import ReferAndEarn from "../../components/ReferAndEarn";

const OurCoursesPage = () => {
  const [activeCourse, setActiveCourse] = useState("");
  const handleChangeCourse = (course) => {
    setActiveCourse(course);
  };
  const [isReferPageActive, setIsReferPageActive] = useState(false);
  const handleReferPageStatus = (flag) => {
    if (flag === true) {
      setIsReferPageActive(true);
    } else {
      setIsReferPageActive(false);
    }
  };
  return (
    <>
      <CommonLayout>
        <Box>
          {activeCourse ? (
            <CoursePage activeCourse={activeCourse} />
          ) : isReferPageActive ? (
            <ReferAndEarn />
          ) : (
            <Flex background="rgba(242, 246, 255, 1)">
              <Box background="rgba(242, 246, 255, 1)" w="98%">
                <Box padding={1}>
                  <Banner
                    text={"Our Courses"}
                    bgColor={
                      "radial-gradient(112.5% 111.22% at 104.39% 0%, #88A9FD 0%, #3470E4 100%)"
                    }
                  />
                </Box>
                <Box p={["0", "4"]} w="100%">
                  <Tabs>
                    <TabList>
                      <Tab>All</Tab>
                      <Tab>Applied</Tab>
                    </TabList>

                    <TabPanels>
                      <TabPanel>
                        <Box
                          color="white"
                          display={"flex"}
                          flexWrap={"wrap"}
                          gap={["6px", "24px"]}
                          w={["350px", "790px"]}
                        >
                          {myCourses.map((course) => (
                            <CourseCard
                              handleChangeCourse={handleChangeCourse}
                              title={course.title}
                              applied={course.applied}
                              icon={course.icon}
                            />
                          ))}
                        </Box>
                        <Box p={1} mt={6}>
                          <Text color={"black"} fontWeight={600}>
                            Meet Your Instructors
                          </Text>
                        </Box>
                        <Box
                          p={["0", "0"]}
                          color="white"
                          display={"flex"}
                          gap={"16px"}
                          overflow={"scroll"}
                          width={["350px", "800px"]}
                        >
                          {instructors.map((instructor) => (
                            <Instructor
                              image={instructor.image}
                              name={instructor.name}
                              company={instructor.company}
                              exp={instructor.exp}
                            />
                          ))}
                        </Box>
                      </TabPanel>
                      <TabPanel>
                        <NoAppliedCourse />
                      </TabPanel>{" "}
                    </TabPanels>
                  </Tabs>
                </Box>
              </Box>
            </Flex>
          )}
        </Box>
      </CommonLayout>
    </>
  );
};

export default OurCoursesPage;
