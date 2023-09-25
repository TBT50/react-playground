import { useEffect, useState } from "react";

import { Character } from "./types";

import { Characters } from "./components/Characters";

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
        <Characters characters={characters} />
      )}
    </div>
  );
}
