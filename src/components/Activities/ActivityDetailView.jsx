import React, { useEffect, useState } from "react";
import { ActivityDetailHead } from "../ActivityCard/ActivityDetailHead";
import { Box } from "@chakra-ui/react";
import { JoinWhatssappCard } from "../ActivityCard/JoinWhatssappCard";
import { AboutEvent } from "../ActivityCard/AboutEvent";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ActivityDetailView = () => {
  const { id } = useParams();
  const [activityDetail, setActivityDetail] = useState({});

  const getActivityDetail = () => {
    axios
      .get(`https://dash-board.up.railway.app/activities/${id}`)
      .then((res) => {
        setActivityDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getActivityDetail();
  }, []);

  return (
    <Box width={"full"}>
      <ActivityDetailHead {...activityDetail} />
      <JoinWhatssappCard />
      <AboutEvent {...activityDetail} />
    </Box>
  );
};
