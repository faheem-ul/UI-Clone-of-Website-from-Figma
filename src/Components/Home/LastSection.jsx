import { Box, Flex, Image } from "@chakra-ui/react";

import CustomText from "../ui/Text";
import CustomHeading from "../ui/Heading";

import footerImage1 from "../../assets/Pictures/FooterImages/Rectangle14.png";
import footerImage2 from "../../assets/Pictures/FooterImages/Rectangle15.png";
import footerImage3 from "../../assets/Pictures/FooterImages/Rectangle16.png";
import userOctagone from "../../assets/Pictures/userOctagon.jpg";
import homeSignal from "../../assets/SVGs/HomeSignal.svg";
import logo from "../../assets/SVGs/logo.svg";

function LastSection() {
  return (
    <div id="about">
      {/* this is the main flex */}

      <Flex
        direction={{ base: "column", md: "row", xl: "row " }}
        justifyContent="center"
        mt={{ base: "380px", md: "188px", xl: "188px" }}
        gap={{ base: "0px", md: "43px", xl: "43px" }}
      >
        {/* this is the left side flex inside the main flex */}

        <Flex direction="column" m={{ base: "auto", md: "0px", xl: "0px" }}>
          <CustomText
            color="rgba(67, 97, 238, 1)"
            fontWeight="500"
            fontSize="20px"
            letterSpacing="5px"
            mb="20px"
          >
            WHO ARE WE
          </CustomText>
          <CustomHeading
            lineHeight={{ base: "41px", md: "47px", xl: "47px" }}
            fontSize={{ base: "28px", md: "40px", xl: "40px" }}
            width={{ base: "338px", md: "500px", xl: "500px" }}
            mb="20px"
          >
            Assisting individuals in locating the appropriate real estate.
          </CustomHeading>
          <CustomText
            width={{ base: "333px", md: "500px", xl: "500px" }}
            color="rgba(128, 128, 128, 1)"
            mt="-10px"
            pb="40px"
          >
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
            malesuada leo volutpat.
          </CustomText>

          {/* these felxes are inside the left side flex to make the card  */}

          <Flex
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            display={{ base: "none", md: "flex", xl: "flex" }}
            width={{ base: "333px", md: "400px", xl: "400px" }}
            py="30px"
            mb="30px"
            bgColor="rgba(255, 255, 255, 1)"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            borderRadius="30px"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
          >
            <Image
              src={homeSignal}
              alt="this is home signal svg"
              color="rgba(67, 97, 238, 1)"
            ></Image>
            <Box width="246px">
              <CustomText
                color="rgba(67, 97, 238, 1)"
                fontWeight="500"
                fontSize="20px"
              >
                Donec porttitor euismod
              </CustomText>
              <CustomText color="rgba(128, 128, 128, 1)">
                Nullam a lacinia ipsum, nec dignissim purus. Nulla
              </CustomText>
            </Box>
          </Flex>

          {/*flex of second card starts inside the left flex */}

          <Flex
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            display={{ base: "none", md: "flex", xl: "flex" }}
            width={{ base: "333px", md: "400px", xl: "400px" }}
            py="30px"
            bgColor="rgba(255, 255, 255, 1)"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            borderRadius="30px"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
          >
            <Image src={userOctagone} alt="user octagone image" />
            <Box width="246px">
              <CustomText
                color="rgba(67, 97, 238, 1)"
                fontWeight="500"
                fontSize="20px"
              >
                Donec porttitor euismod
              </CustomText>
              <CustomText color="rgba(128, 128, 128, 1)" width="274px">
                Nullam a lacinia ipsum, nec dignissim purus. Nulla
              </CustomText>
            </Box>
          </Flex>
        </Flex>

        {/* right side flex starts from here */}
        <Flex
          direction="row"
          position="relative"
          top="53px"
          gap={{ base: "40px", md: "20px", xl: "20px" }}
          ml="17px"
          mt={{ base: "-20px", md: "0px", xl: "0px" }}
          mb={{ base: "70px", md: "0px", xl: "0px" }}
        >
          <Image
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="2000"
            src={footerImage1}
            alt="first footer image"
            w={{ base: "190px", md: "272px", xl: "272px" }}
            h={{ base: "280px", md: "500px", xl: "500px" }}
            mt="60px"
          />
          <Flex direction="column" position="relative" right="50px">
            <Image
              // data-aos="fade-right"
              // data-aos-easing="ease-in-out"
              // data-aos-duration="2000"
              className="rotatation"
              // animation="rotation 2s infinite linear"
              src={logo}
              position="absolute"
              top={{ base: "-9%", md: "-12%", xl: "-12%" }}
              left={{ base: "-65%", md: "-48%", xl: "-48%" }}
              zIndex="1"
            />
            <Image
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              src={footerImage2}
              alt="second footer image"
              h={{ base: "141px", md: "280px", xl: "280px" }}
              w={{ base: "143px", md: "280px", xl: "280px" }}
            />
            <Box
              width={{ base: "40px", md: "40px", xl: "60px" }}
              height={{ base: "40px", md: "40px", xl: "60px" }}
              borderRadius="100px"
              bgGradient="linear-gradient(180deg, #4361EE 0%, rgba(67, 97, 238, 0) 100%)"
              position="absolute"
              right={{ base: "50px", md: "140px", xl: "140px" }}
              bottom={{ base: "70px", md: "105px", xl: "105px" }}
              zIndex="1"
              opacity="50%"
            ></Box>
            <Image
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              src={footerImage3}
              alt="3rd footer image"
              // maxW="200px"
              h={{ base: "100px", md: "180px", xl: "180px" }}
              w={{ base: "143px", md: "280px", xl: "280px" }}
            />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default LastSection;
