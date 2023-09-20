import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  Radio,
  RadioGroup,
  Stack,
  calc,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import logo from "../../assets/allsvgimages/logo.svg";
import orangeColorIcon from "../../assets/allsvgimages/orangeColorIcon.svg";
import timeProgress from "../../assets/allsvgimages/timeProgress.svg";
import helpIcon from "../../assets/allsvgimages/helpIcon.svg";
import lineIcon from "../../assets/allsvgimages/lineIcon.svg";
import rightArrow from "../../assets/allsvgimages/rightArrow.svg";

import { useSelector, useDispatch } from "react-redux";
import { getTestQuestions } from "../../redux/testReducer/test.action";
import SubmitAndFinishMsat from "./SubmitAndFinishMsat";

const TestPage = () => {
  const [selectedOption,setSelectedOption]=useState()
  const [number, setNumber] = useState(0);
  const [question, setQuestion] = useState({});
  const [subsection1, setSubsection1] = useState([]);
  const [subsectionNumber,setSubsectionNumber]=useState(0);
 const [confirmationModal,setConfirmationModal]=useState(false);
  

  const dispatch = useDispatch();

  

  let { questions } = useSelector((store) => store.testReducer);
  // let totalSubSection=questions[0]?.sub_section.length

  if (questions?.length !== 0 && subsection1?.length === 0) {
    setSubsection1(questions[0]?.sub_section[0]?.questions);
    
  }

 

  useEffect(() => {
    if (subsection1.length > 0) {
      console.log(subsection1);
      setQuestion(subsection1[number]);
    }
  }, [number, subsection1]);

  useEffect(() => {
    getTestQuestions(dispatch);
  }, []);

  const handleNextQuestion = () => {
    console.log("subsectionNumber",subsectionNumber);
    if (number  < 3 ) {
      setNumber((prevNumber) => prevNumber + 1);
    } else {

      setSubsection1(questions[0]?.sub_section[subsectionNumber+1]?.questions);
      setNumber(0);
      setSubsectionNumber((prev)=>prev+1);
      
    }
  };


  const handleOptionFun=(e)=>{
    console.log(e);
  }

  const handleFinshTest=()=>{
    
 setConfirmationModal(true);
  }

if(confirmationModal){
  return <SubmitAndFinishMsat onClose={() => setConfirmationModal(false)}/>
}


const handleConfirmation=()=>{
  
}
 

  return (
    <Box display={"flex"}>
      
      <Box
        width={"80%"}
        display={"flex"}
        flexDir={"column"}
        borderRight={"1px solid var(--neutral-grey-100, #E5E5E5)"}
      >
        
        <Box
          borderBottom={"1px solid var(--neutral-grey-100, #E5E5E5)"}
          height={"72px"}
          as={"nav"}
          padding={"16px 16px 16px 32px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Image src={logo} />
          <Button
          onClick={handleFinshTest}
            display={"flex"}
            padding={"8px 16px"}
            alignItems={"center"}
            gap={"8px"}
          >
            <Image src={orangeColorIcon} />
            <Text
              color={"var(--alert-error, #D61E27)"}
              ontFamily="Open Sans"
              fontSize="14px"
              fontWeight="600"
              lineHeight="24px"
              letterSpacing="1.25px"
              textTransform="uppercase"
            >
              Finish test
            </Text>
          </Button>
        </Box>

        <Flex h={"90vh"} flexDir={"column"} justifyContent={"space-between"}>
          <Box padding={"24px 32px 0px 32px "}>
            <Text
              fontFamily={"Poppins"}
              fontSize={"34px"}
              fontStyle={"normal"}
              fontWeight={"700"}
              lineHeight={"40px"}
            >
              Q:{question?.questionId}
            </Text>
            <Text
              color="var(--neutral-grey-800, #3B3435)"
              fontFamily="Open Sans"
              fontSize="16px"
              fontWeight="600"
              lineHeight="24px"
              mb="8px"
            >
              {question?.question_text}
            </Text>
            <Box
              color={"var(--primary-red-900, #0A0103)"}
              fontFamily={"Open Sans"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"24px"}
            >
              {/* <RadioGroup
                onChange={(e)=>handleOptionFun(e)}
              >
                {question?.options?.map((option) => (
                  <Box padding={"8px"} >
                    <Radio  value={option?.is_correct}>{option?.option_text}</Radio>
                  </Box>
                ))}
              </RadioGroup> */}
               {
                question?.options?.map((option)=>{
                  return(
                    <Flex padding={"8px"} gap={"10px"}>
                      <input type="radio" id="contactChoice1" name="contact" value={option.is_correct
} />
                      <label for="contactChoice1">{option.option_text}</label>
                    </Flex>
                  )
                })
               }
            </Box>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            padding={"16px"}
            borderTop={"1px solid var(--neutral-grey-100, #E5E5E5)"}
          >
            <Flex display={"flex"} alignItems={"center"} gap={"12px"}>
              <Button
                _hover={"none"}
                display={"flex"}
                p={"8px 16px"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"8px"}
                borderRadius={"8px"}
                background={"#FFf"}
                borderRight={""}
              >
                <Image src={helpIcon} />
                HELP
                <Image src={lineIcon} />
              </Button>
              <Flex gap={"24px"}>
                <Text
                  color={"var(--neutral-grey-700, #544D4F)"}
                  fontFamily={"Open Sans"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"400"}
                  lineHeight={"24px"}
                >
                  Correct answer:{" "}
                  <Text color={"#049402"} fontWeight={"600"} as={"span"}>
                    +3
                  </Text>
                </Text>
                <Text
                  color={"var(--neutral-grey-700, #544D4F)"}
                  fontFamily={"Open Sans"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"400"}
                  lineHeight={"24px"}
                >
                  Wrong answer:{" "}
                  <Text color={"#ED0331"} fontWeight={"600"} as={"span"}>
                    -3
                  </Text>
                </Text>
              </Flex>
            </Flex>
            <Flex gap={"24px"}>
              <Button
              onClick={handleNextQuestion}
                display={"flex"}
                padding={"12px 20px"}
                justifyContent={"center"}
                alignItems="center"
                gap={"10px"}
                borderRadius={"8px"}
                background={"#F2F6FF"}
              >
                SKIP
              </Button>
              <Button
                onClick={handleNextQuestion}
                display={"flex"}
                padding={"12px 20px"}
                justifyContent={"center"}
                alignItems="center"
                gap={"10px"}
                borderRadius={"8px"}
                background={"#AEC6F4"}
              >
                NEXT
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box flex={"20%"}>
        <Box
          height={"72px"}
          display={"flex"}
          padding={"12px 20px 12px 37px"}
          flexShrink={"0"}
          alignItems={"center"}
          borderBottom={"1px solid var(--neutral-grey-100, #E5E5E5)"}
        >
          <Image src={timeProgress} w="40px" h={"40px"} flexShrink={"0"} />
          <Text
            ml={"20px"}
            fontFamily={"Orbitron"}
            fontSize={"32px"}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={"24px"}
            textTransform={"uppercase"}
            letterSpacing={"2.25px"}
          >
            08 : 11
          </Text>

          <Text
            fontFamily={"Orbitron"}
            fontSize={"20px"}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={"24px"}
            letterSpacing={"2.25px"}
          >
            Min
          </Text>
        </Box>

        <Flex h="90vh" flexDir={"column"} justifyContent={"space-between"}>
          <Box>
            <Text
              m={"24px 83px 16px 16px"}
              color="var(--neutral-grey-900, #21191B)"
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="700"
              lineHeight="20px"
            >
              Section 01 - Aptitude
            </Text>
            <Box
              m={"0 16px 0px 16px"}
              display={"flex"}
              gap="10px"
              flexWrap={"wrap"}
            >
              {[1, 2, 3, 4].map((el, i) => {
                return (
                  <Box
                    background={"var(--extended-blue-50, #F2F6FF)"}
                    w="32px"
                    h={"32px"}
                    display="flex"
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={"4px"}
                    border={"1px solid var(--secondary-blue-500, #3470E4)"}
                    padding={"12px"}
                  >
                    {el}
                  </Box>
                );
              })}
            </Box>
            <Box mt="30px" width={"100%"} border={"1px solid #E5E5E5"}></Box>
          </Box>
          <Box
            padding={"10px"}
            flexShrink={"0"}
            borderTop={"1px solid var(--neutral-grey-100, #E5E5E5)"}
          >
            <Flex
              display={"inline-flex"}
              gap="4px"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={rightArrow} />
              <Text
                color="#21191B"
                fontFamily={"Open Sans"}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"600"}
                lineHeight={"24px"}
              >
                Next section - Verbal Communication
              </Text>
            </Flex>

            <Text
              color="#544D4F"
              fontFamily={"Open Sans"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"24px"}
            >
              Number of Questions:{" "}
              <Text color="#21191B" fontWeight={"700"} as={"span"}>
                {15}
              </Text>{" "}
              Time:{" "}
              <Text color="#21191B" fontWeight={"700"} as={"sapn"}>
                10min
              </Text>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default TestPage;
