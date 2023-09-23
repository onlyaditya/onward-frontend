import React, { useState, useEffect, useRef } from "react";
import { Checkotp } from "../redux/authReducer/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  Flex,
  Text,
  PinInput,
  PinInputField,
  HStack,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  useToast,
  Link,
} from "@chakra-ui/react";

export default function VerifyNumber({
  mobile,
  setReg,
  email,
  isOpen,
  onOpen,
  onClose,
  btnRef,
  setSignIn,
  signIn,
}) {
  const [errorMessageWrongOTP, setErrorMessageWrongOTP] = useState("");
  const [seconds, setSeconds] = useState(30);
  const [pin, setPin] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const tokendata = useSelector((details) => {
    return details.authReducer.token;
  });

  useEffect(() => {
    console.log("inside useEffect", tokendata);
    if (tokendata !== "waiting") {
      redirect();
    }
  }, [tokendata]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleChange = (value) => {
    if (pin === "" || pin.length < 5) {
      setErrorMessageWrongOTP("Must be exactly 6 characters");
    } else {
      setErrorMessageWrongOTP("");
    }
    setPin(value);
  };

  function VerifyOTP() {
    if (pin === "" || pin.length < 6) {
      toast({
        title: "Error",
        description: "Invalid OTP",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      //console.log("Pin Value:", pin);
      let otpobj = {
        value: email,
      };
      dispatch(Checkotp(pin, otpobj)).then(() => {
        redirect();
      });
    }
  }

  console.log("outer toekn data", tokendata);

  function redirect() {
    if (tokendata !== "waiting" && tokendata !== "wrong otp") {
      console.log("success", tokendata);
      toast({
        title: "Success",
        description: "Succesfully Sign Up",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      navigate("/dashboard");
    } else {
      console.log("not success", tokendata);
      toast({
        title: "Error",
        description: "Invalid OTP",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  }

  return (
    <div className="SignUpContainer" style={{ display: "flex" }}>
      <div style={{ width: "100vw" }}> </div>

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
      <Drawer
        size="md"
        isOpen={isOpen}
        placement={{ base: "bottom", md: "right" }}
        onClose={() => {
          onClose();
          setSignIn(!signIn);
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
              >
                Verify Number
              </Heading>

              <Box>
                <Flex marginTop={"16px"}>
                  <Text
                    fontSize={"16px"}
                    fontStyle={"normal"}
                    fontWeight={600}
                    lineHeight={"24px"}
                    as={"h3"}
                    fontFamily={"Open Sans"}
                    color={"#544D4F"}
                  >
                    Enter OTP sent to {mobile}
                  </Text>
                  <Text
                    marginLeft={"8px"}
                    fontSize={"16px"}
                    fontStyle={"normal"}
                    fontWeight={600}
                    lineHeight={"24px"}
                    as={"h3"}
                    textDecoration={"underline"}
                    fontFamily={"Open Sans"}
                    color={"#4358F6"}
                    _hover={{ cursor: "pointer" }}
                  >
                    Edit
                  </Text>
                </Flex>

                <Box marginTop={"16px"}>
                  <HStack>
                    <PinInput
                      onChange={handleChange}
                      //onComplete={handleChange}
                      placeholder=""
                      defaultValue=""
                    >
                      <PinInputField bg={"#F3F3F3"} />
                      <PinInputField bg={"#F3F3F3"} />
                      <PinInputField bg={"#F3F3F3"} />
                      <PinInputField bg={"#F3F3F3"} />
                      <PinInputField bg={"#F3F3F3"} />
                      <PinInputField bg={"#F3F3F3"} />
                    </PinInput>
                  </HStack>
                </Box>
              </Box>

              <Flex marginTop={"8px"} display={"flex"} flexDirection={"column"}>
                <Text
                  fontStyle={"normal"}
                  fontWeight={600}
                  lineHeight={"16px"}
                  fontSize={"12px"}
                  fontFamily={""}
                >
                  Resend OTP in {seconds} seconds
                </Text>
                {/* <br /> */}
                <Text
                  color={"#D61E27"}
                  fontStyle={"normal"}
                  fontWeight={400}
                  lineHeight={"24px"}
                  fontSize={"14px"}
                  fontFamily={"Open Sans"}
                >
                  {errorMessageWrongOTP}
                </Text>
              </Flex>

              <Button
                marginTop={"16px"}
                fontStyle={"normal"}
                p={"12px 20px"}
                fontWeight={600}
                lineHeight={"24px"}
                fontSize={"18px"}
                fontFamily={""}
                textTransform={"uppercase"}
                w={"100%"}
                color={"#FFFFFF"}
                bg={"#3470E4"}
                borderRadius={"8px"}
                _hover={{ background: "#1647A5" }}
                onClick={VerifyOTP}
              >
                verify
              </Button>
            </Box>
          </DrawerContent>
        </Box>
      </Drawer>
    </div>
  );
}
