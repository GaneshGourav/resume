import {
  Box,
  Button,
  Heading,
  Img,
  Input,
  Link,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nadhpjb",
        "template_306jy0a",
        e.target,
        "Utlf75F74vAU-zRFb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Box w={"80%"} m={"auto"} mt={"40px"} mb={"60px"}>
        <Heading
          fontWeight={"500"}
          fontSize={{ base: "20px", sm: "22px" }}
          textAlign={"center"}
          mb={"40px"}
          data-aos="fade-up"
          color={"teal.500"}
        >
          CONNECT WITH ME!
        </Heading>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
          gap={"20px"}
        >
          <Box
            w={{ base: "100%", md: "50%" }}
            minHeight={{ base: "auto", md: "450px" }}
            display="flex"
            alignItems="center"
            data-aos="fade-right"
          >
            <Img
              src="https://lystloc-landing-page.s3.ap-south-1.amazonaws.com/images/others/contact-us.svg"
              alt="Contact-image"
              w="100%"
              borderRadius={"10px"}
              boxShadow={"lg"}
              height="100%"
              objectFit="cover"
            />
          </Box>

          <Box
            w={{ base: "100%", md: "50%" }}
            bgGradient="linear(to-r, teal.100, teal.200)"
            p="30px"
            borderRadius={"15px"}
            boxShadow={"lg"}
            minHeight={{ base: "auto", md: "450px" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            data-aos="fade-left"
          >
            <form onSubmit={handleSubmit}>
              <Box mb="20px">
                <Input
                  type="text"
                  name="to_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your Name"
                  bg="white"
                  border="2px solid teal.300"
                  _hover={{ border: "2px solid teal.500" }}
                  _focus={{ border: "2px solid teal.500" }}
                  borderRadius={"10px"}
                  p="10px"
                  data-aos="fade-right"
                />
              </Box>
              <Box mb="20px">
                <Input
                  type="email"
                  name="from_name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your Email"
                  bg="white"
                  border="2px solid teal.300"
                  _hover={{ border: "2px solid teal.500" }}
                  _focus={{ border: "2px solid teal.500" }}
                  borderRadius={"10px"}
                  p="10px"
                  data-aos="fade-left"
                />
              </Box>
              <Box>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  bg="white"
                  border="2px solid teal.300"
                  _hover={{ border: "2px solid teal.500" }}
                  _focus={{ border: "2px solid teal.500" }}
                  borderRadius={"10px"}
                  p="10px"
                  data-aos="fade-right"
                ></Textarea>
              </Box>
              <Box mt="30px">
                <Link>
                  <Button
                    type="submit"
                    w="100%"
                    _hover={{
                      bgGradient: "linear(to-r, teal.500, teal.600)",
                    }}
                    fontFamily="cursive"
                    color="white"
                    p="12px 0"
                    borderRadius={"10px"}
                    bgGradient="linear(to-l, teal.400, teal.500)"
                    boxShadow="md"
                    data-aos="fade-up"
                  >
                    Send Message
                  </Button>
                </Link>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ContactForm;
