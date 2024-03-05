import { Button } from "@chakra-ui/react";

function CustomButton({ ...props }) {
  return (
    <Button
      width={{ base: "100px", md: "80px", xl: "80px" }}
      height="37px"
      padding="13px, 16px, 13px, 16px"
      borderRadius="30px"
      {...props}
    ></Button>
  );
}

export default CustomButton;
