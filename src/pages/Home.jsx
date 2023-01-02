import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Home = (props) => {
  let navigate = useNavigate()
  const [questionaire, setQuestionaire] = useState([]);

  const getInventories = async () => {
    try {
      const response = await fetch("/inventories");
      const allInventories = await response.json();
      setQuestionaire(allInventories);
      console.log(questionaire.inventories);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`items/${e.target.firstChild.value}`)
    console.log(e)
    console.log(e.target[0].firstChild)
    console.log(e.target.firstChild.value)
  }

  useEffect(() => {
    getInventories();
  }, []);

  return (
    <div className="App">
      {questionaire ? (
        questionaire.inventories?.map((inventory, idx) => 
          <form onSubmit={handleSubmit}>
              <input
                type="submit"
                key={idx}
                value={inventory}
                id={inventory}
                />
          </form>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

};

export default Home;
