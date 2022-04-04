import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loader from './components/Loader';

function Routes() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        window.scrollTo(0, 0)
    });
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    })

    return (
        <>
            {loading && (
                <div className={`cash-loader ${loading ? 'active' : ''}`}>
                    <Loader />
                </div>
            )}
            <div className={`cash-visible`}>

            </div>
        </>
    )
}

export default Routes;