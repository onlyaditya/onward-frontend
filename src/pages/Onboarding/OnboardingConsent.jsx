import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import OnboardingFlow from "./OnboardingFlow";
import { Link } from "react-router-dom";
import { CommonLayout } from "../../components/CommonLayout";

const OnboardingConsent = () => {
  return (
    <CommonLayout>
      <Box
        w="1179px"
        h="90vh"
        ml={["0px", "50px"]}
        pt={["50px", "80px"]}
        bgColor="var(--extended-blue-50, #F2F6FF)"
        position="relative"
      >
        {/*Onboarding flow contianer */}
        <OnboardingFlow
          color={"var(--primary-white-fff, #FFF)"}
          bg={"var(--secondary-purple-500, #6E71CC)"}
          section={"3"}
        />

        {/* <OnboardingConsent /> */}
        <Box
          display="inline-flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="8px"
          ml="36px"
          my="40px"
        >
          {/* agreement container */}
          <Flex flexDirection="column" alignItems="flex-start" gap="4px">
            <Flex w="925px" alignItems="flex-start" gap="4px">
              <Flex
                w="24px"
                h="24px"
                justifyContent="center"
                alignItems="center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M7.5 12.75L3.75 9L4.8075 7.935L7.5 10.6275L13.1925 4.935L14.25 6L7.5 12.75ZM14.25 2.25H3.75C2.9175 2.25 2.25 2.9175 2.25 3.75V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H14.25C14.6478 15.75 15.0294 15.592 15.3107 15.3107C15.592 15.0294 15.75 14.6478 15.75 14.25V3.75C15.75 2.9175 15.075 2.25 14.25 2.25Z"
                    fill="#3470E4"
                  />
                </svg>
              </Flex>
              <Flex
                flexDirection="column"
                alignI
                tems="flex-start"
                color="var(--neutral-grey-700, #544D4F)"
                // fontFamily="Open Sans"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                I hereby agree and undertake that I have read and understood the
                terms and conditions as stated in the ISA, Masai CoC and MBP
                which can be accessed below and reaffirm my acceptance.
              </Flex>
            </Flex>
            <Flex p="0px 24px" alignItems="flex-start" gap="32px">
              <Flex alignItems="flex-start" gap="4px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 2C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2H6ZM6 4H13V9H18V20H6V4ZM8 12V14H16V12H8ZM8 16V18H13V16H8Z"
                    fill="#3470E4"
                  />
                </svg>
                <Text
                  color="var(--secondary-blue-500, #3470E4)"
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                  textDecorationLine="underline"
                >
                  View the agreement and related documents.
                </Text>
              </Flex>
              <Flex justifyContent="center" alignItems="center" gap="4px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 19H5V5H19M19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 3.89 20.1 3 19 3ZM10 8V16L15 12L10 8Z"
                    fill="#3470E4"
                  />
                </svg>
                <Text
                  color="var(--secondary-blue-500, #3470E4)"
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                  textDecorationLine="underline"
                >
                  View a short video on ISA.
                </Text>
              </Flex>
              <Flex justifyContent="center" alignItems="center" gap="4px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_3_21856"
                    // style="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_3_21856)">
                    <path
                      d="M2 17.0008V15.0008H11V17.0008H2ZM2 9.00078V7.00078H11V9.00078H2ZM16.375 19.0008L12.825 15.4508L14.225 14.0508L16.35 16.1758L20.6 11.9258L22 13.3508L16.375 19.0008ZM16.375 11.0008L12.825 7.45078L14.225 6.05078L16.35 8.17578L20.6 3.92578L22 5.35078L16.375 11.0008Z"
                      fill="#3470E4"
                    />
                  </g>
                </svg>
                <Text
                  color="var(--secondary-blue-500, #3470E4)"
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                  textDecorationLine="underline"
                >
                  View Mandatory Conditions.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* acknowledge container */}
          <Flex w="1128px" h="24px" alignItems="flex-start" gap="4px">
            <Flex w="24px" h="24px" justifyContent="center" alignItems="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.5 12.75L3.75 9L4.8075 7.935L7.5 10.6275L13.1925 4.935L14.25 6L7.5 12.75ZM14.25 2.25H3.75C2.9175 2.25 2.25 2.9175 2.25 3.75V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H14.25C14.6478 15.75 15.0294 15.592 15.3107 15.3107C15.592 15.0294 15.75 14.6478 15.75 14.25V3.75C15.75 2.9175 15.075 2.25 14.25 2.25Z"
                  fill="#3470E4"
                />
              </svg>
            </Flex>
            <Text
              h="24px"
              flex="1 0 0"
              color="var(--neutral-grey-700, #544D4F)"
              fontFamily="Open Sans"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
            >
              I acknowledge that Masai is an intensive practice based learning
              experience and I am mentally and physically of sound state to
              complete the course.{" "}
            </Text>
          </Flex>
          {/* scholarship container */}
          <Flex flexDirection="column" alignItems="flex-start" gap="4px">
            <Flex w="925px" alignItems="flex-start" gap="4px">
              <Flex
                w="24px"
                h="24px"
                justifyContent="center"
                alignItems="center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M7.5 12.75L3.75 9L4.8075 7.935L7.5 10.6275L13.1925 4.935L14.25 6L7.5 12.75ZM14.25 2.25H3.75C2.9175 2.25 2.25 2.9175 2.25 3.75V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H14.25C14.6478 15.75 15.0294 15.592 15.3107 15.3107C15.592 15.0294 15.75 14.6478 15.75 14.25V3.75C15.75 2.9175 15.075 2.25 14.25 2.25Z"
                    fill="#3470E4"
                  />
                </svg>
              </Flex>
              <Flex
                flexDirection="column"
                alignI
                tems="flex-start"
                color="var(--neutral-grey-700, #544D4F)"
                // fontFamily="Open Sans"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                Apply for scholarship
              </Flex>
            </Flex>
            <Flex p="0px 24px" alignItems="flex-start" gap="32px">
              <Flex alignItems="flex-start" gap="4px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 2C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2H6ZM6 4H13V9H18V20H6V4ZM8 12V14H16V12H8ZM8 16V18H13V16H8Z"
                    fill="#3470E4"
                  />
                </svg>
                <Text
                  color="var(--secondary-blue-500, #3470E4)"
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                  textDecorationLine="underline"
                >
                  View Scholarship Details
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>

        {/* next button */}
        <Flex
          w={["420px", "1179px"]}
          p="12px 24px 12px 1069px"
          pl={["80px", "1069px"]}
          justifyContent="flex-end"
          alignItems="center"
          background="#FFF"
          boxShadow="0px -1px 0px 0px #D9D9D9"
          position="absolute"
          bottom={["200px", "0px"]}
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
            <Link to="/home/onboardingjoin">next</Link>
          </button>
        </Flex>
      </Box>
    </CommonLayout>
  );
};

export default OnboardingConsent;
