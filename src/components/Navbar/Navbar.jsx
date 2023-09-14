"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex
          padding={["8px 16px 8px 16px","8px 32px 8px 32px"]}
          boxShadow={
            "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
          }
          h={"56px"}
          flex-shrink={"0"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* <HStack spacing={8} alignItems={'center'}> */}
          <Box display="flex" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="83"
              height="23"
              viewBox="0 0 83 23"
              fill="none"
            >
              <path
                d="M0.290039 7.45961C1.52615 7.45961 2.76401 7.45961 4.04033 7.45961C4.04033 8.25693 4.04033 9.03358 4.04033 9.91183C5.03691 7.86257 6.71536 7.11864 8.79594 7.16342C10.894 7.20819 12.4868 8.13466 13.4327 10.0048C13.7666 9.58464 14.0708 9.12657 14.4502 8.74255C15.4188 7.76097 16.6357 7.29257 18.0082 7.18064C18.9156 7.10659 19.809 7.18408 20.6745 7.47166C22.2743 8.00034 23.2586 9.13001 23.8233 10.6523C24.229 11.7458 24.3426 12.8876 24.3444 14.0431C24.3478 16.7329 24.3461 19.4228 24.3461 22.1127C24.3461 22.1798 24.3374 22.2487 24.3304 22.3434C23.1082 22.3434 21.8914 22.3434 20.6325 22.3434C20.6325 22.2091 20.6325 22.0765 20.6325 21.9439C20.6325 19.4469 20.6465 16.9516 20.622 14.4546C20.6168 13.8812 20.5486 13.2888 20.3877 12.7395C20.0573 11.615 19.281 10.8934 18.0781 10.7591C16.7161 10.6075 15.557 10.995 14.8069 12.2142C14.4397 12.8101 14.2579 13.4713 14.2509 14.1636C14.2247 16.7381 14.2142 19.3126 14.2002 21.8888C14.2002 22.0352 14.2002 22.1815 14.2002 22.3503C12.9414 22.3503 11.7105 22.3503 10.4394 22.3503C10.4394 22.2074 10.4394 22.0731 10.4394 21.9405C10.4377 19.273 10.4447 16.6055 10.4254 13.938C10.4184 13.077 10.1929 12.259 9.59321 11.6029C8.66307 10.5852 7.4864 10.5507 6.27477 10.9313C4.88655 11.367 4.27636 12.4329 4.11551 13.7882C4.05956 14.2618 4.05781 14.7439 4.05607 15.221C4.05082 17.4545 4.05432 19.6897 4.05432 21.9232C4.05432 22.0576 4.05432 22.1936 4.05432 22.3727C2.78324 22.3727 1.53664 22.3727 0.291787 22.3727C0.290039 17.3994 0.290039 12.4295 0.290039 7.45961Z"
                fill="#0A0103"
              />
              <path
                d="M39.0411 9.22589C39.0411 8.71272 39.0411 8.10655 39.0411 7.47972C40.2981 7.47972 41.5203 7.47972 42.7704 7.47972C42.7704 12.4203 42.7704 17.3695 42.7704 22.3429C41.55 22.3429 40.3209 22.3429 39.0603 22.3429C39.0603 21.7212 39.0603 21.0995 39.0603 20.4572C38.9973 20.4779 38.9571 20.4779 38.9414 20.4985C37.9466 21.8245 36.5356 22.4341 34.9411 22.6218C32.4968 22.9111 30.369 22.193 28.6556 20.4279C27.4213 19.157 26.7953 17.6037 26.617 15.8645C26.4264 14.0132 26.6922 12.2378 27.6835 10.6397C29.2274 8.15133 31.5387 7.03715 34.4778 7.17319C35.8363 7.23691 37.0811 7.64504 38.1581 8.48885C38.4711 8.73511 38.7701 8.99858 39.0411 9.22589ZM34.5932 10.6001C32.1891 10.6018 30.3673 12.4358 30.3638 14.857C30.3603 17.2989 32.2136 19.2087 34.5967 19.2156C37.0426 19.2242 38.9834 17.2972 38.9799 14.8674C38.9746 12.4944 37.0252 10.5984 34.5932 10.6001Z"
                fill="#0A0103"
              />
              <path
                d="M71.2217 9.2354C71.2217 8.7119 71.2217 8.10401 71.2217 7.4789C72.4788 7.4789 73.7009 7.4789 74.9492 7.4789C74.9492 12.4247 74.9492 17.3739 74.9492 22.3455C73.7236 22.3455 72.4945 22.3455 71.2339 22.3455C71.2339 21.7187 71.2339 21.0987 71.2339 20.415C70.9402 20.7199 70.7111 21.0006 70.4401 21.2313C69.2093 22.2783 67.7354 22.6968 66.1461 22.6865C64.0515 22.6727 62.2419 21.9236 60.803 20.403C59.5617 19.0891 58.9357 17.5048 58.7801 15.7259C58.6158 13.8471 58.92 12.0579 59.969 10.4632C61.5234 8.10229 63.7858 7.04494 66.6217 7.17237C67.9924 7.23437 69.2495 7.64077 70.3352 8.49319C70.6482 8.73945 70.9437 9.00293 71.2217 9.2354ZM66.7633 10.601C64.361 10.6044 62.5392 12.4402 62.5374 14.8614C62.5357 17.3016 64.3925 19.2113 66.7738 19.2165C69.2215 19.2217 71.1605 17.2947 71.1535 14.8648C71.1482 12.4918 69.1988 10.5976 66.7633 10.601Z"
                fill="#0A0103"
              />
              <path
                d="M56.7905 11.7853C55.6068 11.7853 54.4319 11.7853 53.2605 11.7853C52.8793 10.251 51.2726 9.61035 49.9385 10.4507C48.9612 11.0672 48.9839 12.2985 50.0312 12.7721C50.6834 13.0683 51.4072 13.2129 52.1048 13.4075C53.1801 13.7071 54.2798 13.9276 55.2536 14.5113C57.3709 15.7805 57.9619 18.4445 56.53 20.4129C55.7624 21.4668 54.6574 22.0505 53.4108 22.3795C51.3775 22.9167 49.4 22.8048 47.5467 21.7492C46.0466 20.8933 45.1882 19.6087 45.0535 17.8849C45.05 17.8418 45.0588 17.797 45.0623 17.7351C46.225 17.7351 47.3772 17.7351 48.5591 17.7351C48.6797 18.758 49.2986 19.359 50.2935 19.5966C51.1047 19.7895 51.9037 19.7189 52.6573 19.3521C53.3007 19.0387 53.5822 18.5255 53.5192 17.8935C53.4685 17.3889 53.1556 17.0703 52.7167 16.9119C52.0908 16.6863 51.4422 16.5193 50.797 16.3488C49.762 16.075 48.7234 15.8236 47.7635 15.3207C45.4172 14.0912 45.0326 11.5563 45.8718 9.89794C46.4645 8.72521 47.4558 7.97095 48.6902 7.56109C50.8355 6.84988 52.9335 6.97904 54.8847 8.16726C56.1698 8.9508 56.7677 10.1597 56.8167 11.6372C56.8202 11.682 56.8045 11.725 56.7905 11.7853Z"
                fill="#0A0103"
              />
              <path
                d="M82.0004 7.49023C82.0004 12.4446 82.0004 17.3852 82.0004 22.3465C80.7573 22.3465 79.5282 22.3465 78.2764 22.3465C78.2764 17.3973 78.2764 12.4584 78.2764 7.49023C79.502 7.49023 80.7311 7.49023 82.0004 7.49023Z"
                fill="#0A0103"
              />
              <path
                d="M82.0006 7.49023H78.2783V17.5161L82.0006 12.9991V7.49023Z"
                fill="#ED0331"
              />
              <path
                d="M80.1233 4.1364C81.283 4.1364 82.2231 3.21043 82.2231 2.0682C82.2231 0.925964 81.283 0 80.1233 0C78.9636 0 78.0234 0.925964 78.0234 2.0682C78.0234 3.21043 78.9636 4.1364 80.1233 4.1364Z"
                fill="#0A0103"
              />
            </svg>
          </Box>

          {/* {right side navbar} */}
          <Flex
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            gap="24px"
          >
            <Flex display={{ base: 'none', md: 'flex' }} padding="1px 8px 1px 1px" border="1px solid var(--alert-warning, #FF832B)" borderRadius="32px" alignItems="center" gap="4px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
              >
                <path
                  d="M27.0001 12.0013C27.0001 18.6256 21.6296 23.9994 15.0053 23.9994C14.2805 23.9994 13.5753 23.9374 12.893 23.8101C11.9919 23.6501 11.1267 23.3922 10.3072 23.0396C9.16784 22.5564 8.11004 21.8969 7.18284 21.0905C5.94222 20.0295 4.9236 18.7137 4.19882 17.225C3.43486 15.6448 3.00391 13.8721 3.00391 11.9981C3.00391 5.37057 8.37449 0 14.9988 0C16.8727 0 18.6488 0.430952 20.229 1.19818C21.7112 1.91969 23.0269 2.93831 24.0945 4.17892C24.8943 5.10612 25.5571 6.16065 26.0436 7.30332C26.3961 8.12278 26.6541 8.98795 26.814 9.88903C26.9348 10.5746 27.0001 11.2798 27.0001 12.0013Z"
                  fill="#C98917"
                />
                <path
                  d="M24.9434 12.0013C24.9434 18.6256 19.5696 23.9994 12.9453 23.9994C12.2238 23.9994 11.5153 23.9994 10.833 23.8101C10.3139 23.6925 9.90251 23.5913 9.42258 23.4444C9.03407 23.3236 8.6325 23.2387 8.26032 23.0396C7.07846 22.5662 6.04679 21.9328 5.1457 21.1003C4.38174 20.3886 3.9867 20.0033 3.43169 19.2949C2.91585 18.6158 2.55999 18.1065 2.17474 17.2348C1.3259 15.6775 0.976562 13.8851 0.976562 12.0079C0.976562 5.3836 6.34715 0.00976562 12.9747 0.00976562C14.8454 0.00976562 16.6345 0.385216 18.2016 1.20794C18.9884 1.65848 19.4945 1.94252 20.2486 2.47468C20.8983 2.97419 21.2509 3.31699 22.0671 4.1691C22.916 5.07671 23.5885 6.10512 24.0162 7.2935C24.2154 7.8126 24.359 8.24029 24.5059 8.70389C24.6202 9.10546 24.6855 9.38623 24.7998 9.87921C24.9434 10.5975 24.9434 11.2798 24.9434 12.0013Z"
                  fill="#F8C364"
                />
                <path
                  d="M22.035 4.17997L5.12333 21.0916C3.79456 20.0729 2.7988 18.7801 2.14258 17.226L18.1694 1.19922C19.73 1.84565 21.0327 2.89691 22.035 4.17997Z"
                  fill="#E8AB3E"
                />
                <path
                  d="M24.7548 9.88844L10.8338 23.8095C9.86738 23.705 9.00221 23.4373 8.24805 23.039L23.9844 7.30273C24.4022 8.1222 24.6602 8.96777 24.7548 9.88844Z"
                  fill="#E8AB3E"
                />
                <path
                  d="M12.9455 2.96094C13.2556 2.96094 13.5593 2.974 13.8629 3.00664C18.4238 3.46371 21.9857 7.31616 21.9857 12.0011C21.9857 16.6861 18.4238 20.5385 13.8629 20.9956C13.5593 21.0283 13.2556 21.0413 12.9455 21.0413C7.95362 21.0413 3.90527 16.9962 3.90527 12.0011C3.90527 7.00927 7.95362 2.96094 12.9455 2.96094Z"
                  fill="#E8AB3E"
                />
                <path
                  d="M13.8621 20.9959C13.5291 21.0416 13.2516 21.0546 12.9414 21.0644C7.84835 21.1918 3.96977 16.99 3.87183 11.9981C3.77389 6.87567 7.89079 2.87957 12.9447 2.94813C13.2548 2.9514 13.5585 2.96772 13.8621 3.0069C9.29465 3.46397 5.73276 7.31642 5.73276 12.0014C5.72623 16.6864 9.29465 20.5388 13.8621 20.9959Z"
                  fill="#C98917"
                />
                <path
                  d="M19.736 9.02793C19.4585 7.6404 18.6162 6.96132 17.4376 6.71646C17.369 6.7034 17.369 6.60872 17.4343 6.5924C18.5998 6.3051 19.4062 5.57705 19.7295 4.26134C19.7458 4.19605 19.8372 4.18952 19.8535 4.25481C20.1669 5.42034 20.8591 6.23654 22.0736 6.57281C22.1421 6.5924 22.1356 6.68381 22.0671 6.69687C20.8297 6.88297 20.1931 7.78078 19.8633 9.03446C19.8437 9.09976 19.7491 9.09649 19.736 9.02793Z"
                  fill="#F9F9F9"
                />
              </svg>
              <Text
                color="var(--primary-red-900, #0A0103)" 
                textAlign="center"
                fontFamily="Open Sans"
                fontSize="14px"
                fontWeight="600"
                lineHeight="24px"
                
              >
                Refer and Earn
              </Text>
            </Flex>
            <Flex border="1px solid var(--extended-blue-400, #5D8DE9)" background="#F2F6FF" borderRadius="32px" alignItems="center" gap="4px" >
              <Box  fill="var(--secondary-blue-500, #3470E4)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_352_12590)">
                  <path
                    d="M11.4993 3.71901C12.187 3.8532 12.8191 4.18957 13.3147 4.68508C13.8102 5.18059 14.1465 5.81268 14.2807 6.50047M11.4993 0.902344C12.9282 1.06109 14.2607 1.70099 15.278 2.71699C16.2953 3.73298 16.9368 5.06468 17.0974 6.49343M16.3932 12.1127V14.2252C16.394 14.4213 16.3538 14.6154 16.2753 14.7951C16.1967 14.9748 16.0815 15.1361 15.937 15.2687C15.7925 15.4012 15.6219 15.5022 15.4361 15.565C15.2503 15.6278 15.0535 15.6512 14.8581 15.6335C12.6913 15.3981 10.6099 14.6576 8.78118 13.4717C7.07979 12.3906 5.63731 10.9481 4.55618 9.24672C3.36612 7.40969 2.62553 5.31817 2.39439 3.14159C2.37679 2.94687 2.39993 2.75061 2.46234 2.56532C2.52475 2.38003 2.62505 2.20976 2.75687 2.06536C2.88869 1.92096 3.04913 1.80558 3.22797 1.72659C3.40682 1.64759 3.60016 1.60669 3.79568 1.60651H5.90818C6.24992 1.60315 6.58122 1.72416 6.84033 1.947C7.09944 2.16983 7.26868 2.47929 7.31651 2.81768C7.40568 3.49372 7.57103 4.15751 7.80943 4.79639C7.90417 5.04842 7.92468 5.32234 7.86851 5.58567C7.81235 5.84901 7.68188 6.09072 7.49255 6.28218L6.59826 7.17647C7.60068 8.93938 9.06035 10.399 10.8233 11.4015L11.7176 10.5072C11.909 10.3179 12.1507 10.1874 12.4141 10.1312C12.6774 10.0751 12.9513 10.0956 13.2033 10.1903C13.8422 10.4287 14.506 10.5941 15.1821 10.6832C15.5241 10.7315 15.8365 10.9038 16.0598 11.1673C16.2831 11.4309 16.4018 11.7673 16.3932 12.1127Z"
                    stroke="white"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_352_12590">
                    <rect
                      width="16.9"
                      height="16.9"
                      fill="white"
                      transform="translate(0.900391 0.199219)"
                    />
                  </clipPath>
                </defs>
              </svg>
              </Box>
              <Text
                color="var(--primary-red-900, #0A0103)" // You can replace this with your actual color value
                textAlign="center"
                fontFamily="Open Sans"
                fontSize="14px"
                fontWeight="600"
                lineHeight="24px"
                display={{base:"none",md:"block"}}
                padding="6px 8px 6px 0px"
              >
                Request Callback
              </Text>
            </Flex>

            <Box display={{base:"none" ,md:"block"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5 22C12.61 22 13.5 21.11 13.5 20H9.5C9.5 21.11 10.4 22 11.5 22ZM18 12C17.84 12 17.67 12 17.5 12C17 12 16.5 11.92 16 11.79V17H7V10.5C7 8 9 6 11.5 6C11.68 6 11.85 6.03 12 6.05C12.1 5.06 12.45 4.14 13 3.37C12.92 2.6 12.28 2 11.5 2C10.67 2 10 2.67 10 3.5V4.18C7.13 4.86 5 7.43 5 10.5V16L3 18V19H20V18L18 16V12Z"
                  fill="#0A0103"
                />
                <path
                  d="M17.5 10C19.43 10 21 8.43 21 6.5C21 4.57 19.43 3 17.5 3C15.57 3 14 4.57 14 6.5C14 8.43 15.57 10 17.5 10Z"
                  fill="#D61E27"
                />
              </svg>
            </Box>
            <Flex
            justifyContent="flex-end"
            alignItems="center"
            gap="2px"
            >
              <Avatar width="24px" height="24px" src='https://bit.ly/dan-abramov'/>
              <Box display={{base:"none",md:"block"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4.42967 5.33398L7.99967 8.90398L11.5697 5.33398L12.6663 6.43843L7.99967 11.1051L3.33301 6.43843L4.42967 5.33398Z"
                  fill="#3470E4"
                />
              </svg>
              </Box>
            </Flex>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            WE will create a drawer
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}