import React from "react";
import { Route, Routes } from "react-router-dom";
import { Activities } from "../pages/Activities/Activities";
import { Text } from "@chakra-ui/react";
import { ActivityDetail } from "../pages/Activities/ActivityDetail";
import OurCoursesPage from "../pages/Courses/OurCoursesPage";
import { ActivityOptions } from "../pages/Activities/ActivityOptions";
import { HomePage } from "../pages/HomePage";
import Result from "../pages/Results/Result";
import Onboardingform from "../pages/Onboarding/Onboardingform";
import OnboardingIdverif from "../pages/Onboarding/OnboardingIdverif";
import OnboardingConsent from "../pages/Onboarding/OnboardingConsent";
import OnboardingJoinus from "../pages/Onboarding/OnboardingJoinus";
import Congratulations from "../pages/Onboarding/Congratulations";
import DashboardLanding from "../pages/DashboardLanding";
import TestPage from "../pages/TestPage/TestPage";
import Userpage from "../pages/Userpage";
import ReferAndEarn from "../components/ReferAndEarn";
import PrivateRouting from "../components/PrivateRouting/PrivateRouting";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRouting>
              {" "}
              <DashboardLanding />
            </PrivateRouting>
          }
        />
        <Route
          path="/test"
          element={
            <PrivateRouting>
              <TestPage />
            </PrivateRouting>
          }
        />
        <Route
          path="/activities"
          element={
            <PrivateRouting>
              <Activities />
            </PrivateRouting>
          }
        />
        <Route
          path="/courses"
          element={
            <PrivateRouting>
              <OurCoursesPage />
            </PrivateRouting>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRouting>
              <Userpage />
            </PrivateRouting>
          }
        />
        <Route
          path="/refer_and_earn"
          element={
            <PrivateRouting>
              <ReferAndEarn />
            </PrivateRouting>
          }
        />

        <Route
          path="/activity/detail/:id"
          element={
            <PrivateRouting>
              <ActivityDetail />
            </PrivateRouting>
          }
        />
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
        <Route
          path="home/results"
          element={
            <PrivateRouting>
              <Result />
            </PrivateRouting>
          }
        />
        <Route
          path="home/onboardingform"
          element={
            <PrivateRouting>
              <Onboardingform />
            </PrivateRouting>
          }
        />
        <Route
          path="home/onboardingid"
          element={
            <PrivateRouting>
              <OnboardingIdverif />
            </PrivateRouting>
          }
        />
        <Route
          path="home/onboardingconsent"
          element={
            <PrivateRouting>
              <OnboardingConsent />
            </PrivateRouting>
          }
        />
        <Route
          path="home/onboardingjoin"
          element={
            <PrivateRouting>
              <OnboardingJoinus />
            </PrivateRouting>
          }
        />
        <Route
          path="home/congrats"
          element={
            <PrivateRouting>
              <Congratulations />
            </PrivateRouting>
          }
        />
      </Routes>
    </>
  );
};
