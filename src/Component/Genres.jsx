import {
  Box,
  Button,
  HStack,
  Img,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGame from "../Hooks/useGame";

const Genres = ({ setSlected, slected }) => {
  const { game, loading, error } = useGame(`/genres`);
  if (loading) {
    return (
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner />
      </Box>
    );
  }
  return (
    <>
      <List height="100vh" overflowX="scroll">
        {game.map((g) => (
          <ListItem width="100%" paddingY={3} key={g.id}>
            <HStack>
              {" "}
              <Img boxSize="62px" src={g.image_background} />{" "}
              <Button
                color={slected.id === g.id ? "red" : null}
                onClick={() => setSlected((prev)=>({...prev,slected:g}))}
                variant="link"
                fontSize="x-large"
              >
                {g.name}
              </Button>
            </HStack>{" "}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genres;
