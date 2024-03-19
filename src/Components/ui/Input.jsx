import { Input } from "@chakra-ui/input";

function CustomInput({ ...props }) {
  return (
    <Input
      width="340px"
      height="59px"
      borderRadius="20px"
      bgColor="rgba(212, 212, 212, 0.2)"
      border="1px solid rgba(212, 212, 212, 1)"
      textColor="rgba(212, 212, 212, 1)"
      {...props}
    ></Input>
  );
}

export default CustomInput;
