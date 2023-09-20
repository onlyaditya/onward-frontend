import React from "react";
import sideBanner from "../../assets/images/sideBanner.png";
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
const SideBanner = () => {
  return (
    <Box background={"rgba(135, 200, 213, 1)"}>
      <Image src={sideBanner} />
    </Box>
  );
};

export default SideBanner;
