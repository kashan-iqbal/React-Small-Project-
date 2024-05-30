import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";

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
        <GridItem area={`main`} bg="red">
          main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
