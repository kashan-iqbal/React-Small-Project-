import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";
import GameGrid from "./Component/GameGrid";

const App = () => {
  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: `"nav " " main " `,
          lg: `"nav nav" " sect main"`,
        }}
      >
        <GridItem area={`nav`} >
      <Navbar/>
        </GridItem>
        <Show above="lg">
          <GridItem area={`sect`} bg="green">
            sections
          </GridItem>
        </Show>
        <GridItem area={`main`} >
       <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
