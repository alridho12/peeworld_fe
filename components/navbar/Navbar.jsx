import React from 'react'
import logo from '../../assets/image/Group 980 1.jpg'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <header
                style={{
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "white"
                }}

            >
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <Image
                        className="logo mr-4"
                        src={logo}
                        alt="logo"
                    />
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
                        <form className="form-inline my-2 my-lg-0 row justify-content-center">
                            <button id="btn-login">
                                <Link
                                    href="/auth/login"
                                    style={{
                                        textDecoration: "none",
                                        color: "#5E50A1",
                                        fontSize: 14,
                                        fontWeight: 700
                                    }}
                                    id="lgn"
                                >
                                    Masuk
                                </Link>
                            </button>
                            <button id="btn-register">
                                <Link
                                    href="/auth/register"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        fontSize: 14,
                                        fontWeight: 700
                                    }}
                                    id="rgs"
                                >
                                    Daftar
                                </Link>
                            </button>
                        </form>
                    </div>
                </nav>
            </header>

            <style jsx>{`
            #btn-login {
                background-color: transparent;
                width: 87px;
                height: 44px;
                margin: 10px;
                border: 1px solid #5E50A1;
                border-radius: 5px;
    
            }
    
            #btn-register {
                background-color: #5E50A1;
                width: 87px;
                height: 44px;
                margin: 10px;
                border: 1px solid #5E50A1;
                border-radius: 5px;
            }
            `}
            </style>
        </div>
    )
}

export default Navbar