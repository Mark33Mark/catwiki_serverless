import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import InstallPWA from "../components/InstallPWA";
import { Link } from "react-router-dom";

const Startup = () => {
  const [data, setData] = useState('');

  const fetchData = async () => {
      await fetch('.netlify/functions/spinning')
        .then( response => response.json())
        .then( data => {
      console.log("results = ", data.message);
      setData(data.message);
    })
  }

  useEffect(() => {

    setTimeout(() => {
      fetchData()
    }, 2000);

    // setTimeout(() => {
    //   history.push(".netlify/functions/api");
    // }, 5000);

  }, [data]);


  return (
    <>
      <InstallPWA />
      <div className="Startup">
        <header className="Startup-header">
          <img src={logo} className="Startup-logo" alt="logo" />
          <p>{
            !data ?  "...loading" 
            : 
            <span 
                className="welcome-message"> 
                  {data}
                  <br />
                  <Link 
                    to="api" 
                    style={{position: "absolute", textDecoration: "none", backgroundColor: "RGB(159, 226, 191)", padding: "0.5rem", marginTop: "0.8rem", transform: "translateX(-4rem)", borderRadius: "5px"}}>
                      Get Started?
                  </Link>
              </span>
            }
          </p>
          
        </header>
      </div>
    </>
  );
};

export default Startup;
