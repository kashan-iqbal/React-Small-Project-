import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import CardIcon from "./CardIcon";
import CardScore from "./CardScore";
import image from "../assets/img";

const GameCard = ({ game }) => {
  return (
    <Card>
      <Image maxHeight="200px" src={game.background_image || image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack>
          <CardIcon
            data={game.parent_platforms.map(({ platform }) => platform.name)}
          />

          <CardScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
