import React, { useState } from "react";
import styles from "./Home.module.css";
import calender from "../../assets/allsvgimages/calender.svg";
import albert from "../../assets/allsvgimages/albert.svg";
import roundedImage from "../../assets/allsvgimages/roundImage.svg";
import lineImage from "../../assets/allsvgimages/lineImage.svg";
import fireLogo from "../../assets/allsvgimages/fireLogo.svg";
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
  StepTitle,
  Stepper,
  useSteps,
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  Modal,
} from "@chakra-ui/react";
import StartMsat from "./StartMsat";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const Home = () => {
  const [selectedCourse, setSelectedCourse] = useState(true);
  const [completedSteps, setCompletedSteps] = useState([false, false]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const handleCourses=(val)=>{
      setSelectedCourse(false)
  }

  const handleStepCompletion = (stepIndex) => {
    // Make a copy of the completedSteps array and update the specific step as completed
    const updatedCompletedSteps = [...completedSteps];
    updatedCompletedSteps[stepIndex] = true;

    // Set the updated completed steps
    setCompletedSteps(updatedCompletedSteps);
    console.log(`Step ${stepIndex} completed.`); // Add this for debugging
  };

  const [isConfirmClicked, setIsConfirmClicked] = useState(false);

  // Handle the "CONFIRM" button click inside the modal
  const handleConfirm = () => {
    setIsConfirmClicked(true);
    onClose(); // Close the modal if needed
  };

  // Redirect to /test when isConfirmClicked is true
  if (isConfirmClicked) {
    console.log("Redirecting to /test");
    window.location.href = "/test";
  }


  return (
    <Box
      width="100%"
      display="inline-flex"
      padding="16px 251px 0px 24px"
      alignItems="center"
    >
      <Box>
        <Box className={styles.student_greeting_heading}>
          <Text>Hey Abhishek!</Text>
          <Text>Welcome to Masai!</Text>
        </Box>
        <Box className={styles.main_heading}>
          <Text>
            Start Your Journey in <span>3 Steps</span>
          </Text>
        </Box>

        <Stepper
          index={activeStep}
          orientation="vertical"
          gap="20px"
          completedSteps={completedSteps}
          onChange={(newStepIndex) => {
            // This function will be called when the active step changes.
            // You can perform actions or updates based on the newStepIndex here.
            console.log(`Active step changed to step ${newStepIndex}`);
          }}
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
                  width="571px"
                  border="1px"
                  borderRadius="8px"
                  bgColor=" var(--secondary-purple-500, #6E71CC)"
                  boxShadow="0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);"
                >
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem border="0px" padding="0px 16px 16px 16px">
                      <AccordionButton
                        border="0px"
                        _hover={{ bg: "none" }}
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Text
                          fontSize="20px"
                          fontWeight="700"
                          line-height="28px"
                          color="var(--primary-white-fff, #FFF);"
                        >
                          Register For Free Webinar
                        </Text>

                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel
                        display="flex"
                        flexDirection="column"
                        border="border: 1px solid var(--neutral-grey-100, #E5E5E5);
background: #FFF;"
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
                                fontSize="18px"
                                fontWeight="700"
                                lineHeight="24px"
                              >
                                Learn to build amazing tools using ChatGPT in
                                just 60 minutes
                              </Text>
                              <Flex>
                                <Text
                                  color="var(--neutral-grey-900, #21191B)"
                                  fontWeight="600"
                                  lineHeight="24px"
                                  fontSize="16px"
                                >
                                  By Albert Sebastian
                                </Text>
                                <Text
                                  color="var(--neutral-grey-700, #544D4F)"
                                  fontFamily="Open Sans"
                                  fontSize="14px"
                                  fontWeight="400"
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
                              fontSize="20px"
                              fontStyle="normal"
                              fontWeight="700"
                              lineHeight="28px"
                              textAlign="center"
                            >
                              A Prompt Engineering Webinar
                            </Text>
                            <Flex gap="10px" alignItems="center">
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
                                onClick={() => handleStepCompletion(0)}
                                fontFamily="Open Sans"
                                fontSize="14px"
                                fontStyle="normal"
                                fontWeight="600"
                                lineHeight="24px"
                                letterSpacing="1.25px"
                                textTransform="upperCase"
                                bgColor="var(--secondary-blue-500, #3470E4)"
                                w="full"
                                padding="8px 16px"
                                borderRadius="8px"
                              >
                                Register now with 1 click
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

            <StepSeparator />
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
                
                  width="571px"
                  border="1px"
                  borderRadius="8px"
                  bgColor=" var(--secondary-purple-500, #6E71CC)"
                  boxShadow="0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);"
                >
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem border="0px" padding="0px 16px 16px 16px">
                      <AccordionButton
                        border="0px"
                        _hover={{ bg: "none" }}
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                      >
                        <Box textAlign="left">
                          <Text
                            fontSize="20px"
                            fontWeight="700"
                            line-height="28px"
                            color="var(--primary-white-fff, #FFF);"
                          >
                            Finish MSAT
                          </Text>
                          <Text
                            fontFamily="Open Sans"
                            fontSize="16px"
                            fontStyle="normal"
                            fontWeight="400"
                            lineHeight="24px"
                            color="var(--primary-white-fff, #FFF)"
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
                        borderRadius="12px"
                        flexShrink="0"
                      >
                        <iframe
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
                          onClick={onOpen}
                            borderRadius="8px"
                            background="var(--primary-white-fff, #FFF)"
                            border="1px solid var(--neutral-grey-300, #CCC)"
                            width="258px"
                            padding="12px 20px"
                          >
                            Start Msat
                          </Button>
                          <Modal isOpen={isOpen} onClose={onClose} >
                            <ModalOverlay />
                            <ModalContent background="var(--primary-white-fff, transparent)">
                              <ModalBody>
                                <StartMsat onConfirm={handleConfirm} onClose={onClose} handleCourses={handleCourses} selectedCourse={selectedCourse}/>
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

            <StepSeparator />
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
                  width="571px"
                  borderRadius="8px"
                  bgColor=" var(--secondary-purple-500, #6E71CC)"
                  boxShadow="0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);"
                >
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem border="0px" padding="0px 16px 16px 16px">
                      <AccordionButton
                        border="0px"
                        _hover={{ bg: "none" }}
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                      >
                        <Box textAlign="left">
                          <Text
                            fontSize="20px"
                            fontWeight="700"
                            line-height="28px"
                            color="var(--primary-white-fff, #FFF);"
                          >
                            Complete Onboarding
                          </Text>
                          <Text
                            color={"var(--extended-yellow-100, #FFF3CC)"}
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
                          width="972"
                          height="547"
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

            <StepSeparator />
          </Step>
        </Stepper>
      </Box>
    </Box>
  );
};

// const Home = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.container_div}>
//         <div className={styles.student_greeting_heading}>
//           <p>Hey Abhishek!</p>
//           <p>Welcome to Masai!</p>
//         </div>
//         <div className={styles.main_heading}>
//           <p>
//             Start Your Journey in <span>3 Steps</span>
//           </p>
//         </div>
//         <div className={styles.nested_container_first}>
//           <Flex gap="24px">
//             <Box
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               w="48px"
//               h="48px"
//               bgColor="var(--extended-purple-200, #B7B8E5)"
//               borderRadius="57px"
//               padding="9px"
//               flexShrink="0"
//             >
//               <Box
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 w="30px"
//                 h="30px"
//                 bgColor="var(--secondary-purple-500, #6E71CC)"
//                 borderRadius="16px"
//                 padding="7px"
//                 flexShrink="0"
//               >
//                 <Box
//                   display="flex"
//                   w="16px"
//                   h="16px"
//                   justifyContent="center"
//                   flexShrink="0"
//                   alignItems="center"
//                   color="var(--primary-white-fff, #FFF);"
//                   fontFamily="Open Sans"
//                   fontSize="14px"
//                   fontWeight="600"
//                   letterSpacing="1.25px"
//                   lineHeight="24px"
//                 >
//                   1
//                 </Box>
//               </Box>
//             </Box>
//             <Box
//             width="571px"
//               border="1px"
//               borderRadius="8px"
//               bgColor=" var(--secondary-purple-500, #6E71CC)"
//               boxShadow="0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);"
//             >
//               <Accordion defaultIndex={[0]} allowMultiple >
//                 <AccordionItem border="0px" padding="0px 16px 16px 16px" >
//                   <AccordionButton
//                     border="0px"
//                     _hover={{ bg: "none" }}
//                     display="flex"
//                     justifyContent="space-between"
//                   >
//                     <Text
//                       fontSize="20px"
//                       fontWeight="700"
//                       line-height="28px"
//                       color="var(--primary-white-fff, #FFF);"
//                     >
//                       Register For Free Webinar
//                     </Text>

//                     <AccordionIcon />
//                   </AccordionButton>
//                   <AccordionPanel
//                     display="flex"
//                     flexDirection="column"
//                     border="border: 1px solid var(--neutral-grey-100, #E5E5E5);
// background: #FFF;"
//                     borderRadius="12px"
//                   >
//                     <Flex flexDirection="column" gap="16px">
//                       <Flex bgColor="#FFEBF0" >
//                         <Box display="flex" flexDirection="column" gap="10px">
//                           <Text
//                             fontFamily="Poppins"
//                             fontSize="18px"
//                             fontWeight="700"
//                             lineHeight="24px"
//                           >
//                             Learn to build amazing tools using ChatGPT in just
//                             60 minutes
//                           </Text>
//                           <Flex>
//                             <Text
//                               color="var(--neutral-grey-900, #21191B)"
//                               fontWeight="600"
//                               lineHeight="24px"
//                               fontSize="16px"
//                             >
//                               By Albert Sebastian
//                             </Text>
//                             <Text
//                               color="var(--neutral-grey-700, #544D4F)"
//                               fontFamily="Open Sans"
//                               fontSize="14px"
//                               fontWeight="400"
//                               lineHeight="24px"
//                             >
//                               Promt Engineer,Masai
//                             </Text>
//                           </Flex>
//                           <Flex>
//                             <Image src={calender} />
//                             <Text
//                               color="var(--neutral-grey-900, #21191B)"
//                               fontFamily="Open Sans"
//                               fontSize="14px"
//                               fontWeight="600"
//                               lineHeight="24px"
//                               textTransform="capitalize"
//                             >
//                               26th august, saturday
//                             </Text>
//                           </Flex>
//                         </Box>
//                         <Box>
//                           <Image src={albert} alt="Albert" />
//                         </Box>
//                       </Flex>
//                       <Flex
//                         flexDirection="column"
//                         gap="12px"
//                         alignItems="center"
//                         alignSelf="stretch"
//                       >
//                         <Text
//                           color="#000"
//                           fontFamily="Poppins"
//                           fontSize="20px"
//                           fontStyle="normal"
//                           fontWeight="700"
//                           lineHeight="28px"
//                           textAlign="center"
//                         >
//                           A Prompt Engineering Webinar
//                         </Text>
//                         <Flex gap="10px" alignItems="center">
//                           <Box>
//                             <Text
//                               color="#000"
//                               fontFamily="Open Sans"
//                               fontSize="14px"
//                               fontStyle="normal"
//                               fontWeight="600"
//                               lineHeight="24px"
//                             >
//                               06:00
//                             </Text>
//                             <Text
//                               color="#000"
//                               fontFamily="Open Sans"
//                               fontSize="12px"
//                               fontStyle="normal"
//                               fontWeight="400"
//                               lineHeight="16px"
//                               flexShrink="0"
//                             >
//                               PM
//                             </Text>
//                           </Box>
//                           <Flex alignItems="center">
//                             <Image src={roundedImage} />
//                             <Image src={lineImage} />
//                           </Flex>
//                           <Box>
//                             <Text
//                               color="#000"
//                               fontFamily="Open Sans"
//                               fontSize="14px"
//                               fontStyle="normal"
//                               fontWeight="600"
//                               lineHeight="24px"
//                             >
//                               07:30
//                             </Text>
//                             <Text
//                               color="#000"
//                               fontFamily="Open Sans"
//                               fontSize="12px"
//                               fontStyle="normal"
//                               fontWeight="400"
//                               lineHeight="16px"
//                               flexShrink="0"
//                             >
//                               PM
//                             </Text>
//                           </Box>
//                         </Flex>
//                         <Box
//                           display="flex"
//                           w="full"
//                           justifyContent="center"
//                           alignItems="center"
//                         >
//                           <Button
//                             fontFamily="Open Sans"
//                             fontSize="14px"
//                             fontStyle="normal"
//                             fontWeight="600"
//                             lineHeight="24px"
//                             letterSpacing="1.25px"
//                             textTransform="upperCase"
//                             bgColor="var(--secondary-blue-500, #3470E4)"
//                             w="full"
//                             padding="8px 16px"
//                             borderRadius="8px"
//                           >
//                             Register now with 1 click
//                           </Button>
//                         </Box>
//                         <Flex alignItems="flex-end" gap="7px">
//                           <Box>
//                             <Image src={fireLogo} />
//                           </Box>
//                           <Text
//                             color="#000"
//                             fontFamily="Open Sans"
//                             fontSize="10.816px"
//                             fontStyle="normal"
//                             fontWeight="400"
//                             lineHeight="135.5%"
//                           >
//                             <Text as="span" color="red">
//                               924
//                             </Text>
//                             people have already registered
//                           </Text>
//                         </Flex>
//                       </Flex>
//                     </Flex>
//                   </AccordionPanel>
//                 </AccordionItem>
//               </Accordion>
//             </Box>
//           </Flex>
//         </div>
//         <div className={styles.nested_container_first}>
//           <Flex gap="24px" alignItems="start" mt="24px">
//             <Box
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               w="48px"
//               h="48px"
//               bgColor="var(--extended-purple-200, #B7B8E5)"
//               borderRadius="57px"
//               padding="9px"
//               flexShrink="0"
//             >
//               <Box
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 w="30px"
//                 h="30px"
//                 bgColor="var(--secondary-purple-500, #6E71CC)"
//                 borderRadius="16px"
//                 padding="7px"
//                 flexShrink="0"
//               >
//                 <Box
//                   display="flex"
//                   w="16px"
//                   h="16px"
//                   justifyContent="center"
//                   flexShrink="0"
//                   alignItems="center"
//                   color="var(--primary-white-fff, #FFF);"
//                   fontFamily="Open Sans"
//                   fontSize="14px"
//                   fontWeight="600"
//                   letterSpacing="1.25px"
//                   lineHeight="24px"
//                 >
//                   2
//                 </Box>
//               </Box>
//             </Box>
//             <Box
//              width="571px"
//              border="1px"
//              borderRadius="8px"

//               bgColor=" var(--secondary-purple-500, #6E71CC)"
//               boxShadow="0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);"
//             >
//               <Accordion defaultIndex={[0]} allowMultiple>
//                 <AccordionItem border="0px" padding="0px 16px 16px 16px" >
//                   <AccordionButton
//                     border="0px"
//                     _hover={{ bg: "none" }}
//                     display="flex"
//                     justifyContent="space-between"
//                     width="100%"
//                   >
//                     <Box textAlign="left">
//                       <Text
//                         fontSize="20px"
//                         fontWeight="700"
//                         line-height="28px"
//                         color="var(--primary-white-fff, #FFF);"
//                       >
//                         Finish MSAT
//                       </Text>
//                       <Text
//                         fontFamily="Open Sans"
//                         fontSize="16px"
//                         fontStyle="normal"
//                         fontWeight="400"
//                         lineHeight="24px"
//                       >
//                         (Masai School Admission Test)
//                       </Text>
//                     </Box>

//                     <AccordionIcon />
//                   </AccordionButton>
//                   <AccordionPanel
//                     display="flex"
//                     flexDirection="column"
//                     gap="16px"
//                     border="border: 1px solid var(--neutral-grey-100, #E5E5E5) background: #FFF;"
//                     borderRadius="12px"
//                     flexShrink="0"

//                   >
//                     <iframe

//                       src="https://www.youtube.com/embed/cA80lsg0mlo"
//                       title="An Insight into our MSAT (Masai School Admissions Test)"
//                       frameborder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                       allowfullscreen
//                     ></iframe>
//                     <Box display="flex" alignItems="center" flexDirection="row-reverse">
//                       <Button borderRadius="8px" background= "var(--primary-white-fff, #FFF)" border="1px solid var(--neutral-grey-300, #CCC)" width="258px" padding="12px 20px">Start Msat</Button>
//                     </Box>
//                   </AccordionPanel>
//                 </AccordionItem>
//               </Accordion>
//             </Box>
//           </Flex>
//         </div>
//       </div>
//     </div>
//   );
// };

// function Home() {
// const { activeStep } = useSteps({
//   index: 0,
//   count: steps.length,
// })

//   return (
//     <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
//       <Step key={0}>
//         <StepIndicator>
//           <StepStatus
//             complete={<StepIcon />}
//             incomplete={<StepNumber />}
//             active={<StepNumber />}
//           />
//         </StepIndicator>

//         <Box flexShrink='0'>

//           <StepDescription>
//           <Box
//             width="571px"
//               border="1px"
//               borderRadius="8px"
//               bgColor=" var(--secondary-purple-500, #6E71CC)"
//               boxShadow="0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);"
//             >
//               <Accordion defaultIndex={[0]} allowMultiple >
//                 <AccordionItem border="0px" padding="0px 16px 16px 16px" >
//                   <AccordionButton
//                     border="0px"
//                     _hover={{ bg: "none" }}
//                     display="flex"
//                     justifyContent="space-between"
//                   >
//                     <Text
//                       fontSize="20px"
//                       fontWeight="700"
//                       line-height="28px"
//                       color="var(--primary-white-fff, #FFF);"
//                     >
//                       Register For Free Webinar
//                     </Text>

//                     <AccordionIcon />
//                   </AccordionButton>
//                   <AccordionPanel
//                     display="flex"
//                     flexDirection="column"
//                     border="border: 1px solid var(--neutral-grey-100, #E5E5E5);
// background: #FFF;"
//                     borderRadius="12px"
//                   >
//                     <Flex flexDirection="column" gap="16px">
//                       <Flex bgColor="#FFEBF0" >
//                         <Box display="flex" flexDirection="column" gap="10px">
//                           <Text
//                             fontFamily="Poppins"
//                             fontSize="18px"
//                             fontWeight="700"
//                             lineHeight="24px"
//                           >
//                             Learn to build amazing tools using ChatGPT in just
//                             60 minutes
//                           </Text>
//                           <Flex>
//                             <Text
//                               color="var(--neutral-grey-900, #21191B)"
//                               fontWeight="600"
//                               lineHeight="24px"
//                               fontSize="16px"
//                             >
//                               By Albert Sebastian
//                             </Text>
//                             <Text
//                               color="var(--neutral-grey-700, #544D4F)"
//                               fontFamily="Open Sans"
//                               fontSize="14px"
//                               fontWeight="400"
//                               lineHeight="24px"
//                             >
//                               Promt Engineer,Masai
//                             </Text>
//                           </Flex>
//                           <Flex>
//                             <Image src={calender} />
//                             <Text
//                               color="var(--neutral-grey-900, #21191B)"
//                               fontFamily="Open Sans"
//                               fontSize="14px"
//                               fontWeight="600"
//                               lineHeight="24px"
//                               textTransform="capitalize"
//                             >
//                               26th august, saturday
//                             </Text>
//                           </Flex>
//                         </Box>
//                         <Box>
//                           <Image src={albert} alt="Albert" />
//                         </Box>
//                       </Flex>
//                       <Flex
//                         flexDirection="column"
//                         gap="12px"
//                         alignItems="center"
//                         alignSelf="stretch"
//                       >
//                         <Text
//                           color="#000"
//                           fontFamily="Poppins"
//                           fontSize="20px"
//                           fontStyle="normal"
//                           fontWeight="700"
//                           lineHeight="28px"
//                           textAlign="center"
//                         >
//                           A Prompt Engineering Webinar
//                         </Text>
//                         <Flex gap="10px" alignItems="center">
//                           <Box>
//                             <Text
//                               color="#000"
//                               fontFamily="Open Sans"
//                               fontSize="14px"
//                               fontStyle="normal"
//                               fontWeight="600"
//                               lineHeight="24px"
//                             >
//                               06:00
//                             </Text>
//                             <Text
//                               color="#000"
//                               fontFamily="Open Sans"
//                               fontSize="12px"
//                               fontStyle="normal"
//                               fontWeight="400"
//                               lineHeight="16px"
//                               flexShrink="0"
//                             >
//                               PM
//                             </Text>
//                           </Box>
//                           <Flex alignItems="center">
//                             <Image src={roundedImage} />
//                             <Image src={lineImage} />
//                           </Flex>
//                           <Box>
//                             <Text
//                               color="#000"
//                               fontFamily="Open Sans"
//                               fontSize="14px"
//                               fontStyle="normal"
//                               fontWeight="600"
//                               lineHeight="24px"
//                             >
//                               07:30
//                             </Text>
//                             <Text
//                               color="#000"
//                               fontFamily="Open Sans"
//                               fontSize="12px"
//                               fontStyle="normal"
//                               fontWeight="400"
//                               lineHeight="16px"
//                               flexShrink="0"
//                             >
//                               PM
//                             </Text>
//                           </Box>
//                         </Flex>
//                         <Box
//                           display="flex"
//                           w="full"
//                           justifyContent="center"
//                           alignItems="center"
//                         >
//                           <Button
//                             fontFamily="Open Sans"
//                             fontSize="14px"
//                             fontStyle="normal"
//                             fontWeight="600"
//                             lineHeight="24px"
//                             letterSpacing="1.25px"
//                             textTransform="upperCase"
//                             bgColor="var(--secondary-blue-500, #3470E4)"
//                             w="full"
//                             padding="8px 16px"
//                             borderRadius="8px"
//                           >
//                             Register now with 1 click
//                           </Button>
//                         </Box>
//                         <Flex alignItems="flex-end" gap="7px">
//                           <Box>
//                             <Image src={fireLogo} />
//                           </Box>
//                           <Text
//                             color="#000"
//                             fontFamily="Open Sans"
//                             fontSize="10.816px"
//                             fontStyle="normal"
//                             fontWeight="400"
//                             lineHeight="135.5%"
//                           >
//                             <Text as="span" color="red">
//                               924
//                             </Text>
//                             people have already registered
//                           </Text>
//                         </Flex>
//                       </Flex>
//                     </Flex>
//                   </AccordionPanel>
//                 </AccordionItem>
//               </Accordion>
//             </Box>
//           </StepDescription>
//         </Box>

//         <StepSeparator />
//       </Step>

//       <Step key={1}>
//         <StepIndicator>
//           <StepStatus
//             complete={<StepIcon />}
//             incomplete={<StepNumber />}
//             active={<StepNumber />}
//           />
//         </StepIndicator>

//         <Box flexShrink='0'>

//           <StepDescription>
//           <Box
//              width="571px"
//              border="1px"
//              borderRadius="8px"

//               bgColor=" var(--secondary-purple-500, #6E71CC)"
//               boxShadow="0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);"
//             >
//               <Accordion defaultIndex={[0]} allowMultiple>
//                 <AccordionItem border="0px" padding="0px 16px 16px 16px" >
//                   <AccordionButton
//                     border="0px"
//                     _hover={{ bg: "none" }}
//                     display="flex"
//                     justifyContent="space-between"
//                     width="100%"
//                   >
//                     <Box textAlign="left">
//                       <Text
//                         fontSize="20px"
//                         fontWeight="700"
//                         line-height="28px"
//                         color="var(--primary-white-fff, #FFF);"
//                       >
//                         Finish MSAT
//                       </Text>
//                       <Text
//                         fontFamily="Open Sans"
//                         fontSize="16px"
//                         fontStyle="normal"
//                         fontWeight="400"
//                         lineHeight="24px"
//                       >
//                         (Masai School Admission Test)
//                       </Text>
//                     </Box>

//                     <AccordionIcon />
//                   </AccordionButton>
//                   <AccordionPanel
//                     display="flex"
//                     flexDirection="column"
//                     gap="16px"
//                     border="border: 1px solid var(--neutral-grey-100, #E5E5E5) background: #FFF;"
//                     borderRadius="12px"
//                     flexShrink="0"

//                   >
//                     <iframe

//                       src="https://www.youtube.com/embed/cA80lsg0mlo"
//                       title="An Insight into our MSAT (Masai School Admissions Test)"
//                       frameborder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                       allowfullscreen
//                     ></iframe>
//                     <Box display="flex" alignItems="center" flexDirection="row-reverse">
//                       <Button borderRadius="8px" background= "var(--primary-white-fff, #FFF)" border="1px solid var(--neutral-grey-300, #CCC)" width="258px" padding="12px 20px">Start Msat</Button>
//                     </Box>
//                   </AccordionPanel>
//                 </AccordionItem>
//               </Accordion>
//             </Box>
//           </StepDescription>
//         </Box>

//         <StepSeparator />
//       </Step>

//     </Stepper>
//   )
// }

export default Home;
