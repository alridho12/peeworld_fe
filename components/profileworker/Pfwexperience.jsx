import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';


const Pfwexperience = () => {
    const router = useRouter();
    const [login, setLogin] = useState();
    useEffect(() => {
        const login = localStorage.getItem('id')
        setLogin(login)
    }, []);
    const [experience, setExperience] = useState([]);
    useEffect(() => {
        if (router.isReady) {
            axios
                .get(`https://peeworld-be.vercel.app/experience/worker/${router.query.id}`)
                .then((res) => {
                    setExperience(res.data.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [router.isReady,router.query.id])

    return (
        <div>
            {experience?.map((pengalaman_kerja,index) => (
                <div key={index}>
                    <p className="m-0" style={{ fontSize: 20, fontWeight: 600 }}>
                        {pengalaman_kerja.posisi}
                    </p>
                    <p
                        className="m-0"
                        style={{ fontSize: 18, fontWeight: 400, color: "#46505C" }}
                    >
                        {pengalaman_kerja.nama_perusahaan}
                    </p>
                    <p
                        className="m-0"
                        style={{ fontSize: 16, fontWeight: 400, color: "#9EA0A5" }}
                    >
                        {format(new Date(pengalaman_kerja.tanggal_mulai), 'yyyy/MM/dd')} - {format(new Date(pengalaman_kerja.tanggal_selesai), 'yyyy/MM/dd')}
                        <span
                            className="ml-3"
                            style={{ fontSize: 16, fontWeight: 400, color: "#9EA0A5" }}
                        >
                            {pengalaman_kerja.lamanya_bulan} months
                        </span>
                    </p>
                    <p className="mt-4">
                        {pengalaman_kerja.deskripsi_kerja}
                    </p>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Pfwexperience