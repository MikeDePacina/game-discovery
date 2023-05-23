import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const CriticScore = ({ rating }: Props) => {
  const color = rating > 4 ? "green" : rating > 3 ? "yellow" : "";
  return (
    <>
      <Badge colorScheme={color} fontSize="14px" paddingX={2}>
        {rating}
      </Badge>
    </>
  );
};

export default CriticScore;
