import {
  Box,
  Flex,
  Grid,
  Heading,
  Hide,
  Image,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import arrow from "../../assets/allsvgimages/rightleftarrow.svg";
import uparrow from "../../assets/allsvgimages/uparrow.svg";
import downarrow from "../../assets/allsvgimages/downarrow.svg";
import ellipse from "../../assets/allsvgimages/ellipse.svg";
import ellipsemobile from "../../assets/allsvgimages/ellipsemobile.svg";
import axios from "axios";
import ScoreCard from "./ScoreCard";
import { Link } from "react-router-dom";

export const ResultScreen = () => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = React.useState("");
  const [sectionScores, setSectionScores] = useState([
    {
      sectionId: "650f14dde33d4e8ad514c27e",
      sectionScore: 10,
      sectionName: "VC - 1",
      isVideoSection: true,
      sectionMaxMarks: 10,
    },
    {
      sectionId: "650f14dfe33d4e8ad514c296",
      sectionScore: 15,
      sectionName: "Cognitive Ability",
      isVideoSection: false,
      sectionMaxMarks: 36,
    },
    {
      sectionId: "650f14e0e33d4e8ad514c2bc",
      sectionScore: 2,
      sectionName: "Attention to Detail",
      isVideoSection: false,
      sectionMaxMarks: 15.5,
    },
    {
      sectionId: "650f14e1e33d4e8ad514c2e7",
      sectionScore: 8,
      sectionName: "Verbal Ability",
      isVideoSection: false,
      sectionMaxMarks: 30,
    },
  ]);
  const [percentageScore, setPercentageScore] = useState(0);
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    //call the score api, and set the response in SetSectionScore
    // axios.get("", )
    // https://dash-board.up.railway.app/score
  }, []);
  useEffect(() => {
    let maxMarks = 0,
      marksObtained = 0;
    sectionScores.forEach((section) => {
      maxMarks += section.sectionMaxMarks;
      marksObtained += section.sectionScore;
    });
    const percentageScore = (marksObtained / maxMarks) * 100;
    setPercentageScore(percentageScore);
    if (maxMarks !== 0 && percentageScore >= 30) {
      setIsPassed(true);
    }
  }, [sectionScores]);

  localStorage.setItem(
    "auth",
    JSON.stringify(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJpYXQiOjE2OTUxNDIzNjN9.m4eJTxyZOsZCXJ8F0x58MTqQMyAJj8Sp6IqtHC-WV7Y"
    )
  );

  axios.patch("https://dash-board.up.railway.app/update-profile", {
    phone: "9963442007",
    ReferralCode: "TEST_CODE",
    profileImage: "https://example.com/test.jpg",
    dob: "1990-01-01",
    graduation: "2010-01-01",
    adharCard: false,
    work: false,
  });

  if (!value) {
    var bg2 = "#3470E4";
    var bg1 = "#F2F6FF";
    var c2 = "#F2F6FF";
    var c1 = "#3470E4";
  }

  if (value) {
    var bg1 = "#3470E4";
    var bg2 = "#F2F6FF";
    var c1 = "#F2F6FF";
    var c2 = "#3470E4";
  }
  console.log({ percentageScore });
  const correctSvg = (
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
  );
  const crossSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        fill="#ED0331"
      />
    </svg>
  );

  return (
    <Box>
      <Box
        background="#F2F6FF"
        maxW="1400px"
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

            <Hide below="md">
              <Box position="absolute">
                <Image src={ellipse} />
              </Box>
            </Hide>
            {/* Results heading container */}
            <Box
              maxW={["300px", "380px"]}
              mt={["16px", "87px"]}
              mx={["auto", "auto"]}
              textAlign={["center", "center"]}
              fontStyle="normal"
            >
              <Text
                color="#3470E4"
                fontFamily="Poppins"
                fontSize={["16px", "16px"]}
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
                {sectionScores.length > 0
                  ? isPassed
                    ? "Congratulations! You have cleared the MSAT!"
                    : "Sorry, you failed to clear the MSAT"
                  : "Please wait while we get your scores"}
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
              <Grid
                alignItems="flex-start"
                gap={["10px", "24px"]}
                w="100%"
                justifyContent="space-between"
                wrap={["wrap", "wrap", "wrap"]}
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
              >
                {sectionScores.map((section) => (
                  <ScoreCard
                    name={section.sectionName}
                    result={
                      (section.sectionScore / section.sectionMaxMarks) * 100 >=
                      30
                        ? "Passed"
                        : "Not clear"
                    }
                    marks={section.sectionScore}
                    maxMarks={section.sectionMaxMarks}
                  />
                ))}
                {/* results first row first column */}
                {/* <ScoreCard /> */}

                {/* results first row second column */}
                {/* <ScoreCard /> */}
              </Grid>

              {/* Results section container second row */}
              {/* 
            <Flex
            alignItems="flex-start"
            gap={["10px", "24px"]}
            w="100%"
            justifyContent="space-between"
            wrap={["wrap", "wrap", "nowrap"]}
          > */}
              {/* results first row first column */}
              {/* <ScoreCard /> */}

              {/* results first row second column */}
              {/* <ScoreCard /> */}
              {/* </Flex> */}
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
            h={["520px", "424px"]}
            borderRadius="16px"
            border="1px solid var(--neutral-grey-100, #E5E5E5)"
            bgColor="#FFF"
            boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
            overflow="hidden"
          >
            {/* course selection container heading */}

            <Flex
              display="flex"
              p="24px 12px 20px 12px"
              direction="column"
              justify="flex-end"
              alignItems="center"
              gap="13px"
              bgColor="var(--extended-yellow-100, #FFF3CC)"
              fontSize="16px"
              textAlign={["center", ""]}
            >
              <Box>
                Based on your MSAT result you have cleared cut off for{" "}
                {percentageScore >= 30
                  ? "1"
                  : percentageScore >= 10
                  ? "2"
                  : percentageScore >= 70
                  ? "3"
                  : percentageScore >= 80
                  ? "4"
                  : "0"}{" "}
                courses.
              </Box>
              <Heading
                m="0px"
                color="var(--primary-red-900, #0A0103)"
                textAlign="center"
                // fontFamily: "Poppins",
                fontSize="16px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="20px"
              >
                Select course that you want to apply for or Retake MSAT.
              </Heading>
            </Flex>

            {/* courses container */}
            <Box
              h={["270px", "250px"]}
              border="1px solid #E2E2E2"
              bgColor="#FFF"
              pt="13px"
              position="relative"
              overflow="hidden"
              fontFamily="Open Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
            >
              {/* courses continer headings */}
              <Flex>
                <Box
                  display="inline-block"
                  w="302px"
                  h="18px"
                  ml="54px"
                  color="var(--neutral-grey-900, #21191B)"
                >
                  Courses
                </Box>
                <Box
                  display="inline-block"
                  w="152px"
                  textAlign="center"
                  color="var(--neutral-grey-900, #21191B)"
                  ml="19px"
                >
                  Cut-off clear
                </Box>
              </Flex>

              {/* horizontal line */}

              <hr style={{ backgroundColor: "#CCC" }} />

              {/* courses selection list */}

              <RadioGroup onChange={setValue} value={value}>
                <VStack
                  flexDirection="column"
                  alignItems="flex-start"
                  gap="24px"
                  w={["300px", "440px"]}
                  mt="20px"
                  ml="24px"
                >
                  <Flex w="100%" justifyContent="space-between">
                    <Radio disabled={percentageScore < 50} w="100%">
                      {" "}
                      <Flex>
                        <Box
                          color="var(--primary-red-900, #0A0103)"
                          fontFamily="Open Sans"
                          fontSize={["14px", "16px"]}
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
                      </Flex>
                    </Radio>
                    <Box
                      // position="absolute"
                      w="24px"
                      h="24px"
                      flexShrink="0"
                      // top="71px"
                      // left="436px"
                    >
                      {percentageScore >= 30 ? correctSvg : crossSvg}
                    </Box>
                  </Flex>
                  <Flex w="100%" justifyContent="space-between">
                    <Radio value="2" disabled={percentageScore < 60}>
                      {" "}
                      <Box
                        color="var(--primary-red-900, #0A0103)"
                        fontFamily="Open Sans"
                        fontSize={["14px", "16px"]}
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
                    <Box
                      // position="absolute"
                      w="24px"
                      h="24px"
                      flexShrink="0"
                      // top="71px"
                      // left="436px"
                    >
                      {percentageScore >= 30 ? correctSvg : crossSvg}
                    </Box>
                  </Flex>
                  <Flex w="100%" justifyContent="space-between">
                    <Radio value="3" disabled={percentageScore < 70}>
                      {" "}
                      <Box
                        color="var(--neutral-grey-300, #CCC)"
                        fontFamily="Open Sans"
                        fontSize={["14px", "16px"]}
                        fontStyle="normal"
                        fontWeight="500"
                        lineHeight="24px"
                      >
                        Data Analyst{" "}
                      </Box>
                    </Radio>
                    <Box
                      // position="absolute"
                      w="24px"
                      h="24px"
                      flexShrink="0"
                      // top="71px"
                      // left="436px"
                    >
                      {percentageScore >= 40 ? correctSvg : crossSvg}
                    </Box>
                  </Flex>
                  <Flex w="100%" justifyContent="space-between">
                    <Radio value="4" disabled={percentageScore < 80}>
                      {" "}
                      <Box
                        color="var(--neutral-grey-300, #CCC)"
                        fontFamily="Open Sans"
                        fontSize={["14px", "16px"]}
                        fontStyle="normal"
                        fontWeight="500"
                        lineHeight="24px"
                      >
                        Android Development{" "}
                      </Box>
                    </Radio>
                    <Box
                      // position="absolute"
                      w="24px"
                      h="24px"
                      flexShrink="0"
                      // top="71px"
                      // left="436px"
                    >
                      {percentageScore >= 50 ? correctSvg : crossSvg}
                    </Box>
                  </Flex>
                </VStack>
              </RadioGroup>

              {/* vertical line  */}

              <Box
                borderLeft="1px solid #D9D9D9"
                h="278px"
                position="absolute"
                left="375px"
                top="13px"
              ></Box>

              {/* icons */}
            </Box>
            {/* buttons */}

            <Box
              display="inline-flex"
              alignItems="flex-start"
              gap="20px"
              mt="16px"
              ml={["20px", "184px"]}
              fontFamily="Open Sans"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
              letterSpacing="1.25px"
              textTransform="uppercase"
            >
              <button
                style={{
                  backgroundColor: bg1,
                  color: c1,
                  padding: "8px 16px",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                }}
              >
                <Link to="/home/onboardingform">confirm course</Link>
              </button>
              <button
                style={{
                  // backgroundColor: "#3470E4",
                  backgroundColor: bg2,
                  color: c2,
                  padding: "8px 16px",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                }}
              >
                retake msat
              </button>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Hide below="md">
        <Flex
          w={["300px", "1400px"]}
          h="70px"
          position="absolute"
          bottom="0px"
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
      </Hide>
    </Box>
  );
};
