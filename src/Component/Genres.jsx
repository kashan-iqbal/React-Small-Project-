import {
  Box,
  Button,
  Heading,
  HStack,
  Img,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import "../App.css";

const Genres = ({ onClose ,setSlected, slected }) => {
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

  const handleClik = (g) => {
    return () => {
      setSlected((prev) => ({ ...prev, slected: g }));
      onClose( )
    };
  };

  return (
    <>
      <Heading fontSize="27px" as="h6">
        Catageory
      </Heading>
      <List height="100vh" overflowY="scroll" overflowX="hidden">
        {game.map((g) => (
          <ListItem width="100%" paddingY={3} key={g.id}>
            <HStack>
              {" "}
              <Img
                borderRadius="10px"
                boxSize="62px"
                src={g.image_background}
              />{" "}
              <Button
                color={slected.id === g.id ? "red" : null}
                onClick={handleClik(g)}
                variant="link"
                fontSize="x-large"
                whiteSpace="wrap"
                textAlign="start"
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
