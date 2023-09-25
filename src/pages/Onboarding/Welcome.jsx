import React, { useEffect } from "react";
import { CommonLayout } from "../../components/CommonLayout";
import WelcomeBanner from "./WelcomeBanner";
import { Box, Flex } from "@chakra-ui/react";
import SelfLearningCourses from "./SelfLearningCourses";
import { ActivityCard } from "../../components/ActivityCard/ActivityCard";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/activityReducer/action";
import { Card } from "../../components/ActivityCard/Card";

const Welcome = () => {
  let activities = useSelector((store) => store.activityReducer.activities);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getActivities());
  }, []);

  if (activities.length > 0) {
    activities = [activities[0]];
  }
  return (
    <CommonLayout>
      <Flex p="20px" gap="10px" flexWrap="wrap">
        <Flex flexDirection="column" gap="20px">
          <WelcomeBanner />
          <Card key={activities[0]?.activityId} {...activities[0]} />
        </Flex>
        <SelfLearningCourses />
      </Flex>
    </CommonLayout>
  );
};

export default Welcome;
