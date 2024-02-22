import React from "react";
import { Button } from "@chakra-ui/react";

function CustomButton({ children, ...props }) {
  return (
    <Button
      width="80px"
      height="37px"
      padding="13px, 16px, 13px, 16px"
      borderRadius="30px"
      _hover="rgba(67, 97, 238, 0.3)"
      {...props}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
