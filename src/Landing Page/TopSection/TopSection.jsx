import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import CustomText from "../../Custom/CustomText";
import CustomHeading from "../../Custom/CustomHeading";
import CustomSlider from "../../Custom/CustomSlider/CustomSlider";

function TopSection() {
  return (
    <>
      <Flex></Flex>
      <Box
        //   alignItems="center"
        //   width="1440px"
        height="902px"
        mt="20px"
        borderRadius="0px 0px 800px 800px"
        //   border="0px, 0px, 1px, 0px"
        bg="linear-gradient(to bottom, rgba(76, 201, 240, 0) 0%, rgba(67, 97, 238, 0.3)
        100%)"
      >
        <CustomText
          fontSize="19.4px"
          // width="207px"
          // height="14px"
          pt="80px"
          ml="161px"
          color="rgba(67, 97, 238, 1)"
        >
          REAL ESTATE
        </CustomText>
        <CustomHeading
          width="480px"
          height="105px"
          ml="160px"
          fontSize="57.3px"
          mt="40px"
        >
          Find a perfect home you love..!
        </CustomHeading>
        <CustomText
          width="580px"
          height="37px"
          mt="80px"
          ml="160px"
          fontWeight="400"
          fontSize="16px"
        >
          Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
          Integer a dolor eu sapien sodales vulputate ac in purus.
        </CustomText>
        <CustomSlider />
      </Box>
    </>
  );
}

export default TopSection;
