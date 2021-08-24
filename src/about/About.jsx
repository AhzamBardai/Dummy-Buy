import React from 'react'
import Header from '../header/Header'
import git from '../git-logo.svg'
import linkedin from '../linkedin-logo.svg'


function About() {
    return (
        <div>
            <Header />        
            <div className='about'>
                <div>
                    <h1>Thank you for spending your time at Dummy Buy!</h1>
                    <p>I'm a beginner to the world of software and a software engineering student at General Assembly. I appreciate you looking into my projects and hope to hear your review about this project soon. This project was made as an E-commerce website's outline to showcase my learning in React-JS. This project also serves as a checkpoint in my progress, after entering my 3<sup>rd</sup> week diving into React.</p>
                    <p>I am super exited for what comes next and hope to amaze you soon in my next project. I would appreciate it further if go on my 

                        <a href='https://www.linkedin.com/in/ahzam-bardai/' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color: '#4b7d7e', fontWeight:'500'}}> Github </a>

                    for the code or any issues and connect with me on 

                        <a href='https://www.github.com/AhzamBardai' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color: '#457778', fontWeight:'500'}} > LinkedIn.</a></p>

                    <p className='about-name'>~ Ahzam Bardai <br/>Designer & Developer<br/>
                        <span>
                        <a href='https://www.github.com/AhzamBardai' target="_blank" rel="noopener noreferrer" style={{margin:'5px'}}><img alt='github' src={git} /></a>
                        <a href='https://www.linkedin.com/in/ahzam-bardai/' target="_blank" rel="noopener noreferrer" style={{margin:'5px'}}><img alt='linkedin' src={linkedin} /></a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
