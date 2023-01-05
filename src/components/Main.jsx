import { Routes, Route, Outlet } from 'react-router-dom'
import React, { useState } from "react";
import Home from '../pages/Home'
import Inventory from '../pages/Inventory'
import Results from '../pages/Results'


const Main = () => {

    const [score, setScore] = useState([])

    return (
        <>
            <main>
                <Outlet />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/items/:inventory" element={<Inventory onScore={setScore}/>} />
                    <Route path="/results" element={<Results score={score}/>} />
                </Routes>
            </main>
        </>
    )
}

export default Main

