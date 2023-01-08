import React, {useState, useEffect} from 'react'


function Results(score) {
    const [answers, setAnswers] = useState([score.score.facts[0]])
    const [inventory, setInventory] = useState([score.score.inventories[0]])

    console.log(score)
    console.log(answers)
    console.log(inventory)

    const getScores = async () => {
        try{
            const response = await fetch(`/results`, {
                method: "POST",
                body: JSON.stringify({inventory, answers}),
                headers: {"Content-Type": "application/json"}
            })
            const finalScores = await response.json()
            setAnswers(finalScores)
            console.log(answers)
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
