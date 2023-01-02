import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const Home = (props) => {
  const [questionaire, setQuestionaire] = useState([]);

  const getInventories = async () => {
    try {
      const response = await fetch("/inventories");
      const allInventories = await response.json();
      setQuestionaire(allInventories);
      console.log(questionaire);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInventories();
  }, []);

  return (
    <div className="App">
      {questionaire ? (
        questionaire.inventories?.map((inventory, i) => 
          <form>
            <Link to={'/items'}>
              <input
                type="button"
                key={i}
                value={inventory}
                id={inventory}
                />
              </Link>
          </form>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

};

export default Home;
