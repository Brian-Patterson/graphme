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
                <div>
                    <p>{items.items[int]}</p>
                    <form>
                        <input 
                            type='radio'
                            id="strAgr"
                            value="strongly agree"
                            name='scaled-response'
                        />
                        <label for="strArg">Strongly Agree</label>
                        <input 
                            type='radio'
                            id='agr'
                            value='agree'
                            name='scaled-response'
                        />
                        <label for="Agr">Agree</label>
                        <input 
                            type='radio'
                            id='sliAgr'
                            value='slightly agree'
                            name='scaled-response'
                        />
                        <label for='sliAgr'>Slightly Agree</label>
                        <input 
                            type='radio'
                            id='neut'
                            value='neutral'
                            name='scaled-response'
                        />
                        <label for='neut'>Neutral</label>
                        <input 
                            type='radio'
                            id='sliDisa'
                            value='slightly disagree'
                            name='scaled-response'
                        />
                        <label for='sliDisa'>Slightly Disagree</label>
                        <input 
                            type='radio'
                            id='disa'
                            value='disagree'
                            name='scaled-response'
                        />
                        <label for='disa'>Disagree</label>
                        <input 
                            type='radio'
                            id='strDisa'
                            value='strongly disagree'
                            name='scaled-response'
                        />
                        <label for='strDisa'>Strongly Disagree</label> 
                    </form>
                </div>
                
            ) : (
                <p>Loading...</p>
            )}
        </div>
      );
}

export default Inventory