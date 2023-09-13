import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import lois from '../../assets/image/profile.png'
import pinloc from '../../assets/image/map-pin (4) 1.png'
import { useRouter } from 'next/router';

const CardBioRecruiter = (props) => {
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
                .get(`https://peeworld-be.vercel.app/recruiter/${router.query.id}`)
                .then((res) => {
                    setBio(res.data.data)
                    props.setUser({
                        email_perusahaan: res.data.data[0].email_perusahaan,
                        nama_perusahaan: res.data.data[0].nama_perusahaan,
                        jabatan: res.data.data[0].jabatan,
                        handphone: res.data.data[0].handphone,
                        deskripsi_perusahaan: res.data.data[0].deskripsi_perusahaan,
                        domisili: res.data.data[0].domisili,
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [router.isReady,router.query.id,props])

    return (
        <div>
            {bio?.map((user_recruiter,index) => (
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
                            src={user_recruiter.photo_profile ? user_recruiter.photo_profile : lois}
                            width={150}
                            height={150}
                            style={{ borderRadius: 100 }}
                            alt=""
                        />
                    </div>
                    <div className="m-0">
                        <p style={{ fontSize: 22, fontWeight: 600 }}>{user_recruiter.nama}</p>
                        <p style={{ fontSize: 14, fontWeight: 400 }} className="mb-2">
                            {user_recruiter.jabatan ? user_recruiter.jabatan : "Jobdesk"}
                        </p>
                        <div className="row d-flex align-items-center m-0">
                            <Image
                                src={pinloc}
                                alt=""
                                style={{ width: 16, height: 16, marginRight: 10 }}
                            />
                            <p style={{ marginTop: 13, color: "#9EA0A5" }}>{user_recruiter.domisili ? user_recruiter.domisili : "Domisli"}</p>
                        </div>
                        <p style={{ color: "#9EA0A5", fontSize: 14, fontWeight: 400 }}>
                            {user_recruiter.nama_perusahaan ? user_recruiter.nama_perusahaan : "Tempat kerja"}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardBioRecruiter