import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import axios from "axios";

export const ActivityCard = () => {
  const [activities, setActivities] = useState([]);

  const getAllActivity = () => {
    axios
      .get("https://dash-board.up.railway.app/activities")
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllActivity();
  }, []);

  return (
    <Flex flexWrap={"wrap"} gap={"10"} px={"7"}>
      {activities.length > 0 &&
        activities.map((el) => {
          return <Card key={el.id} {...el} />;
        })}

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Flex>
  );
};
