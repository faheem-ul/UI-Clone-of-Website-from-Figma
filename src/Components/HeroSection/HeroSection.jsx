import React from "react";

import { Box, Button, Flex } from "@chakra-ui/react";

import CustomButton from "../../Components/Custom Components/CustomButton";
import CustomText from "../Custom Components/CustomText";

function HeroSection() {
  return (
    <>
      <Box
        // width="1440px"
        height="902px"
        borderRadius="0px 0px 800px 800px"
        bg="linear-gradient(to bottom, rgba(76, 201, 240, 0) 0%, rgba(67, 97, 238, 0.3)
        100%)"
      >
        <Flex as="navbar" justifyContent="space-around" mt="30px">
          <Flex gap="10px">
            <CustomButton>
              <CustomText color="rgba(43, 43, 43, 1)">Home</CustomText>
            </CustomButton>
            <CustomButton>
              <CustomText color="rgba(43, 43, 43, 1)">About</CustomText>
            </CustomButton>
            <CustomButton>
              <CustomText color="rgba(43, 43, 43, 1)">Listing</CustomText>
            </CustomButton>
            <CustomButton>
              <CustomText color="rgba(43, 43, 43, 1)">Services</CustomText>
            </CustomButton>
            <CustomButton>
              <CustomText color="rgba(43, 43, 43, 1)">Blogs</CustomText>
            </CustomButton>

            {/* <Box>2</Box>
            <Box>3</Box>
            <Box>4</Box>
            <Box>5 </Box> */}
          </Flex>
          <Flex gap="5px">
            <Box>icon</Box>
            <Box>companyName</Box>
          </Flex>
          <Flex gap="5px">
            <Box>icon</Box>
            <Box>Login/Register</Box>
          </Flex>
          <Button>icon & text</Button>
        </Flex>
      </Box>
    </>
  );
}

export default HeroSection;
