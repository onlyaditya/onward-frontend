import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import OnboardingFlow from "./OnboardingFlow";
import { Link } from "react-router-dom";
import { CommonLayout } from "../../components/CommonLayout";
import zoom from "../../assets/allsvgimages/zoom.svg";
import zoommobile from "../../assets/allsvgimages/zoommobile.svg";
import slack from "../../assets/allsvgimages/slack.svg";
import slackmobile from "../../assets/allsvgimages/slackmobile.svg";

const OnboardingJoinus = () => {
  return (
    <CommonLayout rightsidebar={"no"} bottomnav={"no"}>
      <Box
        flexGrow="1"
        h="89vh"
        bgColor="#F2F6FF"
        py={["12px", "24px"]}
        px={["16px", "28px"]}
        position="relative"
      >
        {/*Onboarding flow contianer */}
        <OnboardingFlow
          color={"var(--primary-white-fff, #FFF)"}
          bg={"var(--secondary-purple-500, #6E71CC)"}
          section={"4"}
        />

        {/* <OnboardingJoinus /> */}
        <Box
          display="inline-flex"
          alignItems="flex-start"
          gap={["16px", "24px"]}
          ml="15px"
          mt="40px"
        >
          <Box
            display={["none", "flex"]}
            p={["20px 22px 20px 21px", "16px 40px 16px 39px"]}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            borderRadius="16px"
            background="var(--primary-white-fff, #FFF)"
          >
            <Image src={zoom} />
            <button
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                background: "var(--secondary-blue-500, #3470E4)",
                color: "var(--primary-white-fff, #FFF)",
                fontFamily: "Open Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "24px",
                letterSpacing: "1.25px",
                textTransform: "uppercase",
              }}
            >
              join zoom
            </button>
          </Box>
          <Box
            display={["flex", "none"]}
            p={["20px 22px 20px 21px", "16px 40px 16px 39px"]}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={["16px", "20px"]}
            borderRadius="16px"
            background="var(--primary-white-fff, #FFF)"
          >
            <Image src={zoommobile} />
            <button
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                background: "var(--secondary-blue-500, #3470E4)",
                color: "var(--primary-white-fff, #FFF)",
                fontFamily: "Open Sans",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "16px",
                letterSpacing: "1.25px",
                textTransform: "uppercase",
              }}
            >
              join zoom
            </button>
          </Box>
          <Box
            display={["none", "flex"]}
            p="16px 40px 16px 39px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            borderRadius="16px"
            background="var(--primary-white-fff, #FFF)"
          >
            <Image src={slack} />
            <button
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                background: "var(--secondary-blue-500, #3470E4)",
                color: "var(--primary-white-fff, #FFF)",
                fontFamily: "Open Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "24px",
                letterSpacing: "1.25px",
                textTransform: "uppercase",
              }}
            >
              join slack
            </button>
          </Box>
          <Box
            display={["flex", "none"]}
            p={["20px 22px 20px 21px", "16px 40px 16px 39px"]}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={["16px", "20px"]}
            borderRadius="16px"
            background="var(--primary-white-fff, #FFF)"
          >
            <Image src={slackmobile} />
            <button
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                background: "var(--secondary-blue-500, #3470E4)",
                color: "var(--primary-white-fff, #FFF)",
                fontFamily: "Open Sans",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "16px",
                letterSpacing: "1.25px",
                textTransform: "uppercase",
              }}
            >
              join slack
            </button>
          </Box>
        </Box>

        {/* next button */}
        
        <Flex
          w="100%"
          justifyContent="flex-end"
          alignItems="center"
          background="#FFF"
          boxShadow="0px -1px 0px 0px #D9D9D9"
          position="absolute"
          bottom={["0px", "0px"]}
          left="0px"
        >
          <button
            style={{
              padding: "12px 20px",
              marginRight: "14px",
              marginTop: "5px",
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
            <Link to="/home/congrats">next</Link>
          </button>
        </Flex>
      </Box>
    </CommonLayout>
  );
};

export default OnboardingJoinus;
