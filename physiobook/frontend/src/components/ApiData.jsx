import React, { useEffect, useState } from "react";

const ApiData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API base URL comes from .env.development
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/hello`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); // because our Spring Boot controller returns plain text
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Response from Spring Boot API:</h2>
      <p>{data}</p>
    </div>
  );
};

export default ApiData;
