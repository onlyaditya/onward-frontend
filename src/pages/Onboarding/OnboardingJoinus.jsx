import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import OnboardingFlow from "./OnboardingFlow";
import { Link } from "react-router-dom";
import { CommonLayout } from "../../components/CommonLayout";

const OnboardingJoinus = () => {
  return (
    <CommonLayout>
      <Box
        w="1179px"
        h="90vh"
        bgColor="var(--extended-blue-50, #F2F6FF)"
        ml="50px"
        pt="80px"
        position="relative"
      >
        {/*Onboarding flow contianer */}
        <OnboardingFlow
          color={"var(--primary-white-fff, #FFF)"}
          bg={"var(--secondary-purple-500, #6E71CC)"}
          section={"4"}
        />

        {/* DOB , Graduation and  currently working container  */}
        {/* {"form" ? <Onboardingform /> : <></>} */}

        {/* <OnboardingJoinus /> */}
        <Box
          display="inline-flex"
          alignItems="flex-start"
          gap="24px"
          ml="28px"
          mt="40px"
        >
          <Box
            display="flex"
            p="16px 40px 16px 39px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            borderRadius="16px"
            background="var(--primary-white-fff, #FFF)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
            >
              <g clip-path="url(#clip0_3_21908)">
                <path
                  d="M0 30.1714C0 19.6104 0 14.3299 2.05531 10.2962C3.8632 6.74798 6.74798 3.8632 10.2962 2.05531C14.3299 0 19.6104 0 30.1714 0H57.8286C68.3896 0 73.6701 0 77.7038 2.05531C81.252 3.8632 84.1368 6.74798 85.9447 10.2962C88 14.3299 88 19.6104 88 30.1714V57.8286C88 68.3896 88 73.6701 85.9447 77.7038C84.1368 81.252 81.252 84.1368 77.7038 85.9447C73.6701 88 68.3896 88 57.8286 88H30.1714C19.6104 88 14.3299 88 10.2962 85.9447C6.74798 84.1368 3.8632 81.252 2.05531 77.7038C0 73.6701 0 68.3896 0 57.8286V30.1714Z"
                  fill="#4087FC"
                />
                <path
                  d="M19.6938 25.1445C17.4952 25.1445 15.7129 27.1547 15.7129 29.6343V51.4098C15.7129 57.7329 20.2578 62.8588 25.8643 62.8588L49.4462 62.6344C51.6448 62.6344 53.4272 60.6243 53.4272 58.1446V36.1446C53.4272 29.8215 48.0337 25.1446 42.4272 25.1446L19.6938 25.1445Z"
                  fill="white"
                />
                <path
                  d="M58.8084 33.717C57.3858 35.1236 56.57 37.1537 56.57 39.2875V48.3995C56.57 50.5332 57.3858 52.5633 58.8084 53.97L67.6606 61.7665C69.4618 63.5476 72.2843 62.1049 72.2843 59.4033V28.7122C72.2843 26.0105 69.4618 24.5679 67.6606 26.3489L58.8084 33.717Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_21908">
                  <rect width="88" height="88" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <button
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                background: "var(--secondary-blue-500, #3470E4)",
                color: "var(--primary-white-fff, #FFF)",
                // fontFamily: "Open Sans",
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
            display="flex"
            p="16px 40px 16px 39px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            borderRadius="16px"
            background="var(--primary-white-fff, #FFF)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
            >
              <path
                d="M79.5393 40.6139C84.2121 40.6139 88.0001 36.8259 88.0001 32.1531C88.0001 27.4803 84.2118 23.6923 79.539 23.6923C74.8658 23.6923 71.0771 27.4807 71.0771 32.1539V40.6139H79.5393ZM55.8463 40.6139C60.5195 40.6139 64.3078 36.8256 64.3078 32.1524V8.46154C64.3078 3.78837 60.5195 0 55.8463 0C51.1731 0 47.3848 3.78836 47.3848 8.46154V32.1524C47.3848 36.8256 51.1731 40.6139 55.8463 40.6139Z"
                fill="#2EB67D"
              />
              <path
                d="M8.46066 47.3861C3.78788 47.3861 -0.000152588 51.1741 -0.000152588 55.8469C-0.000152588 60.5197 3.78825 64.3077 8.46102 64.3077C13.1342 64.3077 16.9229 60.5193 16.9229 55.8462V47.3861H8.46066ZM32.1537 47.3861C27.4805 47.3861 23.6922 51.1744 23.6922 55.8476V79.5385C23.6922 84.2116 27.4805 88 32.1537 88C36.8269 88 40.6152 84.2116 40.6152 79.5385V55.8476C40.6152 51.1744 36.8269 47.3861 32.1537 47.3861Z"
                fill="#E01E5A"
              />
              <path
                d="M47.3851 79.5393C47.3851 84.2121 51.1731 88.0001 55.8459 88.0001C60.5187 88.0001 64.3067 84.2117 64.3067 79.539C64.3067 74.8658 60.5183 71.0771 55.8452 71.0771L47.3851 71.0771L47.3851 79.5393ZM47.3851 55.8463C47.3851 60.5195 51.1734 64.3078 55.8466 64.3078L79.5375 64.3078C84.2107 64.3078 87.999 60.5195 87.999 55.8463C87.999 51.1731 84.2107 47.3848 79.5375 47.3848L55.8466 47.3848C51.1735 47.3848 47.3851 51.1731 47.3851 55.8463Z"
                fill="#ECB22E"
              />
              <path
                d="M40.6149 8.46066C40.6149 3.78789 36.8269 -0.000150978 32.1541 -0.000151182C27.4813 -0.000151387 23.6933 3.78825 23.6933 8.46103C23.6933 13.1342 27.4817 16.9229 32.1548 16.9229L40.6149 16.9229L40.6149 8.46066ZM40.6149 32.1537C40.6149 27.4805 36.8266 23.6922 32.1534 23.6922L8.46252 23.6922C3.78934 23.6922 0.000977137 27.4805 0.000976932 32.1537C0.000976728 36.8269 3.78934 40.6152 8.46251 40.6152L32.1534 40.6152C36.8265 40.6152 40.6149 36.8269 40.6149 32.1537Z"
                fill="#36C5F0"
              />
            </svg>
            <button
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                background: "var(--secondary-blue-500, #3470E4)",
                color: "var(--primary-white-fff, #FFF)",
                // fontFamily: "Open Sans",
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
        </Box>
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
            <Link to="/home/congrats">next</Link>
          </button>
        </Flex>
      </Box>
    </CommonLayout>
  );
};

export default OnboardingJoinus;
