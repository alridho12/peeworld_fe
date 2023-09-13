import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import pinloc from '../../assets/image/map-pin (4) 1.png'
import Image from 'next/image';
import lois from '../../assets/image/profile.png'

const Pfwbio = () => {
    const router = useRouter();
    const [login, setLogin] = useState();
    useEffect(() => {
        const login = localStorage.getItem('id')
        setLogin(login)
    }, []);
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        if (router.isReady) {
            axios
                .get(`https://peeworld-be.vercel.app/users/${router.query.id}`)
                .then((res) => {
                    setProfiles(res.data.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [router.isReady,router.query.id]);

    return (
        <div>
            {profiles?.map((user_worker,index) => (
                <div key={index}>
                    <div className="d-flex justify-content-center mb-4">
                        <Image
                            src={user_worker.photo_profile ? user_worker.photo_profile : lois}
                            width={150}
                            height={150}
                            style={{ borderRadius: 100 }}
                            alt=""
                        />
                    </div>
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
                    <p
                        style={{
                            color: "#9EA0A5",
                            fontSize: 14,
                            fontWeight: 400,
                            lineHeight: "24px",
                            marginBottom: 100
                        }}
                    >
                        {user_worker.deskripsidiri ? user_worker.deskripsidiri : "Tentang anda"}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Pfwbio