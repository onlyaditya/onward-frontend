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
        w={"60"}
        left={"0"}
      >
        <Stack spacing={1} p={4}>
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
              <AccordionButton _hover={{ bg: "none" }} border="0px">
                <Flex align={"center"} justify={"flex-start"} gap={"10px"}>
                  <Image
                    src={activities}
                    alt={"Activities"}
                    width="24px"
                    height="24px"
                  />
                  <Text ml={"1"}>Activities</Text>
                  <Badge
                    rounded="full"
                    px="1"
                    fontSize="0.8em"
                    colorScheme="orange"
                  >
                    New
                  </Badge>
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
      p={"4"}
      borderLeftWidth={isActive ? "4px" : "0px"} // Add left border when active
      borderColor="blue.500" // Border color when active
      onClick={onClick}
      transition={"ease-out"}
      width={"full"}
    >
      <img src={imageSrc} alt={label} width="24px" height="24px" />
      <Text ml={2}>{label}</Text>
    </Flex>
  );
}
