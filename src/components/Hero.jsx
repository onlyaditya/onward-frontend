import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import User from "../assets/User.svg";
import Vector from "../assets/Vector.svg";
import Airtel_Logo from "../assets/Airtel_Logo.svg";
import style from "./Hero.module.css";
import StartDoubleBreket from "../assets/StartDoubleBreket.svg";
import EndDoubleBreket from "../assets/EndDoubleBreket.svg";
import Vector2 from "../assets/Vector_147.svg";
import { Navbar } from "./Navbar";
import HeroBottom from "./HeroBottom";
import SignUpDrawer from "./SignUpDrawer";
import VerifyNumber from "./VerifyNumber";

function Hero() {
  const [reg, setReg] = useState(false);
  const [mobile, setMobile] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <Drawer
        size="md"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        {reg ? (
          <VerifyNumber mobile={mobile} />
        ) : (
          <SignUpDrawer mobile={mobile} setMobile={setMobile} setReg={setReg} />
        )}
        {/* <SignUpDrawer setReg={setReg} /> */}
        {/* <VerifyNumber /> */}
      </Drawer>

      <Navbar btnRef={btnRef} onOpen={onOpen} />
      <Box
        display={"flex"}
        w={"100%"}
        position={"relative"}
        h={"624px"}
        bg={"#FCFAFA"}
      >
        <Flex
          w={"624px"}
          position={"absolute"}
          zIndex={"10"}
          display={"flex"}
          flexDirection={"column"}
          margin={"175px 0px 99px 80px"}
        >
          <div className={style.MainHeading}>
            Realise Your Potential With{" "}
            <spam className={style.MainHeadingSpam}>
              Assured Outcomes
              <img className={style.vectorimage} src={Vector} />
            </spam>
            Delivered.
          </div>

          <Flex className={style.subtital}>
            India’s only outcome-based career institute.
            <br /> Enter the tech workforce industry-ready.
          </Flex>

          <Flex>
            <Button
              className={style.GetYourDreamJobButton}
              bg={"red"}
              color={"#ffffff"}
              _hover={{ backgroundColor: "#D10000", color: "white" }}
            >
              get your dream job
            </Button>
          </Flex>
        </Flex>

        <Flex></Flex>

        <Flex className={style.Component20} position={"absolute"} zIndex={"0"}>
          <Box
            w={"508px"}
            margin={"0px 60px 0 390px"}
            position={"absolute"}
            zIndex={"-500"}
            h={"572px"}
          >
            <Image src={Vector2} />
          </Box>
          <Box
            margin={"27.5px 0px 45px 332px"}
            position={"absolute"}
            borderRadius={"19px 19px 0 0"}
            flexShrink={"5"}
            bg={"#D6E2FA"}
            w={"448px"}
            h={"502px"}
          >
            <Image padding={"52px 12px 0px 12px"} src={User} />
          </Box>

          <Box
            className={style.ReviewCard}
            margin={"289px 325px 85.5px 0"}
            zIndex={"1000"}
            w={"455px"}
            h={"198px"}
            flexShrink={"0"}
            borderRadius={"24px"}
          >
            <Box padding={"26px 17px 40px 39px"}>
              <Text
                fontSize={"14px"}
                lineHeight={"22px"}
                fontFamily={"Open Sans"}
                fontStyle={"normal"}
                fontWeight={"600px"}
              >
                {" "}
                <Image src={StartDoubleBreket} />I liked that every thing is
                taught in a structured manner, and there is no spoon feeding.
                That helps us learn by ourself when we do.{" "}
                <Image src={EndDoubleBreket} />
                <Text margin={"12px 0 0 0"}>Harshit Tripathi</Text>
              </Text>
            </Box>
            <Image
              zIndex={"1500"}
              position={"absolute"}
              margin={"-40px 269px 18px 39px"}
              src={Airtel_Logo}
            />
          </Box>
        </Flex>
      </Box>
      <HeroBottom />
    </div>
  );
}

export default Hero;
