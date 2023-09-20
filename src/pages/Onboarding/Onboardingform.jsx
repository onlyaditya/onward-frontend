import React from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import OnboardingFlow from "./OnboardingFlow";
import { CommonLayout } from "../../components/CommonLayout";
import axios from "axios";

const Onboardingform = () => {
  const [dob, setDob] = React.useState("");
  const [gradyear, setGradyear] = React.useState("");
  const [working, setWorking] = React.useState("");
  console.log(dob, gradyear, working);

  // try {
  let token = JSON.parse(localStorage.getItem("auth"));

  if (dob && gradyear) {
    console.log(dob, gradyear, working);

    // axios.patch(
    //   "https://dash-board.up.railway.app/update-profile",
    //   {
    //     dob: dob,
    //     graduation: gradyear,
    //     work: !!working,
    //   },
    //   { headers: { Authorization: token } }
    // );

    const getDetails = async () => {
      let token = JSON.parse(localStorage.getItem("auth"));

      console.log(token);
      try {
        let res = await axios.get(
          "https://dash-board.up.railway.app/user-details",
          { headers: { Authorization: token } }
        );
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
    getDetails();
  }
  // } catch (e) {
  //   console.log(e);
  // }

  const handleDob = (e) => {
    validateDOB();
    function validateDOB() {
      var dobInput = e.target.value;
      var currentDate = new Date();
      var selectedDate = new Date(dobInput);

      // Calculate age
      var age = currentDate.getFullYear() - selectedDate.getFullYear();
      // console.log(age);

      // Check if the user is between 18 and 28 years old
      if (age >= 18 && age < 28) {
        console.log(e.target.value);
        setDob(e.target.value);
        return true;
      } else {
        alert("You must be between 18 and 28 years old.");
        return false;
      }
    }
  };

  const handleGradyear = (e) => {
    validateGraduation();
    function validateGraduation() {
      var graduationInput = e.target.value;
      var currentDate = new Date();
      var selectedDate = new Date(graduationInput);

      console.log(graduationInput, currentDate, selectedDate);
      // Calculate the difference in months
      var monthsDifference =
        (currentDate.getFullYear() - selectedDate.getFullYear()) * 12 +
        (currentDate.getMonth() - selectedDate.getMonth());

      // Check if the difference is within the desired range (0 to 120 months)

      console.log(monthsDifference);

      if (monthsDifference >= 0 && monthsDifference <= 120) {
        return true;
      } else {
        alert(
          "Graduation date should be within the last 10 years and not in the future."
        );
        return false;
      }
    }

    setGradyear(e.target.value);
  };



  return (
    <CommonLayout>
      <Box
        w="1179px"
        h="90vh"
        bgColor="var(--extended-blue-50, #F2F6FF)"
        ml={["0px","50px"]}
        pt={["50px","80px"]}
        position="relative"
        // border="1px solid red"
      >
        {/*Onboarding flow contianer */}
        <OnboardingFlow
          color={"var(--primary-white-fff, #FFF)"}
          bg={"var(--secondary-purple-500, #6E71CC)"}
          section={"1"}
        />

        {/* DOB , Graduation and  currently working container  */}
        <Box
          display="inline-flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="16px"
          mt="40px"
          ml="27px"
          wrap="wrap"
        >
          {/* DOB and Graduation container */}
          <Flex alignItems="flex-start" gap="24px" wrap='wrap' w={["370px","auto"]}>
            {/* DOB container */}
            <Flex
              w="552px"
              flexDirection="column"
              alignItems="flex-start"
              gap="6px"
            >
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="6px"
                alignSelf="stretch"
                color="var(--primary-red-900, #0A0103)"
                fontFamily="Open Sans"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
              >
                Date of Birth *
              </Flex>
              <Input
                type="date"
                bgColor="#fff"
                value={dob}
                onChange={handleDob}
              />
            </Flex>
            {/* Graduation container */}
            <Flex
              w="552px"
              flexDirection="column"
              alignItems="flex-start"
              gap="6px"
            >
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="6px"
                alignSelf="stretch"
                color="var(--primary-red-900, #0A0103)"
                fontFamily="Open Sans"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
              >
                Select your graduation month & year*
              </Flex>
              {/* <Flex
            alignItems="flex-start"
            alignSelf="stretch"
            borderRadius="8px"
            border="1px solid var(--neutral-grey-300, #CCC)"
            bgColor="var(--primary-white-fff, #FFF)"
            color="var(--primary-red-900, #0A0103)"
            fontfamily="Open Sans"
            fontSize="16px"
            fontStyle="normal"
            fonWeight="400"
            lineHeight="24px"
          >
            <Flex p="12px" alignItems="center" gap="8px" flex="1 0 0">
              12/2020
            </Flex>
            <Flex p="12px" alignItems="center" gap="5px" alignSelf="stretch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.53783 6.66602L10.0003 11.1285L14.4628 6.66602L15.8337 8.04657L10.0003 13.8799L4.16699 8.04657L5.53783 6.66602Z"
                  fill="#0A0103"
                />
              </svg>
            </Flex>
          </Flex> */}
              <Input
                type="date"
                bgColor="#fff"
                value={gradyear}
                onChange={handleGradyear}
              />
            </Flex>
          </Flex>

          {/* currently working container */}
          <Flex alignItems="flex-start" gap="24px" direction="column">
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              gap="6px"
              alignSelf="stretch"
              color="var(--primary-red-900, #0A0103)"
              fontFamily="Open Sans"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
            >
              Are you currently Working?*
            </Flex>
            <RadioGroup onChange={setWorking} value={working}>
              <Stack direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Box>
        {/* next button */}
        <Flex
          w={["420px","1179px"]}
          p="12px 24px 12px 1069px"
          pl={["80px","1069px"]}
          justifyContent="flex-end"
          alignItems="center"
          background="#FFF"
          boxShadow="0px -1px 0px 0px #D9D9D9"
          position="absolute"
          bottom={["200px","0px"]}
        >
          {dob && gradyear && working ? (
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
              <Link to="/home/onboardingid">next</Link>
            </button>
          ) : (
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
              onClick={() => {
                alert("please select all fields");
              }}
            >
              next
            </button>
          )}
        </Flex>
      </Box>
    </CommonLayout>
  );
};

export default Onboardingform;
