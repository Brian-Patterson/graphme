import React, { useState, useEffect } from "react";

const Home = (props) => {
    const [data, setData] = useState([]);

    const getInventories = async () => {
      try {
        const response = await fetch("/members");
        const allInventories = await response.json();
        setData(allInventories);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      getInventories();
    }, []);
  
    return (
      <div className="App">
        {data ? (
          data.inventories?.map((name, i) => <p key={i}>{name}</p>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}

export default Home

