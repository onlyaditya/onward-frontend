import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import Vector from "../assets/Vector.svg";
import style from "./Hero.module.css";
import StartDoubleBreket from "../assets/StartDoubleBreket.svg";
import EndDoubleBreket from "../assets/EndDoubleBreket.svg";
import Vector2 from "../assets/Vector_147.svg";

function Hero() {
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
    <div bgColor={"#fcfafa"} style={{ width: "100%" }}>
      <Box
        border={"2px solid blue"}
        margin={"0 auto 0 auto"}
        display={{ sm: "", md: "", lg: "flex" }}
        flexDirection={{ sm: "row", md: "", lg: "" }}
        flexWrap={"wrap"}
        flexShrink={"0"}
        w={{ sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
        position={"relative"}
        bg={"#FCFAFA"}
      >
        <Box
          border={"2px solid red"}
          w={{ lg: "624px", md: "574px", sm: "" }}
          position={{ lg: "absolute", md: "static", sm: "static" }}
          zIndex={"10"}
          // display={"flex"}
          flexDirection={"column"}
          margin={{
            base: "175px 0px 99px 0px",
            xl: "175px 0px 99px 80px",
            lg: "175px 0px 99px 0px",
            md: "175px auto 99px auto",
            sm: "175px auto 99px auto",
          }}
        >
          <Box
            color={"#000000"}
            fontFamily={"Poppins"}
            fontStyle={"normal"}
            fontWeight={"800"}
            lineHeight={"62px"}
            className={style.MainHeading}
            fontSize={{ sm: "24px", md: "24px", lg: "48px", xl: "48px" }}
          >
            <Text display={"inline"}> Realise Your Potential With </Text>
            <Text
              border={"1px solid green"}
              display={"inline-block"}
              fontSize={{ sm: "24px", md: "24px", lg: "48px", xl: "48px" }}
              fontStyle={"normal"}
              fontWeight={"800"}
              lineHeight={"62px"}
              color={"#ed0331"}
              fontFamily={"Poppins"}
            >
              Assured Outcomes
              <Image src={Vector} marginLeft={"10px"} marginTop={"-10px"} />
            </Text>
            <Text> Delivered.</Text>
          </Box>

          <Box
            color={"#21191B"}
            fontFamily={"Open Sans"}
            fontSize={{ lg: "24px", md: "14px" }}
            fontStyle={"normal"}
            fontWeight={{ lg: "400", md: "" }}
            lineHeight={{ lg: "34px", md: "24px" }}
            margin={{ lg: "16px 0 32px 0", md: "12px 0 0 0" }}
          >
            India’s only outcome-based career institute. Enter the tech
            workforce industry-ready.
          </Box>

          <Box>
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
          </Box>
        </Box>

        <Box
          border={"2px solid black"}
          display={"flex"}
          w={"700px"}
          h={"572px"}
          justifyContent={"center"}
          alignItems={"center"}
          flexShrink={"0"}
          top={"95px"}
          right={"80px"}
          // marginLeft={{ sm: "auto", md: "auto", lg: "650px", xl: "650px" }}
          margin={{
            sm: "95px auto 0 auto",
            md: "95px auto 0 auto",
            lg: "95px 0 0 650px",
          }}
          // marginTop={"95px"}
          zIndex={"0"}
        >
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
            <Image padding={"52px 12px 0px 12px"} src={currentItem.image} />
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
      </Box>
    </div>
  );
}

export default Hero;
