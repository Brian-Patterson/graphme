import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router'


const Inventory = (props) => {
    const [items, setItems] = useState({})
    const [int, setInt] = useState(0)
    const [answers, setAnswers] = useState([])
    console.log(answers)
    const {inventory} = useParams()

    const getItems = async () => {
        try {
          const response = await fetch(`/items/${inventory}`);
          const allItems = await response.json()
          setItems(allItems)
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        getItems();
      }, []);

      const handleSubmit = (e) => {
        e.preventDefault()
        setInt(int+1)
        let selected = ""
        for (let i=0; i<=6; i++){
            if (e.target[i].checked === true){
                selected = e.target[i].defaultValue
                e.target[i].checked = false
            }
        }
        console.log(answers)
        setAnswers(answers => [...answers, {"text": `${items.items[int]}`, "response": `${selected}`}])
        console.log(answers)
      }

      return (
        <div className="Inventory">
            <h3>{items.inventory}</h3>
            {items.items ? (
                <div>
                    <p>{items.items[int]}</p>
                    <form onSubmit={handleSubmit}>
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
                        <input type="submit" value="Next Question" />
                    </form>
                </div>
                
            ) : (
                <p>Loading...</p>
            )}
        </div>
      );
}

export default Inventory