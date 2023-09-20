import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Onboardingform from "./Onboardingform";

const Onboarding = () => {
  return (
    <Box
      w="1179px"
      h="760px"
      bgColor="var(--extended-blue-50, #F2F6FF)"
      ml="261px"
      pt="80px"
      position="relative"
    >
      {/*Onboarding flow contianer */}
      
      {/* DOB , Graduation and  currently working container  */}
      {"form" ? <Onboardingform /> : <></>}
      {/* <OnboardingIdverif /> */}
      {/* <OnboardingConsent /> */}
      {/* <OnboardingJoinus /> */}
      {/* next button */}
      <Flex
        w="1179px"
        p="12px 24px 12px 1069px"
        justifyContent="flex-end"
        alignItems="center"
        background="#FFF"
        boxShadow="0px -1px 0px 0px #D9D9D9"
        position="absolute"
        bottom="0px"
      >
        <button
          style={{
            padding: "12px 20px",
            borderRadius: "8px",
            background: "var(--secondary-blue-500, #3470E4)",
            color: "var(--primary-white-fff, #FFF)",
            fontFamily: "Open Sans",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "24px",
            textTransform: "uppercase",
          }}
        >
          next
        </button>
      </Flex>
    </Box>
  );
};

export default Onboarding;
