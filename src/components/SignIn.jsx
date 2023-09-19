import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Heading,
  Flex,
  Text,
  useToast,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

export default function SignIn({ onClose, isOpen, onOpen }) {
  const btnRef = useRef();

  return (
    <div className="SignInContainer" style={{ display: "flex" }}>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
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
                  // onChange={handleNameChange}
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
                //   onClick={handleRegister}
              >
                continue
              </Button>
            </Box>
          </DrawerContent>
        </Box>
      </Drawer>
    </div>
  );
}
