import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import congrats from "../../assets/images/congrats.png";

const Congratulations = () => {
  return (
    <Box
      w="1442px"
      h="1025px"
      flexShrink="0"
        opacity="0.9"
      background="#010A1B"
      position="relative"
    >
      <Box
        w="500px"
        h="281px"
        position="absolute"
        left="470px"
        top="133px"
        // border="1px solid red"
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/d5d2/acf7/3ce2e5cabe116a03e18e82ade9cb6210?Expires=1696204800&Signature=VZZT9LXcERQ7ClWHcS0KY2S0ChRjXDryyNi-Cc5xdRuDa8DdbYMTEQt~Zbkz0YwkyewdSrMorqoyfC~QFdaCNSGuuGaTzY3domUrhWZquFgQzJNZr3HFRFVAFzMrSKa5wz~98ezO5KxOTxs8uQhSrewRdJkDryaoU8-sp3U6aUFkzmPj1KI4DQcLHsE0wyB6GWBHWxsaUZWzyDT3IliSXql3hOAY8Mg-naEXL3k-6QGIXJbYj9RzwWHVBQgEx0vMCV8Ndqg0MXQfV5DvP2qNpcMTYRHUHbaZTXXxJl4gywCHqZCyYN9CJbavdN51FuITH0J0dYKPQB91neTq2Sy4gw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </Box>
      <Box
        display="inline-flex"
        flexDirection="column"
        alignItems="center"
        gap="16px"
        position="absolute"
        top="221px"
        left="490px"
        // border="1px solid red"
      >
        <Image src={congrats} alt="" w="101px" h="101px" />
        <Flex
          flexDirection="column"
          alignItems="center"
          gap="8px"
          color="var(--secondary-green-500, #6FCD9E)"
          textAlign="center"
          fontFamily="Poppins"
          fontSize="34px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="40px"
          w="461px"
        >
          Congratulations! You are now part of Masai.
        </Flex>
      </Box>
    </Box>
  );
};

export default Congratulations;
