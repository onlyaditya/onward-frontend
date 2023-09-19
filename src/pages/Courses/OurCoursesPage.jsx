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

const OurCoursesPage = () => {
  const [activeCourse, setActiveCourse] = useState("");
  const handleChangeCourse = (course) => {
    setActiveCourse(course);
  };
  return (
    <>
      <Navbar />
      <Box>
        <SideBar />
        {activeCourse ? (
          <CoursePage activeCourse={activeCourse} />
        ) : (
          <Box
            w={"88%"}
            px={"4"}
            marginLeft={"12%"}
            height={"1000px"}
            background="rgba(242, 246, 255, 1)"
            className="ourCourses"
          >
            <Box padding={4}>
              <Banner
                text={"Our Courses"}
                bgColor={
                  "radial-gradient(112.5% 111.22% at 104.39% 0%, #88A9FD 0%, #3470E4 100%)"
                }
              />
            </Box>
            <Box p={4}>
              <Tabs>
                <TabList>
                  <Tab>All</Tab>
                  <Tab>Applied</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Box
                      w="100%"
                      color="white"
                      display={"flex"}
                      flexWrap={"wrap"}
                      gap={2}
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
                    <Box pl={4} mt={6}>
                      <Text color={"black"} fontWeight={600}>
                        Meet Your Instructors
                      </Text>
                    </Box>
                    <Box
                      p={4}
                      color="white"
                      display={"flex"}
                      gap={"16px"}
                      overflow={"scroll"}
                      width="auto"
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
        )}
      </Box>
    </>
  );
};

export default OurCoursesPage;
