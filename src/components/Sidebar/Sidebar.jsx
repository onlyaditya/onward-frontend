import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Flex,
  Hide,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import home from "../../assets/allsvgimages/home.svg";
import course from "../../assets/allsvgimages/course.svg";
import selflearning from "../../assets/allsvgimages/selflearning.svg";
import activities from "../../assets/allsvgimages/activities.svg";

export const SideBar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Hide below="md">
      <Box
        bg="gray.200"
        h="100vh"
        boxShadow="lg"
        background="white"
        position={"fixed"}
        w={"220px"}
        left={"0"}
        // minW={{ lg: "240px", md: "64px", sm: "64px" }}
      >
        <Stack spacing={1} p={2} >
          <SidebarItem
            imageSrc={home}
            label="Home"
            isActive={activeTab === "Home"}
            onClick={() => handleTabClick("Home")}
          />
          <SidebarItem
            imageSrc={course}
            label="Courses"
            isActive={activeTab === "Courses"}
            onClick={() => handleTabClick("Courses")}
          />
          <SidebarItem
            imageSrc={selflearning}
            label="Self Learning"
            isActive={activeTab === "Self Learning"}
            onClick={() => handleTabClick("Self Learning")}
          />

          <Accordion allowToggle>
            <AccordionItem border="0px">
              <AccordionButton
                align="center"
                background={`${activeTab === "activity" ? "Highlight" : null}`}
                cursor={"pointer"}
                p={"3"}
                borderLeftWidth={activeTab === "activity" ? "4px" : "0px"} // Add left border when active
                borderColor="blue.500" // Border color when active
                onClick={() => setActiveTab("activity")}
                transition={"ease-out"}
                width={"full"}
              >
                <Flex align={"center"} justify={"flex-start"} gap={"10px"}>
                  <Image
                    src={activities}
                    alt={"Activities"}
                    width="24px"
                    height="24px"
                  />
                  <Hide below={"lg"}>
                    <Text ml={"1"}>Activities</Text>
                  </Hide>
                  <Hide below={"lg"}>
                    <Badge
                      rounded="full"
                      px="1"
                      fontSize="0.8em"
                      colorScheme="orange"
                    >
                      New
                    </Badge>
                  </Hide>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel ml={"8"}>MasterClass</AccordionPanel>
              <AccordionPanel ml={"8"}>Events</AccordionPanel>
              <AccordionPanel ml={"8"}>Contests</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Box>
    </Hide>
  );
};

function SidebarItem({ imageSrc, label, onClick, isActive }) {
  return (
    <Flex
      align="center"
      background={`${isActive ? "Highlight" : null}`}
      cursor={"pointer"}
      p={"3"}
      borderLeftWidth={isActive ? "4px" : "0px"} // Add left border when active
      borderColor="blue.500" // Border color when active
      onClick={onClick}
      transition={"ease-out"}
      width={"full"}
    >
      <img src={imageSrc} alt={label} width="20px" height="20px" />
      <Hide below={"lg"}>
        <Text fontSize={{ sm: "x-small", md: "smaller", lg: "md" }} ml={2}>
          {label}
        </Text>
      </Hide>
    </Flex>
  );
}
