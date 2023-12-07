import React, { useEffect, useState } from 'react'
import moment from 'moment';


export default function Watch({ UTS, title, remove }) {
    const [state, setState] = useState(moment().utc().add(UTS, 'h'))

    const loadTime = () => {
        setState(moment().utc().add(UTS, 'h'))
    }

    useEffect(loadTime, [])

    useEffect(() => {
        let timeout = window.setInterval(loadTime, 1000)
        return () => clearInterval(timeout)
    }, [state])

    return (
        <li>
            {console.log(new Date().toLocaleTimeString())}
            <div className='watch-title'>{title}</div>
            <div className='time'>{state.format('HH: mm: ss')}</div>
            <button onClick={remove}>X</button>
        </li>
    )
}
