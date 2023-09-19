import { Flex } from "@chakra-ui/react";
import React from "react";
import { Card } from "./Card";

export const ActivityCard = () => {
  return (
    <Flex flexWrap={"wrap"} gap={"10"} px={"7"}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Flex>
  );
};
