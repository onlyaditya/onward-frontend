import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Vector from '../assets/Vector_145.svg'

export default function HeroBottom() {
  return (
    <div >
      <Box w={"100%"} color={"#0A0103"} fontFamily={"Poppins"} fontSize={"34px"} fontStyle={"normal"} lineHeight={"40px"} display={"flex"} alignItems={"center"} justifyContent={"center"} margin={"49px 0px"}>
      Driven by <Box className="bottomheadingSpam" color={"#ED0331"} margin={"0 5px"} >outcomes <Image className='vectorimageinbottom' position={"absolute"} w={"176px"} h={"20px"} flexShrink={"0"} src={Vector} /> </Box> to launch your career in Tech
      </Box>
    </div> 
  )
}
