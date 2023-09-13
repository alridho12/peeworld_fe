import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/image/Group 980 1.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'


const Navbarlogin = () => {
    const router = useRouter();
    const [login, setLogin] = useState();
    const [role, setRole] = useState();

    useEffect(() => {
        const login = localStorage.getItem('id')
        const userRole = localStorage.getItem('role');
        setRole(userRole);
        setLogin(login)
    }, [])
    const handleLogout = () => {
        localStorage.clear();
        alert('Log Out Sukses')
        router.push('/auth/login');
    };
    return (
        <div>
            <div
                style={{
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "white"
                }}
            >
                <nav
                    className="navbar navbar-expand-lg navbar-light container"
                    style={{ paddingTop: 20, paddingBottom: 20 }}
                >
                    <Link href={"/home"}>
                        <Image
                            className="logo mr-4"
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul
                            className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll"
                            style={{ maxHeight: 100 }}
                        ></ul>
                        <form className="form-inline my-2 my-lg-0 row justify-content-center m-0">
                            <i className="bi bi-bell" id="bell" />
                            <i className="bi bi-envelope" id="envelope" />
                            {role === 'worker' ? (
                                <Link href={`/profile/${login}`}>
                                    <i className="bi bi-person-circle" id="profile" />
                                </Link>
                            ) : role === 'recruiter' ? (
                                <Link href={`/profilerecruiter/${login}`}>
                                    <i className="bi bi-person-circle" id="profile" />
                                </Link>
                            ) : (
                                <></>
                            )}
                            <button type="button" onClick={handleLogout} className="btn" style={{backgroundColor: "#5E50A1", fontWeight:400,color:"white"}}>
                                Logout
                            </button>
                        </form>
                    </div>
                </nav>
            </div>

            <style jsx>{`
            

            #bell,
            #envelope,
            #profile {
                font-size: 24px;
                margin-right: 24px;
                color: #8E8E93;
            }
            `}
            </style>
        </div>
    )
}

export default Navbarlogin