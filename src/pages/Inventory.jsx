import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router'


const Inventory = (props) => {
    const [items, setItems] = useState({})
    const [int, setInt] = useState(0)
    const [questionaire, setQuestionaire] = useState([])
    const {inventory} = useParams()
    console.log (inventory)

    const getItems = async () => {
        try {
          const response = await fetch(`/items/${inventory}`);
          const allItems = await response.json()
          setItems(allItems)
          console.log(items)
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        getItems();
      }, []);

      const loading = () => {
        <div>
            <p>{items.items[int]}</p>
            <button onClick={() => setInt(int + 1)}>Next Question</button>
        </div>
      }

      return (
        <div className="Inventory">
            <h3>{items.inventory}</h3>
            <button onClick={() => setInt(int + 1)}>Next Question</button>
            {items.items ? (
                // items.items?.map((question, i) => <p key = {i}>{question}</p>)
                <p>{items.items[int]}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
      );
}

export default Inventory