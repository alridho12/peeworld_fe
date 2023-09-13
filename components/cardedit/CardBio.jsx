import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import lois from '../../assets/image/profile.png'
import pinloc from '../../assets/image/map-pin (4) 1.png'
import { useRouter } from 'next/router';

const CardBio = (props) => {
    const router = useRouter();
    const [login, setLogin] = useState();
    useEffect(() => {
        const login = localStorage.getItem('id')
        setLogin(login)
    }, [])
    const [bio, setBio] = useState([]);
    useEffect(() => {
        if (router.isReady) {
            axios
                .get(`https://peeworld-be.vercel.app/users/${router.query.id}`)
                .then((res) => {
                    setBio(res.data.data)
                    props.setUser({
                        nama: res.data.data[0].nama,
                        jobdesk: res.data.data[0].jobdesk,
                        domisili: res.data.data[0].domisili,
                        tempatkerja: res.data.data[0].tempatkerja,
                        deskripsidiri: res.data.data[0].deskripsidiri,
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [router.isReady,router.query.id,props])

    return (
        <div>
            {bio.map((user_worker,index) => (
                <div key={index}
                    style={{
                        padding: 20,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                        borderRadius: 10,
                        backgroundColor: "white",
                        height: "fit-content"
                    }}>
                    <div className="d-flex justify-content-center mb-4">
                        <Image
                            src={user_worker.photo_profile ? user_worker.photo_profile : lois}
                            width={150}
                            height={150}
                            style={{ borderRadius: 100 }}
                            alt=""
                        />
                    </div>
                    <div className="m-0">
                        <p style={{ fontSize: 22, fontWeight: 600 }}>{user_worker.nama}</p>
                        <p style={{ fontSize: 14, fontWeight: 400 }} className="mb-2">
                            {user_worker.jobdesk ? user_worker.jobdesk : "Jobdesk"}
                        </p>
                        <div className="row d-flex align-items-center m-0">
                            <Image
                                src={pinloc}
                                alt=""
                                style={{ width: 16, height: 16, marginRight: 10 }}
                            />
                            <p style={{ marginTop: 13, color: "#9EA0A5" }}>{user_worker.domisili ? user_worker.domisili : "Domisli"}</p>
                        </div>
                        <p style={{ color: "#9EA0A5", fontSize: 14, fontWeight: 400 }}>
                            {user_worker.tempatkerja ? user_worker.tempatkerja : "Tempat kerja"}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardBio