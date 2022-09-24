import React from 'react'
import { useEffect, useState } from 'react'

export default function NewComment() {
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        JSON.parse(localStorage.getItem('user')) && setLogged(true)
    }, [])

    return (logged ? (
        <>
                <textarea type='text' name='description' className='Input-NewCity flex-center' /* onChange={inputHandler}  */ placeholder="  Leave your comment here"></textarea>
            <button className='button-NewCity flex-center' /* onClick={editCity} */ >Send</button>
        </>
    ) : (
        null
    )
    )
}
