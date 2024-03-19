import { Box, Flex, Textarea, FormControl } from "@chakra-ui/react";

import CustomText from "../../ui/Text";
import CustomHeading from "../../ui/Heading";
import CustomSlider from "../../ui/CustomSlider";
import CustomInput from "../../ui/Input";
import CustomButton from "../../ui/Button";

function HeroMiddle() {
  return (
    <article>
      <Flex
        alignItems={{ base: "center" }}
        direction={{ base: "column", md: "column", xl: "row" }}
        justifyContent="space-around"
        mt={{ base: "49px", md: "90px", xl: "90px" }}
      >
        <Flex direction="column">
          {/*  */}

          <CustomText
            pb="10px"
            pl={{ base: "2px", md: "5px", xl: "5px" }}
            fontWeight="500"
            fontSize={{ base: "16px", md: "10px", xl: "19.3px" }}
            color="rgba(67, 97, 238, 1)"
            letterSpacing="5px"
          >
            REAL ESTATE
          </CustomText>

          <CustomHeading
            width={{ base: "333px", md: "333px", xl: "480px" }}
            fontSize={{ base: "39.8px", md: "39.8px", xl: "57.3px" }}
            lineHeight={{ base: "47px", md: "47px", xl: "65px" }}
          >
            Find a perfect home you love..!
          </CustomHeading>

          <CustomText
            width={{ base: "333px", md: "333px", xl: "580px" }}
            color="rgba(128, 128, 128, 1)"
            fontWeight="400"
            fontSize={{ base: "13.3px", md: "13.3px", xl: "16px" }}
            pt={{ base: "0px", md: "0px", xl: "0px" }}
            m={{ base: "revert" }}
          >
            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
            Integer a dolor eu sapien sodales vulputate ac in purus.
          </CustomText>

          <Box
            alignSelf="end"
            width="60px"
            height="60px"
            borderRadius="100px"
            bgGradient="linear-gradient(#4361EE 0%, rgba(67, 97, 238, 0) 100%)"
            position="relative"
            right="30px"
            top="-7px"
          ></Box>

          <CustomSlider />
          {/*  */}
        </Flex>
        {/*  */}

        <Flex
          direction="column"
          alignItems="center"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.02)"
          justifyContent="space-evenly"
          width={{ base: "390px", md: "420px", xl: "420px" }}
          height="582px"
          bgColor="rgba(255, 255, 255, 1)"
          borderRadius="20px"
          p="20px"
        >
          <CustomText
            color="rgba(58, 12, 163, 1)"
            fontWeight="500"
            fontSize="16px"
            textAlign="center"
          >
            Contact Us Now
          </CustomText>

          <Box
            width="340px"
            border="1.8px solid"
            color="rgba(58, 12, 163, 1)"
            zIndex="1"
          ></Box>
          <Box
            width={{ base: "391px", md: "419px", xl: "419px" }}
            border="1px solid"
            color="rgba(170, 170, 170, 1)"
            position="relative"
            bottom="45px"
          ></Box>

          <CustomInput border="none" type="text" placeholder="Full Name" />

          <CustomInput border="none" type="Email" placeholder="Email Address" />

          <Textarea
            border="none"
            borderRadius="20px"
            placeholder="Message"
            width="340px"
            rows="5"
            bgColor="rgba(212, 212, 212, 0.2)"
            textColor="rgba(212, 212, 212, 1)"
          />

          <CustomButton
            bgColor="rgba(58, 12, 163, 1);"
            color="white"
            borderRadius="50px"
            width="340px"
            p="30px"
            type="submit"
          >
            Submit
          </CustomButton>
        </Flex>
      </Flex>
    </article>
  );
}

export default HeroMiddle;
