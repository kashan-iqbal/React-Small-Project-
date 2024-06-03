import { Heading } from "@chakra-ui/react";

const HeadingComp = ({ name }) => {
  console.log(name);

  const heading = `${name.slected?.name || ""} ${name.platform?.name || ""} `;

  return <Heading  textAlign="center" as="h3">{heading} Game</Heading>;
};

export default HeadingComp;
  