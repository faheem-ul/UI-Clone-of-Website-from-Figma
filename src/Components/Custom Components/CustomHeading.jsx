import React from "react";

import { Heading } from "@chakra-ui/react";

function CustomHeading({ children, ...rest }) {
  return (
    <Heading
      fontFamily="Poppins"
      fontsize="57px"
      fontWeight="600"
      lineHeight="65px"
      letterSpacing="0em"
      // text-align="left"
      {...rest}
    >
      {children}
    </Heading>
  );
}

export default CustomHeading;
