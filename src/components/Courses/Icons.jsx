import React from "react";
import { BsCodeSquare } from "react-icons/bs";
import { PiRobot } from "react-icons/pi";
import { ImMobile } from "react-icons/im";
import { TbVectorTriangle } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { Image } from "@chakra-ui/image";
import man from "../../assets/icons/man.png";
import bag from "../../assets/icons/bag.png";
import monitor from "../../assets/icons/monitor.png";
import rupee from "../../assets/icons/rupee.png";
import clock from "../../assets/icons/clock.png";
import calendar from "../../assets/icons/calendar.png";
import spark from "../../assets/icons/spark.png";

const Icons = ({ iconName }) => {
  {
    return iconName === "code" ? (
      <BsCodeSquare color="purple" size={"30px"} />
    ) : iconName === "spiral" ? (
      <TbVectorTriangle color="purple" size={"30px"} />
    ) : iconName === "mobile" ? (
      <ImMobile color="purple" size={"30px"} />
    ) : iconName === "chart" ? (
      <BsGraphUpArrow color="purple" size={"30px"} />
    ) : iconName === "robo" ? (
      <PiRobot color="purple" size={"30px"} />
    ) : iconName === "man" ? (
      <Image src={man} />
    ) : iconName === "bag" ? (
      <Image src={bag} />
    ) : iconName === "clock" ? (
      <Image src={clock} />
    ) : iconName === "monitor" ? (
      <Image src={monitor} />
    ) : iconName === "rupee" ? (
      <Image src={rupee} />
    ) : iconName === "spark" ? (
      <Image src={spark} />
    ) : iconName === "calendar" ? (
      <Image src={calendar} />
    ) : null;
  }
};

export default Icons;
