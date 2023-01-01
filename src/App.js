import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
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

  // const loaded = () => {
  //   return data.map((inventory, i) => {
  //     return <p key={i}>{inventory}</p>;
  //   });
  // };

  // const loading = () => {
  //   return <h1>Loading...</h1>;
  // };

  // useEffect(() => {
  //   fetch("/members")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data.inventories);
  //     });
  // }, []);

  return (
    <div className="App">
      {/* {data ? loaded() : loading()} */}
      {data ? (
        data.inventories?.map((name, i) => <p key={i}>{name}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
