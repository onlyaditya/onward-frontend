import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import arrow from "../../assets/allsvgimages/rightleftarrow.svg";

const ScoreCard = ({ name, result, marks, maxMarks }) => {
  return (
    <>
      <Flex
        // maxW={["314px"]}
        w={["100%", "100%"]}
        h={["63px"]}
        borderRadius="16px"
        border="1px solid #CFD0EE"
        background="#FFF"
        gap="11px"
      >
        <Flex
          w="40px"
          h="40px"
          p="8px"
          justifyContent="center"
          alignItems="center"
          flexShrink="0"
          ml="8px"
          mt="8px"
          borderRadius="16px"
          background="#F7F7FF"
        >
          <Image src={arrow} />
        </Flex>
        <Flex
          mt="9px"
          // maxW={["240px"]}
          w="100%"
          mr={["14px"]}
          wrap="wrap"
        >
          <Flex w="100%" justifyContent="space-between">
            <Text
              display="inline-block"
              color="#0A0103"
              fontFamily="Open Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
              // marginRight="auto"
            >
              {name}
            </Text>
            <Text
              display="inline-block"
              color={result == "Passed" ? "#049402" : "#D61E27"}
              textAlign="right"
              fontFamily="Open Sans;"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
              // mr="auto"
            >
              {result}
            </Text>
          </Flex>
          <Text
            color="#544D4F)"
            fontFamily="Open Sans"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="24px"
          >
            Marks : {marks}/{maxMarks}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default ScoreCard;

// <Box
//   maxW="250px"
//   h="63px"
//   borderRadius="16px"
//   border="1px solid var(--extended-purple-100, #CFD0EE)"
//   bgColor="var(--primary-white-fff, #FFF)"
//   display="flex"
//   pl="8px"
//   gap="11px"
// >
//   <Box
//     display="flex"
//     w="40px"
//     h="40px"
//     p="8px"
//     mt="8px"
//     justify="center"
//     alignItems="center"
//     flexShrink="0"
//     borderRadius="16px"
//     bgColor="var(--extended-purple-50, #F7F7FF)"
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//     >
//       <g clip-path="url(#clip0_3_22091)">
//         <path d="M0 0H24V24H0V0Z" fill="#F7F7FF" />
//         <path
//           d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z"
//           fill="#6E71CC"
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0_3_22091">
//           <rect width="24" height="24" fill="white" />
//         </clipPath>
//       </defs>
//     </svg>
//   </Box>
//   <Flex wrap="wrap" mt="9px">
//     <Flex justify="space-between" fontFamily="Open Sans" w="95%" mr="5px">
//       <Box
//         w="150px"
//         color="var(--primary-red-900, #0A0103)"
//         fontSize={["12px", "14px"]}
//         fontStyle="normal"
//         fontWeight="600"
//         lineHeight="24px"
//       >
//         {name}{" "}
//       </Box>
//       <Box
//         color={
//           result == "Passed"
//             ? "var(--alert-success, #049402)"
//             : "var(--alert-error, #D61E27)"
//         }
//         textAlign="right"
//         fontSize={["12px", "14px"]}
//       >
//         {result}
//       </Box>
//     </Flex>
//     <Box
//       w="125px"
//       color="var(--neutral-grey-700, #544D4F)"
//       fontSize="14px"
//       fontStyle="normal"
//       fontWeight="400"
//       lineHeight="24px"
//     >
//       Marks : {marks}/{maxMarks}
//     </Box>
//   </Flex>
// </Box>
