import { Box, Image } from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import thumup from "../assets/Thum.png";
import Averate from "../assets/average.png";

const CardImoji = ({ ratting }) => {
  if (ratting > 4) {
    return (
      <Box boxSize="25px">
        {" "}
        <Image src={thumup} />
      </Box>
    );
  }

  return (
    <Box boxSize="25px">
      {" "}
      <Image src={Averate} />
    </Box>
  );
};

export default CardImoji;
