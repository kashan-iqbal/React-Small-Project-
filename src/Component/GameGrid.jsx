import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import Skleten from "./Skleten";
import GameCardContainer from "./GameCardContainer";
import useGame from "../Hooks/useFilter";

const GameGrid = ({ slected, platform,sort,search }) => {
  console.log(slected, `id`);

  const { error, game, loading } = useGame(slected, platform ,sort,search);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17];

  if (error) return <p>{error}</p>;

  return (
    <>
      {game.length === 0 && !loading && <p>No Game Found In This Catageory</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={6}
      >
        {loading &&
          arr.map((a) => (
            <>
              <GameCardContainer key={a}>
                <Skleten />
              </GameCardContainer>
            </>
          ))}
        {game?.length > 0 &&
          game.map((g) => (
            <>
              <GameCardContainer key={g.id}>
                <GameCard game={g} />
              </GameCardContainer>
            </>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
