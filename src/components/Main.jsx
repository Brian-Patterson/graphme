import { Routes, Route, Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import Inventory from '../pages/Inventory'
import Results from '../pages/Results'

const Main = () => {
    return (
        <>
            <main>
                <Outlet />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/items/:inventory" element={<Inventory />} />
                    <Route path="/results" element={<Results />} />
                </Routes>
            </main>
        </>
    )
}

export default Main

