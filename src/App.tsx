import { useState, useEffect } from "react";

interface ApiResponse {
  id: number;
  name: string;
  email: string;
}

const App = () => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    return fetch(`https://cloudflareworker.piotrek380.workers.dev`, {
      mode: "no-cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: ApiResponse[]) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p>LOADING...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      <h1>Hosted on Cloudflare</h1>
      <ul>
        {data.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
