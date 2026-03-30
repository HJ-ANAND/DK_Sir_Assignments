import { useState, useEffect } from "react";

function App2() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query === "") return;

    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
      .then((res) => res.json())
      .then((data) => setResults(data));
  }, [query]);

  return (
    <div>
      <h2>User Search</h2>
      <label htmlFor="searchInput">Search by Name: </label>
      <input
        id="searchInput"
        type="search"
        placeholder="Type a name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <hr />
      <h3>Results:</h3>
      <ul>
        {results.map((r) => (
          <li key={r.id}>
            {r.name} ({r.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App2;
