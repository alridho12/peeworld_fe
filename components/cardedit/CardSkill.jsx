import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';


const CardSkill = () => {
    const [login, setLogin] = useState();
    useEffect(() => {
        const login = localStorage.getItem('id')
        setLogin(login)
    }, []);
    const [editSkill, setEditSkill] = useState({
        skill_name: "",
        worker_id: ""
    });


    const handleChange = (e) => {
        setEditSkill({
            ...editSkill,
            [e.target.name]: e.target.value
        })
        console.log(editSkill);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("https://peeworld-be.vercel.app/skills/addskills", editSkill)
            .then((res) => {
                console.log(res);
                Swal.fire({
                    icon: 'Success',
                    title: 'Skill updated',
                    text: 'Profile has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                setTimeout(function () {
                }, 1000);
                window.location.reload()
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Update Profile Error',
                });
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="row ">
                <div className="col-md-9 col-12">
                    <input
                        style={{ width: 490, height: 40 }}
                        type="text"
                        id="skill"
                        name="skill_name"
                        placeholder="Javascript"
                        value={editSkill.skill_name}
                        onChange={handleChange}
                    />
                    <input
                        style={{ width: 490, height: 40 }}
                        type="hidden"
                        id="skill"
                        name="worker_id"
                        placeholder="Javascript"
                        value={editSkill.worker_id = login}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-3 col-12  d-flex justify-content-md-end justify-content-center mt-2 mt-md-0">
                    <button
                        className="btn btn-warning"
                        type="submit"
                        style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: 700,
                            width: "auto"
                        }}
                    >
                        Simpan
                    </button>
                </div>
            </form>
            <style jsx>{`
             #skill {
                border: 1px solid #E2E5ED;
                border-radius: 5px;
                max-width: 100%;
            }
            `}
            </style>
        </div>
    )
}

export default CardSkill