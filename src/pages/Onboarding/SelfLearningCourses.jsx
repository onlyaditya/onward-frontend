import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
// import Rightarrow from "../assets/allsvgimages/rightarrow.svg";

const SelfLearningCourses = () => {
  return (
    <Box
      w="425px"
      h="626px"
      flexShrink="0"
      borderRadius="16px"
      background="var(--extended-blue-50, #F2F6FF)"
      boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
      m="10px auto"
      overflow="hidden"
      position="relative"
    >
      <Box
        // display="inline-flex"
        p="12px 242px 12px 16px"
        alignItems="center"
        // border-radius: 16px 16px 0px 0px;
        background="#F4F4F4"
        color="var(--primary-red-900, #0A0103)"
        fontFamily="Open Sans"
        fontSize="16px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="24px"
        textTransform="capitalize"
      >
        self learning courses
      </Box>

      {/* courses container */}
      <Box
        display="flex"
        w="425px"
        flexDirection="column"
        alignItems="flex-start"
        gap="12px"
      >
        {/* course */}

        {/* course 1 */}
        <Flex
          display="flex"
          p="10px 16px"
          alignItems="center"
          gap="8px"
          alignSelf="stretch"
          background="#FFF"
        >
          <Flex alignItems="flex-start" gap="8px" flex="1 0 0">
            <Flex
              w="48px"
              h="48px"
              p="3.556px 4px 4px 3.556px"
              justifyContent="center"
              alignItems="center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
              >
                <rect
                  x="0.554688"
                  y="0.554688"
                  width="40.4444"
                  height="40.4444"
                  rx="20.2222"
                  fill="#FFF3CC"
                />
                <path
                  d="M21.0009 7.66624C19.925 7.67137 18.8974 7.76555 17.9933 7.92974C15.3299 8.41266 14.8464 9.42344 14.8464 11.2875V13.7494H21.1403V14.57H14.8464H12.4843C10.6551 14.57 9.05344 15.6984 8.55245 17.8449C7.97457 20.3054 7.94894 21.8408 8.55245 24.4099C8.99985 26.3222 10.0683 27.6848 11.8975 27.6848H14.0615V24.7336C14.0615 22.6015 15.8589 20.7209 17.9933 20.7209H24.2799C26.0299 20.7209 27.4269 19.2421 27.4269 17.4384V11.2875C27.4269 9.53693 25.9879 8.2219 24.2799 7.92974C23.1987 7.74502 22.0769 7.66111 21.0009 7.66624ZM17.5972 9.64626C18.2473 9.64626 18.7782 10.2 18.7782 10.881C18.7782 11.5595 18.2473 12.1081 17.5972 12.1081C16.9448 12.1081 16.4162 11.5595 16.4162 10.881C16.4162 10.2 16.9448 9.64626 17.5972 9.64626Z"
                  fill="url(#paint0_linear_1134_1748)"
                />
                <path
                  d="M28.2111 14.5703V17.4387C28.2111 19.6626 26.3741 21.5343 24.2793 21.5343H17.9927C16.2707 21.5343 14.8457 23.0469 14.8457 24.8168V30.9676C14.8457 32.7182 16.3289 33.7479 17.9927 34.2501C19.985 34.8514 21.8955 34.96 24.2793 34.2501C25.8638 33.7793 27.4262 32.8317 27.4262 30.9676V28.5058H21.1396V27.6852H27.4262H30.5732C32.4024 27.6852 33.084 26.3757 33.7201 24.4102C34.3772 22.3868 34.3493 20.4409 33.7201 17.8453C33.2681 15.9764 32.4047 14.5703 30.5732 14.5703H28.2111ZM24.6754 30.147C25.3278 30.147 25.8564 30.6957 25.8564 31.3742C25.8564 32.0551 25.3278 32.6089 24.6754 32.6089C24.0253 32.6089 23.4943 32.0551 23.4943 31.3742C23.4943 30.6957 24.0253 30.147 24.6754 30.147Z"
                  fill="url(#paint1_linear_1134_1748)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1134_1748"
                    x1="8.10938"
                    y1="7.66602"
                    x2="22.9383"
                    y2="19.9783"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5A9FD4" />
                    <stop offset="1" stop-color="#306998" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1134_1748"
                    x1="24.5241"
                    y1="31.1672"
                    x2="19.1367"
                    y2="23.8114"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFD43B" />
                    <stop offset="1" stop-color="#FFE873" />
                  </linearGradient>
                </defs>
              </svg>
            </Flex>

            {/* course details */}
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              gap="6px"
              flex="1 0 0"
            >
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="2px"
                alignSelf="stretch"
              >
                <Text
                  color="var(--neutral-grey-900, #21191B)"
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                >
                  Python
                </Text>
                <Flex
                  alignItems="center"
                  gap="6px"
                  alignSelf="stretch"
                  color="var(--neutral-grey-700, #544D4F)"
                  fontFamily="Open Sans"
                  fontSize="12px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="16px"
                >
                  <Text>Beginner</Text>
                  <Flex
                    w="4px"
                    h="16px"
                    flexDirection="column"
                    justifyContent="flex-end"
                    color="var(--neutral-grey-700, #544D4F)"
                    textAlign="center"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    .
                  </Flex>
                  <Text>12 modules</Text>
                  <Flex
                    w="4px"
                    h="16px"
                    flexDirection="column"
                    justifyContent="flex-end"
                    color="var(--neutral-grey-700, #544D4F)"
                    textAlign="center"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    .
                  </Flex>
                  <Text>1h 30m</Text>
                </Flex>
              </Flex>
              <Flex
                p="4px 8px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                borderRadius="100px"
                background="var(--extended-brick-50, #F6EDE7)"
                color="var(--secondary-purple-500, #6E71CC)"
                fontFamily="Open Sans"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="16px"
              >
                50 students has already got certificates
              </Flex>
              <Box
                display="inline-flex"
                h="10px"
                flexShrink="0"
                w="305px"
                justifyContent="space-between"
                pl="2px"
                pr="2px"
                alignItems="center"
                borderRadius="100px"
                background="var(--neutral-grey-50, #F3F2F2)"
              >
                <Box
                  w="210px"
                  h="6px"
                  borderRadius="100px"
                  background="var(--secondary-green-500, #6FCD9E)"
                ></Box>
                <Box
                  w="29.137px"
                  h="10px"
                  flexShrink="0"
                  color="var(--primary-red-900, #0A0103)"
                  textAlign="center"
                  fontFamily="Open Sans"
                  fontSize="8px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="12px"
                >
                  80%
                </Box>
              </Box>
            </Flex>
          </Flex>
          <Flex display="flex" alignItems="center" gap="8px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z"
                fill="#6C6768"
              />
            </svg>
          </Flex>
        </Flex>

        {/* course 2 */}
        <Flex
          display="flex"
          p="10px 16px"
          alignItems="center"
          gap="8px"
          alignSelf="stretch"
          background="#FFF"
        >
          <Flex alignItems="flex-start" gap="8px" flex="1 0 0">
            <Flex
              w="48px"
              h="48px"
              p="3.556px 4px 4px 3.556px"
              justifyContent="center"
              alignItems="center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="28"
                viewBox="0 0 18 28"
                fill="none"
              >
                <g clip-path="url(#clip0_1223_1820)">
                  <path
                    d="M8.76758 13.9763C8.76758 11.5754 10.6975 9.62891 13.0782 9.62891C15.4588 9.62891 17.3888 11.5754 17.3888 13.9763C17.3888 16.3774 15.4588 18.3238 13.0782 18.3238C10.6975 18.3238 8.76758 16.3774 8.76758 13.9763Z"
                    fill="#1ABCFE"
                  />
                  <path
                    d="M0.146484 22.6717C0.146484 20.2707 2.0764 18.3242 4.45708 18.3242H8.76768V22.6717C8.76768 25.0727 6.83778 27.0191 4.45708 27.0191C2.0764 27.0191 0.146484 25.0727 0.146484 22.6717Z"
                    fill="#0ACF83"
                  />
                  <path
                    d="M8.76758 0.935547V9.6304H13.0782C15.4589 9.6304 17.3888 7.68401 17.3888 5.28299C17.3888 2.88196 15.4589 0.935547 13.0782 0.935547H8.76758Z"
                    fill="#FF7262"
                  />
                  <path
                    d="M0.146484 5.28299C0.146484 7.68401 2.0764 9.63041 4.45708 9.63041H8.76768V0.935547H4.45708C2.0764 0.935547 0.146484 2.88196 0.146484 5.28299Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M0.146484 13.9763C0.146484 16.3774 2.0764 18.3238 4.45708 18.3238H8.76768V9.62891H4.45708C2.0764 9.62891 0.146484 11.5754 0.146484 13.9763Z"
                    fill="#A259FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1223_1820">
                    <rect
                      width="17.4197"
                      height="26.3529"
                      fill="white"
                      transform="translate(0.0585938 0.800781)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Flex>

            {/* course details */}
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              gap="6px"
              flex="1 0 0"
            >
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="2px"
                alignSelf="stretch"
              >
                <Text
                  color="var(--neutral-grey-900, #21191B)"
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                >
                  Figma
                </Text>
                <Flex
                  alignItems="center"
                  gap="6px"
                  alignSelf="stretch"
                  color="var(--neutral-grey-700, #544D4F)"
                  fontFamily="Open Sans"
                  fontSize="12px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="16px"
                >
                  <Text>Advanced </Text>
                  <Flex
                    w="4px"
                    h="16px"
                    flexDirection="column"
                    justifyContent="flex-end"
                    color="var(--neutral-grey-700, #544D4F)"
                    textAlign="center"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    .
                  </Flex>
                  <Text>10 modules</Text>
                  <Flex
                    w="4px"
                    h="16px"
                    flexDirection="column"
                    justifyContent="flex-end"
                    color="var(--neutral-grey-700, #544D4F)"
                    textAlign="center"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    .
                  </Flex>
                  <Text>1h 30m</Text>
                </Flex>
              </Flex>
              <Flex
                p="4px 8px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                borderRadius="100px"
                background="var(--extended-brick-50, #F6EDE7)"
                color="var(--secondary-purple-500, #6E71CC)"
                fontFamily="Open Sans"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="16px"
              >
                50 students has already got certificates
              </Flex>
              <Box
                display="inline-flex"
                h="10px"
                flexShrink="0"
                w="305px"
                justifyContent="space-between"
                pl="2px"
                pr="2px"
                alignItems="center"
                borderRadius="100px"
                background="var(--neutral-grey-50, #F3F2F2)"
              >
                <Box
                  w="210px"
                  h="6px"
                  borderRadius="100px"
                  background="var(--secondary-green-500, #6FCD9E)"
                ></Box>
                <Box
                  w="29.137px"
                  h="10px"
                  flexShrink="0"
                  color="var(--primary-red-900, #0A0103)"
                  textAlign="center"
                  fontFamily="Open Sans"
                  fontSize="8px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="12px"
                >
                  80%
                </Box>
              </Box>
            </Flex>
          </Flex>
          <Flex display="flex" alignItems="center" gap="8px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z"
                fill="#6C6768"
              />
            </svg>
          </Flex>
        </Flex>

        {/* course 3 */}
        <Flex
          display="flex"
          p="10px 16px"
          alignItems="center"
          gap="8px"
          alignSelf="stretch"
          background="#FFF"
        >
          <Flex alignItems="flex-start" gap="8px" flex="1 0 0">
            <Flex
              w="48px"
              h="48px"
              p="3.556px 4px 4px 3.556px"
              justifyContent="center"
              alignItems="center"
            >
              <Image src="https://s3-alpha-sig.figma.com/img/729f/a9ab/54b4dcb460531b50ddda3129ec24037b?Expires=1696204800&Signature=oFzF4AO-4nJExynoqp~5QyBdnEtdLTakiy1KWobzo7Dg8Z23dOAUOr5b-lV1x06bizFB2VtfWzt7oefEMhfscIKpf111xera25ZuitEw04CeeMurEn-hjFLRwpzw0~BNfz~P2byqxjyk4jqGdmoCkK3a6vgEQvJwHeXsRMVVG~m-WAbvrJUhycA54Ko5WC0sySc7IwCVCqHQ0LkJ8hHibyE041CjKVxQQvtrL-bSdosOW64yzawYp5cgamOmR18rw141lIALaSkhIIgdRhmzkAxOxkGD1N028vRWZKaL2EIW275~3eOb0Noefe5vE~JMjOVQOj8vBZ6CEFIFD76kJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </Flex>

            {/* course details */}
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              gap="6px"
              flex="1 0 0"
            >
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="2px"
                alignSelf="stretch"
              >
                <Text
                  color="var(--neutral-grey-900, #21191B)"
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                >
                  SQL
                </Text>
                <Flex
                  alignItems="center"
                  gap="6px"
                  alignSelf="stretch"
                  color="var(--neutral-grey-700, #544D4F)"
                  fontFamily="Open Sans"
                  fontSize="12px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="16px"
                >
                  <Text>Beginner </Text>
                  <Flex
                    w="4px"
                    h="16px"
                    flexDirection="column"
                    justifyContent="flex-end"
                    color="var(--neutral-grey-700, #544D4F)"
                    textAlign="center"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    .
                  </Flex>
                  <Text>12 modules</Text>
                  <Flex
                    w="4px"
                    h="16px"
                    flexDirection="column"
                    justifyContent="flex-end"
                    color="var(--neutral-grey-700, #544D4F)"
                    textAlign="center"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    .
                  </Flex>
                  <Text>1h 30m</Text>
                </Flex>
              </Flex>
              <Flex
                p="4px 8px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                borderRadius="100px"
                background="var(--extended-brick-50, #F6EDE7)"
                color="var(--secondary-purple-500, #6E71CC)"
                fontFamily="Open Sans"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="16px"
              >
                100+ certificates have been generated
              </Flex>
              <Box
                display="inline-flex"
                h="10px"
                flexShrink="0"
                w="305px"
                justifyContent="space-between"
                pl="2px"
                pr="2px"
                alignItems="center"
                borderRadius="100px"
                background="var(--neutral-grey-50, #F3F2F2)"
              >
                <Box
                  w="210px"
                  h="6px"
                  borderRadius="100px"
                  background="var(--secondary-green-500, #6FCD9E)"
                ></Box>
                <Box
                  w="29.137px"
                  h="10px"
                  flexShrink="0"
                  color="var(--primary-red-900, #0A0103)"
                  textAlign="center"
                  fontFamily="Open Sans"
                  fontSize="8px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="12px"
                >
                  80%
                </Box>
              </Box>
            </Flex>
          </Flex>
          <Flex display="flex" alignItems="center" gap="8px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z"
                fill="#6C6768"
              />
            </svg>
          </Flex>
        </Flex>

        {/* course 4 */}
        <Flex
          display="flex"
          p="10px 16px"
          alignItems="center"
          gap="8px"
          alignSelf="stretch"
          background="#FFF"
        >
          <Flex alignItems="flex-start" gap="8px" flex="1 0 0">
            <Flex
              w="48px"
              h="48px"
              p="3.556px 4px 4px 3.556px"
              justifyContent="center"
              alignItems="center"
            >
              <Image src="https://s3-alpha-sig.figma.com/img/729f/a9ab/54b4dcb460531b50ddda3129ec24037b?Expires=1696204800&Signature=oFzF4AO-4nJExynoqp~5QyBdnEtdLTakiy1KWobzo7Dg8Z23dOAUOr5b-lV1x06bizFB2VtfWzt7oefEMhfscIKpf111xera25ZuitEw04CeeMurEn-hjFLRwpzw0~BNfz~P2byqxjyk4jqGdmoCkK3a6vgEQvJwHeXsRMVVG~m-WAbvrJUhycA54Ko5WC0sySc7IwCVCqHQ0LkJ8hHibyE041CjKVxQQvtrL-bSdosOW64yzawYp5cgamOmR18rw141lIALaSkhIIgdRhmzkAxOxkGD1N028vRWZKaL2EIW275~3eOb0Noefe5vE~JMjOVQOj8vBZ6CEFIFD76kJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </Flex>

            {/* course details */}
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              gap="6px"
              flex="1 0 0"
            >
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="2px"
                alignSelf="stretch"
              >
                <Text
                  color="var(--neutral-grey-900, #21191B)"
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                >
                  SQL
                </Text>
                <Flex
                  alignItems="center"
                  gap="6px"
                  alignSelf="stretch"
                  color="var(--neutral-grey-700, #544D4F)"
                  fontFamily="Open Sans"
                  fontSize="12px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="16px"
                >
                  <Text>Beginner </Text>
                  <Flex
                    w="4px"
                    h="16px"
                    flexDirection="column"
                    justifyContent="flex-end"
                    color="var(--neutral-grey-700, #544D4F)"
                    textAlign="center"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    .
                  </Flex>
                  <Text>12 modules</Text>
                  <Flex
                    w="4px"
                    h="16px"
                    flexDirection="column"
                    justifyContent="flex-end"
                    color="var(--neutral-grey-700, #544D4F)"
                    textAlign="center"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    .
                  </Flex>
                  <Text>1h 30m</Text>
                </Flex>
              </Flex>
              <Flex
                p="4px 8px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                borderRadius="100px"
                background="var(--extended-brick-50, #F6EDE7)"
                color="var(--secondary-purple-500, #6E71CC)"
                fontFamily="Open Sans"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="16px"
              >
                100+ certificates have been generated
              </Flex>
              <Box
                display="inline-flex"
                h="10px"
                flexShrink="0"
                w="305px"
                justifyContent="space-between"
                pl="2px"
                pr="2px"
                alignItems="center"
                borderRadius="100px"
                background="var(--neutral-grey-50, #F3F2F2)"
              >
                <Box
                  w="210px"
                  h="6px"
                  borderRadius="100px"
                  background="var(--secondary-green-500, #6FCD9E)"
                ></Box>
                <Box
                  w="29.137px"
                  h="10px"
                  flexShrink="0"
                  color="var(--primary-red-900, #0A0103)"
                  textAlign="center"
                  fontFamily="Open Sans"
                  fontSize="8px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="12px"
                >
                  80%
                </Box>
              </Box>
            </Flex>
          </Flex>
          <Flex display="flex" alignItems="center" gap="8px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z"
                fill="#6C6768"
              />
            </svg>
          </Flex>
        </Flex>

        {/* course 5 */}
        <Flex
          display="flex"
          p="10px 16px"
          alignItems="center"
          gap="8px"
          alignSelf="stretch"
          background="#FFF"
        >
          <Flex alignItems="flex-start" gap="8px" flex="1 0 0">
            <Flex
              w="48px"
              h="48px"
              p="3.556px 4px 4px 3.556px"
              justifyContent="center"
              alignItems="center"
            >
              <Image src="https://s3-alpha-sig.figma.com/img/729f/a9ab/54b4dcb460531b50ddda3129ec24037b?Expires=1696204800&Signature=oFzF4AO-4nJExynoqp~5QyBdnEtdLTakiy1KWobzo7Dg8Z23dOAUOr5b-lV1x06bizFB2VtfWzt7oefEMhfscIKpf111xera25ZuitEw04CeeMurEn-hjFLRwpzw0~BNfz~P2byqxjyk4jqGdmoCkK3a6vgEQvJwHeXsRMVVG~m-WAbvrJUhycA54Ko5WC0sySc7IwCVCqHQ0LkJ8hHibyE041CjKVxQQvtrL-bSdosOW64yzawYp5cgamOmR18rw141lIALaSkhIIgdRhmzkAxOxkGD1N028vRWZKaL2EIW275~3eOb0Noefe5vE~JMjOVQOj8vBZ6CEFIFD76kJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </Flex>

            {/* course details */}
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              gap="6px"
              flex="1 0 0"
            >
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="2px"
                alignSelf="stretch"
              >
                <Text
                  color="var(--neutral-grey-900, #21191B)"
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                >
                  SQL
                </Text>
                <Flex
                  alignItems="center"
                  gap="6px"
                  alignSelf="stretch"
                  color="var(--neutral-grey-700, #544D4F)"
                  fontFamily="Open Sans"
                  fontSize="12px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="16px"
                >
                  <Text>Beginner </Text>
                  <Flex
                    w="4px"
                    h="16px"
                    flexDirection="column"
                    justifyContent="flex-end"
                    color="var(--neutral-grey-700, #544D4F)"
                    textAlign="center"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    .
                  </Flex>
                  <Text>12 modules</Text>
                  <Flex
                    w="4px"
                    h="16px"
                    flexDirection="column"
                    justifyContent="flex-end"
                    color="var(--neutral-grey-700, #544D4F)"
                    textAlign="center"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    .
                  </Flex>
                  <Text>1h 30m</Text>
                </Flex>
              </Flex>
              <Flex
                p="4px 8px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                borderRadius="100px"
                background="var(--extended-brick-50, #F6EDE7)"
                color="var(--secondary-purple-500, #6E71CC)"
                fontFamily="Open Sans"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="16px"
              >
                100+ certificates have been generated
              </Flex>
              <Box
                display="inline-flex"
                h="10px"
                flexShrink="0"
                w="305px"
                justifyContent="space-between"
                pl="2px"
                pr="2px"
                alignItems="center"
                borderRadius="100px"
                background="var(--neutral-grey-50, #F3F2F2)"
              >
                <Box
                  w="210px"
                  h="6px"
                  borderRadius="100px"
                  background="var(--secondary-green-500, #6FCD9E)"
                ></Box>
                <Box
                  w="29.137px"
                  h="10px"
                  flexShrink="0"
                  color="var(--primary-red-900, #0A0103)"
                  textAlign="center"
                  fontFamily="Open Sans"
                  fontSize="8px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="12px"
                >
                  80%
                </Box>
              </Box>
            </Flex>
          </Flex>
          <Flex display="flex" alignItems="center" gap="8px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z"
                fill="#6C6768"
              />
            </svg>
          </Flex>
        </Flex>
      </Box>

      <Box
        display="inline-flex"
        p="12px 16px"
        justifyContent="center"
        alignItems="center"
        gap="234px"
        background="#F4F4F4"
        position="absolute"
        bottom="0px"
        w="100%"
      >
        <Flex alignItems="flex-start" gap="8px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16 7.42L11.42 12L16 16.59L14.59 18L8.59 12L14.59 6L16 7.42Z"
              fill="#21191B"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z"
              fill="#21191B"
            />
          </svg>
        </Flex>
        <Button
          //   rightIcon={Rightarrow}
          colorScheme="#3470E4"
          variant="outline"
        >
          view all
        </Button>
      </Box>
    </Box>
  );
};

export default SelfLearningCourses;
