import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import liveImage from "../../assets/images/activities-live.png";
import masterclassImage from "../../assets/images/activities-masterclass.png";
import contestImage from "../../assets/images/activities-contests.png";
import eventsImage from "../../assets/images/activities-events.png";
import { ActivityItem } from "./ActivityItem";
import { useDispatch } from "react-redux";
import { getActivities } from "../../redux/activityReducer/action";

export const ActivitiesTabs = () => {
  const [type, setType] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const paramObj = {
      params: type !== null && {
        type,
      },
    };

    dispatch(getActivities(paramObj));
  }, [type]);

  return (
    <Box display={"flex"} gap={"5"} my={"33"} mx={"33"} alignItems={"center"}>
      <Image src={liveImage} w={"fit-content"} width={"76px"} height={"76px"} />
      <ActivityItem
        image={masterclassImage}
        text={"Masterclass"}
        bg1={"#FFFFFF"}
        bg2={"#FFE4E4"}
        changeType={() => setType(1)}
      />
      <ActivityItem
        image={eventsImage}
        text={"Events"}
        bg1={"#FFFFFF"}
        bg2={"#FFF8E4"}
        changeType={() => setType(null)}
      />
      <ActivityItem
        image={contestImage}
        text={"Webinars"}
        bg1={"#FFFFFF "}
        bg2={"#E4FFFA"}
        changeType={() => setType(0)}
      />
    </Box>
  );
};
