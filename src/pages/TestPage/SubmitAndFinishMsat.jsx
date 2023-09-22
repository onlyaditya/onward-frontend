import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import alertCircleOutline from "../../assets/allsvgimages/alertCircleOutline.svg";
import closeIcon from "../../assets/allsvgimages/closeIcon.svg";
import { Link } from "react-router-dom";

const SubmitAndFinishMsat = ({handleConfirmation}) => {
  return (
   <Box 
   width={"100%"}
   display={"flex"}
   height={"100vh"}
   justifyContent={"center"}
   alignItems={"center"}
   opacity={0.7}
   bgColor={"#010A1B"}
   >
     <Box
      w="430px"
      display={"inline-flex"}
      padding={"24px"}
      alignItems={"flex-start"}
      borderRadius={"16px"}
      background={"var(--primary-white-fff, #FFF)"}
      boxShadow={
        "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px -2px 11px -2px rgba(0, 0, 0, 0.10)"
      }
    >
      <Flex flexDir={"column"} gap={"16px"} alignItems={"flex-start"}>
        <Flex justifyContent={"space-between"} alignItems={"flex-start"} >
          <Image src={alertCircleOutline} mr="300px"/>
          <Image src={closeIcon} />
        </Flex>
        <Flex flexDir={"column"} gap={"8px"}>
          <Text
            color={" var(--primary-red-900, #0A0103)"}
            fontFamily={"Poppins"}
            fontSize={"20px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"28px"}
          >
            Are you sure you want to submit and finish MSAT?
          </Text>
          <Text
            color={" var(--alert-warning, #FF832B)"}
            fontFamily={"Open Sans"}
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"24px"}
          >
            You will not be able to resume if you click “YES, I CONFIRM”.
          </Text>
        </Flex>
        <Flex mt="32px" flexDirection={"row-reverse"} gap="8px">
          <Button onClick={handleConfirmation}><Link to="/home/results">YES,I CONFERM</Link></Button>

          <Button>CANCEL</Button>
        </Flex>
      </Flex>
    </Box>
   </Box>
  );
};

export default SubmitAndFinishMsat;
