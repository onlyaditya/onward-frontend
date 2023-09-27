import {
  Box,
  Flex,
  Image,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import arrow from "../../assets/allsvgimages/rightleftarrow.svg";
import uparrow from "../../assets/allsvgimages/uparrow.svg";
import downarrow from "../../assets/allsvgimages/downarrow.svg";
import ellipse from "../../assets/allsvgimages/ellipse.svg";
import ellipsemobile from "../../assets/allsvgimages/ellipsemobile.svg";

export const ResultScreen = () => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Box
      background="#F2F6FF"
      maxW="100%"
      h="100vh"
      p={[
        "40px 16px 100px 16px",
        "64px 41px 104px 41px",
        "50px 83px 208px 83px",
      ]}
      overflow="scroll"
    >
      {/* flex container for resutls and course selection */}
      <Flex
        gap={["24px", "20px", "32px"]}
        h={["auto", "424px"]}
        flexWrap={["wrap", "nowrap"]}
      >
        {/*main contianer for results */}
        <Box
          w="711px"
          boxSizing="border-box"
          borderRadius={["12px", "16px"]}
          border="1px solid #E5E5E5"
          background="#FFF"
          boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
          height={[isActive ? "440px" : "140px", "auto"]}
          transition="height 0.5s"
          overflow="hidden"
          position="relative"
        >
          {/* ellipse */}

          <Box position="absolute">
            <Image src={ellipse} />
          </Box>
          {/* Results heading container */}
          <Box
            maxW={["231px", "380px"]}
            mt={["16px", "87px"]}
            mx={["12px", "auto"]}
            textAlign={["left", "center"]}
            fontStyle="normal"
          >
            <Text
              color="#3470E4"
              fontFamily="Poppins"
              fontSize={["0.1rem", "1.5rem"]}
              fontWeight="700"
              lineHeight={["20px", "32px"]}
            >
              MSAT Result
            </Text>
            <Text
              color="#544D4F)"
              fontFamily={["Open Sans", "Poppins"]}
              fontSize="16px"
              fontWeight={["400", "700"]}
              lineHeight={["24px", "20px"]}
              alignSelf="stretch"
            >
              Congratulations! You have cleared the MSAT!
            </Text>
          </Box>

          {/* Results Section Container */}
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            gap={["10px", "24px"]}
            mt={["16px", "40px"]}
            w="90%"
            mx="auto"
            mb={["60px", "0px"]}
          >
            {/* Results section container first row */}
            <Flex
              alignItems="flex-start"
              gap={["10px", "24px"]}
              w="100%"
              justifyContent="space-between"
              wrap={["wrap", "wrap", "nowrap"]}
            >
              {/* results first row first column */}
              <Flex
                // maxW={["314px"]}
                w={["100%", "100%"]}
                h={["63px"]}
                borderRadius="16px"
                border="1px solid #CFD0EE"
                background="#FFF"
                gap="11px"
              >
                <Flex
                  w="40px"
                  h="40px"
                  p="8px"
                  justifyContent="center"
                  alignItems="center"
                  flexShrink="0"
                  ml="8px"
                  mt="8px"
                  borderRadius="16px"
                  background="#F7F7FF"
                >
                  <Image src={arrow} />
                </Flex>
                <Flex
                  mt="9px"
                  // maxW={["240px"]}
                  w="100%"
                  mr={["14px"]}
                  wrap="wrap"
                >
                  <Flex w="100%" justifyContent="space-between">
                    <Text
                      display="inline-block"
                      color="#0A0103"
                      fontFamily="Open Sans"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="24px"
                      // marginRight="auto"
                    >
                      Coding Test
                    </Text>
                    <Text
                      display="inline-block"
                      color="#049402"
                      textAlign="right"
                      fontFamily="Open Sans;"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="24px"
                      // mr="auto"
                    >
                      Passed
                    </Text>
                  </Flex>
                  <Text
                    color="#544D4F)"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="24px"
                  >
                    Marks : 88/100{" "}
                  </Text>
                </Flex>
              </Flex>

              {/* results first row second column */}
              <Flex
                // maxW={["314px"]}
                w={["100%", "100%"]}
                h={["63px"]}
                borderRadius="16px"
                border="1px solid #CFD0EE"
                background="#FFF"
                gap="11px"
              >
                <Flex
                  w="40px"
                  h="40px"
                  p="8px"
                  justifyContent="center"
                  alignItems="center"
                  flexShrink="0"
                  ml="8px"
                  mt="8px"
                  borderRadius="16px"
                  background="#F7F7FF"
                >
                  <Image src={arrow} />
                </Flex>
                <Flex
                  mt="9px"
                  // maxW={["240px"]}
                  w="100%"
                  mr={["14px"]}
                  wrap="wrap"
                >
                  <Flex w="100%">
                    <Text
                      display="inline-block"
                      color="#0A0103"
                      fontFamily="Open Sans"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="24px"
                      marginRight="auto"
                    >
                      Coding Test
                    </Text>
                    <Text
                      display="inline-block"
                      color="#049402"
                      textAlign="right"
                      fontFamily="Open Sans;"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="24px"
                      // mr="auto"
                    >
                      Passed
                    </Text>
                  </Flex>
                  <Text
                    color="#544D4F)"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="24px"
                  >
                    Marks : 88/100{" "}
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            {/* Results section container second row */}

            <Flex
              alignItems="flex-start"
              gap={["10px", "24px"]}
              w="100%"
              justifyContent="space-between"
              wrap={["wrap", "wrap", "nowrap"]}
            >
              {/* results first row first column */}
              <Flex
                // maxW={["314px"]}
                w={["100%", "100%"]}
                h={["63px"]}
                borderRadius="16px"
                border="1px solid #CFD0EE"
                background="#FFF"
                gap="11px"
              >
                <Flex
                  w="40px"
                  h="40px"
                  p="8px"
                  justifyContent="center"
                  alignItems="center"
                  flexShrink="0"
                  ml="8px"
                  mt="8px"
                  borderRadius="16px"
                  background="#F7F7FF"
                >
                  <Image src={arrow} />
                </Flex>
                <Flex
                  mt="9px"
                  // maxW={["240px"]}
                  w="100%"
                  mr={["14px"]}
                  wrap="wrap"
                >
                  <Flex w="100%" justifyContent="space-between">
                    <Text
                      display="inline-block"
                      color="#0A0103"
                      fontFamily="Open Sans"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="24px"
                      // marginRight="auto"
                    >
                      Coding Test
                    </Text>
                    <Text
                      display="inline-block"
                      color="#049402"
                      textAlign="right"
                      fontFamily="Open Sans;"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="24px"
                      // mr="auto"
                    >
                      Passed
                    </Text>
                  </Flex>
                  <Text
                    color="#544D4F)"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="24px"
                  >
                    Marks : 88/100{" "}
                  </Text>
                </Flex>
              </Flex>

              {/* results first row second column */}
              <Flex
                // maxW={["314px"]}
                w={["100%", "100%"]}
                h={["63px"]}
                borderRadius="16px"
                border="1px solid #CFD0EE"
                background="#FFF"
                gap="11px"
              >
                <Flex
                  w="40px"
                  h="40px"
                  p="8px"
                  justifyContent="center"
                  alignItems="center"
                  flexShrink="0"
                  ml="8px"
                  mt="8px"
                  borderRadius="16px"
                  background="#F7F7FF"
                >
                  <Image src={arrow} />
                </Flex>
                <Flex
                  mt="9px"
                  // maxW={["240px"]}
                  w="100%"
                  mr={["14px"]}
                  wrap="wrap"
                >
                  <Flex w="100%">
                    <Text
                      display="inline-block"
                      color="#0A0103"
                      fontFamily="Open Sans"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="24px"
                      marginRight="auto"
                    >
                      Coding Test
                    </Text>
                    <Text
                      display="inline-block"
                      color="#049402"
                      textAlign="right"
                      fontFamily="Open Sans;"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="24px"
                      // mr="auto"
                    >
                      Passed
                    </Text>
                  </Flex>
                  <Text
                    color="#544D4F)"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="24px"
                  >
                    Marks : 88/100{" "}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            p="8px 16px"
            justifyContent="center"
            alignItems="center"
            gap="8px"
            borderBottomRadius="8px"
            background="#F2F6FF"
            color="#3470E4"
            display={["Flex", "none"]}
            position="absolute"
            bottom="0px"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <Text
              fontFamily="Open Sans"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
              letterSpacing="1.25px"
              textTransform="uppercase"
            >
              {!isActive ? "show more" : "show less"}
            </Text>
            <Image src={!isActive ? downarrow : uparrow} />
          </Flex>
        </Box>

        {/* container for courses */}
        <Box
          w="531px"
          borderRadius="16px"
          border="1px solid #E5E5E5"
          background="#FFF"
          boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
          overflow="hidden"
        >
          <Flex
            w="100%"
            p={["12px 5px 11px 16px", "24px 10px 20px 10px"]}
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
            gap={["7px", "13px"]}
            background="#FFF3CC"
            textAlign={["left", "center"]}
            lineHeight={["24px", "24px"]}
            fontStyle="normal"
          >
            <Text
              color="#3B3435"
              fontFamily="Open Sans"
              fontSize={["14px", "15px"]}
              fontWeight={["600", "600"]}
            >
              Based on your MSAT result you have cleared cut off for 2 courses.
            </Text>
            <Text
              color="#0A0103"
              fontFamily={["Open Sans", "Poppins"]}
              fontSize="16px"
              fontWeight={["600", "700"]}
            >
              Select course that you want to apply for or Retake MSAT.
            </Text>
          </Flex>
          <Box w="100%" h="251px" border="1px solid #E2E2E2" background="#FFF">
            <Flex
              mt="13px"
              ml="54px"
              color="#21191B"
              fontFamily="Open Sans"
              fontsize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
              justifyContent="space-between"
              mr="10%"
            >
              <Text>Courses</Text>
              <Text>Cut-off clear</Text>
            </Flex>
            <RadioGroup onChange={setValue} value={value}>
              <VStack
                flexDirection="column"
                alignItems="flex-start"
                gap="24px"
                w="88%"
                mt="20px"
                ml="28px"
              >
                <Radio value="1">
                  {" "}
                  <Flex
                    justifyContent="space-between"
                    // width="360px"
                    // gap="50px"
                  >
                    <Box
                      color="var(--primary-red-900, #0A0103)"
                      fontFamily="Open Sans"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="24px"
                    >
                      UX/UI Design{" "}
                      <Text
                        as="span"
                        color="var(--secondary-blue-500, #3470E4)"
                        fontFamily="Open Sans"
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight="600"
                        lineHeight="24px"
                      >
                        {" "}
                        (view details){" "}
                      </Text>
                    </Box>
                    <Box
                      w="24px"
                      h="24px"
                      // flexShrink="0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 6.99984L9 18.9998L3.5 13.4998L4.91 12.0898L9 16.1698L19.59 5.58984L21 6.99984Z"
                          fill="#6FCD9E"
                        />
                      </svg>
                    </Box>
                  </Flex>
                </Radio>
                <Radio value="2">
                  {" "}
                  <Box
                    color="var(--primary-red-900, #0A0103)"
                    // fontFamily="Open Sans"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    Web Development{" "}
                    <Text
                      as="span"
                      color="var(--secondary-blue-500, #3470E4)"
                      fontFamily="Open Sans"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="24px"
                    >
                      {" "}
                      (view details){" "}
                    </Text>
                  </Box>
                </Radio>
                <Radio value="3" disabled="true">
                  {" "}
                  <Box
                    color="var(--neutral-grey-300, #CCC)"
                    // fontFamily="Open Sans"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="24px"
                  >
                    Data Analyst{" "}
                  </Box>
                </Radio>
                <Radio value="4">
                  {" "}
                  <Box
                    color="var(--neutral-grey-300, #CCC)"
                    // fontFamily="Open Sans"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="24px"
                  >
                    Android Development{" "}
                  </Box>
                </Radio>
              </VStack>
            </RadioGroup>
          </Box>
        </Box>
      </Flex>
      <Flex
        maxW="100%"
        p="16px 24px 16px 700px"
        justify="flex-end"
        align="center"
        gap="24px"
        mt="120px"
        bgColor="#FFF"
        boxShadow="0px -1px 0px 0px #D9D9D9"
        flexShrink="0"
      >
        <Text m="0px">Don’t want to proceed further?</Text>
        <button
          style={{
            backgroundColor: "#F2F6FF",
            color: "#3470E4",
            fontFamily: "Open Sans",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "24px",
            letterSpacing: "1.25px",
            textTransform: "uppercase",
            padding: "8px 16px",
            borderRadius: "8px",
            textTransform: "uppercase",
          }}
        >
          Explore dashboard
        </button>
      </Flex>
    </Box>
  );
};
