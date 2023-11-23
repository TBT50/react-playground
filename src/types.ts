export type Character = {
  id: number;
  name: string;
  image: string;
};

export type ApiResponseGlobal = {
  info: {
    count: number;
    pages: number;
  };
  results: Character[];
};
