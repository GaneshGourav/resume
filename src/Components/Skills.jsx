import { Box, Grid, Heading, Text, Tooltip } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { DiMongodb, DiNodejsSmall } from "react-icons/di";
import { TbBrandCypress } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Box
        w={{ base: "100%", sm: "90%", md: "80%" }}
        m={"auto"}
        mt={"40px"}
        mb={"40px"}
        overflowX="hidden" 
        overflowY="hidden" 
      >
        <Heading
          fontWeight={"500"}
          fontSize={{ base: "20px", sm: "22px" }}
          textAlign={"center"}
          mb={"40px"}
          data-aos="fade-up"
          color={"teal.500"}
        >
          TECHNICAL SKILLS
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: "20px", sm: "30px", md: "40px" }}
          placeItems={"center"}
          overflow="hidden" 
        >
          <Tooltip label="Intermediate" aria-label="HTML-5 skill level">
            <Box
              p="20px"
              w={{ base: "100%", sm: "80%", md: "70%" }}
              borderRadius={"15px"}
              border={"1px solid #e2e8f0"}
              boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
              bg={"white"}
              textAlign={"center"}
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
              data-aos="fade-up"
            >
              <AiFillHtml5
                fontSize={"65px"}
                style={{ margin: "auto" }}
                color="#e54c21"
              />
              <Text fontWeight={"500"} mt={"10px"}>
                HTML-5
              </Text>
            </Box>
          </Tooltip>

          <Tooltip label="Intermediate" aria-label="Css skill level">
            <Box
              p="20px"
              w={{ base: "100%", sm: "80%", md: "70%" }}
              borderRadius={"15px"}
              border={"1px solid #e2e8f0"}
              boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
              bg={"white"}
              textAlign={"center"}
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
              data-aos="fade-up"
            >
              <FaCss3Alt
                fontSize={"65px"}
                style={{ margin: "auto" }}
                color="#1572b6"
              />
              <Text fontWeight={"500"} mt={"10px"}>
                CSS
              </Text>
            </Box>
          </Tooltip>

          <Tooltip label="Intermediate" aria-label="Javascript skill level">
            <Box
              p="20px"
              w={{ base: "100%", sm: "80%", md: "70%" }}
              borderRadius={"15px"}
              border={"1px solid #e2e8f0"}
              boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
              bg={"white"}
              textAlign={"center"}
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
              data-aos="fade-up"
            >
              <IoLogoJavascript
                fontSize={"65px"}
                style={{ margin: "auto" }}
                color="#f7df1e"
              />
              <Text fontWeight={"500"} mt={"10px"}>
                JavaScript
              </Text>
            </Box>
          </Tooltip>

          <Tooltip label="Intermediate" aria-label="React skill level">
            <Box
              p="20px"
              w={{ base: "100%", sm: "80%", md: "70%" }}
              borderRadius={"15px"}
              border={"1px solid #e2e8f0"}
              boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
              bg={"white"}
              textAlign={"center"}
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
              data-aos="fade-up"
            >
              <GrReactjs
                fontSize={"65px"}
                style={{ margin: "auto" }}
                color="#61dafb"
              />
              <Text fontWeight={"500"} mt={"10px"}>
                React
              </Text>
            </Box>
          </Tooltip>

          <Tooltip label="Basic" aria-label="Node skill level">
            <Box
              p="20px"
              w={{ base: "100%", sm: "80%", md: "70%" }}
              borderRadius={"15px"}
              border={"1px solid #e2e8f0"}
              boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
              bg={"white"}
              textAlign={"center"}
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
              data-aos="fade-up"
            >
              <DiNodejsSmall
                fontSize={"65px"}
                style={{ margin: "auto" }}
                color="#68a063"
              />
              <Text fontWeight={"500"} mt={"10px"}>
                Node
              </Text>
            </Box>
          </Tooltip>

          <Tooltip label="Basic" aria-label="MongoDB skill level">
            <Box
              p="20px"
              w={{ base: "100%", sm: "80%", md: "70%" }}
              borderRadius={"15px"}
              border={"1px solid #e2e8f0"}
              boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
              bg={"white"}
              textAlign={"center"}
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
              data-aos="fade-up"
            >
              <DiMongodb
                fontSize={"65px"}
                style={{ margin: "auto" }}
                color="#47A248"
              />
              <Text fontWeight={"500"} mt={"10px"}>
                MongoDB
              </Text>
            </Box>
          </Tooltip>

          <Tooltip label="Basic" aria-label="Express skill level">
            <Box
              p="20px"
              w={{ base: "100%", sm: "80%", md: "70%" }}
              borderRadius={"15px"}
              border={"1px solid #e2e8f0"}
              boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
              bg={"white"}
              textAlign={"center"}
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
              data-aos="fade-up"
            >
              <TbBrandCypress
                fontSize={"65px"}
                style={{ margin: "auto" }}
                color="#4a6ef3"
              />
              <Text fontWeight={"500"} mt={"10px"}>
                Express
              </Text>
            </Box>
          </Tooltip>

          <Tooltip label="Basic" aria-label="TailwindCSS skill level">
            <Box
              p="20px"
              w={{ base: "100%", sm: "80%", md: "70%" }}
              borderRadius={"15px"}
              border={"1px solid #e2e8f0"}
              boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
              bg={"white"}
              textAlign={"center"}
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
              data-aos="fade-up"
            >
              <RiTailwindCssFill
                fontSize={"65px"}
                style={{ margin: "auto" }}
                color="#38bdf8"
              />
              <Text fontWeight={"500"} mt={"10px"}>
                Tailwind CSS
              </Text>
            </Box>
          </Tooltip>
        </Grid>
      </Box>
    </>
  );
}

export default Skills;
