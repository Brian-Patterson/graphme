import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router'


const Inventory = (props) => {
    const [items, setItems] = useState({})
    const {inventory} = useParams()

    const getItems = async () => {
        try {
          const response = await fetch(`/items/${inventory}`);
          const allItems = await response.json();
          setItems(allItems);
          console.log('frontend: ' + items);
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