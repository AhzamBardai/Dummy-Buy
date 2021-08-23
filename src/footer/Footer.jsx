import React from 'react'
import { Link } from 'react-router-dom'
import git from '../git-logo.svg'
import linkedin from '../linkedin-logo.svg'

function Footer(props) {
    return (
        <footer style={props.styling ? {position: 'absolute'} : null }>
            {/* <div>
                <p><Link to='/' style={{textDecoration : 'none', color : '#f0e2d4'}} >Home</Link></p>
                <p><Link to='/about' style={{textDecoration : 'none', color : '#f0e2d4'}}>About</Link></p>
            </div> */}
            <p className='trademark'>
                Design & Dev by Ahzam Bardai        
                <span>
                    <a href='https://www.github.com/AhzamBardai' target="_blank" rel="noopener noreferrer" style={{textDecoration : 'none', color : '#f0e2d4'}}><img alt='github' src={git} /> </a>
                    <a href='https://www.linkedin.com/in/ahzam-bardai/' target="_blank" rel="noopener noreferrer" style={{textDecoration : 'none', color : '#f0e2d4'}} > <img alt='linkedin' src={linkedin} /> </a>
                </span>
            </p>
        </footer>
    )
}

export default Footer
