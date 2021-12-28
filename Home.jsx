import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

export default function Home() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)

    const update = async () => {
        const url = `https://reqres.in/api/users?page=${page}`
        axios.get(url).then((response) => {
            setData(response.data.data)
        })

    }
    useEffect(() => {
        update()
    }, [])

    const handleNextClick = () => {
        setPage(2)
        setPage(2)
        update()
    }
    const handlePreviousClick = () => {
        setPage(1)
        setPage(1)
        update()
    }


    return (
        <>
                <div className="main">
                    {data.map((element) => {
                        return element.email && <div className="main2">
                            <Card first_name={element.first_name} last_name={element.last_name} email={element.email} avatar={element.avatar} />
                        </div>
                    })}
                </div>


            <div className="btn">
                <button type="button" className="btn2" onClick={handlePreviousClick}>&larr; Previous</button>
                <button type="button" className="btn3" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </>
    )
}
