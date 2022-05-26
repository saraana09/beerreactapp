import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const url = "https://api.punkapi.com/v2/beers";
  const fetchData = async () => {
    await axios.get(url).then((response) => setBeers(response.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      Home
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
