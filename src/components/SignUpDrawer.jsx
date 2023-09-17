import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  DrawerCloseButton,
  Flex,
  Text,
  DrawerContent,
  Spinner,
  useToast,
} from "@chakra-ui/react";

function SignUpDrawer({ mobile, setMobile, setReg }) {
  const [isSigned, setIsSigned] = useState(false);

  const [fullName, setFullName] = useState("");
  const [errorMessageName, setErrorMessageName] = useState("");

  const [email, setEmail] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");

  // const [mobile, setMobile] = useState("");
  const [errorMessageMobile, setErrorMessageMobile] = useState("");

  const [refferalCode, setRefferalCode] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const toast = useToast();

  const handleRegister = () => {
    setSubmitDisabled(true);
    if (fullName === "") {
      setErrorMessageName("Your name is required");
      setSubmitDisabled(true);
    }
    if (email === "") {
      setErrorMessageEmail("Your email address is required");
      setSubmitDisabled(true);
    }
    if (mobile === "") {
      setErrorMessageMobile("Phone Number is required");
      setSubmitDisabled(true);
    }
    if (isChecked === false) {
      toast({
        title: "Error",
        description: "Please Accept the team and condition",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setSubmitDisabled(false);
      return;
    } else {
      toast({
        title: "Success",
        description: "OTP send Succesfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      let obj = {
        fullName,
        email,
        mobile,
        isChecked,
      };
      console.log(obj);
      setErrorMessageName("");
      setReg(true);
    }
  };

  function handleNameChange(e) {
    const newName = e.target.value;
    setFullName(newName);

    if (newName.length < 3) {
      setErrorMessageName("Please enter a valid name");
      // setSubmitDisabled(true);
    } else {
      setErrorMessageName("");
      setSubmitDisabled(false);
    }
  }

  function handleEmailChange(e) {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (newEmail.length < 10) {
      setErrorMessageEmail("Please enter a valid name");
      // setSubmitDisabled(true);
    } else {
      setErrorMessageEmail("");
      setSubmitDisabled(false);
    }
  }

  function handleMobileChange(e) {
    const newMobile = e.target.value;
    setMobile(newMobile);

    if (newMobile.length < 10 || newMobile.length > 10) {
      setErrorMessageMobile("Phone Number should be a 10 digit number");
      // setSubmitDisabled(true);
    } else {
      setErrorMessageMobile("");
      setSubmitDisabled(false);
    }
  }

  return (
    <div className="SignUpContainer" style={{ display: "flex" }}>
      <div style={{ width: "100vw" }}></div>

      <div
        style={{
          display: "block",
          position: "Fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: "999",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>

      <Box>
        <DrawerContent w={"33%"}>
          <DrawerCloseButton />
          <Box padding={"64px 48px 120px 48px"}>
            <Heading
              fontFamily={"Poppins"}
              color={"#03081A"}
              fontSize={"24px"}
              fontStyle={"normal"}
              fontWeight={700}
              lineHeight={"32px"}
              as={"h3"}
            >
              Create Account
            </Heading>

            <Flex
              margin={"16px 0 16px 0"}
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Text
                fontSize={"16px"}
                fontStyle={"normal"}
                fontWeight={600}
                lineHeight={"24px"}
                as={"h3"}
                fontFamily={"Open Sans"}
                color={"#544D4F"}
              >
                {" "}
                Already have an account?
              </Text>

              <Text
                marginLeft={"8px"}
                fontSize={"16px"}
                fontStyle={"normal"}
                fontWeight={600}
                lineHeight={"24px"}
                as={"h3"}
                fontFamily={"Open Sans"}
                color={"#4358F6"}
                _hover={{ cursor: "pointer" }}
              >
                Sign in
              </Text>
            </Flex>

            <FormControl gap={"16px"}>
              <FormLabel>
                Full Name <spam style={{ color: "red" }}>*</spam>{" "}
              </FormLabel>
              <Input
                onChange={handleNameChange}
                placeholder="Enter full name"
                type="Text"
              />

              <Text
                color={"#D61E27"}
                fontSize={"14px"}
                fontFamily={"Open Sans"}
                fontWeight={"400"}
                marginTop={"8px"}
                lineHeight={"24px"}
              >
                {errorMessageName}
              </Text>

              <FormLabel marginTop={"16px"}>
                Email address <spam style={{ color: "red" }}>*</spam>{" "}
              </FormLabel>
              <Input
                onChange={handleEmailChange}
                placeholder="Enter email address"
                type="email"
              />
              <Text
                color={"#D61E27"}
                fontSize={"14px"}
                fontFamily={"Open Sans"}
                fontWeight={"400"}
                marginTop={"8px"}
                lineHeight={"24px"}
              >
                {errorMessageEmail}
              </Text>

              <FormLabel marginTop={"16px"}>
                Phone Number <spam style={{ color: "red" }}>*</spam>{" "}
              </FormLabel>
              <Input
                onChange={handleMobileChange}
                placeholder="Enter your whatsapp number"
                type="Number"
              />
              <Text
                color={"#D61E27"}
                fontSize={"14px"}
                fontFamily={"Open Sans"}
                fontWeight={"400"}
                marginTop={"8px"}
                lineHeight={"24px"}
              >
                {errorMessageMobile}
              </Text>

              <FormLabel marginTop={"16px"}>Referral Code(Optional)</FormLabel>
              <Input
                onChange={(e) => setRefferalCode(e.target.value)}
                placeholder="Enter referral code"
                type="Text"
              />
            </FormControl>

            <Flex marginTop={"16px"} gap={"8px"}>
              <input
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
                style={{ width: "24px", height: "24px", padding: "3px" }}
                type="checkbox"
              />
              <Text
                fontStyle={"normal"}
                fontWeight={600}
                lineHeight={"16px"}
                fontSize={"12px"}
                fontFamily={""}
              >
                By signing up, I accept the Masai
                <span
                  style={{
                    color: "#4358F6",
                    textDecorationLine: "underline",
                  }}
                  _hover={{ cursor: "pointer" }}
                >
                  Terms of Service
                </span>{" "}
                and acknowledge {""}
                <span
                  style={{
                    color: "#4358F6",
                    textDecorationLine: "underline",
                  }}
                >
                  Privacy Policy.
                </span>
              </Text>
            </Flex>

            <Button
              isDisabled={submitDisabled}
              marginTop={"16px"}
              fontStyle={"normal"}
              p={"12px 20px"}
              fontWeight={600}
              lineHeight={"24px"}
              fontSize={"18px"}
              fontFamily={""}
              textTransform={"uppercase"}
              w={"100%"}
              color={"#FFF"}
              bg={"#3470E4"}
              borderRadius={"8px"}
              _hover={{ background: "#1647A5" }}
              onClick={handleRegister}
            >
              {submitDisabled ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="#FFF"
                  size="md"
                />
              ) : (
                "continue"
              )}
            </Button>
          </Box>
        </DrawerContent>
      </Box>
    </div>
  );
}

export default SignUpDrawer;
