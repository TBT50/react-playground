import { useQuery } from "@tanstack/react-query";

const fetchCharacters = async ({ queryKey }) => {
  const [characters, characterId] = queryKey;

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

const { isLoading, isError, error, data } = useQuery(
  ["character", itemId],
  fetchCharacters
);
