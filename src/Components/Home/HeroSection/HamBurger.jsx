import { useState } from "react";

import { Squash as Hamburger } from "hamburger-react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import HeroSectionNav from "@/components/Home/HeroSection/HeroNav";
import Header from "@/components/Home/Header";

function HamBurger() {
  const [isOpen, setOpen] = useState(false);

  // const btnRef = React.useRef();
  const handleCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <Box
      className="lg:hidden"
      display={{ base: "block", md: "none", xl: "none" }}
    >
      <Hamburger toggled={isOpen} toggle={setOpen}>
        Open
      </Hamburger>
      <Drawer placement="top" isOpen={isOpen} onClose={setOpen}>
        <DrawerOverlay />
        <DrawerContent borderRadius="30px" bgColor="white">
          <DrawerCloseButton />
          <DrawerHeader>
            {" "}
            <Header />
          </DrawerHeader>

          <DrawerBody>
            <HeroSectionNav onCloseDrawer={handleCloseDrawer} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default HamBurger;
