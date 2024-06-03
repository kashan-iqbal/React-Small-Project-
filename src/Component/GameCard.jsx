import {
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import CardIcon from "./CardIcon";
import CardScore from "./CardScore";
import image from "../assets/notImage.png";
import CardImoji from "./CardImoji";

const GameCard = ({ game }) => {
  return (
    <Card border="2px solid black">
      <Image
        objectFit="cover"
        maxHeight="200px"
        src={game.background_image || image}
      />
      <CardBody>
        <HStack marginBottom="10px">
          <CardIcon
            data={game.parent_platforms.map(({ platform }) => platform.name)}
          />

          <CardScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        <CardImoji ratting={game.rating} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
