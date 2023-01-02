import { Routes, Route, Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import Inventory from '../pages/Inventory'

const Main = () => {
    return (
        <>
            <main>
                <Outlet />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/items/:inventory" element={<Inventory />} />
                </Routes>
            </main>
        </>
    )
}

export default Main

