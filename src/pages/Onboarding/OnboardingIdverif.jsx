import { Box, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import OnboardingFlow from "./OnboardingFlow";
import { Link } from "react-router-dom";
import { CommonLayout } from "../../components/CommonLayout";
import axios from "axios";

const OnboardingIdverif = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handlefilechange = (e) => {
    let token = JSON.parse(localStorage.getItem("auth"));
    setSelectedFile(e.target.file);
    console.log(e.target.value);
    // axios.patch(
    //   "https://dash-board.up.railway.app/update-profile",
    //   {
    //     adharCard: e.target.value,
    //   },
    //   { headers: { Authorization: token } }
    // );
  };
  return (
    <CommonLayout>
      <Box
        w="1179px"
        h="90vh"
        bgColor="var(--extended-blue-50, #F2F6FF)"
        ml={["0px", "50px"]}
        pt={["50px", "80px"]}
        position="relative"
      >
        {/*Onboarding flow contianer */}
        <OnboardingFlow
          color={"var(--primary-white-fff, #FFF)"}
          bg={"var(--secondary-purple-500, #6E71CC)"}
          section={"2"}
        />

        {/* <OnboardingIdverif /> */}
        <Box
          display="inline-flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="16px"
          ml="35px"
          mt="40px"
        >
          {/* Aadhar front side container */}

          <Flex
            flexDirection="column"
            alignItems="flex-start"
            gap="8px"
            w={["360px", "500px"]}
          >
            <Box
              color="var(--neutral-grey-900, #21191B)"
              fontFamily="Open Sans"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
            >
              Upload the front side of your Aadhaar for verification *
            </Box>
            <Flex alignItems="flex-start" gap="12px">
              <Input
                placeholder="Drag and drop here"
                type="file"
                onChange={handlefilechange}
                name="image1"
              />
              <Box w="48px" h="48px" p="8px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <mask
                    id="mask0_3_21960"
                    // style="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                  >
                    <rect width="32" height="32" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_3_21960)">
                    <path
                      d="M15.9993 23.3333C17.666 23.3333 19.0829 22.7502 20.25 21.584C21.4162 20.4169 21.9993 19 21.9993 17.3333C21.9993 15.6667 21.4162 14.2498 20.25 13.0827C19.0829 11.9164 17.666 11.3333 15.9993 11.3333C14.3327 11.3333 12.9158 11.9164 11.7487 13.0827C10.5825 14.2498 9.99935 15.6667 9.99935 17.3333C9.99935 19 10.5825 20.4169 11.7487 21.584C12.9158 22.7502 14.3327 23.3333 15.9993 23.3333ZM15.9993 20.6667C15.066 20.6667 14.2771 20.3444 13.6327 19.7C12.9882 19.0556 12.666 18.2667 12.666 17.3333C12.666 16.4 12.9882 15.6111 13.6327 14.9667C14.2771 14.3222 15.066 14 15.9993 14C16.9327 14 17.7216 14.3222 18.366 14.9667C19.0105 15.6111 19.3327 16.4 19.3327 17.3333C19.3327 18.2667 19.0105 19.0556 18.366 19.7C17.7216 20.3444 16.9327 20.6667 15.9993 20.6667ZM5.33268 28C4.59935 28 3.97179 27.7391 3.45002 27.2173C2.92735 26.6947 2.66602 26.0667 2.66602 25.3333V9.33333C2.66602 8.6 2.92735 7.97244 3.45002 7.45067C3.97179 6.928 4.59935 6.66667 5.33268 6.66667H9.53268L11.9993 4H19.9993L22.466 6.66667H26.666C27.3993 6.66667 28.0273 6.928 28.55 7.45067C29.0718 7.97244 29.3327 8.6 29.3327 9.33333V25.3333C29.3327 26.0667 29.0718 26.6947 28.55 27.2173C28.0273 27.7391 27.3993 28 26.666 28H5.33268ZM26.666 25.3333V9.33333H21.266L18.8327 6.66667H13.166L10.7327 9.33333H5.33268V25.3333H26.666Z"
                      fill="#3470E4"
                    />
                  </g>
                </svg>
              </Box>
            </Flex>
          </Flex>

          {/* Aadhar backside container */}
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            gap="8px"
            w={["360px", "500px"]}
          >
            <Box
              color="var(--neutral-grey-900, #21191B)"
              fontFamily="Open Sans"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
            >
              Upload the front side of your Aadhaar for verification *
            </Box>
            <Flex alignItems="flex-start" gap="12px">
              <Input
                placeholder="Drag and drop here"
                type="file"
                onChange={handlefilechange}
                name="image2"
              />
              {/* <Flex
                w="492px"
                h="48px"
                p="12px 125px"
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
                border="1px dashed var(--neutral-grey-400, #B3B3B3)"
                background="#FFF"
              >
                <Flex
                  w="242px"
                  h="24px"
                  justifyContent="center"
                  alignItems="flex-start"
                  gap="7px"
                  flexShrink="0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12ZM12 2L6.46 7.46L7.88 8.88L11 5.75V15H13V5.75L16.13 8.88L17.55 7.45L12 2Z"
                      fill="#87D5AE"
                    />
                  </svg>
                  <Box
                    color="var(--neutral-grey-800, #3B3435)"
                    textAlign="center"
                    fontFamily="Open Sans"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="24px"
                  >
                    Drag & drop here or{" "}
                    <span
                      style={{
                        color: "var(--secondary-blue-500, #3470E4)",
                        fontFamily: "Open Sans",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      Browse
                    </span>
                  </Box>
                </Flex>
              </Flex> */}
              <Box w="48px" h="48px" p="8px">
                {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="24" r="23.5" stroke="#D9D9D9" />
            </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <mask
                    id="mask0_3_21960"
                    // style="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                  >
                    <rect width="32" height="32" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_3_21960)">
                    <path
                      d="M15.9993 23.3333C17.666 23.3333 19.0829 22.7502 20.25 21.584C21.4162 20.4169 21.9993 19 21.9993 17.3333C21.9993 15.6667 21.4162 14.2498 20.25 13.0827C19.0829 11.9164 17.666 11.3333 15.9993 11.3333C14.3327 11.3333 12.9158 11.9164 11.7487 13.0827C10.5825 14.2498 9.99935 15.6667 9.99935 17.3333C9.99935 19 10.5825 20.4169 11.7487 21.584C12.9158 22.7502 14.3327 23.3333 15.9993 23.3333ZM15.9993 20.6667C15.066 20.6667 14.2771 20.3444 13.6327 19.7C12.9882 19.0556 12.666 18.2667 12.666 17.3333C12.666 16.4 12.9882 15.6111 13.6327 14.9667C14.2771 14.3222 15.066 14 15.9993 14C16.9327 14 17.7216 14.3222 18.366 14.9667C19.0105 15.6111 19.3327 16.4 19.3327 17.3333C19.3327 18.2667 19.0105 19.0556 18.366 19.7C17.7216 20.3444 16.9327 20.6667 15.9993 20.6667ZM5.33268 28C4.59935 28 3.97179 27.7391 3.45002 27.2173C2.92735 26.6947 2.66602 26.0667 2.66602 25.3333V9.33333C2.66602 8.6 2.92735 7.97244 3.45002 7.45067C3.97179 6.928 4.59935 6.66667 5.33268 6.66667H9.53268L11.9993 4H19.9993L22.466 6.66667H26.666C27.3993 6.66667 28.0273 6.928 28.55 7.45067C29.0718 7.97244 29.3327 8.6 29.3327 9.33333V25.3333C29.3327 26.0667 29.0718 26.6947 28.55 27.2173C28.0273 27.7391 27.3993 28 26.666 28H5.33268ZM26.666 25.3333V9.33333H21.266L18.8327 6.66667H13.166L10.7327 9.33333H5.33268V25.3333H26.666Z"
                      fill="#3470E4"
                    />
                  </g>
                </svg>
              </Box>
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
            <Link to="/home/onboardingconsent">next</Link>
          </button>
        </Flex>
      </Box>
    </CommonLayout>
  );
};

export default OnboardingIdverif;
