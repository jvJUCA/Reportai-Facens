import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/bottts-neutral";

export const getRandomAvatar = (email) => {
  const seed = email;

  const svg = createAvatar(style, {
    backgroundColor: [
      "#FF5733",
      "#33FF57",
      "#5733FF",
      "#FF33B8",
      "#FFD733",
      "#33FFEC",
      "#FF3333",
      "#33FFB2",
    ],
    seed,
    dataUri: true,
  });

  return svg;
};
