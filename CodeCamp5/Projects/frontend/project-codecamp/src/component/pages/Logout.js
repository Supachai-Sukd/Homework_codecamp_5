import React from 'react'
import LocalStorageService from '../../services/localStorageService'
import { useEffect } from 'react'



export default function Logout(props) {

    const logout = () => {
        LocalStorageService.removeToken()
        props.setRole("guest")
    }

    useEffect(() => {
        logout()
    }, [])


    return (
        <div style={{ fontSize: "80px", textAlign:"center", color: "orange" }}>
            <h1>Logout Success...</h1>
        </div>
    )
}
