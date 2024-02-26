import React from "react";

import { Box, Flex } from "@chakra-ui/layout";

import CustomText from "../Custom/CustomText";

import googleimage from "../assets/Pictures/Companies/googleimage.jpg";
import amazonimage from "../assets/Pictures/Companies/amazonimage.jpg";
import logitechimage from "../assets/Pictures/Companies/logitechimage.jpg";
import spotifyimage from "../assets/Pictures/Companies/spotifyimage.jpg";
import samsungimage from "../assets/Pictures/Companies/samsungimage.jpg";
import netfliximage from "../assets/Pictures/Companies/netfliximage.jpg";

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
    <>
      <Flex mt="100px" alignItems="baseline" gap="375px">
        <Box
          ml="170px"
          width="100px"
          height="100px"
          borderRadius="100px"
          bgGradient="linear-gradient(#4361EE 0%, rgba(67, 97, 238, 0) 100%);
"
        ></Box>
        <CustomText textAlign="center">
          Trusted by 100+ Companies across the globe!{" "}
        </CustomText>
      </Flex>
      <Flex mt="50px" justifyContent="center" gap="120px">
        {Companies.map((company, index) => {
          return <img key={index} src={company} alt="this is company logo" />;
        })}
      </Flex>
    </>
  );
}

export default MediaLogos;
