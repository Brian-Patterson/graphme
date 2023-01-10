import React, {useState, useEffect} from 'react'


function Results(score) {
    const [answers, setAnswers] = useState([score.score.facts[0]])
    const [inventory, setInventory] = useState([score.score.inventories[0]])
    const [scoreKey, setScoreKey] = useState([])
    const [scoreValue, setScoreValue] = useState([])

    const getScores = async () => {
        try{
            const response = await fetch(`/results`, {
                method: "POST",
                body: JSON.stringify({inventory, answers}),
                headers: {"Content-Type": "application/json"}
            })
            const finalScores = await response.json()
            setAnswers(finalScores)
            setScoreKey(Object.keys(finalScores.scoring.disc))
            setScoreValue(Object.values(finalScores.scoring.disc))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect (() => {
        getScores()}, [])

    console.log(scoreValue)
    
    

  return (
    <div>
        {scoreKey? (
            scoreKey?.map((score, idx) => 
                <p key={idx}>{score}</p>
        )) : <p>Loading...</p>}
        {scoreValue? (
            scoreValue?.map((score, idx) => 
                <p key={idx}>{score.confidence}
                {score.confidence_text}
                {score.quantile}
                {score.score}</p>
        )) : <p>Loading...</p>}
        
        <h2>Results: </h2>
    </div>
  )
}

export default Results
