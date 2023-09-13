import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Pfwporto = () => {
    const router = useRouter();
    const [login, setLogin] = useState();
    useEffect(() => {
        const login = localStorage.getItem('id')
        setLogin(login)
    }, []);
    const [porto, setPorto] = useState([]);
    useEffect(() => {
        if (router.isReady) {
            axios
                .get(`https://peeworld-be.vercel.app/portofolio/worker/${router.query.id}`)
                .then((res) => {
                    setPorto(res.data.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [router.isReady,router.query.id])
    return (
        <div>
            <div className="row m-0 mb-5">
                {porto?.map((portofolio,index) => (
                    <div key={index} className=" col-md-4 justify-content-center">
                        <Link href={portofolio.link_repository} >
                            <Image
                                width={170}
                                height={125}
                                src={portofolio.photo_porto}
                                alt=""
                            />
                        </Link>
                        <p id="tp">{portofolio.nama_aplikasi}</p>
                    </div>
                ))}
            </div>
            <style jsx>{`
                #shp {
                background-color: #5E50A1;
                height: 411px;
                position: relative;
                z-index: -1;
                }

                #tp {
                text-align: center; 
                font-size: 14px; 
                font-weight: 400; 
                }

                @media only screen and (max-width: 600px) {
                #ff {
                    font-size: 9px;
                }

                footer {
                    padding: 10px;
                }

                #tp {
                    text-align: left;
                }
                }
            `}
            </style>
        </div>
    )
}

export default Pfwporto