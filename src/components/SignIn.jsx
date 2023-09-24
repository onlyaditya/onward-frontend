import React, { useState, useEffect, useRef } from "react";
import { login } from "../redux/authReducer/auth.action";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Heading,
  Flex,
  Text,
  useToast,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  FormLabel,
  FormControl,
  Show,
  Spinner,
} from "@chakra-ui/react";

export default function SignIn({
  mobile,
  setMobile,
  setEmail,
  email,
  setReg,
  setSignIn,
  signIn,
  btnRef,
  isOpen,
  onOpen,
  onClose,
}) {
  const dispatch = useDispatch();
  const toast = useToast();
  const isInitialRender = useRef(true);
  const [signinbutttondisable, setSignInButtonDisable] = useState(false);

  const state = useSelector((details) => details.authReducer);

  console.log(state);
  useEffect(() => {
    console.log("Inside useEffect");
    if (state.otp !== "waiting" && state.isLoading === false) {
      sendrequest();
    }
  }, [state]);

  function handleEmailChange(e) {
    const newEmail = e.target.value;
    setEmail(newEmail);
  }

  function handlelogin() {
    setSignInButtonDisable(true);
    let obj = {
      value: email,
    };
    dispatch(login(obj));
  }

  function sendrequest() {
    if (state.otp === "user not registered") {
      console.log("inside already", state.otp.otp);
      toast({
        title: "Error",
        description: "User Not Registered",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setSignInButtonDisable(false);
      return;
    } else if (state.otp === "OTP sent") {
      console.log("inside sucess", state.otp.otp);
      toast({
        title: "Success",
        description: "OTP Send Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setSignInButtonDisable(false);
      setReg("Otp");
    } else {
      console.log(state.otp);
      setSignInButtonDisable(false);
    }
  }

  return (
    <div>
      <Show above="md">
        <Drawer
          size="md"
          isOpen={isOpen}
          placement={"right"}
          onClose={() => {
            onClose();
            setSignIn(false);
          }}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <Box>
            <DrawerContent w={"33%"}>
              <Box margin={"3% 0 0 90%"}>
                <DrawerCloseButton />
              </Box>

              <Box padding={"210px 48px 319px 48px"}>
                <Heading
                  fontFamily={"Poppins"}
                  color={"#03081A"}
                  fontSize={"24px"}
                  fontStyle={"normal"}
                  fontWeight={700}
                  lineHeight={"32px"}
                  as={"h3"}
                  display={"flex"}
                  justifyContent={"center"}
                  onClick={() => {
                    setSignIn(!signIn);
                  }}
                >
                  Sign In
                </Heading>

                <Flex
                  margin={"16px 0 16px 0"}
                  display={"flex"}
                  justifyContent={"center"}
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
                    New User?
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
                      setSignIn(!signIn);
                    }}
                  >
                    Sign up
                  </Text>
                </Flex>

                <FormControl>
                  <FormLabel>
                    Phone number or email address{" "}
                    <spam style={{ color: "red" }}>*</spam>
                  </FormLabel>
                  <Input
                    onChange={handleEmailChange}
                    placeholder="Enter phone number or email address "
                    type="Text"
                  />
                </FormControl>

                <Button
                  //   isDisabled={submitDisabled}
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
                  onClick={handlelogin}
                >
                  {signinbutttondisable ? (
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
        </Drawer>
      </Show>
      <Show below="md">
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
          <Box>
            <DrawerContent w={"33%"}>
              <Box margin={"3% 0 0 90%"}>
                <DrawerCloseButton />
              </Box>

              <Box padding={"210px 48px 319px 48px"}>
                <Heading
                  fontFamily={"Poppins"}
                  color={"#03081A"}
                  fontSize={"24px"}
                  fontStyle={"normal"}
                  fontWeight={700}
                  lineHeight={"32px"}
                  as={"h3"}
                  display={"flex"}
                  justifyContent={"center"}
                  onClick={() => {
                    setSignIn(!signIn);
                  }}
                >
                  Sign In
                </Heading>

                <Flex
                  margin={"16px 0 16px 0"}
                  display={"flex"}
                  justifyContent={"center"}
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
                    New User?
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
                      setSignIn(!signIn);
                    }}
                  >
                    Sign up
                  </Text>
                </Flex>

                <FormControl>
                  <FormLabel>
                    Phone number or email address{" "}
                    <spam style={{ color: "red" }}>*</spam>
                  </FormLabel>
                  <Input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter phone number or email address "
                    type="Text"
                  />
                </FormControl>

                <Button
                  //   isDisabled={submitDisabled}
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
                  onClick={handlelogin}
                >
                  {signinbutttondisable ? (
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
        </Drawer>
      </Show>
    </div>
  );
}
