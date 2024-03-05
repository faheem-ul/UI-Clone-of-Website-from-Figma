import { Box } from "@chakra-ui/react";

// import Header from "../../Components/Home/Header";
import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/HeroSection";
import MediaLogos from "@/components/Home/MediaLogos";
import LastSection from "@/components/Home/LastSection";
import ResponsiveCards from "@/components/ui/ResponsiveCards";
// import Header from "components/Home/Header";
// import { Header } from "src/Components/Home/Header";
// import HeroSection from "../../Components/Home/HeroSection/";
// import MediaLogos from "../../Components/Home/MediaLogos";
// import LastSection from "../../Components/Home/LastSection/";
// import ResponsiveCards from "../../Components/ui/ResponsiveCards";
// import CustomText from "src/Components/ui/Text";

function MainPage() {
  return (
    <main>
      <Box display={{ base: "none", md: "block", xl: "block" }}>
        <Header />
      </Box>

      <HeroSection />
      <MediaLogos />
      <LastSection />
      <ResponsiveCards />
      {/* <Flex direction="column" alignItems="center">
        <Flex
          display={{ base: "flex", md: "none", xl: "none" }}
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

        flex of second card starts inside the left flex

        <Flex
          display={{ base: "flex", md: "none", xl: "none" }}
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
      </Flex> */}
    </main>
  );
}

export default MainPage;
