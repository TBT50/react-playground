import { Character } from "./../types";

type CharactersProps = {
  characters: Character[];
};

export const Characters = ({ characters }: CharactersProps) => {
  return (
    <ul className="grid grid-cols-4 gap-6  mb-20">
      {characters.map((character) => {
        return (
          <li key={character.id}>
            <img src={character.image} alt="" />
            <h2 className="text-lg mt-1">{character.name}</h2>
          </li>
        );
      })}
    </ul>
  );
};
