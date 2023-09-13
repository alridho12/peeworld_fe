import Head from 'next/head'
import React, { useState } from 'react'
import main from '../../assets/image/true-agency-o4UhdLv5jbQ-unsplash 1.jpg'
import logo from '../../assets/image/Group 978.png'
import miniLogo from '../../assets/image/Group 980 1.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import Swal from 'sweetalert2'

const Login = () => {
    const router = useRouter();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("https://peeworld-be.vercel.app/users/login", loginData)
            .then((res) => {
                const { data } = res.data;
                alert("Login Sukses");
                localStorage.setItem("token", data.token);
                localStorage.setItem("id", data.worker_id);
                localStorage.setItem("role", data.role)
                router.push("/landingpage");
            })
            .catch((err) => {
                console.log(err.response);
                alert("Email/Password salah");
            });
    };


    //rekruiter
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleChangeRecruiter = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const handleLoginRecruiter = (e) => {
        e.preventDefault();
        axios.post("https://peeworld-be.vercel.app/recruiter/login", login)
            .then((res) => {
                const { data } = res.data; 
                localStorage.setItem("token", data.token);
                localStorage.setItem("id", data.recruiter_id);
                localStorage.setItem("role", data.role);
                Swal.fire({
                    title: res.data.message,
                    showConfirmButton: false,
                    icon: 'success',
                    target: '#custom-target',
                    timer: 2000,
                    timerProgressBar: true,
                    customClass: {
                        container: 'position-absolute',
                    },
                    toast: true,
                    position: 'bottom-right',
                });
                router.push("/landingpage");
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    title: "login failed",
                    showConfirmButton: false,
                    icon: 'error',
                    target: '#custom-target',
                    timer: 2000,
                    timerProgressBar: true,
                    customClass: {
                        container: 'position-absolute',
                    },
                    toast: true,
                    position: 'bottom-right',
                });
            });
    };

    return (
        <div>
            <main>
                <div
                    className="row"
                    style={{ marginTop: "3%", marginLeft: "4.5%", marginRight: "4.5%" }}
                >
                    <div
                        className="col-md-5 m-0 p-0"
                        id="main-container"
                        style={{
                            backgroundColor: "#5E50A170",
                            borderRadius: 10,
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <div id="logo-container">
                            <Image src={logo} alt="logo" />
                        </div>
                        <div id="text-container">
                            <p style={{ color: "white", fontSize: 44, fontWeight: 700 }}>
                                Temukan developer <br /> berbakat &amp; terbaik
                                <br /> di berbagai bidang <br /> keahlian.
                            </p>
                        </div>
                        <Image
                            id="img1"
                            className=""
                            src={main}
                            alt="main"
                            style={{
                                position: 'relative',
                                zIndex: -2,
                                width: "100%",
                                height: 862,
                                borderRadius: 10
                            }}
                        />
                    </div>
                    <div
                        className="col-md-7 m-0 d-flex flex-column justify-content-center align-items-center"
                        id="sub-container"
                    >
                        <ul
                            className="nav nav-pills d-flex flex-column align-items-center "
                            id="pills-tab"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="pills-home-tab"
                                    data-toggle="pill"
                                    data-target="#pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                >
                                    Masuk Sebagai Pekerja
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pills-profile-tab"
                                    data-toggle="pill"
                                    data-target="#pills-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                >
                                    Masuk Sebagai Perekrut
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="pills-home"
                                role="tabpanel"
                                aria-labelledby="pills-home-tab"
                            >
                                <form
                                    onSubmit={handleLogin}
                                    id="frl"
                                    className=" ml-5 mr-5 d-flex flex-column align-items-center"
                                >
                                    <div className=" mb-4">
                                        <Image
                                            src={miniLogo}
                                            className="mb-3"
                                            style={{ height: 30 }}
                                            alt=""
                                            id="mini-logo"
                                        />
                                        <p style={{ fontSize: 35, fontWeight: 600 }}>Halo, Pewpeople</p>
                                        <p style={{ fontSize: 16, fontWeight: 400, color: "#46505C" }}>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porr{" "}
                                            <br /> sed, odit, animi beatae atque,
                                        </p>
                                    </div>
                                    <div>
                                        <label id="lbe" htmlFor="email">
                                            Email
                                        </label>
                                        <br />
                                        <input
                                            style={{ width: 426, height: 40 }}
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="example@gmail.com"
                                            value={loginData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mt-3 mb-4">
                                        <label id="lbp" htmlFor="password">
                                            Password
                                        </label>
                                        <br />
                                        <input
                                            style={{ width: 426, height: 40 }}
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="password"
                                            value={loginData.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <a href="forgotPassword.html" id="fp" className="mt-4">
                                        Lupa kata sandi?
                                    </a>
                                    <button type="submit" className="mt-3 btn btn-warning" id="brl">
                                        Masuk
                                    </button>
                                    <p className="mt-3">
                                        Anda belum punya akun?{" "}
                                        <Link href="/auth/register" style={{ color: "#e0a800" }}>
                                            Daftar disini
                                        </Link>
                                    </p>
                                </form>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-profile"
                                role="tabpanel"
                                aria-labelledby="pills-profile-tab"
                            >
                                <form
                                    onSubmit={handleLoginRecruiter}
                                    id="frl"
                                    className=" ml-5 mr-5 d-flex flex-column align-items-center"
                                >
                                    <div className=" mb-4">
                                        <Image
                                            src={miniLogo}
                                            className="mb-3"
                                            style={{ height: 30 }}
                                            alt=""
                                            id="mini-logo"
                                        />
                                        <p style={{ fontSize: 35, fontWeight: 600 }}>Halo, Pewpeople</p>
                                        <p style={{ fontSize: 16, fontWeight: 400, color: "#46505C" }}>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porr{" "}
                                            <br /> sed, odit, animi beatae atque,
                                        </p>
                                    </div>
                                    <div>
                                        <label id="lbe" htmlFor="email">
                                            Email
                                        </label>
                                        <br />
                                        <input
                                            style={{ width: 426, height: 40 }}
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="example@gmail.com"
                                            value={login.email}
                                            onChange={handleChangeRecruiter}
                                        />
                                    </div>
                                    <div className="mt-3 mb-4">
                                        <label id="lbp" htmlFor="password">
                                            Password
                                        </label>
                                        <br />
                                        <input
                                            style={{ width: 426, height: 40 }}
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="password"
                                            value={login.password}
                                            onChange={handleChangeRecruiter}
                                        />
                                    </div>
                                    <a href="forgotPassword.html" id="fp" className="mt-4">
                                        Lupa kata sandi?
                                    </a>
                                    <button type="submit" className="mt-3 btn btn-warning" id="brl">
                                        Masuk
                                    </button>
                                    <p className="mt-3">
                                        Anda belum punya akun?{" "}
                                        <Link href="/auth/register" style={{ color: "#e0a800" }}>
                                            Daftar disini
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <style jsx>{`
        
            #logo-container {
            position: absolute;
            margin-top: 25px;
            margin-left: 25px;
            }

            #text-container {
            position: absolute;
            margin-top: 37%;
            margin-left: 19.5%;
            }

            #lbe,
            #lbp {
            color: #9EA0A5;
            }

            #email,
            #password {
                max-width: 98%;
                border: 2px solid #8692A6;
                border-radius: 5px;
            }

            #email,
            ::placeholder {
                color: #9EA0A5;
            }

            #fp {
                margin-left: 294px;
                color: black;
            }

            #brl {
                width: 426px;
                height: 40px;
                border-radius: 5px;
                color: white;
                max-width: 100%;

            }

            #frl {
                background-color: #fff;
                width: 500px;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            #pills-tab {
                position: absolute;
                top: 546px;
                left: -570px;
            }

            .nav-pills .nav-link {
                color: #e0e0e0;
                font-weight: 500;
                width: 388px;
                font-size: 20px;
            }

            .nav-pills .nav-link.active {
                background-color: #e0e0e0;
                color: #5E50A170;
            }

            @media only screen and (max-width: 600px) {
                #main-container {
                    display: none;
                }

                #pills-tab {
                    position: static;
                }

                #sub-container {
                    transform: translate(62%, 60%);
                    max-width: 70%;
                    max-height: 70%;
                    position: absolute;

                }

                .nav-pills .nav-link {
                    width: 496px;
                }

                .nav-pills .nav-link.active {
                    background-color: #ffc107;
                    color: white;
                }
            }
                `}</style>
        </div>
    )
}

export default Login