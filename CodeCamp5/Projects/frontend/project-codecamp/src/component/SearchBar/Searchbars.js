import React, { useState } from 'react'
import { Layout, List, Typography, Divider, Col, Row, Button, Input } from 'antd';

const { input } = Input

function Searchbars() {

    const [term, setTerm] = useState("")

    const onInputChange = event => {
        setTerm({ term: event.target.value })
    }

    // Method will callback from parent component
    const onFormSubmit = event => {
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="input search text" onChange={onInputChange} value={term} />
            </form>

        </div>
    )
}

export default Searchbars
