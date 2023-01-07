import React, { useState, useEffect } from "react";
import BreedSearch from "../components/BreedSearch";

const Landing = () => {
  
  const [names, setNames] = useState([""]);

  useEffect( () => {
    fetch('.netlify/functions/api')
      .then(res => res.json())
      .then(data => {
        console.log("breeds = ", data);
        setNames(data);
      });
    }, []);

  return (
    <>
      <div className="homepage" style={{ backgroundColor: "black" }}>
        <BreedSearch names={names} />
      </div>
    </>
  );
};

export default Landing;
