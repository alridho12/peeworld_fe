import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';


const CardExperience = () => {
    const [login, setLogin] = useState();
    useEffect(() => {
        const login = localStorage.getItem('id')
        setLogin(login)
    }, []);
    const [editExperience, setEditExperience] = useState({
        posisi: "",
        nama_perusahaan: "",
        tanggal_mulai: "",
        tanggal_selesai: "",
        deskripsi_kerja: "",
        worker_id: ""
    });

    const handleChange = (e) =>{
        setEditExperience({
            ...editExperience,
            [e.target.name] : e.target.value
        })
        console.log(editExperience);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios
        .post('https://peeworld-be.vercel.app/experience/addexperience', editExperience)
        .then((res) => {
            console.log(res);
            Swal.fire({
                icon: 'Success',
                title: 'experience updated',
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
            <form onSubmit={handleSubmit} className=" m-0">
                <div className="mt-3 mb-4">
                    <label id="lbp5" htmlFor="posisi">
                        Posisi
                    </label>
                    <br />
                    <input
                        style={{ width: 608, height: 40 }}
                        type="text"
                        id="posisi"
                        name="posisi"
                        placeholder="Web developer"
                        value={editExperience.posisi}
                        onChange={handleChange}
                    />
                    <input
                        style={{ width: 490, height: 40 }}
                        type="hidden"
                        id="skill"
                        name="worker_id"
                        placeholder="Javascript"
                        value={editExperience.worker_id = login}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-3 mb-4">
                    <label id="lbp2" htmlFor="namaperusahaan">
                        Nama perusahaan
                    </label>
                    <br />
                    <input
                        style={{ width: 608, height: 40 }}
                        type="text"
                        id="namaperusahaan"
                        name="nama_perusahaan"
                        placeholder="PT harus bisa"
                        value={editExperience.nama_perusahaan}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-3 mb-4 row ">
                    <div className="col-6">
                        <label id="lbp3" htmlFor="tanggal_mulai">
                            Dari bulan/tahun
                        </label>
                        <br />
                        <input
                            style={{ width: 289, height: 40 }}
                            type="date"
                            id="domisili"
                            name="tanggal_mulai"
                            value={editExperience.tanggal_mulai}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-6">
                        <label id="lbp4" htmlFor="tanggal_selesai">
                            Sampai bulan/tahun
                        </label>
                        <br />
                        <input
                            style={{ width: 289, height: 40 }}
                            type="date"
                            id="tempatkerja"
                            name="tanggal_selesai"
                            value={editExperience.tanggal_selesai}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="mt-3">
                    <label id="lbp5" htmlFor="deskripsi_kerja">
                        Deskripsi
                    </label>
                    <br />
                    <textarea
                        style={{ width: 608, height: 240 }}
                        type="text"
                        id="deskripsi"
                        name="deskripsi_kerja"
                        placeholder="Tuliskan deskripsi pekerjaan dengan singkat"
                        value={editExperience.deskripsi_kerja}
                        onChange={handleChange}
                    />
                </div>
                <hr />
                <button
                    type="submit"
                    style={{
                        width: 608,
                        maxWidth: "100%",
                        height: 40,
                        backgroundColor: "transparent",
                        border: "#FBB017 2px solid",
                        color: "#FBB017",
                        fontSize: 16,
                        fontWeight: 700
                    }}
                >
                    Tambah pengalaman kerja
                </button>
            </form>
            <style jsx>{`
                #shp {
                    background-color: #5E50A1;
                    height: 411px;
                    position: relative;
                    z-index: -1;
                }
        
                #lbp1,
                #lbp2,
                #lbp3,
                #lbp4,
                #lbp5 {
                    color: #9EA0A5;
                }
        
                #namalengkap,
                #jobdesk,
                #domisili,
                #tempatkerja,
                #deskripsi,
                #skill,
                #namaperusahaan,
                #posisi {
                    border: 1px solid #E2E5ED;
                    border-radius: 5px;
                    max-width: 100%;
                }
            `}
            </style>
        </div>
    )
}

export default CardExperience