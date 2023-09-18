import React from "react";
import { Route, Routes } from "react-router-dom";
import { Activities } from "../pages/Activities/Activities";
import { Text } from "@chakra-ui/react";
import CoursePage from "../pages/Courses/CoursePage";
import { ActivityDetail } from "../pages/Activities/ActivityDetail";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/activities" element={<Activities />} />
      <Route path="/courses" element={<CoursePage />} />
      <Route path="/activity/detail/:id" element={<ActivityDetail />} />
      <Route
        path="*"
        element={
          <Text
            textAlign={"center"}
            fontSize={"xx-large"}
            as="b"
            w={"1000px"}
            mx={"40%"}
            my={"60"}
          >
            404 Page Not Found
          </Text>
        }
      />
    </Routes>
  );
};
