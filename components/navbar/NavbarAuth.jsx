import React, { useEffect, useState } from 'react'
import Navbarlogin from './Navbarlogin';
import Navbar from './Navbar';

const NavbarAuth = () => {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        const id = localStorage.getItem('id');
        setLogin(id !== null);
    }, []); 

    if (login) {
        return <Navbarlogin />;
    }

    return <Navbar />;
};

export default NavbarAuth