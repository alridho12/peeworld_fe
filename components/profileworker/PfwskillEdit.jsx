import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Modaldeleteskill from '../modal/Modaldeleteskill';

const PfwskillEdit = () => {
    const router = useRouter();
    const [login, setLogin] = useState()
    useEffect(() => {
        const login = localStorage.getItem('id')
        setLogin(login)
    }, [])
    const [skill, setSkill] = useState([]);
    useEffect(() => {
        if (router.isReady) {
            axios
                .get(`https://peeworld-be.vercel.app/skills/worker/${router.query.id}`)
                .then((res) => {
                    setSkill(res.data.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [router.isReady,router.query.id]);

    return (
        <div>
            <div className="row m-0">
                {skill?.map((skill_worker,index) => (
                    <div key={index} className='row m-0 mr-2'>
                        <p
                            style={{
                                padding: "5px 15px 5px 15px",
                                backgroundColor: "rgba(251, 176, 23, 0.60 )",
                                border: "1px solid #FBB017",
                                borderRadius: 4,
                                color: "white"
                            }}
                        >
                            {skill_worker.skill_name}
                        </p>
                        <div className=''><Modaldeleteskill skill_worker_id={skill_worker.skill_worker_id} /></div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PfwskillEdit