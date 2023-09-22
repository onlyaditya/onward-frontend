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
import { useNavigate } from "react-router";

export const SideBar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
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
        // minW={{ lg: "200px", md: "64px", sm: "64px" }}
      >
        <Stack spacing={1} p={2} >
          <SidebarItem
            imageSrc={home}
            label="Home"
            // isActive={activeTab === ""}
            onClick={() => handleTabClick("dashboard")}
          />
          <SidebarItem
            imageSrc={course}
            label="Courses"
            // isActive={acstiveTab === "courses"}/
            onClick={() => handleTabClick("courses")}
          />
          <SidebarItem
            imageSrc={selflearning}
            label="Self Learning"
            // onClick={() => handleTabClick("Self Learning")}
          />

          <Accordion allowToggle onClick={() => handleTabClick("activities")}>
            <AccordionItem border="0px">
              <AccordionButton
                align="center"
                background={`${
                  activeTab === "activities" ? "Highlight" : null
                }`}
                cursor={"pointer"}

                p={"3"}
                borderLeftWidth={activeTab === "activity" ? "4px" : "0px"} // Add left border when active
                borderColor="blue.500" // Border color when active
                transition={"ease-out"}
                width={"full"}
              >
                <Flex align={"center"} justify={"flex-start"} gap={"6px"}>
                  <Image
                    src={activities}
                    alt={"Activities"}
                    width="24px"
                    height="24px"
                  />
                  <Hide below={"lg"}>
                    <Flex flexWrap={"wrap"} gap={"6px"}>
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
