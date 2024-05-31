import useGame from "../Hooks/useGame";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, game } = useGame();

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={6}
      >
        {game.length > 0 && game.map((g) => <GameCard key={g.id} game={g} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
