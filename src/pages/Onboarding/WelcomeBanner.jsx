import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const WelcomeBanner = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    let token = JSON.parse(localStorage.getItem("auth"));

    console.log(token);
    try {
      let res = await axios.get(
        "https://dash-board.up.railway.app/user-details",
        { headers: { Authorization: token } }
      );
      console.log(res);
      setUser(res.data.userName);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Box
      w="425px"
      h="108px"
      flexShrink="0"
      borderRadius="12px"
      background="#FFF"
      boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
      // m="100px auto"
      position="relative"
      zIndex="-2"
      pt="24px"
      overflow="hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="425"
        height="108"
        viewBox="0 0 425 108"
        fill="none"
        style={{
          position: "absolute",
          top: "0px",
          zIndex: "-1",
          width: "771px",
          height: "108px",
          flexShrink: "0",
          left: "-172px",
        }}
      >
        <path
          d="M106.245 74.4208C77.5109 108.502 22.1091 110.191 -2 106.776V0H769C752.107 16.3596 707.694 46.3824 665.183 35.5973C612.045 22.1159 514.132 39.372 445.249 74.4208C376.366 109.47 267.298 55.189 265.66 54.4683C220.302 34.5 142.163 31.8196 106.245 74.4208Z"
          fill="#FFF3CC"
        />
      </svg>

      <Text
        w="244px"
        color="var(--primary-red-900, #0A0103)"
        fontFamily="Poppins"
        fontSize="16px"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="20px"
        // mt="24px"
        ml="26px"
      >
        Hey {user}!
      </Text>
      <Text
        w="244px"
        color="var(--secondary-blue-500, #3470E4)"
        fontFamily="Poppins"
        fontSize="20px"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="28px"
        ml="26px"
      >
        Welcome to Masai!{" "}
      </Text>
    </Box>
  );
};

export default WelcomeBanner;
