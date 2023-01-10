import React, {useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router'
import { useNavigate } from 'react-router-dom'
import ScaledResponses from '../components/forms/ScaledResponses'


const Inventory = ({onScore}) => {
    const [items, setItems] = useState({})
    const [int, setInt] = useState(0)
    const [answers, setAnswers] = useState([])
    const [totalAnswers, setTotalAnswers] = useState({answers})

    const {inventory} = useParams()
    let navigate = useNavigate()

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
        getItems()}, []);

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
        setAnswers([...answers, {"text": `${items.items[int]}`, "response": `${selected}`}])
        setTotalAnswers({"inventories": [`${items.inventory}`], "facts": [[...answers, {"text": `${items.items[int]}`, "response": `${selected}`}]]})
        if(int === items.items.length){
            setAnswers([...answers, {"text": `${items.items[int]}`, "response": `${selected}`}])
            setTotalAnswers({"inventories": [`${items.inventory}`], "facts": [answers]})
            onScore(totalAnswers)
            
        }
    }

    const finalClick = () => {
        onScore(totalAnswers)
        navigate('/results')
    }
    
        console.log(totalAnswers)
    
    {if(int === items.items?.length){
        return (
            <>
            <button onClick={finalClick}>GET GRAPHTED</button>
            </>
        )} else {
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
                            required
                        />
                        <label htmlFor="strArg">Strongly Agree</label>
                        <input 
                            type='radio'
                            id='agr'
                            value='agree'
                            name='scaled-response'
                        />
                        <label htmlFor="Agr">Agree</label>
                        <input 
                            type='radio'
                            id='sliAgr'
                            value='slightly agree'
                            name='scaled-response'
                        />
                        <label htmlFor='sliAgr'>Slightly Agree</label>
                        <input 
                            type='radio'
                            id='neut'
                            value='neutral'
                            name='scaled-response'
                        />
                        <label htmlFor='neut'>Neutral</label>
                        <input 
                            type='radio'
                            id='sliDisa'
                            value='slightly disagree'
                            name='scaled-response'
                        />
                        <label htmlFor='sliDisa'>Slightly Disagree</label>
                        <input 
                            type='radio'
                            id='disa'
                            value='disagree'
                            name='scaled-response'
                        />
                        <label htmlFor='disa'>Disagree</label>
                        <input 
                            type='radio'
                            id='strDisa'
                            value='strongly disagree'
                            name='scaled-response'
                        />
                        <label htmlFor='strDisa'>Strongly Disagree</label> 
                        <input type="submit" value="Next Question" name='scaled-response'/>
                    </form>
                </div>
                
            ) : (
                <p>Loading...</p>
            )}
        </div>
      );
    }}}


export default Inventory