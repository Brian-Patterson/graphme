import React, { useState } from 'react'
import Inventory from '../../pages/Inventory'

export default function ScaledResponses(props) {
    const [inventory, setInventory] = useState([])
    const [answers, setAnswers] = useState([])

    const getResults = () => {
        Inventory.GetResults(inventory, answers)
        .then((response) => props.getResults(response))
        .catch(error => console.log('error', error))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getResults()
    }

  return (
    <form>
    <input 
        type='radio'
        id="strAgr"
        value="strongly agree"
        name='scaled-response'
        required
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
  )
}
