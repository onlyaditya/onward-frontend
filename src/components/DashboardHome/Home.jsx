import React, { useEffect, useState } from "react";
import calender from "../../assets/allsvgimages/calender.svg";
import albert from "../../assets/allsvgimages/albert.svg";
import roundedImage from "../../assets/allsvgimages/roundImage.svg";
import lineImage from "../../assets/allsvgimages/lineImage.svg";
import fireLogo from "../../assets/allsvgimages/fireLogo.svg";
import alarm from "../../assets/allsvgimages/alarm.svg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  Image,
  Button,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Modal,
} from "@chakra-ui/react";
import StartMsat from "./StartMsat";
import ShowRegistrationAlert from "./ShowRegistrationAlert";
import { Link } from "react-router-dom";
import { getUserDetails } from "../../redux/authReducer/auth.action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Home = () => {
  const [isConfirmClicked, setIsConfirmClicked] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { activeStep, setActiveStep } = useSteps({ index: 0 });
  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  const { userDetails } = useSelector((store) => store.authReducer);



  const generateAssessment = async () => {
    const apiUrl = `https://assess-test-api.masaischool.com/student/assessments/generate-test`;

    const requestData = {
      uniqueID: "97498882403809",
      assessmentTemplateId: "650f817ae33d4e8ad51707f6",
      redirectClientUrl: "http://localhost:3000/results",
      email: "rajesh.pachika@gmail.com",
      callback_url:
        "https://zealous-jay-jersey.cyclic.cloud/v2/profile-assessment/test-platform-callback",
    };

    const headers = {
      "client-id": "62fcc9206e3a3a7e54bf3a52",
    };

    try {
      const response = await axios
      .post(apiUrl, requestData, { headers });
      // const assessmentUrl = response.data.url;
      window.location.href = `${response.data.url}`;
      console.log(response.data.url);
      console.log("Generated assessment URL:");
    } catch (error) {
      console.error("Error generating assessment:", error);
    }
  };



  const handleCourses = (val) => {
    setSelectedCourse(val);
    console.log(val);
  };

  console.log(activeStep);

  const handleStepCompletion = (index) => {
    console.log(index);
    setActiveStep(index);
  };

  // Handle the "CONFIRM" button click inside the modal
  const handleConfirm = () => {
    setIsConfirmClicked(true);
    onClose(); // Close the modal if needed
    generateAssessment();
  };

  const [registerAccordion, setRegisterAccordion] = useState(false);
  const [msatAccordion, setMsatAccordion] = useState(false);
  const [onboardingAccordion, setOnboardingAccordion] = useState(false);

  const [blurBackground, setBlurBackground] = useState(false);

  useEffect(() => {
    // Show the alert for 5 seconds
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
        setBlurBackground(false); // Remove the blur effect
        handleStepCompletion(1);
      }, 5000);
    }
  }, [showAlert]);

  return (
    <Box
      width={["343px","100%"]}
      display="inline-flex"
      padding="16px 251px 0px 24px"
      alignItems="center"
    >
      <Box>
        <Box
          display="flex"
          gap={3}
          fontFamily="Open Sans"
          fontSize={16}
          fontStyle="normal"
          marginBottom={4}
        >
          <Text
            fontFamily={"Open Sans"}
            fontStyle={"normal"}
            fontWeight={"400"}
            fontSize={{ base: "14px", md: "24px" }}
            color={"#000"}
            lineHeight={"24px"}
          >Hey {" "}
            {userDetails?.userName}!
          </Text>
          <Text
            fontFamily={"Open Sans"}
            fontStyle={"normal"}
            fontWeight={"600"}
            fontSize={{ base: "14px", md: "24px" }}
            color={"#21191B"}
            lineHeight={"24px"}
          >
            Welcome to Masai!
          </Text>
        </Box>
        <Box>
          <Text
            color="var(--primary-red-900, #0a0103)"
            fontSize={"24px"}
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight={700}
            lineHeight={"32px"}
            marginBottom={"24px"}
          >
            Start Your Journey in{" "}
            <Text color={"#ed0331"} as={"sapn"}>
              3 Steps
            </Text>
          </Text>
        </Box>

        <Stepper
          index={activeStep}
          orientation="vertical"
          gap="24px"
          completedSteps={completedSteps}
        >
          <Step key={0}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepDescription>
                <Box
                  width={{ base: "310px", md: "80vw", lg: "571px" }}
                  borderRadius="8px"
                  bgColor={
                    registerAccordion
                      ? "#fff"
                      : "var(--secondary-purple-500, #6E71CC)"
                  }
                  boxShadow="0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);"
                >
                  {showAlert && (
                    <Box
                      width={"100%"}
                      h={"100%"}
                      bgColor={"transparent"}
                      top={-20}
                      position={"absolute"}
                      zIndex={"1000000"}
                    >
                      {showAlert && (
                        <ShowRegistrationAlert showAlert={showAlert} />
                      )}
                    </Box>
                  )}

                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem border="0px" padding="0px 16px 16px 16px">
                      <AccordionButton
                        border="0px"
                        _hover={{ bg: "none" }}
                        display="flex"
                        justifyContent="space-between"
                        onClick={() => setRegisterAccordion(!registerAccordion)}
                      >
                        <Text
                          fontSize={{ base: "16px", md: "20px" }}
                          fontWeight={{ base: "600", md: "700" }}
                          line-height={{ base: "24px", md: "28px" }}
                          color={
                            registerAccordion
                              ? "black"
                              : "var(--primary-white-fff, #FFF)"
                          }
                        >
                          Register For Free Webinar
                        </Text>

                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel
                        display="flex"
                        flexDirection="column"
                        border="border: 1px solid var(--neutral-grey-100, #E5E5E5)"
                        background="#FFF"
                        borderRadius="12px"
                      >
                        <Flex flexDirection="column" gap="16px">
                          <Flex bgColor="#FFEBF0">
                            <Box
                              display="flex"
                              flexDirection="column"
                              gap="10px"
                            >
                              <Text
                                fontFamily="Poppins"
                                fontSize={{ base: "16px", md: "18px" }}
                                fontWeight="700"
                                line-height={{ base: "20px", md: "24px" }}
                              >
                                Learn to build amazing tools using ChatGPT in
                                just 60 minutes
                              </Text>
                              <Flex flexDir={"column"}>
                                <Text
                                  color="var(--neutral-grey-900, #21191B)"
                                  fontWeight="600"
                                  lineHeight="24px"
                                  fontSize={{ base: "14px", md: "16px" }}
                                >
                                  By Albert Sebastian
                                </Text>
                                <Text
                                  color="var(--neutral-grey-700, #544D4F)"
                                  fontFamily="Open Sans"
                                  fontSize="14px"
                                  fontWeight={{ base: "600", md: "400" }}
                                  lineHeight="24px"
                                >
                                  Promt Engineer,Masai
                                </Text>
                              </Flex>
                              <Flex>
                                <Image src={calender} />
                                <Text
                                  color="var(--neutral-grey-900, #21191B)"
                                  fontFamily="Open Sans"
                                  fontSize="14px"
                                  fontWeight="600"
                                  lineHeight="24px"
                                  textTransform="capitalize"
                                >
                                  26th august, saturday
                                </Text>
                              </Flex>
                              <Flex display={{ base: "flex", md: "none" }}>
                                <Image src={alarm} />
                                <Text
                                  color="var(--neutral-grey-900, #21191B)"
                                  fontFamily="Open Sans"
                                  fontSize="14px"
                                  fontWeight="600"
                                  lineHeight="24px"
                                  textTransform="capitalize"
                                >
                                  3:00 - 4:00pm
                                </Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Image src={albert} alt="Albert" />
                            </Box>
                          </Flex>
                          <Flex
                            flexDirection="column"
                            gap="12px"
                            alignItems="center"
                            alignSelf="stretch"
                          >
                            <Text
                              color="#000"
                              fontFamily="Poppins"
                              fontSize={{ base: "15px", md: "20px" }}
                              fontStyle="normal"
                              fontWeight={{ base: "600", md: "700" }}
                              lineHeight={{ base: "24px", md: "28px" }}
                            >
                              A Prompt Engineering Webinar
                            </Text>
                            <Flex
                              gap="10px"
                              alignItems="center"
                              display={{ base: "none", md: "flex" }}
                            >
                              <Box>
                                <Text
                                  color="#000"
                                  fontFamily="Open Sans"
                                  fontSize="14px"
                                  fontStyle="normal"
                                  fontWeight="600"
                                  lineHeight="24px"
                                >
                                  06:00
                                </Text>
                                <Text
                                  color="#000"
                                  fontFamily="Open Sans"
                                  fontSize="12px"
                                  fontStyle="normal"
                                  fontWeight="400"
                                  lineHeight="16px"
                                  flexShrink="0"
                                >
                                  PM
                                </Text>
                              </Box>
                              <Flex alignItems="center">
                                <Image src={roundedImage} />
                                <Image src={lineImage} />
                              </Flex>
                              <Box>
                                <Text
                                  color="#000"
                                  fontFamily="Open Sans"
                                  fontSize="14px"
                                  fontStyle="normal"
                                  fontWeight="600"
                                  lineHeight="24px"
                                >
                                  07:30
                                </Text>
                                <Text
                                  color="#000"
                                  fontFamily="Open Sans"
                                  fontSize="12px"
                                  fontStyle="normal"
                                  fontWeight="400"
                                  lineHeight="16px"
                                  flexShrink="0"
                                >
                                  PM
                                </Text>
                              </Box>
                            </Flex>
                            <Box
                              display="flex"
                              w="full"
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Button
                                display={activeStep === 0 ? "block" : "none"}
                                onClick={() => {
                                  setShowAlert(true);
                                  setBlurBackground(true);
                                }}
                                fontFamily="Open Sans"
                                fontSize={{ base: "12px", md: "14px" }}
                                fontStyle="normal"
                                fontWeight="600"
                                lineHeight={{ base: "16px", md: "24px" }}
                                letterSpacing="1.25px"
                                textTransform="upperCase"
                                bgColor="var(--secondary-blue-500, #3470E4)"
                                w="full"
                                padding="8px 16px"
                                borderRadius="8px"
                                color={"#fff"}
                                _hover={"none"}
                              >
                                Register now with 1 click
                              </Button>
                              <Button
                                display={activeStep >= 1 ? "block" : "none"}
                                fontFamily="Open Sans"
                                fontSize={{ base: "12px", md: "14px" }}
                                fontStyle="normal"
                                fontWeight="600"
                                lineHeight={{ base: "16px", md: "24px" }}
                                letterSpacing="1.25px"
                                textTransform="upperCase"
                                bgColor="var(--secondary-blue-500, #3470E4)"
                                w="full"
                                padding="8px 16px"
                                borderRadius="8px"
                              >
                                <Link to="/activity/detail/1">
                                  Starts in 3Days 12 hours
                                </Link>
                              </Button>
                            </Box>
                            <Flex alignItems="flex-end" gap="7px">
                              <Box>
                                <Image src={fireLogo} />
                              </Box>
                              <Text
                                color="#000"
                                fontFamily="Open Sans"
                                fontSize="10.816px"
                                fontStyle="normal"
                                fontWeight="400"
                                lineHeight="135.5%"
                              >
                                <Text as="span" color="red">
                                  924
                                </Text>
                                people have already registered
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              </StepDescription>
            </Box>

            <StepSeparator border="1px dashed #BBB" />
          </Step>

          <Step key={1}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepDescription>
                <Box
                  // width="571px"
                  width={{ base: "310px", md: "80vw", lg: "571px" }}
                  borderRadius="8px"
                  bgColor={msatAccordion ? "#fff" : "#6E71CC"}
                  boxShadow="0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);"
                >
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem border="0px">
                      <AccordionButton
                        border="0px"
                        _hover={{ bg: "none" }}
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                        onClick={() => setMsatAccordion(!msatAccordion)}
                      >
                        <Box textAlign="left">
                          <Text
                            fontSize="20px"
                            fontWeight={{ base: "600", md: "700" }}
                            line-height="28px"
                            color={msatAccordion ? "#131010" : "#FFF"}
                          >
                            Finish MSAT
                          </Text>
                          <Text
                            fontFamily="Open Sans"
                            fontSize={{ base: "14px", md: "16px" }}
                            fontStyle="normal"
                            fontWeight="400"
                            lineHeight="24px"
                            color={msatAccordion ? "#000" : "#FFF"}
                          >
                            (Masai School Admission Test)
                          </Text>
                        </Box>

                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel
                        display="flex"
                        flexDirection="column"
                        gap="16px"
                        border="border: 1px solid var(--neutral-grey-100, #E5E5E5) background: #FFF;"
                        borderRadius={{ base: "12px", md: "8px" }}
                        flexShrink="0"
                      >
                        <iframe
                          width="100%"
                          height="302px"
                          borderRadius="12px"
                          src="https://www.youtube.com/embed/cA80lsg0mlo"
                          title="An Insight into our MSAT (Masai School Admissions Test)"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                        <Box
                          display="flex"
                          alignItems="center"
                          flexDirection="row-reverse"
                        >
                          <Button
                            onClick={() => {
                              onOpen();
                              handleStepCompletion(2);
                            }}
                            borderRadius="8px"
                            background="var(--primary-white-fff, #FFF)"
                            border="1px solid var(--neutral-grey-300, #CCC)"
                            width={{ base: "100%", md: "258px" }}
                            padding="12px 20px"
                          >
                            Start Msat
                          </Button>
                          <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent background="var(--primary-white-fff, transparent)">
                              <ModalBody>
                                <StartMsat
                                  onConfirm={handleConfirm}
                                  onClose={onClose}
                                  handleCourses={handleCourses}
                                  selectedCourse={selectedCourse}
                                />
                              </ModalBody>
                            </ModalContent>
                          </Modal>
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              </StepDescription>
            </Box>

            <StepSeparator border="1px dashed #BBB" />
          </Step>

          <Step key={2}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepDescription>
                <Box
                  // width="571px"
                  width={{ base: "310px", md: "80vw", lg: "571px" }}
                  borderRadius="8px"
                  bgColor={onboardingAccordion ? "#fff" : "#6E71CC"}
                  boxShadow="0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);"
                >
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem border="0px">
                      <AccordionButton
                        border="0px"
                        _hover={{ bg: "none" }}
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                        onClick={() =>
                          setOnboardingAccordion(!onboardingAccordion)
                        }
                      >
                        <Box textAlign="left">
                          <Text
                            fontSize="20px"
                            fontWeight="700"
                            line-height="28px"
                            color={onboardingAccordion ? "#000" : "#fff"}
                          >
                            Complete Onboarding
                          </Text>
                          <Text
                            color={onboardingAccordion ? "#000" : "#fff"}
                            fontFamily="Open Sans"
                            fontSize="16px"
                            fontStyle="normal"
                            fontWeight="400"
                            lineHeight="24px"
                          >
                            (Web Development Course
                            <Text
                              as="span"
                              fontSize="14px"
                              fontStyle="normal"
                              fontWeight="400"
                              lineHeight="24px"
                              textDecorationLine={"underline"}
                            >
                              {" "}
                              change)
                            </Text>
                          </Text>
                        </Box>

                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel
                        display="flex"
                        flexDirection="column"
                        gap="16px"
                        border="border: 1px solid var(--neutral-grey-100, #E5E5E5) background: #FFF;"
                        borderRadius="12px"
                        flexShrink="0"
                      >
                        <iframe
                          width="100%"
                          height="302px"
                          borderRadius="12px"
                          src="https://www.youtube.com/embed/ErIP2CNZMks"
                          title="An insight into our Onboarding Process"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                        <Box
                          display="flex"
                          alignItems="center"
                          flexDirection="row-reverse"
                        >
                          <Button
                            borderRadius="8px"
                            background="var(--primary-white-fff, #FFF)"
                            border="1px solid var(--neutral-grey-300, #CCC)"
                            width="258px"
                            padding="12px 20px"
                          >
                            start onboarding
                          </Button>
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              </StepDescription>
            </Box>

            <StepSeparator border="1px dashed #BBB" />
          </Step>
        </Stepper>
      </Box>
    </Box>
  );
};

export default Home;
