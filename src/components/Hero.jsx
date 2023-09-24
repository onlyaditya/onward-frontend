import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import Vector from "../assets/Vector.svg";
import style from "./Hero.module.css";
import StartDoubleBreket from "../assets/StartDoubleBreket.svg";
import EndDoubleBreket from "../assets/EndDoubleBreket.svg";
import Vector2 from "../assets/Vector_147.svg";
import HomepageUI from "./HomeLayout";

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

  return <HomepageUI />;
}

export default Hero;
