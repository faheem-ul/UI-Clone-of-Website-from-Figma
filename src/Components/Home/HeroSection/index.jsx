import { Box, Flex, Image } from "@chakra-ui/react";

import homeSVG from "../../../assets/SVGs/Home.svg";
import HeroSectionNav from "./HeroNav";
import HeroMiddle from "./HeroMiddle";
import HeroAvatars from "./HeroAvatar";
import HamBurger from "./HamBurger";
import CustomHeading from "../../ui/Heading";

function HeroSection() {
  return (
    <Box
      height={{ base: "1120px", md: "auto", xl: "auto" }}
      id="home"
      borderRadius="0px 0px 800px 800px"
      bg="linear-gradient(to bottom, rgba(76, 201, 240, 0) 0%, rgba(67, 97, 238, 0.3)
        100%)"
    >
      <Box display={{ base: "none", md: "block", xl: "block" }}>
        <HeroSectionNav />
      </Box>

      <Flex alignItems="center" justifyContent="space-between" padding="0 22px">
        <Flex
          display={{ base: "Flex", md: "none", xl: "none" }}
          gap="5px"
          alignItems="center"
        >
          <Box
            bgColor="rgba(58, 12, 163, 1)"
            borderRadius="50%"
            width="50px"
            height="50px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={homeSVG} alt="this is home SVG" />
          </Box>
          <Box>
            <CustomHeading fontSize="20px" fontWeight="600">
              Rezilla
            </CustomHeading>
          </Box>
        </Flex>

        <HamBurger />
      </Flex>

      <HeroMiddle />
      <HeroAvatars />
    </Box>
  );
}

export default HeroSection;
