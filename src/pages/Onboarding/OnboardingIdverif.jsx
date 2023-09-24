import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import OnboardingFlow from "./OnboardingFlow";
import { Link } from "react-router-dom";
import { CommonLayout } from "../../components/CommonLayout";
import axios from "axios";

const OnboardingIdverif = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  console.log(selectedFile);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleBrowseClick = () => {
    // Trigger the file input when the "Browse" text is clicked
    fileInputRef.current.click();
  };
  // const [selectedFile, setSelectedFile] = useState(null);

  // const formData = new FormData();
  // // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);
  // };

  // const handlefilechange = async (e) => {
  //   let token = JSON.parse(localStorage.getItem("auth"));

  //   // setSelectedFile(e.target.file);

  //   formData.append("image1", e.target.value);

  //   console.log(e.target.value);

  //   // let res = await axios.post(
  //   //   "https://dash-board.up.railway.app/uploads",
  //   //   formData,
  //   //   { headers: { Authorization: token } }
  //   // );

  //   // console.log(res);
  // };

  // const handlefilechange2 = async (e) => {
  //   let token = JSON.parse(localStorage.getItem("auth"));

  //   // setSelectedFile(e.target.file);

  //   formData.append("image2", e.target.value);

  //   console.log(formData);

  //   let res = await axios.post(
  //     "https://dash-board.up.railway.app/uploads",
  //     formData,
  //     { headers: { Authorization: token } }
  //   );

  //   console.log(res);
  // };

  return (
    <CommonLayout rightsidebar={"no"} bottomnav={"no"}>
      <Box
        flexGrow="1"
        h="89vh"
        bgColor="#F2F6FF"
        py={["12px", "24px"]}
        px={["16px", "28px"]}
        position="relative"
        overflow="scroll"
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
          mt="40px"
        >
          {/* Aadhar front side container */}

          <Flex
            flexDirection="column"
            alignItems="flex-start"
            gap="8px"
            w={["343px", "500px"]}
          >
            <Box
              color="var(--neutral-grey-900, #21191B)"
              fontFamily="Open Sans"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
            >
              Upload the front side of your Aadhaar *
            </Box>
            <Flex alignItems="center" gap={["5px", "12px"]}>
              <Box
                border="2px dashed #ccc"
                padding="1rem"
                textAlign="center"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                cursor="pointer"
                borderRadius="8px"
                w={["300px", "492px"]}
                bgColor="#fff"
              >
                {selectedFile ? (
                  <Text>Selected File: {selectedFile.name}</Text>
                ) : (
                  <Flex gap="10px">
                    Drag & drop here or
                    <Text
                      onClick={handleBrowseClick}
                      style={{ cursor: "pointer" }}
                      color="#3470E4"
                      fontWeight="600"
                    >
                      Browse
                    </Text>
                  </Flex>
                )}
                <input
                  type="file"
                  id="fileInput"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  ref={fileInputRef}
                />
              </Box>
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
            w={["343px", "500px"]}
          >
            <Box
              color="var(--neutral-grey-900, #21191B)"
              fontFamily="Open Sans"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
            >
              Upload the back side of your Aadhaar *
            </Box>
            <Flex alignItems="center" gap={["5px", "12px"]}>
              <Box
                border="2px dashed #ccc"
                padding="1rem"
                textAlign="center"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                cursor="pointer"
                borderRadius="8px"
                w={["300px", "492px"]}
                bgColor="#fff"
              >
                {selectedFile ? (
                  <Text>Selected File: {selectedFile.name}</Text>
                ) : (
                  <Flex gap="10px">
                    Drag & drop here or
                    <Text
                      onClick={handleBrowseClick}
                      style={{ cursor: "pointer" }}
                      color="#3470E4"
                      fontWeight="600"
                    >
                      Browse
                    </Text>
                  </Flex>
                )}
                <input
                  type="file"
                  id="fileInput"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  ref={fileInputRef}
                />
              </Box>

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
            <Link to="/home/onboardingconsent">next</Link>
          </button>
        </Flex>
      </Box>
    </CommonLayout>
  );
};

export default OnboardingIdverif;
