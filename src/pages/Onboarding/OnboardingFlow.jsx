import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const OnboardingFlow = ({ bg, color, section }) => {
//   console.log(section);
  return (
    <>
      <Box
        w={["370px", "1127px"]}
        h="169px"
        ml="28px"
        mr={["58px", "0px"]}
        borderRadius="16px"
        position="relative"
        padding="20px"
        flex-shrink="0"
        bgColor="var(--extended-green-50, #EEFFF7)"
        boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
        overflow="hidden"
      >
        <Heading
          color="var(--secondary-green-500, #6FCD9E)"
          // fontFamily="Poppins"
          fontSize="24px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="32px"
        >
          Onboarding
        </Heading>
        <Box
          w="225px"
          color="var(--neutral-grey-700, #544D4F)"
          fontFamily="Open Sans"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="600"
          lineHeight="24px"
        >
          Course: Web Development
        </Box>
        <Box
          w="176.553px"
          h="140.931px"
          transform="rotate(-15deg)"
          flexShrink="0"
          borderRadius="24px"
          border="1px solid var(--secondary-green-500, #6FCD9E)"
          bgColor="var(--extended-green-200, #B7E6CF)"
          left="964px"
          position="absolute"
          top="-20px"
          // bottom="36px"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="105"
            height="105"
            viewBox="0 0 105 105"
            fill="none"
            style={{}}
          >
            <path
              opacity="0.2"
              d="M85.3125 29.5312V75.4688C85.3125 76.339 84.9668 77.1736 84.3514 77.7889C83.7361 78.4043 82.9015 78.75 82.0312 78.75H72.1875V42.6562L55.7812 26.25H32.8125V16.4062C32.8125 15.536 33.1582 14.7014 33.7736 14.0861C34.3889 13.4707 35.2235 13.125 36.0938 13.125H68.9062L85.3125 29.5312Z"
              fill="#EEFFF7"
            />
            <path
              d="M87.634 27.2098L71.2277 10.8035C70.9228 10.4989 70.5608 10.2574 70.1625 10.0927C69.7642 9.928 69.3373 9.84341 68.9062 9.84375H36.0938C34.3533 9.84375 32.6841 10.5352 31.4534 11.7659C30.2227 12.9966 29.5312 14.6658 29.5312 16.4063V22.9688H22.9688C21.2283 22.9688 19.5591 23.6602 18.3284 24.8909C17.0977 26.1216 16.4063 27.7908 16.4062 29.5313V88.5938C16.4063 90.3342 17.0977 92.0034 18.3284 93.2341C19.5591 94.4648 21.2283 95.1562 22.9688 95.1562H68.9062C70.6467 95.1562 72.3159 94.4648 73.5466 93.2341C74.7773 92.0034 75.4688 90.3342 75.4688 88.5938V82.0312H82.0312C83.7717 82.0312 85.4409 81.3398 86.6716 80.1091C87.9023 78.8784 88.5938 77.2092 88.5938 75.4688V29.5313C88.5941 29.1002 88.5095 28.6734 88.3448 28.275C88.1801 27.8767 87.9386 27.5147 87.634 27.2098ZM68.9062 88.5938H22.9688V29.5313H54.4236L68.9062 44.0139V78.6844C68.9062 78.709 68.9062 78.7295 68.9062 78.75C68.9062 78.7705 68.9062 78.791 68.9062 78.8156V88.5938ZM82.0312 75.4688H75.4688V42.6562C75.4691 42.2252 75.3845 41.7984 75.2198 41.4C75.0551 41.0017 74.8136 40.6397 74.509 40.3348L58.1027 23.9285C57.7978 23.6239 57.4358 23.3824 57.0375 23.2177C56.6392 23.053 56.2123 22.9684 55.7812 22.9688H36.0938V16.4063H67.5486L82.0312 30.8889V75.4688ZM59.0625 62.3438C59.0625 63.214 58.7168 64.0486 58.1014 64.6639C57.4861 65.2793 56.6515 65.625 55.7812 65.625H36.0938C35.2235 65.625 34.3889 65.2793 33.7736 64.6639C33.1582 64.0486 32.8125 63.214 32.8125 62.3438C32.8125 61.4735 33.1582 60.6389 33.7736 60.0236C34.3889 59.4082 35.2235 59.0625 36.0938 59.0625H55.7812C56.6515 59.0625 57.4861 59.4082 58.1014 60.0236C58.7168 60.6389 59.0625 61.4735 59.0625 62.3438ZM59.0625 75.4688C59.0625 76.339 58.7168 77.1736 58.1014 77.7889C57.4861 78.4043 56.6515 78.75 55.7812 78.75H36.0938C35.2235 78.75 34.3889 78.4043 33.7736 77.7889C33.1582 77.1736 32.8125 76.339 32.8125 75.4688C32.8125 74.5985 33.1582 73.7639 33.7736 73.1486C34.3889 72.5332 35.2235 72.1875 36.0938 72.1875H55.7812C56.6515 72.1875 57.4861 72.5332 58.1014 73.1486C58.7168 73.7639 59.0625 74.5985 59.0625 75.4688Z"
              fill="#EEFFF7"
            />
          </svg>
        </Box>

        {/* Onboarding flow line */}
        <Box
          display="flex"
          w="32px"
          h="32px"
          p="8px"
          justifyContent="center"
          alignItems="center"
          flexShrink="0"
          borderRadius="16px"
          bgColor={
            section >= "1" ? "var(--secondary-purple-500, #6E71CC)" : " "
          }
          position="absolute"
          top="88px"
          left="25px"
          zIndex="1"
        >
          <Box
            display="flex"
            w="16px"
            h="16px"
            direction="column"
            justifyContent="center"
            flexShrink="0"
            // color={color}
            color={section >= "1" ? "var(--primary-white-fff, #FFF)" : " "}
            alignItems="center"
            fontFamily="Open Sans"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="600"
            // lineHeight="24px"
            letterSpacing="1.25px"
            textTransform="uppercase"
          >
            1
          </Box>
        </Box>
        <Box
          display="flex"
          w="32px"
          h="32px"
          p="8px"
          justifyContent="center"
          alignItems="center"
          flexShrink="0"
          borderRadius="16px"
          //   bgColor="#fff"
          bgColor={
            section >= "2" ? "var(--secondary-purple-500, #6E71CC)" : "#fff "
          }
          position="absolute"
          top="88px"
          left={["80px", "173px"]}
          zIndex="1"
        >
          <Box
            display="flex"
            w="16px"
            h="16px"
            direction="column"
            justifyContent="center"
            flexShrink="0"
            // color="var(--neutral-grey-600, #6C6768)"
            color={
              section >= "2"
                ? "var(--primary-white-fff, #FFF)"
                : "var(--neutral-grey-600, #6C6768) "
            }
            alignItems="center"
            fontFamily="Open Sans"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="600"
            // lineHeight="24px"
            letterSpacing="1.25px"
            textTransform="uppercase"
          >
            2
          </Box>
        </Box>
        <Box
          display="flex"
          w="32px"
          h="32px"
          p="8px"
          justifyContent="center"
          alignItems="center"
          flexShrink="0"
          borderRadius="16px"
          bgColor={
            section >= "3" ? "var(--secondary-purple-500, #6E71CC)" : "#fff "
          }
          position="absolute"
          top="88px"
          left={["135px", "321px"]}
          zIndex="1"
        >
          <Box
            display="flex"
            w="16px"
            h="16px"
            direction="column"
            justifyContent="center"
            flexShrink="0"
            color={
              section >= "3"
                ? "var(--primary-white-fff, #FFF)"
                : "var(--neutral-grey-600, #6C6768) "
            }
            alignItems="center"
            fontFamily="Open Sans"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="600"
            // lineHeight="24px"
            letterSpacing="1.25px"
            textTransform="uppercase"
          >
            3
          </Box>
        </Box>
        <Box
          display="flex"
          w="32px"
          h="32px"
          p="8px"
          justifyContent="center"
          alignItems="center"
          flexShrink="0"
          borderRadius="16px"
          bgColor={
            section >= "4" ? "var(--secondary-purple-500, #6E71CC)" : "#fff "
          }
          position="absolute"
          top="88px"
          left={["190px", "469px"]}
          zIndex="1"
        >
          <Box
            display="flex"
            w="16px"
            h="16px"
            direction="column"
            justifyContent="center"
            flexShrink="0"
            color={
              section >= "4"
                ? "var(--primary-white-fff, #FFF)"
                : "var(--neutral-grey-600, #6C6768) "
            }
            alignItems="center"
            fontFamily="Open Sans"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="600"
            // lineHeight="24px"
            letterSpacing="1.25px"
            textTransform="uppercase"
          >
            4
          </Box>
        </Box>
        <Box
          position="absolute"
          top="88px"
          left={["245px", "617px"]}
          zIndex="1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            style={{}}
          >
            <circle cx="15.5" cy="15.5" r="15.5" fill="#CFEEDF" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                opacity="0.2"
                d="M4.86648 13.3101L8.35521 16.9384L4.17154 18.5196C4.0562 18.5637 3.93112 18.5726 3.81109 18.5451C3.69106 18.5177 3.5811 18.4551 3.4942 18.3647C3.4073 18.2743 3.34709 18.1599 3.32069 18.0351C3.29429 17.9103 3.3028 17.7802 3.34522 17.6603L4.86648 13.3101ZM16.3375 12.9045L8.74524 5.00853C8.66867 4.92892 8.57403 4.87068 8.47008 4.8392C8.36613 4.80772 8.25622 4.80401 8.15053 4.82843C8.04483 4.85285 7.94677 4.9046 7.86541 4.97889C7.78405 5.05318 7.72202 5.14761 7.68507 5.25345L6.45385 8.77689L12.719 15.2927L16.1069 14.0122C16.2093 13.9736 16.3005 13.9086 16.3721 13.8233C16.4437 13.738 16.4934 13.6352 16.5164 13.5246C16.5394 13.4139 16.5351 13.299 16.5038 13.1905C16.4725 13.0821 16.4153 12.9837 16.3375 12.9045Z"
                fill="#6FCD9E"
              />
              <path
                d="M9.21241 4.52289C9.05715 4.36184 8.86539 4.24406 8.65482 4.18041C8.44425 4.11676 8.22165 4.1093 8.00758 4.15871C7.7935 4.20811 7.59484 4.3128 7.42993 4.46312C7.26501 4.61343 7.13916 4.80452 7.06398 5.01875L2.72661 17.4264C2.65536 17.631 2.63235 17.8504 2.6595 18.0662C2.68665 18.282 2.76318 18.4878 2.88266 18.6665C3.00215 18.8451 3.16109 18.9913 3.34616 19.0929C3.53123 19.1944 3.73703 19.2483 3.94626 19.25C4.10032 19.2489 4.25301 19.2198 4.39744 19.1641L16.327 14.6523C16.5331 14.5743 16.7169 14.4434 16.8615 14.272C17.0062 14.1005 17.1069 13.8939 17.1545 13.6713C17.2021 13.4486 17.195 13.2171 17.1339 12.998C17.0727 12.779 16.9595 12.5795 16.8047 12.418L9.21241 4.52289ZM8.52409 16.1425L5.63196 13.1347L6.7194 10.0229L11.5162 15.0116L8.52409 16.1425ZM3.97932 17.8612L5.13617 14.5604L7.15653 16.6616L3.97932 17.8612ZM12.8904 14.4925L7.2185 8.59375L8.29272 5.51117L15.8478 13.3684L12.8904 14.4925ZM13.2209 6.1875C13.2333 5.72272 13.3415 5.26614 13.5382 4.84859C13.9762 3.93852 14.8025 3.4375 15.8651 3.4375C16.4188 3.4375 16.7741 3.2407 16.9931 2.81789C17.1084 2.58135 17.1745 2.32222 17.1872 2.05734C17.1879 1.87501 17.2582 1.70041 17.3826 1.57196C17.5071 1.44352 17.6755 1.37174 17.8508 1.37242C18.0261 1.37311 18.194 1.44619 18.3175 1.57561C18.441 1.70502 18.51 1.88016 18.5094 2.0625C18.5094 3.16766 17.8053 4.8125 15.8651 4.8125C15.3115 4.8125 14.9562 5.0093 14.7372 5.43211C14.6219 5.66865 14.5557 5.92778 14.543 6.19266C14.5427 6.28294 14.5253 6.37227 14.4917 6.45555C14.4582 6.53884 14.4093 6.61444 14.3476 6.67804C14.286 6.74164 14.213 6.79199 14.1326 6.82623C14.0523 6.86047 13.9663 6.87792 13.8795 6.87758C13.7927 6.87724 13.7068 6.85912 13.6267 6.82426C13.5466 6.7894 13.4739 6.73847 13.4128 6.67439C13.3516 6.61031 13.3032 6.53433 13.2703 6.45079C13.2374 6.36725 13.2206 6.27778 13.2209 6.1875ZM11.2377 3.4375V1.375C11.2377 1.19266 11.3074 1.0178 11.4313 0.888864C11.5553 0.759933 11.7235 0.6875 11.8988 0.6875C12.0741 0.6875 12.2423 0.759933 12.3662 0.888864C12.4902 1.0178 12.5598 1.19266 12.5598 1.375V3.4375C12.5598 3.61984 12.4902 3.7947 12.3662 3.92364C12.2423 4.05257 12.0741 4.125 11.8988 4.125C11.7235 4.125 11.5553 4.05257 11.4313 3.92364C11.3074 3.7947 11.2377 3.61984 11.2377 3.4375ZM19.6381 10.5136C19.6995 10.5775 19.7482 10.6533 19.7813 10.7367C19.8145 10.8202 19.8316 10.9096 19.8316 10.9999C19.8315 11.0902 19.8144 11.1796 19.7811 11.263C19.7479 11.3464 19.6991 11.4222 19.6377 11.486C19.5763 11.5498 19.5034 11.6004 19.4232 11.6349C19.3429 11.6694 19.257 11.6872 19.1701 11.6871C19.0833 11.6871 18.9973 11.6693 18.9171 11.6347C18.837 11.6001 18.7641 11.5494 18.7027 11.4855L17.3806 10.1105C17.2566 9.98154 17.1869 9.80658 17.1869 9.62414C17.1869 9.4417 17.2566 9.26674 17.3806 9.13773C17.5046 9.00873 17.6729 8.93626 17.8483 8.93626C18.0237 8.93626 18.192 9.00873 18.316 9.13773L19.6381 10.5136ZM20.0405 6.83977L18.0574 7.52727C17.891 7.58493 17.7095 7.57151 17.5527 7.48996C17.3958 7.40841 17.2766 7.26541 17.2211 7.09242C17.1657 6.91943 17.1786 6.73062 17.257 6.56752C17.3354 6.40442 17.4729 6.2804 17.6392 6.22273L19.6224 5.53523C19.7888 5.47757 19.9703 5.49099 20.1271 5.57254C20.284 5.65409 20.4032 5.79709 20.4587 5.97008C20.5141 6.14307 20.5012 6.33188 20.4228 6.49498C20.3444 6.65808 20.2069 6.7821 20.0405 6.83977Z"
                fill="#6FCD9E"
              />
            </svg>
          </svg>
        </Box>

        <Box
          w={["200px", "575px"]}
          borderBottom="2px dotted #6C6768 "
          position="absolute"
          top="104px"
          left="46px"
        ></Box>

        <Text
          as="span"
          color="var(--primary-red-900, #0A0103)"
          // fontFamily: "Open Sans",
          fontSize={["10px", "16px"]}
          fontStyle="normal"
          fontWeight="400"
          linHeight="24px"
          position="absolute"
          top="125px"
          left="25px"
        >
          Form
        </Text>
        <Text
          as="span"
          color="var(--neutral-grey-600, #6C6768)"
          // fontFamily: "Open Sans",
          fontSize={["10px", "16px"]}
          fontStyle="normal"
          fontWeight="400"
          linHeight="24px"
          position="absolute"
          top="125px"
          left={["60px", "173px"]}
        >
          ID Verification
        </Text>
        <Text
          as="span"
          color="var(--neutral-grey-600, #6C6768)"
          // fontFamily: "Open Sans",
          fontSize={["10px", "16px"]}
          fontStyle="normal"
          fontWeight="400"
          linHeight="24px"
          position="absolute"
          top="125px"
          left={["140px", "321px"]}
        >
          Consent
        </Text>
        <Text
          as="span"
          color="var(--neutral-grey-600, #6C6768)"
          // fontFamily: "Open Sans",
          fontSize={["10px", "16px"]}
          fontStyle="normal"
          fontWeight="400"
          linHeight="24px"
          position="absolute"
          top="125px"
          left={["190px", "469px"]}
        >
          Join Us
        </Text>
        <span
          style={{
            color: "var(--neutral-grey-600, #6C6768)",
            // fontFamily: "Open Sans",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            linHeight: "24px",
            position: "absolute",
            top: "125px",
            left: "469px",
          }}
        >
          Join Us
        </span>
      </Box>
    </>
  );
};

export default OnboardingFlow;
