import React from "react";
import Vector from "../assets/Vector.svg";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

function New(props) {
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
  return (
    <Box bg="#fcfafa">
      <Box
        border={"2px solid red"}
        w={{ lg: "624px", md: "574px", sm: "100%", base: "100%" }}
        maxWidth={{ base: "100%" }}
        margin={{
          base: "175px 0px 99px 0px",
        }}
      >
        <Box
          color={"#000000"}
          fontFamily={"Poppins"}
          fontStyle={"normal"}
          fontWeight={"800"}
          lineHeight={{ base: "32px" }}
          textAlign={{ base: "center" }}
          margin={"0 auto"}
        >
          <Text fontSize={{ base: "24px" }}>
            {" "}
            Realise Your Potential with{" "}
            <Text
              // position={"relative"}
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
      </Box>
      <Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
}

export default New;
