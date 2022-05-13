import React from 'react'
import { Link, Outlet } from 'react-router-dom'




function ContactUs() {
    return (
        <div>
            <h1>
                ContactUs
            </h1>
            <ul>
                <li><Link to="programmers">Programmers</Link></li>
                <li><Link to="drivers">Drivers</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default ContactUs