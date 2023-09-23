import React, { useState, useRef, useEffect } from "react";
import { postregister, login } from "../redux/authReducer/auth.action";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  Flex,
  Text,
  DrawerContent,
  Spinner,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";

function SignUpDrawer({
  mobile,
  setMobile,
  setReg,
  setSignIn,
  setEmail,
  email,
  btnRef,
  isOpen,
  onOpen,
  onClose,
}) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const [fullName, setFullName] = useState("");
  const [errorMessageName, setErrorMessageName] = useState("");

  //const [email, setEmail] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");

  // const [mobile, setMobile] = useState("");
  const [errorMessageMobile, setErrorMessageMobile] = useState("");

  const [refferalCode, setRefferalCode] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const toast = useToast();

  const otpdata = useSelector((details) => details.authReducer.otp.message);
  console.log(otpdata);

  const fixeddata = useSelector((details) => details.authReducer.registerInfo);

  useEffect(() => {
    if (fixeddata !== "") {
      sendrequest();
    }
  }, [fixeddata]);

  const handleRegister = () => {
    setSubmitDisabled(true);
    if (fullName === "") {
      setErrorMessageName("Your name is required");
      setSubmitDisabled(true);
      return;
    }
    if (email === "") {
      setErrorMessageEmail("Your email address is required");
      setSubmitDisabled(true);
      return;
    }
    if (mobile === "") {
      setErrorMessageMobile("Phone Number is required");
      setSubmitDisabled(true);
      return;
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
    }
    let obj = {
      userName: fullName,
      email: email,
      phone: mobile,
    };
    dispatch(postregister(obj));
  };

  if (fixeddata !== "" && count == 0) {
    setCount(1);
    sendrequest();
  }
  function sendrequest() {
    let otpobj = {
      value: email,
    };
    dispatch(login(otpobj));
    setErrorMessageName("");

    if (fixeddata === "User Already Exist") {
      console.log("inside already", fixeddata);
      toast({
        title: "Error",
        description: "User Already Exist",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setSubmitDisabled(false);
      return;
    } else if (fixeddata === "User created Successfully") {
      console.log("inside sucess", fixeddata);
      let otpobj = {
        value: email,
      };
      dispatch(login(otpobj));
      toast({
        title: "Success",
        description: "OTP send Succesfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setReg("Otp");
    } else {
      console.log(fixeddata);
      toast({
        title: "Error",
        description: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
    setSubmitDisabled(false);
  }

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
    <div className="SignUpContainer">
      {/* style={{ display: "flex" }} */}
      {/* <Drawer
        size="md"
        isOpen={isOpen}
        placement={{base:, md:"right"}}
        onClose={() => {
          onClose();
          setSignIn(false);
        }}
        finalFocusRef={btnRef}
      > */}

      <Box>
        <Drawer
          size="md"
          isOpen={isOpen}
          placement={"bottom"}
          onClose={() => {
            onClose();
            setSignIn(false);
          }}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
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
                  onClick={() => {
                    setSignIn(true);
                  }}
                >
                  Sign In
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

                <FormLabel marginTop={"16px"}>
                  Referral Code(Optional)
                </FormLabel>
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
        </Drawer>
      </Box>
    </div>
  );
}

export default SignUpDrawer;
