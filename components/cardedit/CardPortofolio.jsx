import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';


const CardPortofolio = () => {
    const [login,setLogin] = useState();
    useEffect(() => {
        const login = localStorage.getItem('id')
        setLogin(login)
    }, []);
    
    const [editPorto,setEditPorto] = useState({
        nama_aplikasi: "",
        link_repository: "",
        worker_id: ""
    })

    const handleChange = (e) => {
        setEditPorto({
            ...editPorto,
            [e.target.name]: e.target.value,
        });
    };

    const [photo,setPhoto] = useState(null);
    const [preview,setPreview] =useState(null);
    const handleUpload = (e) => {
        const img = e.target.files[0]
        setPhoto(img);
        setPreview(URL.createObjectURL(img))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama_aplikasi",editPorto.nama_aplikasi);
        formData.append("link_repository",editPorto.link_repository);
        formData.append("worker_id",editPorto.worker_id);
        if (photo) {
            formData.append('photo_porto',photo);
          }
        axios
        .post("https://peeworld-be.vercel.app/portofolio/addporto",formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then((res) => {
            console.log(res);
            Swal.fire({
                icon: 'Success',
                title: 'Portfolio created',
                text: 'Portfolio has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(function () {
            }, 2000);
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
                    <label id="lbp1" htmlFor="namaaplikasi">
                        Nama aplikasi
                    </label>
                    <br />
                    <input
                        style={{ width: 608, height: 40 }}
                        type="text"
                        id="namalengkap"
                        name="nama_aplikasi"
                        value={editPorto.nama_aplikasi}
                        onChange={handleChange}
                        placeholder="Masukkan nama aplikasi"
                    />
                     <input
                        style={{ width: 608, height: 40 }}
                        type="hidden"
                        id="namalengkap"
                        name="worker_id"
                        value={editPorto.worker_id=login}
                        onChange={handleChange}
                        placeholder="Masukkan nama aplikasi"
                    />
                </div>
                <div className="mt-3 mb-4">
                    <label id="lbp2" htmlFor="repository">
                        Link repository
                    </label>
                    <br />
                    <input
                        style={{ width: 608, height: 40 }}
                        type="text"
                        id="jobdesk"
                        name="link_repository"
                        value={editPorto.link_repository}
                        onChange={handleChange}
                        placeholder="Masukkan link repository"
                    />
                </div>
                <div className="mt-3 mb-4">
                    <label id="lbp3" htmlFor="tipeportofolio">
                        Tipe portofolio
                    </label>
                    <br />
                    <div className="row m-0">
                        <div className="row m-0">
                            <input type="radio" name="tipeportofolio" />
                            <p
                                style={{
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "#9EA0A5",
                                    marginTop: 13,
                                    marginLeft: 3
                                }}
                            >
                                Aplikasi mobile
                            </p>
                        </div>
                        <div className="row m-0 ml-5">
                            <input type="radio" name="tipeportofolio" />
                            <p
                                style={{
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "#9EA0A5",
                                    marginTop: 13,
                                    marginLeft: 3
                                }}
                            >
                                Aplikasi web
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label id="lbp5" htmlFor="deskripsi">
                        Photo
                    </label>
                    <br />
                    <div className='text-center my-3'>{preview ? <Image src={preview} alt="avatar" height={200} width={200} className="m-auto"/> : ''}</div>
                    <input
                        className="form-control-file"
                        type="file"
                        id="deskripsi"
                        name="photo_porto"
                        placeholder="Tuliskan deskripsi dengan singkat"
                        value={editPorto.setPhoto}
                        onChange={handleUpload}
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
                    Tambah portofolio
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

export default CardPortofolio