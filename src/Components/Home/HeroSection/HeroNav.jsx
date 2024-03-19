import { useEffect } from "react";

import { Box, Button, Flex, Image } from "@chakra-ui/react";

import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import homeSVG from "../../../assets/SVGs/Home.svg";
import userSVG from "../../../assets/SVGs/User.svg";

import CustomButton from "../../ui/Button";
import CustomText from "../../ui/Text";

function HeroSectionNav({ onCloseDrawer }) {
  const { hash } = useLocation();

  const handleButtonClick = () => {
    onCloseDrawer();
  };

  useEffect(() => {
    // console.log(window.location);
    const currentHash = window.location.hash;
    // console.log(window.location.hash);

    if (!currentHash || currentHash !== "#home") {
      window.location.hash = "home";
    }
  }, []);
  return (
    <>
      <Flex
        direction={{ base: "column-reverse", md: "row", xl: "row" }}
        margin="0 auto"
        justifyContent="space-between"
        p={{ base: "0px", md: "20px 0px", xl: "20px 100px" }}
        alignItems="center"
      >
        <Flex
          direction={{ base: "column", md: "row", xl: "row" }}
          gap={{ base: "20px", md: "10px", xl: "10px" }}
          justifyContent={{ base: "center", md: "center", xl: "center" }}
          p={{ base: "20px 0px", md: "0px", xl: "0px" }}
        >
          {/*  */}

          {/* {console.log(hash)} */}
          <Link smooth to="#home">
            <CustomButton
              onClick={handleButtonClick}
              style={{
                backgroundColor:
                  hash === "#home" ? "rgba(67, 97, 238, 0.3)" : "",
              }}
            >
              <CustomText
                fontWeight="500"
                fontSize="16px"
                color="rgba(43, 43, 43, 1)"
              >
                Home
              </CustomText>
            </CustomButton>
          </Link>

          <Link smooth to="#about">
            <CustomButton
              onClick={handleButtonClick}
              style={{
                backgroundColor:
                  hash === "#about" ? "rgba(67, 97, 238, 0.3)" : "",
              }}
            >
              <CustomText
                fontWeight="500"
                fontSize="16px"
                color="rgba(43, 43, 43, 1)"
              >
                About
              </CustomText>
            </CustomButton>
          </Link>

          <CustomButton onClick={handleButtonClick}>
            <CustomText
              fontWeight="500"
              fontSize="16px"
              color="rgba(43, 43, 43, 1)"
            >
              Listing
            </CustomText>
          </CustomButton>

          <CustomButton onClick={handleButtonClick}>
            <CustomText
              fontWeight="500"
              fontSize="16px"
              color="rgba(43, 43, 43, 1)"
            >
              Services
            </CustomText>
          </CustomButton>

          <Link smooth to="#blogs">
            <CustomButton
              onClick={handleButtonClick}
              style={{
                backgroundColor:
                  hash === "#blogs" ? "rgba(67, 97, 238, 0.3)" : "",
              }}
            >
              <CustomText
                fontWeight="500"
                fontSize="16px"
                color="rgba(43, 43, 43, 1)"
              >
                Blogs
              </CustomText>
            </CustomButton>
          </Link>
        </Flex>

        {/*  */}

        <Flex
          display={{ base: "none", md: "flex", xl: "flex" }}
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
            <CustomText fontWeight="600" fontSize="20px">
              Rezilla
            </CustomText>
          </Box>
        </Flex>

        <Flex
          // direction={{ base: "column", md: "row", xl: "row" }}
          gap={{ base: "25px", md: "25px", xl: "25px" }}
          alignItems="center"
        >
          <Flex gap="5px" alignItems="center">
            <Box>
              <Image src={userSVG} alt="this is user SVG" />
            </Box>
            <CustomText fontWeight="500" fontSize="16px">
              Login/Register
            </CustomText>
          </Flex>
          <Button
            width="169px"
            height="50px"
            bgColor="rgba(58, 12, 163, 1)"
            // _hover="rgba(58, 12, 163, 1)"
            padding="15px, 26px, 15px, 26px"
            borderRadius="50px"
            gap="7px"
          >
            <Image
              src={homeSVG}
              alt="this is home SVG"
              width="20px"
              height="20px"
            />
            <CustomText color="white" fontWeight="500" fontSize="16px">
              Add Listing
            </CustomText>
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

// HeroSectionNav.propTypes = {
//   onCloseDrawer: PropTypes.func.isRequired,
// };

export default HeroSectionNav;
