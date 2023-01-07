import React, { useState } from "react";
import { Link } from "react-router-dom";

const BreedSearch = (names) => {
  
  const breeds = names.names;

  const [isActive, setIsActive] = useState(false);

  console.log("isActive = ", isActive)
  const onClick = () => setIsActive(!isActive);

  return (
    <>
      <div className="drop-container">
        <div className="menu-container">
          <button onClick={onClick} className="menu-trigger">
            <img
              src="../assets/cat-silhouette-vector-10.png"
              className="menu-image"
              alt="cat silouette"
            />
            Cat Breed Menu
          </button>

          <nav

            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              {breeds.map((breed, index) => (
                <li key={index}>
                  <Link to={`/${breed}`}>{breed}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default BreedSearch;
