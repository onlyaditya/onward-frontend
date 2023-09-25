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

      // Check if the user is between 18 and 28 years old
      if (age >= 18 && age < 30) {
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
    <CommonLayout rightsidebar={"no"} bottomnav={"no"}>
      <Box
        flexGrow="1"
        h="89vh"
        bgColor="#F2F6FF"
        py={["12px", "24px"]}
        px={["16px", "28px"]}
        position="relative"
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
          wrap="wrap"
        >
          {/* DOB and Graduation container */}
          <Flex
            alignItems="flex-start"
            gap="24px"
            wrap="wrap"
            w={["343px", "auto"]}
          >
            {/* DOB container */}
            <Flex
              w={["100%", "520px"]}
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
              w={["100%", "520px"]}
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
            onClick={() => {
              if (!(dob && gradyear && working)) {
                alert("Please select all fields!");
              }
            }}
          >
            {dob && gradyear && working ? (
              <Link to="/home/onboardingid">next</Link>
            ) : (
              "next"
            )}
          </button>
        </Flex>
      </Box>
    </CommonLayout>
  );
};

export default Onboardingform;
