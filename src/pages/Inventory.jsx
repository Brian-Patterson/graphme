import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router'


const Inventory = (props) => {
    const [items, setItems] = useState({})
    const {inventory} = useParams()
    console.log (inventory)

    const getItems = async () => {
        try {
          const response = await fetch(`/items/${items.inventory}`);
          const allItems = await response.json();
          setItems(allItems);
          console.log('frontend: ' + items.inventory);
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        getItems();
      }, []);

      return (
        <div className="App">
            <h3>{items.inventory}</h3>
          {items ? (
            items.items?.map((question, i) => <p key={i}>{question}</p>)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
}

export default Inventory