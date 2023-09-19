import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Card } from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/activityReducer/action";

export const ActivityCard = () => {
  const activities = useSelector((store) => store.activityReducer.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  return (
    <Flex flexWrap={"wrap"} gap={"10"} px={"7"}>
      {activities.length > 0 &&
        activities.map((el) => {
          return <Card key={el.activityId} {...el} />;
        })}
    </Flex>
  );
};
