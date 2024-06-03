import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";
import GameGrid from "./Component/GameGrid";
import Genres from "./Component/Genres";
import { useState } from "react";
import PlatForm from "./Component/PlatForm";
import SortSlector from "./Component/SortSlector";
import HeadingComp from "./Component/Heading";

const App = () => {
  const [gameQuerry, setGameQuerry] = useState({
    slected: "",
    platform: "",
    sort: "",
    search: "",
  });

  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: `"nav " " main " `,
          lg: `"nav nav" " sect  main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "300px  1fr",
        }}
      >
        <GridItem area={`nav`}>
          <Navbar
            slected={gameQuerry.slected}
            setGameQuerry={setGameQuerry}
          />
        </GridItem>
        <Show above="lg">
          <GridItem paddingX={7} area={`sect`}>
            <Genres slected={gameQuerry.slected} setSlected={setGameQuerry} />
          </GridItem>
        </Show>
        <GridItem area={`main`}>
          <HeadingComp name={gameQuerry} />
          <Flex justifyContent="space-around">
            <PlatForm
              platform={gameQuerry.platform}
              setGameQuerry={setGameQuerry}
            />
            <SortSlector gameQuerry={gameQuerry.sort} setSort={setGameQuerry} />
          </Flex>
          <GameGrid
            slected={gameQuerry.slected}
            platform={gameQuerry.platform}
            sort={gameQuerry.sort}
            search={gameQuerry.search}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
