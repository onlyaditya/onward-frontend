import { Box, Button, Divider, Flex, Heading, Image, Select, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import checkIcon from "../../assets/allsvgimages/checkIcon.svg";
import RedirectToMsat from "./RedirectToMsat";

const StartMsat = ({onClose,handleCourses,selectedCourse,onConfirm}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(11);

  const timer = setInterval(() => {
    setCountdown((prevCount) => prevCount - 1);
  }, 1000);



  const handleConfirm = () => {
    setIsLoading(true);

    // Wait for 5 seconds before performing the redirection
    setTimeout(() => {
      setIsLoading(false);
      onConfirm();
    }, 5000);
  };

  
  
// console.log(isConfirmButtonDisabled);
if(isLoading){
  return <Spinner size="xl" color="blue.500" />
 
}
  return (
    <Flex
     justifyContent={"center"}
     alignItems={"center"}
     
    >
      <Box
      display="flex"
      width={{base:"90%",md:"436px"}}
      padding={{base:"10px 16px 16px 16px",md:"24px"}}
      flexDirection="column"
      alignItems="start"
      flexShrink={0}
      boxShadow={
        "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px -2px 11px -2px rgba(0, 0, 0, 0.10)"
      }
      bgColor={"#D6E2FA"}
      borderRadius={"16px"}
    >
      <Text
        alignSelf="stretch"
        color="var(--primary-red-900, #0A0103)"
        textAlign="center"
        fontFamily="Poppins"
        fontSize={{base:"16px",md:"20px"}}
        fontStyle="normal"
        fontWeight="700"
        lineHeight="28px"
        mt={"16px"}
      >
        Before you proceed accept that you are
      </Text>
      <Box
        display={"flex"}
        padding={"16px"}
        flexDir={"column"}
        alignItems={"flex-start"}
        gap="8px"
        alignSelf="self-start"
        bgColor={"var(--primary-white-fff, #FFF)"}
        borderRadius={"12px"}
      >
        <Box
          display={"flex"}
          width={{base:"90%",md:"358px"}}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"12px"}
        >
          <Flex gap="16px" alignItems={"flex-start"} alignSelf={"stretch"}>
            <Image src={checkIcon} w={{base:"24px",md:"32px"}} />
            <Text
              color="#5E4FB7"
              fontFamily="Open Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
            >
              upto 28 years of age
            </Text>
          </Flex>
          <Flex gap="16px" alignItems={"flex-start"} alignSelf={"stretch"}>
          <Image src={checkIcon} w={{base:"24px",md:"32px"}} />
            <Text
              color="#5E4FB7"
              fontFamily="Open Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
            >
              a college graduate
            </Text>
          </Flex>
          <Flex gap="16px" alignItems={"flex-start"} alignSelf={"stretch"}>
          <Image src={checkIcon} w={{base:"24px",md:"32px"}} />
            <Text
              color="#5E4FB7"
              fontFamily="Open Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
            >
              available for 12-hour daily study, 6 days a week (11 am - 11 pm)
              once selected
            </Text>
          </Flex>
          <Flex gap="16px" alignItems={"flex-start"} alignSelf={"stretch"}>
          <Image src={checkIcon} w={{base:"24px",md:"32px"}} />
            <Text
              color="#5E4FB7"
              fontFamily="Open Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
            >
              have a desktop/laptop once the course starts
            </Text>
          </Flex>
        </Box>
      </Box>
      <Text
        color="var(--neutral-grey-900, #21191B)"
        fontFamily="Open Sans"
        fontSize="14px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="24px"
        mt="16px"
        mb="6px"
      >
        Please select the course you want to apply for
      </Text>

      <Select
      onChange={(e)=>handleCourses(e.target.value)}
        placeholder="Select"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="1px"
        alignSelf="stretch"
        borderRadius="8px"
        borderWidth="1px"
        borderColor="var(--neutral-grey-100, #E5E5E5)"
        background="var(--primary-white-fff, #FFF)"
        mb="20px"
      >
        <option value="full-stack-developer">Full Stack Web Development</option>
        <option value="backend-developer">Backend Web Development</option>
        <option value="data-analatics">Data Analatics</option>
        <option value="testing">Software Testing & Automation</option>
        <option value="mobile-developer">Mobile Developer</option>
      </Select>
      <Divider
        height={"1px"}
        borderColor={"#85A9EF"}
        orientation="horizontal"
      />
      <Box display={"flex"}
      m={"auto"}
      alignItems={"flex-start"}
      gap={"16px"}
      mt={"20px"}
      >
        <Button
        onClick={onClose}
         display="flex"
         padding="8px 16px"
         justifyContent="center"
         alignItems="center"
         gap="10px"
         borderRadius="8px"
         background="var(--extended-blue-50, #F2F6FF)"
        >CANCEL</Button>
        <Button
        _hover={"none"}
        display="flex"
        padding="8px 16px"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        borderRadius="8px"
        background="var(--secondary-blue-500, #3470E4)"
        isDisabled={!selectedCourse}
        onClick={handleConfirm}
        >CONFIRM</Button>

      </Box>
      <Box>
        
      </Box>
    </Box>
    </Flex>
  );
};

export default StartMsat;
