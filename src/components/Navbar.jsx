import React from "react";
import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import MasaiLogo from '../assets/MasaiLogo-dark-web.svg'
import doicon from '../assets/Component_9.svg'
import './Navbar.css'

export const Navbar = () => {
  return (
  //<div>Navbar</div>;
  <div>
    <Box position={"fixed"} alignItems={"center"} w={"100%"} h={"88px"} top="0%" bg={"#fff"} border="2px solid red" boxShadow={"0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}>
      <Flex border="2px solid green" margin={"0px 80px 0px 80px"}>

      <Flex border="2px solid green" alignItems={"center"} h={"88px"}>
          <Image  border="2px solid blue" src={MasaiLogo} alt="MasaiLogo"/>
      </Flex>


      <Flex border="2px solid black" margin={"0px 48px 0px 126px"} alignItems={"center"} fontFamily={"Open Saas"} fontSize={"14px"} fontStyle={"normal"} lineHeight={"24px"} letterSpacing={"1.25px"} textTransform={"uppercase"}>
      
      <Link className="Linktext"  href="#"  _hover={{ backgroundColor: "#fffafb", color: "red" }}>COURSES</Link>

      <Link className="Linktext"
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
            
          
            href="#"
          >
            FEES & PAP
      </Link>
      <Link className="Linktext"
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
            
         
            href="#"
          >
            EVENTS & CONTESTS
      </Link>
      <Link className="Linktext"
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
           
          
            href="#"
          >
            <Flex>
            FREE RESOURCES
            <Image src={doicon} alt="icon" /></Flex>
      </Link>
      <Link className="Linktext"
            _hover={{ backgroundColor: "#fffafb", color: "red" }}

            href="#"
          >
            HIRE FROM US
      </Link>
      </Flex>

      <Flex className="buttonFlex" display={"flex"} alignItems={"center"}>
      <Button className="refer_And_Earn_Button" color={"#6E71CC"}   bg={"#e5feff"}>
            REFER & EARN
      </Button>
      <Button className="SignUpButton" color={"red"} bg={"none"}>
            SIGN UP
      </Button>
      </Flex>

      </Flex>
    </Box>
  </div>
  )
};
