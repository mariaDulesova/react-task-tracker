import React from 'react'
import PropTypes from 'prop-types' //rende il codice piu' robust in quanto definisce il tipo della props
import Button from './Button'


export const Header = ({title}) => {
    const onClick =() => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

//How to use props
Header.defaultProps ={
    title: 'Task Tracker'
}
Header.propTypes ={
    title: PropTypes.string.isRequired,
}

//Example for CSS
// const headingStyle ={
//     color:'red',
//     backgroundColor: 'black',
// }
// Nel tag <h1 style={headingStyle}, usato per lo styling dinamico

export default Header
