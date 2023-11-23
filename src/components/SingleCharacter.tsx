import { Character } from "./../types.ts";

type SingleCharacterProps = {
  content: Character;
};

export const SingleCharacter = ({ content }: SingleCharacterProps) => {
  return (
    <div>
      <h2>{content.name}</h2>
      <img src={content.image} alt="" />
    </div>
  );
};
