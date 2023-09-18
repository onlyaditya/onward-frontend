import { Box } from "@chakra-ui/react";
import React from "react";
import { ActivityDetailView } from "../../components/Activities/ActivityDetailView";

export const ActivityDetail = () => {
  return (
    <Box w={"88%"} marginLeft={{ lg: "240px", md: "64px", sm: "64px" }}>
      <ActivityDetailView />
    </Box>
  );
};
