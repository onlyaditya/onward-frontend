import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import MasaiLogo from "../assets/MasaiLogo-dark-web.svg";
import burger_menu_icon from "../assets/burger_menu_icon.svg";
import style from "./Navbar.module.css";
import { useNavigate } from "react-router";

export const Navbar = ({ btnRef, onOpen }) => {
  const {
    isOpen: isOpenDrawer1,
    onOpen: onOpenDrawer1,
    onClose: onCloseDrawer1,
  } = useDisclosure();
  const navigate = useNavigate();

  var userlogin;
  useEffect(() => {
    userlogin = JSON.parse(localStorage.getItem("user"));
  }, [userlogin]);

  const HandleSIgnOutButton = () => {
    if (userlogin != "") {
      onOpen();
    } else {
      localStorage.removeItem("user");
    }
  };

  return (
    <div>
      <div zIndex={"995"} position="absolute">
        <Drawer
          size={"full"}
          placement="top"
          onClose={onCloseDrawer1}
          isOpen={isOpenDrawer1}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
              <DrawerCloseButton />
              <Link
                margin={"88px 0 0 0"}
                display={"block"}
                p={"8px 16px"}
                className={style.Linktext}
                onClick={() => navigate("/newcourses")}
                _hover={{ backgroundColor: "#fffafb", color: "red" }}
              >
                COURSES
              </Link>
              <Link
                display={"block"}
                p={"8px 16px"}
                className={style.Linktext}
                onClick={() => navigate("/events")}
                _hover={{ backgroundColor: "#fffafb", color: "red" }}
              >
                EVENTS & CONTESTS
              </Link>
              <Link
                display={"block"}
                p={"8px 16px"}
                className={style.Linktext}
                onClick={() => navigate("/freeresources")}
                _hover={{ backgroundColor: "#fffafb", color: "red" }}
              >
                FREE RESOURCES
              </Link>
              <Link
                display={"block"}
                p={"8px 16px"}
                className={style.Linktext}
                onClick={() => navigate("/hirefromus")}
                _hover={{ backgroundColor: "#fffafb", color: "red" }}
              >
                HIRE FROM US
              </Link>
              <Link
                display={"block"}
                p={"8px 16px"}
                className={style.Linktext}
                onClick={() => navigate("/referandearn")}
                _hover={{ backgroundColor: "#fffafb", color: "red" }}
              >
                REFER AND EARN
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
      <Box
        position={"fixed"}
        alignItems={"center"}
        w={"100%"}
        p={{
          base: "",
          base: "12px 10px 12px 10px",
          md: "0 16px 0 16px",
          lg: "0 16px 0 16px",
          xl: "0 80px 0 80px",
        }}
        h={"88px"}
        top="0%"
        bg={"#fff"}
        zIndex={"998"}
        boxShadow={"0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}
        display={"flex"}
        justifyContent={{
          base: "space-between",
          sm: "space-between",
          md: "space-between",
          lg: "space-between",
          xl: "space-between",
        }}
      >
        <Flex alignItems={"center"} h={"88px"}>
          <Flex display={{ sm: "block", md: "block", lg: "none" }}>
            <Image
              src={burger_menu_icon}
              onClick={onOpenDrawer1}
              variant="outline"
            />
          </Flex>
        </Flex>

        <Flex flexShrink={"0"} alignItems={"center"} h={"88px"}>
          <Image src={MasaiLogo} alt="MasaiLogo" />
        </Flex>

        <Flex
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "inline-flex",
          }}
          // margin={"0px auto 0px auto"}
          margin={{ xl: "0 auto 0 auto" }}
          alignItems={"center"}
          fontFamily={"Open Saas"}
          fontSize={{ lg: "12px", xl: "14px" }}
          fontStyle={"normal"}
          lineHeight={"24px"}
          letterSpacing={"1.25px"}
          textTransform={"uppercase"}
        >
          <Link
            p={{ xl: " 8px 16px", lg: "8px 8px" }}
            className={style.Linktext}
            onClick={() => navigate("/courses")}
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
          >
            COURSES
          </Link>

          <Link
            p={{ xl: " 8px 16px", lg: "8px 8px" }}
            className={style.Linktext}
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
            href="#"
          >
            FEES & PAP
          </Link>
          <Link
            p={{ xl: " 8px 16px", lg: "8px 8px" }}
            className={style.Linktext}
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
            href="#"
          >
            EVENTS & CONTESTS
          </Link>
          <Link
            p={{ xl: " 8px 16px", lg: "8px 8px" }}
            className={style.Linktext}
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
            href="#"
          >
            <Flex>
              FREE RESOURCES
              <span
                className="material-symbols-outlined"
                style={{ margin: "0 0 0 8px" }}
              >
                expand_more
              </span>
            </Flex>
          </Link>
          <Link
            p={{ xl: " 8px 16px", lg: "8px 8px" }}
            className={style.Linktext}
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
            href="#"
          >
            HIRE FROM US
          </Link>
        </Flex>

        <Flex
          flexShrink={"0"}
          display={"flex"}
          gap={"16px"}
          alignItems={"center"}
        >
          <Button
            display={{ base: "none", sm: "none", md: "none", lg: "block" }}
            p={"12px 16px"}
            color={"#6E71CC"}
            bg={"#e5feff"}
          >
            REFER & EARN
          </Button>
          <Button
            ref={btnRef}
            onClick={HandleSIgnOutButton}
            p={"12px 16px"}
            border={"1px solid rgb(255, 0, 0)"}
            color={"red"}
            bg={"none"}
            _hover={{ backgroundColor: "#fffafb" }}
          >
            SIGN UP
            {/* {userlogin == "" ? "SIGN UP" : "SIGN OUT"} */}
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

// localStorage.removeItem("keyName");
