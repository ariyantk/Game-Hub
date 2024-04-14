import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import tumbsUp from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emojis = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: tumbsUp, alt: "tumbsUp", boxSize: "25px" },
    5: { src: bullsEye, alt: "bullsEye", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emojis;
