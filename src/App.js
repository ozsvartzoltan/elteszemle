import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-data"); // Backend API endpoint
        const result = await response.json();
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Hiba történt az adatok lekérésekor:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Google Sheets Adatok</h1>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{row.join(", ")}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
