import { Routes, Route, Outlet } from 'react-router-dom'
import Home from '../pages/Home'

const Main = () => {
    return (
        <>
            <main>
                <Outlet />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </>
    )
}

export default Main

