import React, { useState, useRef } from "react";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import HeroBottom from "../components/HeroBottom";
import SignUpDrawer from "../components/SignUpDrawer";
import SignIn from "../components/SignIn";
import VerifyNumber from "../components/VerifyNumber";
import { Drawer, useDisclosure } from "@chakra-ui/react";
import ReferAndEarn from "../components/ReferAndEarn";

export const HomePage = () => {
  const [reg, setReg] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [signIn, setSignIn] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div>
      {reg !== "" ? (
        <VerifyNumber
          mobile={mobile}
          setReg={setReg}
          setSignIn={setSignIn}
          email={email}
          isOpen={isOpen}
          btnRef={btnRef}
          onClose={onClose}
          onOpen={onOpen}
          signIn={signIn}
        />
      ) : signIn ? (
        <SignIn
          mobile={mobile}
          setMobile={setMobile}
          setEmail={setEmail}
          email={email}
          setReg={setReg}
          setSignIn={setSignIn}
          signIn={signIn}
          btnRef={btnRef}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        />
      ) : (
        <SignUpDrawer
          mobile={mobile}
          setMobile={setMobile}
          setReg={setReg}
          setSignIn={setSignIn}
          setEmail={setEmail}
          email={email}
          btnRef={btnRef}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        />
      )}
      <Navbar btnRef={btnRef} onOpen={onOpen} />
      <Hero />
      {/* <HeroBottom /> */}
    </div>
  );
};
