import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "./components/BeerCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get("https://api.sampleapis.com/beers/ale");
        setBeers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBeers();
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Beer Collection</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="beer-grid">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
