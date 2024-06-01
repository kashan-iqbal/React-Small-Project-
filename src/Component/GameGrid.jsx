import useGame from "../Hooks/useGame";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import Skleten from "./Skleten";
import GameCardContainer from "./GameCardContainer";

const GameGrid = ({slected}) => {

  console.log(slected,`id`)


const { error, game, loading } = useGame("/games");
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,11,12,13,14,15,16,17];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={6}
      >
        {loading &&
          arr.map((a) => (
            <>
              <GameCardContainer key={a} >
                <Skleten />
              </GameCardContainer>
            </>
          ))}
        {game?.length > 0 &&
          game.map((g) => (
            <>
              <GameCardContainer key={g.id}>
                <GameCard  game={g} />
              </GameCardContainer>
            </>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
