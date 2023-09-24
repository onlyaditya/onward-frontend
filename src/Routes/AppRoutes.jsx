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


export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardLanding/>}/>
        <Route path="/test" element={<TestPage/>} />
        <Route path="/activities" element={<Activities />}/>
        <Route path="/courses" element={<OurCoursesPage />} />
        <Route path="/profile" element={<Userpage />} />
          <Route path="/refer_and_earn" element={<ReferAndEarn />} />

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
        <Route path="home/results" element={<Result />} />
        <Route path="home/onboardingform" element={<Onboardingform />} />
        <Route path="home/onboardingid" element={<OnboardingIdverif />} />
        <Route path="home/onboardingconsent" element={<OnboardingConsent />} />
        <Route path="home/onboardingjoin" element={<OnboardingJoinus />} />
        <Route path="home/congrats" element={<Congratulations />} />
      </Routes>
    </>
  );
};
