import React from 'react';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return <footer> <p>&copy; {year} </p></footer>
}

export default Footer;