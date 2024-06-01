import { Badge } from "@chakra-ui/react";

const CardScore = ({ score }) => {
  const color = score > 90 ? "blue" : score < 90 ? "red" : "";

  return (
    <Badge colorScheme={color} fontSize={14}>
      {score}
    </Badge>
  );
};

export default CardScore;
