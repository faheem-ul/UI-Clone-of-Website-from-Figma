import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import CustomText from "../../Custom/CustomText";
import CustomHeading from "../../Custom/CustomHeading";
import CustomSlider from "../../Custom/CustomSlider/CustomSlider";
import CustomInput from "../../Custom/CustomInput";
import CustomButton from "../../Custom/CustomButton";

function TopSection() {
  return (
    <>
      <Flex
        justify="space-between"
        w="100%"
        h="100%"
        height="902px"
        // mt="20px"s
        borderRadius="0px 0px 800px 800px"
        //   border="0px, 0px, 1px, 0px"
        bg="linear-gradient(to bottom, rgba(76, 201, 240, 0) 0%, rgba(67, 97, 238, 0.3)
     100%)"
        // gap="300px"
      >
        <Flex
          direction="column"
          //   alignItems="center"
          //   width="1440px"
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
        </Flex>
        <Flex
          width="420px"
          height="582px"
          bgColor="rgba(255, 255, 255, 1)"
          mt="171px"
          mr="150px"
          borderRadius="20px 20px 20px 20px"
          justifyContent="center"
          // left: 860px
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="30px"
          >
            <CustomText
              color="rgba(58, 12, 163, 1)"
              fontWeight="600"
              fontSize="16px"
            >
              Contact Us Now
            </CustomText>
            <Box
              width="340px"
              bgColor="rgba(58, 12, 163, 1)"
              border="1px solid"
            ></Box>
            <CustomInput placeholder="Full Name" />
            <CustomInput placeholder="Email" />
            <CustomInput
              placeholder="Message"
              type="textarea"
              width="340px"
              height="134px"
            />
            <CustomButton
              bgColor="rgba(58, 12, 163, 1);"
              color="white"
              borderRadius="50px"
              width="340px"
            >
              Submit
            </CustomButton>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default TopSection;
