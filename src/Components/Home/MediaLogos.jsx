import Marquee from "react-fast-marquee";

import { Box, Flex, Image } from "@chakra-ui/react";

import CustomText from "../ui/Text";

import googleimage from "../../assets/Pictures/Companies/googleimage.jpg";
import amazonimage from "../../assets/Pictures/Companies/amazonimage.jpg";
import logitechimage from "../../assets/Pictures/Companies/logitechimage.jpg";
import spotifyimage from "../../assets/Pictures/Companies/spotifyimage.jpg";
import samsungimage from "../../assets/Pictures/Companies/samsungimage.jpg";
import netfliximage from "../../assets/Pictures/Companies/netfliximage.jpg";

const Companies = [
  googleimage,
  amazonimage,
  logitechimage,
  spotifyimage,
  samsungimage,
  netfliximage,
];

function MediaLogos() {
  return (
    <article id="blogs">
      <Box
        mt={{ base: "0px", md: "100px", xl: "100px" }}
        ml="170px"
        width="100px"
        height="100px"
        borderRadius="100px"
        bgGradient="linear-gradient(#4361EE 0%, rgba(67, 97, 238, 0) 100%);
"
      ></Box>
      <CustomText
        fontWeight="500"
        fontSize="16px"
        color="rgba(128, 128, 128, 1)"
        width={{ base: "280px", md: "auto", xl: "auto" }}
        textAlign="center"
        m="0 auto"
        mt={{ base: "40px", md: "0px", xl: "0px" }}
      >
        Trusted by 100+ Companies across the globe!
      </CustomText>

      <Marquee speed="60" className="marquee">
        <Flex gap="150px">
          {Companies.map((company, index) => {
            return (
              <Image key={index} src={company} alt="this is company logo" />
            );
          })}
        </Flex>
      </Marquee>
    </article>
  );
}

export default MediaLogos;
