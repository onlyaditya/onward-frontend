import React from "react";
import { Image } from "@chakra-ui/image";
import code from "../../assets/icons/code.png";
import graph from "../../assets/icons/graph.png";
import mobile from "../../assets/icons/mobile.png";
import robo from "../../assets/icons/robo.png";
import spiral from "../../assets/icons/spiral.png";
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
      <Image src={code} />
    ) : iconName === "spiral" ? (
      <Image src={spiral} />
    ) : iconName === "mobile" ? (
      <Image src={mobile} />
    ) : iconName === "graph" ? (
      <Image src={graph} />
    ) : iconName === "robo" ? (
      <Image src={robo} />
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
