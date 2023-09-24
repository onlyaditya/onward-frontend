import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import userAvatar from "../../assets/images/userAvatar.png";
import googleLogo from "../../assets/allsvgimages/googleLogo.svg";
import telegramlogo from "../../assets/allsvgimages/telegramlogo.svg";
import { Button } from "@chakra-ui/button";
let students = [
  {
    id: 1,
    name: "Rahul Gera",
    company: "googleLogo",
    quote:
      "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Fri pul viar quam ipsum dolor sit amet, co...",
  },
  {
    id: 2,
    name: "Shivam",
    company: "Honeywell",
    quote:
      "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Fri pul viar quam ipsum dolor sit amet, co...",
  },
  {
    id: 3,
    name: "Sunil",
    company: "Masai",
    quote:
      "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Fri pul viar quam ipsum dolor sit amet, co...",
  },
  {
    id: 3,
    name: "Sunil",
    company: "Masai",
    quote:
      "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Fri pul viar quam ipsum dolor sit amet, co...",
  },
];

const PhoneRightSidebar = () => {
  return (
    <>
      <Text
        ml={"60px"}
        color={"#21191B"}
        fontFamily={"Open Sans"}
        fontSize={"16px"}
        fontStyle={"normal"}
        fontWeight={"600"}
        lineHeight={"24px"}
        mb="12px"
        mt="40px"
      >
        Read what our students have to say
      </Text>

      <Box width="70%" m="auto" overflowX="scroll" mb="20px">
        <Flex gap={"12px"} width={`${students.length}00%`}>
          {students.map((el) => {
            return (
              <Box
                h={"170px"}
                w={"100%"}
                display={"flex"}
                flexDir={"column"}
                padding={"16px"}
                alignItems={"flex-start"}
                gap="8px"
                alignSelf={"stretch"}
                borderRadius={"16px"}
                border="1px solid var(--extended-blue-100, #D6E2FA)"
                bgColor={"#FFF"}
              >
                <Flex gap={"80px"} alignItems={"center"}>
                  <Box>
                    <Image src={userAvatar} />
                  </Box>
                  <Box>
                    <Box>
                      <Text fontWeight={"600"}>{el.name}</Text>
                    </Box>
                    <Flex alignItems={"center"}>
                      <Text>Placed at</Text>
                      <Box>
                        <Image src={googleLogo} />
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
                <Text
                  color={"var(--neutral-grey-700, #544D4F)"}
                  fontFamily={"Open Sans"}
                  fontSize={"12px"}
                  fontWeight={"400"}
                  lineHeight={"16px"}
                  texlAlign="left"
                >
                  {el.quote}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
      <Box
        w="70%"
        margin={"auto"}
        mb="100px"
        h="240px"
        border="0.676px solid var(--neutral-grey-100, red)"
        borderRadius="12px"
        background="#FFF"
        box-shadow="0px 1.35277px 2.70554px -0.67638px rgba(0, 0, 0, 0.06), 0px 2.70554px 4.05831px -0.67638px rgba(0, 0, 0, 0.10)"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="10.9px"
          padding="10.82px 24.35px 0px 25.03px"
        >
          <Text
            color="var(--primary-purple, #7261DF)"
            textAlign="center"
            fontFamily="Open Sans"
            fontSize="10.822px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="16.233px"
          >
            Join our telegram community to connect with your fellow mates
          </Text>
          <Text
            color="var(--primary-dark-grey, #03081A)"
            textAlign="center"
            fontFamily="Poppins"
            fontSize="13.528px"
            fontStyle="normal"
            fontWeight={700}
            lineHeight="18.939px"
          >
            1500+ already joined
          </Text>
        </Box>

        <Box>{/* Inser images here for first box */}</Box>
        <Box
          display="flex"
          justifyContent="center"
          padding={"0px 10.82px 10.71px 10.82px"}
        >
          <Button
            width={"full"}
            padding="5.411px 10.822px"
            color="var(--secondary-blue-500, #3470E4)"
            fontFamily="Open Sans"
            fontSize="9.469px"
            fontStyle="normal"
            fontWeight={600}
            lineHeight="16.233px"
            letterSpacing="0.845px"
            textTransform="uppercase"
          >
            join community
            <Image src={telegramlogo} />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PhoneRightSidebar;
