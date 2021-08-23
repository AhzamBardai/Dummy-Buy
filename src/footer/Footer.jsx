import React from 'react'
import { Link } from 'react-router-dom'

function Footer(props) {
    return (
        <footer style={props.styling ? {position: 'absolute'} : null }>
            <div>
                <p><Link to='/' style={{textDecoration : 'none', color : '#f0e2d4'}} >Home</Link></p>
                <p><Link to='/about' style={{textDecoration : 'none', color : '#f0e2d4'}}>About</Link></p>
            </div>
            <div className='trademark'>
                Design & Dev by Ahzam Bardai
            </div>
            <div>
                <p>
                    <a href='https://www.github.com/AhzamBardai' target="_blank" rel="noopener noreferrer" style={{textDecoration : 'none', color : '#f0e2d4'}}>My Github</a> | 
                    <a href='https://www.linkedin.com/in/ahzam-bardai/' target="_blank" rel="noopener noreferrer" style={{textDecoration : 'none', color : '#f0e2d4'}} > My LinkedIn</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
