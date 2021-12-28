import React from 'react'
import Home from './Home'
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import g200 from './op.gif'

export default function Navbar() {
    return (
        <Router>
            <div>
                <nav>
                    <div className="navbar">
                        <Link to="/" className="header">ZIPPY</Link>
                        <Link to="/users" className="get">Get Users</Link>
                        <Routes>
                            <Route path="/users" element={<Screen />}>
                            </Route>
                        </Routes>
                    </div>
                </nav>
            </div>
        </Router>

    )
}


function Screen() {
    const [loading, setLoading] = useState(false)
    const [loading1, setLoading1] = useState(true)

    setTimeout(() => {
        setLoading(true)
        setLoading1(false)
    }, 4000)

    return (
        loading1 ? <img src={g200} style={{ position: 'fixed', display: 'flex', marginLeft: '48%', justifyContent: 'center', marginTop: '200px', width: '150px' }} /> :
        loading && <Home style={{ transition: '0.5s' }} />
    )
}
