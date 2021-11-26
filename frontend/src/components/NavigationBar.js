import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavigationBar extends Component {
    render() {
        return (
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/users'>Users</Link></li>
            </ul>
        )
    }
}

export default NavigationBar