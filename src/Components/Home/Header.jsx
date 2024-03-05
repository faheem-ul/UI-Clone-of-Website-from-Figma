import { Box, Flex, Image } from "@chakra-ui/react";
import locationSVG from "../../assets/SVGs/location.svg";
import phoneSVG from "../../assets/SVGs/Phone.svg";
import mailSVG from "../../assets/SVGs/Mail.svg";

import CustomText from "../ui/Text";

function Header() {
  return (
    <header>
      <nav>
        <Box
          bgColor="rgba(58, 12, 163, 1)"
          mt={{ base: "35px", md: "0px", xl: "0px" }}
        >
          <Flex
            direction={{ base: "row", md: "row", xl: "row" }}
            flexWrap={{ base: "wrap", md: "nowrap", xl: "nowrap" }}
            justifyContent={{
              base: "center",
              md: "space-between",
              xl: "space-between",
            }}
            ml={{ base: "0px", md: "100px", xl: "100px" }}
            py="12px"
            m="auto"
            mr={{ base: "0px", md: "100px", xl: "100px" }}
          >
            <Flex alignItems="center" gap="10px">
              <Box>
                <Image src={locationSVG} alt="this is location svg" />
              </Box>
              <CustomText color="#FFFFFF">
                Rezilla, 18 Grattan St, Brooklyn
              </CustomText>
            </Flex>

            {/*  */}
            <Flex gap="12px">
              <Flex alignItems="center" gap="12px">
                <Box>
                  <Image src={phoneSVG} alt="this is phone svg" />
                </Box>
                <CustomText color="#FFFFFF">+1 206-214-2298</CustomText>
              </Flex>

              <Flex alignItems="center" gap="10px">
                <Box>
                  <Image src={mailSVG} alt="this is mail svg" />
                </Box>
                <CustomText color="#FFFFFF">support@rezilla.com</CustomText>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </nav>
    </header>
  );
}

export default Header;
