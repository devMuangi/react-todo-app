import React from 'react';
import {Link} from 'react-router-dom';
import DarkTheme, { createTheme } from 'react-dark-theme';


const lightTheme = {
    background: 'white',
    text: 'black',
  }
   
  const darkTheme = {
    background: '#121212',
    text: 'white',
  }
  
  const myTheme = createTheme(darkTheme, lightTheme)

function Header() {
    return (
        <header className='headerStyle' style={headerStyle}  >
            
             <DarkTheme light={lightTheme} dark={darkTheme} />
            <h1 className='todoheader'>Create you todolist !..</h1>
            <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/notes'>Notes</Link> | <Link style={linkStyle} to='/about'>About</Link>
        </header>
    )
}

const headerStyle = {
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}

const linkStyle = {
    color: 'rgb(206, 92, 92)',
    textDecoration:'none',
    margin:'1.5rem',
    fontFamily:'monospace'
}
export default Header;