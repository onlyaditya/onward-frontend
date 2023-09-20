import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const ClearedMsat = () => {
  return (
    <Flex flexShrink={0} opacity={"0.7"} background={"#010A1B"} justifyContent={"center"} alignItems={"center"} height={"100vh"}>
        <Box textAlign={"center"} color={"green"} fontSize={"30px"} width={"350px"} fontWeight={"700"}>
            Congratulation You have cleared the MSAT!
        </Box>
    </Flex>
  )
}

export default ClearedMsat