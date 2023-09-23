import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import Vector from "../assets/Vector.svg";
import style from "./Hero.module.css";
import StartDoubleBreket from "../assets/StartDoubleBreket.svg";
import EndDoubleBreket from "../assets/EndDoubleBreket.svg";
import Vector2 from "../assets/Vector_147.svg";

function Mainpage() {
  const dataObjects = [
    {
      id: 1,
      name: "Ramendra Vikram Sign Parihar",
      image:
        "https://www.masaischool.com/images/new-homepage/banner-student-image3.webp",
      description:
        "Going through the 11-11-6 curriculum was a breathtaking experience. Every new unit came with great enthusiasm and a new challenge",
      companyLogo:
        "https://www.masaischool.com/images/new-homepage/company-logo3.svg",
    },
    {
      id: 2,
      name: "Hitesh Tripathi",
      image:
        "https://www.masaischool.com/images/new-homepage/banner-student-image1.webp",
      description:
        "I liked that every thing is taught in a structured manner, and there is no spoon feeding. That helps us learn by ourself when we do.",
      companyLogo:
        "https://www.masaischool.com/images/new-homepage/company-logo1.svg ",
    },
    {
      id: 3,
      name: "Pooja Kumari",
      image:
        "https://www.masaischool.com/images/new-homepage/banner-student-image2.webp",
      description:
        "I developed Communication Skills, People Skills, Mindset, active patience, JAVA, DSA, JavaScript, CSS, and HTML.",
      companyLogo:
        "https://www.masaischool.com/images/new-homepage/company-logo2.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataObjects.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentItem = dataObjects[currentIndex];

  return (
    <div bgColor={"#fcfafa"}>
      <Box
        display={"flex"}
        alignSelf={"center"}
        justifyContent={"space-between"}
        border={"2px solid blue"}
        maxWidth={"1440px"}
        position={"relative"}
        flexDirection={{ base: "column", sm: "column", lg: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        // flexWrap={"wrap"}
        // flexShrink={"0"}
        padding={{
          basee: "0 0 0 0",
          lg: "0px 80px 0px 80px",
        }}
        margin={"95px auto 0 auto"}
        w={{ sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
        bg={"#FCFAFA"}
      >
        <Box
          border={"2px solid red"}
          w={{ lg: "624px", md: "574px", sm: "100%", base: "100%" }}
          zIndex={"10"}
          maxWidth={{ base: "100%", lg: "50%" }}
          flexDirection={"column"}
          margin={{
            base: "175px 0px 99px 0px",
            xl: "175px 0px 99px 0px",
            lg: "175px 0px 99px 0px",
            md: "88px auto 0px auto",
            base: "88px auto 0px auto",
          }}
        >
          <Box
            color={"#000000"}
            fontFamily={"Poppins"}
            fontStyle={"normal"}
            fontWeight={"800"}
            lineHeight={{ base: "32px", md: "62px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontSize={{ base: "24px", lg: "48px" }}>
              {" "}
              Realise Your Potential with{" "}
              <Text
                position={"relative"}
                border={"1px solid green"}
                display={{ sm: "inline", md: "inline" }}
                color={"#ed0331"}
              >
                Assured Outcomes{" "}
                <Image
                  position={"absolute"}
                  src={Vector}
                  top={["20px", "16px", "16px", "48px"]}
                  left="0px"
                  //   margin={{ lg: "0 0 0 10rem" }}
                  //   w={{ sm: "10%", md: "65%", lg: "65%" }}
                  //   marginLeft={"10px"}
                  //   marginTop={"-10px"}
                />
              </Text>
              Delivered
            </Text>
          </Box>

          <Box
            color={"#21191B"}
            fontFamily={"Open Sans"}
            fontSize={{ lg: "24px", base: "14px" }}
            fontStyle={"normal"}
            fontWeight={{ lg: "400", base: "600" }}
            lineHeight={{ lg: "34px", base: "24px" }}
            textAlign={{ base: "center", lg: "left" }}
            margin={{
              lg: "16px 0 32px 0",
              md: "12px 0 0 0",
              sm: "12px 0 24px 0",
            }}
          >
            India’s only outcome-based career institute. Enter the tech
            workforce industry-ready.
          </Box>

          <Flex
            justifyContent={{ base: "center", lg: "flex-start" }}
            marginTop={{ base: "24px", lg: "32px" }}
          >
            <Button
              fontFamily={"Open Sans"}
              fontSize={"18px"}
              fontStyle={"normal"}
              fontWeight={"600"}
              lineHeight={"24px"}
              textTransform={"uppercase"}
              padding={"12px 20px"}
              bg={"#ED0331"}
              color={"#ffffff"}
              _hover={{ backgroundColor: "#D10000", color: "white" }}
            >
              get your dream job
            </Button>
          </Flex>
        </Box>

        <Box
          margin={{
            base: "340px 0px 0 0px",
            lg: "95px 60px 0 50%",
          }}
          border={"2px solid black"}
          position={{ base: "relative", lg: "absolute" }}
          display={"flex"}
          h={["429px", ""]}
          width={{ base: "100%", sm: "100%", md: "100%", lg: "40%" }}
          justifyContent={"center"}
          alignItems={"center"}
          flexShrink={"0"}
          zIndex={"0"}
        >
          <Box
            zIndex={"0"}
            margin={{ base: "auto, auto" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            width={{ base: "23.87rem", lg: "31.75rem" }}
            height={{ base: "35.25", lg: "35rem" }}
          >
            <Image src={Vector2} />
          </Box>

          <Box
            border={"5px solid green"}
            position={{ base: "static", lg: "absolute" }}
            width={{ base: "18.18rem", lg: "424px" }}
            height={{ base: "19.68rem", lg: "448px" }}
            bg={"#D6E2FA"}
            zIndex={"10"}
            borderRadius={"19px 19px 0 0"}
          >
            <Image
              padding={"0 12px 0 12px"}
              zIndex="1"
              width={{ base: "18.18rem", lg: "424px" }}
              height={{ base: "19.68rem", lg: "448px" }}
              src={currentItem.image}
            />
          </Box>
        </Box>

        <Box
          position
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
              <Image src={StartDoubleBreket} />
              {currentItem.description}
              <Image src={EndDoubleBreket} />
              <Text margin={"12px 0 0 0"}>{currentItem.name}</Text>
            </Text>
          </Box>
          <Image
            zIndex={"1500"}
            position={"absolute"}
            margin={"-40px 269px 18px 39px"}
            src={currentItem.companyLogo}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Mainpage;

{
  /* 



</Box> */
}
