import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Experience(){

    return <>
    <Box w={"80%"} m={"auto"} mt={"30px"} mb={"30px"}>
        <Heading fontWeight={"500"}
          fontSize={"22px"}
          textAlign={"center"}  color={"teal.500"}>EXPERIENCE</Heading>
          <Text>No Experience null</Text>
    </Box>
    <hr style={{marginTop:"10px",width:"80%" , margin:"10px auto"
        }} />
    </>
}

export default Experience;