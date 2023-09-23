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
import hamburger from "../../assets/allsvgimages/hamburger.svg";

export const SideBar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab == "menu") {
      setActive(!active);
      return;
    }
    navigate(`/${tab}`);
  };

  return (
    <Hide below="md">
      <Box
        bg="gray.200"
        h="80vh"
        background="white"
        position={"sticky"}
        w={active ? "210px" : "54px"}
        transition="width 0.7s"
        top="70px"
        overflow="hidden"
      >
        <Stack spacing={6} p={5}>
          <SidebarItem
            imageSrc={hamburger}
            label=""
            onClick={() => handleTabClick("menu")}
            active={active}
          />
          <SidebarItem
            imageSrc={home}
            label="Home"
            onClick={() => handleTabClick("dashboard")}
            active={active}
          />
          <SidebarItem
            imageSrc={course}
            label="Courses"
            onClick={() => handleTabClick("courses")}
            active={active}
          />
          <SidebarItem
            imageSrc={selflearning}
            label="Self Learning"
            active={active}
          />
          kk
          <Accordion allowToggle onClick={() => handleTabClick("activities")}>
            <AccordionItem border="0px">
              <AccordionButton
                align="center"
                cursor={"pointer"}
                p={"0"}
                borderLeftWidth={activeTab === "activity" ? "4px" : "0px"} // Add left border when active
                borderColor="blue.500" // Border color when active
                // transition={"ease-out"}
                width={"full"}
                _hover={{ paddingLeft: "5px", fontWeight: "600" }}
                transition=" all 0.3s"
              >
                <Flex
                  align={"center"}
                  justify={"flex-start"}
                  gap={"6px"}
                  w="200px"
                >
                  <Image
                    src={activities}
                    alt={"Activities"}
                    width="24px"
                    height="24px"
                  />
                  <Flex gap={"6px"} alignItems="center">
                    <Text ml={"1"}>Activities</Text>
                    <Badge
                      rounded="full"
                      px="1"
                      color="#CC926E"
                      fontFamily="Open Sans"
                      fontSize="12px"
                      fontStyle="normal"
                      fontWeight="700"
                      lineHeight="16px"
                      textTransform="uppercase"
                      mr="10px"
                    >
                      New
                    </Badge>
                  </Flex>
                  <AccordionIcon />
                </Flex>
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

function SidebarItem({ imageSrc, label, onClick, isActive, active }) {
  return (
    <Flex
      align={"center"}
      justify={"flex-start"}
      gap={"6px"}
      onClick={onClick}
      w="180px"
      cursor="pointer"
      _hover={{ paddingLeft: "5px", fontWeight: "600" }}
      transition=" all 0.3s"
    >
      <Image src={imageSrc} alt={"Activities"} width="24px" height="24px" />
      <Flex gap={"6px"}>
        <Text ml={"1"}>{label}</Text>
      </Flex>
    </Flex>
  );
}
