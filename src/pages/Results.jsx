import React, {useState, useEffect} from 'react'


function Results(score) {
    const [answers, setAnswers] = useState([])
    const [inventory, setInventory] = useState([])

    console.log(score)

    const getScores = async () => {
        try{
            const response = await fetch(`/results/${inventory}/${answers}`)
            const finalScores = await response.json()
            setAnswers(finalScores)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect (() => {
        getScores()}, [])

  return (
    <div>
        <h2>Results: </h2>
    </div>
  )
}

export default Results
