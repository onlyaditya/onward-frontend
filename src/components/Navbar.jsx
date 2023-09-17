import React from "react";
import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import MasaiLogo from "../assets/MasaiLogo-dark-web.svg";
import style from "./Navbar.module.css";

export const Navbar = ({ btnRef, onOpen }) => {
  return (
    //<div>Navbar</div>;
    <div>
      <Box
        position={"fixed"}
        alignItems={"center"}
        w={"100%"}
        p={"0 80px 0 80px"}
        h={"88px"}
        top="0%"
        bg={"#fff"}
        zIndex={"998"}
        boxShadow={"0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}
      >
        <Flex justifyContent={"space-between"}>
          <Flex flexShrink={"0"} alignItems={"center"} h={"88px"}>
            <Image src={MasaiLogo} alt="MasaiLogo" />
          </Flex>

          <Flex>
            <Box
              display={"inline-flex"}
              margin={"0px 48px 0px 126px"}
              alignItems={"center"}
              fontFamily={"Open Saas"}
              fontSize={"14px"}
              fontStyle={"normal"}
              lineHeight={"24px"}
              letterSpacing={"1.25px"}
              textTransform={"uppercase"}
            >
              <Link
                className={style.Linktext}
                href="#"
                _hover={{ backgroundColor: "#fffafb", color: "red" }}
              >
                COURSES
              </Link>

              <Link
                className={style.Linktext}
                _hover={{ backgroundColor: "#fffafb", color: "red" }}
                href="#"
              >
                FEES & PAP
              </Link>
              <Link
                className={style.Linktext}
                _hover={{ backgroundColor: "#fffafb", color: "red" }}
                href="#"
              >
                EVENTS & CONTESTS
              </Link>
              <Link
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
                className={style.Linktext}
                _hover={{ backgroundColor: "#fffafb", color: "red" }}
                href="#"
              >
                HIRE FROM US
              </Link>
            </Box>

            <Flex
              flexShrink={"0"}
              display={"flex"}
              gap={"16px"}
              alignItems={"center"}
            >
              <Button p={"12px 16px"} color={"#6E71CC"} bg={"#e5feff"}>
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
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};
