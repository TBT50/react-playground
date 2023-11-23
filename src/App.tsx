import { useQuery } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { useState } from "react";

import "./App.css";

// import { Characters } from "./components/Characters";
import { SingleCharacter } from "./components/SingleCharacter.tsx";

import { Character } from "./types.ts";

const fetchCharacters = async (characterId: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );

  if (response.status !== 200) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Please try again later.");
  }

  const data: Character = await response.json();
  return data;
};

export default function App() {
  const [itemId, setItemId] = useState(1);

  const handleIdChange = () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    setItemId(randomId);
  };

  const { isLoading, isError, error, data } = useQuery(
    ["character", itemId],
    () => fetchCharacters(itemId)
  );

  return (
    <>
      <div className="max-w-4xl mx-auto px-5">
        <p>{itemId}</p>
        <button type="button" onClick={handleIdChange}>
          CLICK ME
        </button>
        <h1 className="text-[40px] my-6">Characters</h1>
        {isLoading ? (
          <p>LOADING...</p>
        ) : isError ? (
          <p>Something went wrong: {(error as Error).message}</p>
        ) : (
          data && <SingleCharacter content={data} />
        )}
      </div>

      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </>
  );
}
