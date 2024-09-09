import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Summery() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <Box
        w={{ base: "90%", sm: "80%", md: "80%", lg: "80%" }}
        m={"auto"}
        p={{ base: "10px", sm: "20px", md: "30px", lg: "40px" }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <Heading
          fontWeight={"500"}
          fontSize={{ base: "20px", sm: "22px", md: "24px" }}
          textAlign={"center"}
          mb={"20px"}
          color={"teal.500"}
        >
          PROFESSIONAL SUMMARY
        </Heading>
        <Text
          fontWeight={"400"}
          fontSize={{ base: "14px", sm: "16px", md: "18px" }}
          mb={"20px"}
          lineHeight="1.6"
        >
          Dynamic Full Stack Web Developer experienced in the MERN stack and
          expert in JavaScript, Node.js, and React.js. Strong problem-solving
          and collaboration skills, with a proven track record in developing
          scalable web applications and leveraging Generative AI. Quick at
          adapting to new technologies.
        </Text>
      </Box>
      <hr
        style={{
          marginTop: "10px",
          width: "80%",
          margin: "10px auto",
          border: "0.5px solid #ccc",
        }}
      />
    </>
  );
}

export default Summery;
