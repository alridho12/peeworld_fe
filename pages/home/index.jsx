import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import lois from '../../assets/image/profile.png'
import pinloc from '../../assets/image/map-pin (4) 1.png'
import Image from 'next/image'
import NavbarAuth from '../../components/navbar/NavbarAuth'
import axios from 'axios'
import Link from 'next/link'
import Pagination from '../../components/pagination/Paginition'
import Head from 'next/head'
// import $ from 'jquery';
// import { Pagination } from 'react-bootstrap'

const Home = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);
    const [worker, setWorker] = useState([]);
    useEffect(() => {
        $('.dropdown-toggle').dropdown();
      }, []);
    useEffect(() => {
        axios
            .get(`https://peeworld-be.vercel.app/users`)
            .then((res) => {
                setWorker(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = worker.slice(firstPostIndex, lastPostIndex);

    return (
        <div>
            <NavbarAuth />
            <div style={{ backgroundColor: "#5E50A1", padding: 20 }}>
                <h3 className="container" style={{ color: "white", fontWeight: 700 }}>
                    Top jobs
                </h3>
            </div>
            <section className="container mt-5 ">
                <div
                    className="input-group d-flex align-items-center"
                    style={{
                        padding: 10,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                        borderRadius: 5
                    }}
                >
                    <input
                        type="text"
                        className="form-control"
                        style={{ height: 50, border: "transparent", borderRight: "1px solid" }}
                        placeholder="search for any programmer"
                        aria-label="Recipient's username with two button addons"
                        aria-describedby="button-addon4"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="input-group-append" id="button-addon4">
                        <div className="input-group">
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-secondary dropdown-toggle"
                                    style={{ border: "transparent", color: "#9EA0A5" }}
                                    type="button"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Kategori
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                        Sortir berdasarkan nama
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Sortir berdasarkan skill
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Sortir berdasarkan lokasi
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Sortir berdasarkan freelance
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Sortir berdasarkan fulltime
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            style={{
                                backgroundColor: "#5E50A1",
                                color: "white",
                                borderRadius: 5,
                                width: 110
                            }}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </section>
            <section className="container mt-5">
                {currentPosts.filter((item) => {
                    return search.toLowerCase() === '' ? item : item.jobdesk?.toLowerCase().includes(search);
                }).map((user_worker,index) => (
                    <div key={index}
                        className="row m-0 mb-2"
                        style={{ padding: 20, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                    >
                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                        <Image
                            src={user_worker.photo_profile ? user_worker.photo_profile : lois}
                            width={150}
                            height={150}
                            style={{ borderRadius: 100 }}
                            alt=""
                        />
                        </div>
                        <div className="col-md-6" id="pro">
                            <p style={{ color: "#1F2A36", fontSize: 22 }} className="mb-2">
                                {user_worker.nama}
                            </p>
                            <p
                                style={{ fontSize: 14, fontWeight: 400, color: "#9EA0A5" }}
                                className="mb-0"
                            >
                                {user_worker.jobdesk ? user_worker.jobdesk:"Jobdesk" }
                            </p>
                            <div className="row d-flex align-items-center m-0" id="loc">
                                <Image
                                    src={pinloc}
                                    alt=""
                                    style={{ width: 16, height: 16, marginRight: 5 }}
                                />
                                <p style={{ marginTop: 13, color: "#9EA0A5" }}>{user_worker.domisili ? user_worker.domisili:"Domisili"}</p>
                            </div>
                            <div className="row m-0">
                                {user_worker.skills.map((skill, index) => (
                                    <p
                                        key={index}
                                        style={{
                                            padding: "5px 15px 5px 15px",
                                            backgroundColor: "rgba(251, 176, 23, 0.60 )",
                                            border: "1px solid #FBB017",
                                            borderRadius: 4,
                                            color: "white",
                                            marginRight: 5
                                        }}
                                    >
                                        {skill ? skill :"Skill"}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <Link href={`profilehire/${user_worker.worker_id}`}>
                                <button
                                    style={{
                                        padding: 10,
                                        backgroundColor: "#5E50A1",
                                        border: "transparent",
                                        color: "white",
                                        borderRadius: 5
                                    }}
                                >
                                    Lihat Profile
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}

            </section>
            <section className="container mt-5 d-flex justify-content-center">
                <Pagination
                    totalPosts={worker.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />

            </section>
            <Footer />
            <style jsx>{`
                @media only screen and (max-width: 600px) {
                    .pagination {
                        display: none;
                    }
                    
                    #ff {
                        font-size: 9px;
                    }
        
                    footer {
                        padding: 10px;
                    }
        
                    #pro {
                        text-align: center;
        
                    }
        
                    #loc {
                        display: flex;
                        justify-content: center;
                    }

                    
                }
            `}
            </style>


        </div>
    )
}

export default Home