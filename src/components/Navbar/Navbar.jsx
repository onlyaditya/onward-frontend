
"use client";
 import logo from "../../assets/allsvgimages/logo.svg"
 import referandearn from "../../assets/allsvgimages/referandearn.svg"
 import callback from "../../assets/allsvgimages/callback.svg"
 import notification from "../../assets/allsvgimages/notification.svg"
 import bottomarrow from "../../assets/allsvgimages/bottomarrow.svg"
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
      <Box  position="sticky" top="0" zIndex={"10000"} background="white">
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
            <Image src={logo}/>
          </Box>

          {/* {right side navbar} */}
          <Flex
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            gap="24px"
          >
            <Flex display={{ base: 'none', md: 'flex' }} padding="1px 8px 1px 1px" border="1px solid var(--alert-warning, #FF832B)" borderRadius="32px" alignItems="center" gap="4px">
              <Image src={referandearn}/>
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
              <Image src={callback}/>
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
             <Image src={notification}/>
            </Box>
            <Flex
            justifyContent="flex-end"
            alignItems="center"
            gap="2px"
            >
              <Avatar width="24px" height="24px" src='https://bit.ly/dan-abramov'/>
              <Box display={{base:"none",md:"block"}}>
              <Image src={bottomarrow}/>
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

    </>
  );
}

