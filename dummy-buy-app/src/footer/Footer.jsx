import React from 'react'

function Footer(props) {
    return (
        <footer style={props.styling ? {position: 'absolute'} : null }>
            <div>
                <p>Home</p>
                <p>About</p>
                <p>Github | LinkedIn</p>
            </div>
            <div className='trademark'>
                Design & Dev by Ahzam Bardai
            </div>
            <div>
                <p className='scrollup'>Scroll Up</p>
            </div>
        </footer>
    )
}

export default Footer
