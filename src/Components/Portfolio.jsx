import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import Simplenote from "../assets/simplenote.png";
import Electronics from "../assets/ElectronicsExpress.jpg";
import HealthIV from "../assets/HealthIV.jpg";

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Box
        w={"80%"}
        m={"auto"}
        mt={"40px"}
        mb={"40px"}
        overflow="hidden" 
      >
        <Heading
          fontWeight={"500"}
          fontSize={{ base: "20px", sm: "22px" }}
          textAlign={"center"}
          mb={"40px"}
          data-aos="fade-up"
          color={"teal.500"}
        >
          PORTFOLIO
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="40px"
          placeItems={"center"}
        >
          {/* Project 1 */}
          <Box
            p={"20px"}
            borderRadius={"20px"}
            boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
            w={"100%"}
            overflow="hidden" 
            data-aos="fade-right"
            _hover={{
              transform: "scale(1.05)",
              transition: "0.3s ease-in-out",
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px",
            }}
          >
            <Img
              src={Simplenote}
              alt="Project-Image"
              borderRadius={"15px"}
              mb={"10px"}
              objectFit="cover" 
              maxWidth="100%"
            />
            <Text color={"gray.500"}>Full Stack Project</Text>
            <Heading
              fontWeight={"500"}
              fontSize={"20px"}
              textAlign={"left"}
              mb={"10px"}
            >
              Simplenote
            </Heading>
            <Text mb={"20px"}>
              Introducing a professionally crafted notes website built with
              React to ensure a seamless user experience. The platform is powered
              by a robust backend utilizing Node.js, Express.js, and MongoDB.
            </Text>
            <Flex justifyContent={"space-between"}>
              <Link href="https://simplenote.vercel.app/" isExternal>
                <Button colorScheme="teal" size="md">
                  Live
                </Button>
              </Link>
              <Link href="https://github.com/GaneshGourav/notesapp" isExternal>
                <Button variant="outline" colorScheme="teal" size="md">
                  Code
                </Button>
              </Link>
            </Flex>
          </Box>

          {/* Project 2 */}
          <Box
            p={"20px"}
            borderRadius={"20px"}
            boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
            w={"100%"}
            overflow="hidden" 
            data-aos="fade-up"
            _hover={{
              transform: "scale(1.05)",
              transition: "0.3s ease-in-out",
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px",
            }}
          >
            <Img
              src={Electronics}
              alt="Project-Image"
              borderRadius={"15px"}
              mb={"10px"}
              objectFit="cover"
              maxWidth="100%" 
            />
            <Text color={"gray.500"}>Full Stack Project</Text>
            <Heading
              fontWeight={"500"}
              fontSize={"20px"}
              textAlign={"left"}
              mb={"10px"}
            >
              Express Electronics
            </Heading>
            <Text mb={"20px"}>
              A React and Redux-based application for a seamless shopping experience.
              Features user and admin authentication, and comprehensive functionalities.
            </Text>
            <Flex justifyContent={"space-between"}>
              <Link
                href="https://elctronix-express-k74afyg3e-ganeshgourav.vercel.app/"
                isExternal
              >
                <Button colorScheme="teal" size="md">
                  Live
                </Button>
              </Link>
              <Link
                href="https://github.com/gauravraj2601/Electronix-Express"
                isExternal
              >
                <Button variant="outline" colorScheme="teal" size="md">
                  Code
                </Button>
              </Link>
            </Flex>
          </Box>

          {/* Project 3 */}
          <Box
            p={"20px"}
            borderRadius={"20px"}
            boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
            w={"100%"}
            overflow="hidden" 
            data-aos="fade-left"
            _hover={{
              transform: "scale(1.05)",
              transition: "0.3s ease-in-out",
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px",
            }}
          >
            <Img
              src={HealthIV}
              alt="Project-Image"
              borderRadius={"15px"}
              mb={"10px"}
              objectFit="cover" 
              maxWidth="100%" 
            />
            <Text color={"gray.500"}>Full Stack Project</Text>
            <Heading
              fontWeight={"500"}
              fontSize={"20px"}
              textAlign={"left"}
              mb={"10px"}
            >
              HealthIV
            </Heading>
            <Text mb={"20px"}>
              Developed functionalities for user registration and authentication
              and assisted users in booking confirmation for in-home therapy services.
            </Text>
            <Flex justifyContent={"space-between"}>
              <Link
                href="https://changeable-food-3405-oxnu9wycf-ganeshgourav.vercel.app/"
                isExternal
              >
                <Button colorScheme="teal" size="md">
                  Live
                </Button>
              </Link>
              <Link href="https://github.com/GaneshGourav/HealthIv" isExternal>
                <Button variant="outline" colorScheme="teal" size="md">
                  Code
                </Button>
              </Link>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Portfolio;
