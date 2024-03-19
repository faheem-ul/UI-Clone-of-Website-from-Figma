import { Box, Image, Flex } from "@chakra-ui/react";

import CustomText from "@/components/ui/Text";
import homeSignal from "../../assets/SVGs/HomeSignal.svg";
import userOctagone from "../../assets/Pictures/userOctagon.jpg";
// import homeSignal from "@src/assets/SVGs/HomeSignal.svg"

function ResponsiveCards() {
  return (
    <div>
      <Flex direction="column" alignItems="center" pb="65px">
        <Flex
          display={{ base: "flex", md: "flex", xl: "none" }}
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
          display={{ base: "flex", md: "flex", xl: "none" }}
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
    </div>
  );
}

export default ResponsiveCards;
