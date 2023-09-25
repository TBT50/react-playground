import { useEffect, useState } from "react";

type Character = {
  id: number;
  name: string;
  image: string;
};

type ApiResponse = {
  info: {
    count: number;
    pages: number;
  };
  results: Character[];
};

export default function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      if (response.status !== 200) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Please try again later.");
      }
      const data: ApiResponse = await response.json();
      setCharacters(data.results);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error has occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-[40px] my-6">Characters</h1>
      {isLoading ? (
        <p>LOADING...</p>
      ) : error ? (
        <p>Something went wrong: {error}</p>
      ) : (
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
      )}
    </div>
  );
}
