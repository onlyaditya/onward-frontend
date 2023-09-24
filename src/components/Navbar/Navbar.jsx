"use client";
import logo from "../../assets/allsvgimages/logo.svg";
import referandearn from "../../assets/allsvgimages/referandearn.svg";
import callback from "../../assets/allsvgimages/callback.svg";
import notification from "../../assets/allsvgimages/notification.svg";
import bottomarrow from "../../assets/allsvgimages/bottomarrow.svg";
import callImage from "../../assets/images/call.png";
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
import NavbarDrawer from "./NavbarDrawer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDetails } from "../../redux/authReducer/auth.action";
import { useNavigate } from "react-router-dom";

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
  // const { isOpen:NavDrawerisOpen, onOpen:NavDraweronOpen, onClose:NavDraweronClose } = useDisclosure()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);
  const navigate = useNavigate();

  const { userDetails } = useSelector((store) => store.authReducer);
  return (
    <>
      <Box
        position="fixed"
        top="0"
        zIndex={"10000"}
        background="white"
        width={"full"}
      >
        <Flex
          padding={["8px 16px 8px 16px", "8px 32px 8px 32px"]}
          boxShadow={
            "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
          }
          h={"70px"}
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
          <Box display="flex" mr={{ base: "100px", md: "180px", lg: "0" }}>
            <Image
              src={logo}
              onClick={() => {
                navigate("/");
              }}
              cursor={"pointer"}
            />
          </Box>

          {/* {right side navbar} */}
          <Flex
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            gap="24px"
          >
            <Flex
              display={{ base: "none", md: "flex" }}
              padding="1px 8px 1px 1px"
              border="1px solid var(--alert-warning, #FF832B)"
              borderRadius="32px"
              alignItems="center"
              gap="4px"
            >
              <Image src={referandearn} />
              <Text
                color="var(--primary-red-900, #0A0103)"
                textAlign="center"
                fontFamily="Open Sans"
                fontSize="14px"
                fontWeight="600"
                lineHeight="24px"
                onClick={() => {
                  navigate("/refer_and_earn");
                }}
                cursor={"pointer"}
              >
                Refer and Earn
              </Text>
            </Flex>
            <Flex
              display={"flex"}
              padding="1px 8px 1px 1px"
              border="1px solid var(--alert-warning, #2b3dff)"
              borderRadius="32px"
              alignItems="center"
              gap="4px"
            >
              <a href="tel:+1234569870">
                <Image src={callImage} />
              </a>
              <Text
                display={{ base: "none", md: "block" }}
                color="var(--primary-red-900, #0A0103)"
                textAlign="center"
                fontFamily="Open Sans"
                fontSize="14px"
                fontWeight="600"
                lineHeight="24px"
              >
                Request Callback
              </Text>
            </Flex>
            <Box display={{ base: "none", md: "block" }}>
              <Image src={notification} />
            </Box>
            <Menu>
              <MenuButton>
                <Flex justifyContent="flex-end" alignItems="center" gap="2px">
                  {
                    <Avatar
                      name={userDetails && userDetails.userName}
                      bgColor={"#000"}
                      color={"#fff"}
                      width="24px"
                      height="24px"
                      // src="https://bit.ly/dan-abramov"
                    />
                  }
                  <Box display={{ base: "none", md: "block" }}>
                    <Image src={bottomarrow} />
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem w>My Profile</MenuItem>
                <MenuItem>My Tutorials</MenuItem>
                <MenuItem>My BookMark</MenuItem>
                <MenuItem>My Certificates</MenuItem>
                <MenuItem>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box display={{ md: "none" }}>
            <NavbarDrawer onOpen={onOpen} isOpen={isOpen} />
          </Box>
        ) : null}
      </Box>
    </>
  );
}
