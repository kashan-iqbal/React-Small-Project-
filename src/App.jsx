import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";
import GameGrid from "./Component/GameGrid";
import Genres from "./Component/Genres";
import { useState } from "react";

const App = () => {
  const [slected, setSlected] = useState("");
  
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
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem paddingX={7} area={`sect`}>
            <Genres slected={slected}  setSlected={(val) => setSlected(val)} />
          </GridItem>
        </Show>
        <GridItem area={`main`}>
          <GameGrid slected={slected} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
