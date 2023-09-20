import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  VStack,
  Collapse,
  Text,
} from "@chakra-ui/react";
import MasaiLogo from "../assets/MasaiLogo-dark-web.svg";
import burger_menu_icon from "../assets/burger_menu_icon.svg";
import style from "./Navbar.module.css";
import { useNavigate } from "react-router";

export const Navbar = ({ btnRef, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    //<div>Navbar</div>;
    <div>
      <Box
        position={"fixed"}
        alignItems={"center"}
        w={"100%"}
        p={{
          base: "",
          sm: "0 16px 0 16px",
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
              onClick={toggleMenu}
              variant="outline"
            />

            <Collapse in={isOpen}>
              <VStack p={4} spacing={2} align="stretch" bg="gray.100">
                <Text fontSize="xl">Menu</Text>

                <Button variant="link">COURSES</Button>
                <Button variant="link">FEES & PAP</Button>
                <Button variant="link">EVENTS & CONTESTS</Button>
                <Button variant="link">FREE RESOURCES</Button>
                <Button variant="link">HIRE FROM US</Button>
                <Button variant="link">REFER AND EARN</Button>
                <Button
                  onClick={toggleMenu}
                  variant="link"
                  alignSelf="flex-end"
                >
                  Close
                </Button>
              </VStack>
            </Collapse>
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
            onClick={onOpen}
            p={"12px 16px"}
            border={"1px solid rgb(255, 0, 0)"}
            color={"red"}
            bg={"none"}
            _hover={{ backgroundColor: "#fffafb" }}
          >
            SIGN UP
          </Button>
        </Flex>
      </Box>
    </div>
  );
};
