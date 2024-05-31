import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import CardIcon from "./CardIcon";
import CardScore from "./CardScore";

const GameCard = ({ game }) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack>
          <CardIcon
            data={game.parent_platforms.map(({ platform }) => platform.name)}
          />

          <CardScore score={game.metacritic}  />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
