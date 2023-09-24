import React from "react";
import { Text, Box, Image, Grid, Show, Hide } from "@chakra-ui/react";
import UserImage from "../assets/UserImage.svg";
import UserProfile from "../components/UserProfile";
import IncrmentIcons from "../assets/IncrmentIcons.svg";
import BackArrow from "../assets/BackArrow.svg";
import { CommonLayout } from "../components/CommonLayout";

function Userpage(props) {
  return (
    <>
    <CommonLayout >
      <Show below="md">
        <Box
          display={"flex"}
          h={"40px"}
          bg={"#FFE180C2"}
          p={"4px 20px 4px 16px"}
          lineHeight={"24px"}
        >
          <Image src={BackArrow} />
          <Text
            display={"flex"}
            justifyContent={"center"}
            marginLeft={"8px"}
            fontFamily={"Open Sans"}
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"600"}
            color={"#21191B"}
          >
            My Profile
          </Text>
        </Box>
      </Show>

      <Box
        bg={"#F2F6FF"}
        w={"100vw"}
        h={"100vh"}
        p={{
          base: "0px 16px",
          md: "24px 24px",
        }}
      >
        <Hide below="md">
          <Box display={"flex"}>
            <Text
              fontFamily={"Open Sans"}
              fontSize={"14px"}
              fontStyle={"normal"}
              lineHeight={"24px"}
            >
              Home
            </Text>
            <Image src={IncrmentIcons} />
            <Text
              fontFamily={"Open Sans"}
              fontSize={"14px"}
              fontStyle={"normal"}
              lineHeight={"24px"}
              color={"#ED0331"}
            >
              My Profile
            </Text>
          </Box>

          <Box>
            <Text
              fontSize={"24px"}
              fontWeight={"700"}
              lineHeight={{ base: "24px", md: "32px" }}
              margin={{
                md: "24px 0px 0 0",
              }}
            >
              My Profile
            </Text>
          </Box>
        </Hide>

        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          margin={{ base: "0px 0 22px 0", md: "16px 0 16px 0" }}
          gap={"16px"}
        >
          <Image
            display={"flex"}
            //   margin={{ sm: "auto auto", md: "" }}
            //   justifyContent={{ base: "center", md: "" }}
            marginTop={{ base: "12px", md: "0px" }}
            alignSelf={"center"}
            w={"100px"}
            h={"100px"}
            src={UserImage}
          />
          <Text
            display={"flex"}
            alignItems={"center"}
            fontSize={"18px"}
            fontWeight={"700"}
            lineHeight={"24px"}
            justifyContent={{ base: "center", md: "" }}
          >
            {"Shaban Khan"}
          </Text>
        </Box>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: "12px", md: "16px" }}
        >
          <UserProfile Title={"Name"} data={"Shaban"} />
          <UserProfile
            Title={"Mobile Number"}
            data={"9044945896"}
            button={true}
            buttonValue={"REFER NOW"}
          />
          <UserProfile
            Title={"Email Address"}
            data={"Shabhankhan!23456@gmail.com"}
            button={true}
            buttonValue={"VERIFY"}
          />
          <UserProfile Title={"Referral Code"} data={"TXHE5S"} />
        </Grid>
      </Box>
      </CommonLayout>
    </>
  );
}

export default Userpage;
