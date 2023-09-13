import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import NavbarAuth from '../../components/navbar/NavbarAuth'
import axios from 'axios'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2';
import CardBioRecruiter from '../../components/cardedit/CardBioRecruiter'


const Editprofilerecruiter = () => {
    const router = useRouter();
    const [login, setLogin] = useState();

    useEffect(() => {
        const login = localStorage.getItem('id')
        setLogin(login)
    }, [])
    const [user, setUser] = useState({
        email_perusahaan:"",
        nama_perusahaan:"",
        jabatan:"",
        handphone:"",
        deskripsi_perusahaan:"",
        domisili:""
    });

    const handleChange = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };



    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const handleUpdateBio = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email_perusahaan", user.email_perusahaan);
        formData.append("nama_perusahaan", user.nama_perusahaan);
        formData.append("jabatan", user.jabatan);
        formData.append("handphone", user.handphone);
        formData.append("deskripsi_perusahaan", user.deskripsi_perusahaan);
        formData.append("domisili", user.domisili);
        if (imageFile) {
            formData.append('photo_profile', imageFile);
        }
        axios
            .put(`https://peeworld-be.vercel.app/recruiter/${router.query.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then((res) => {
                console.log(res);
                Swal.fire({
                    icon: 'Success',
                    title: 'Profile updated',
                    text: 'Profile has been saved',
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
    };

    return (
        <div>
            <NavbarAuth />
            <div id="shp">

            </div>
            <section
                className="container mb-5"
                style={{ position: "relative", marginTop: "-300px" }}
            >
                <div className="row m-0">
                    <div className="col-md-4">
                        <CardBioRecruiter setUser={setUser} />
                        <label id="lbp1" htmlFor="changepicture" style={{
                            position: "absolute",
                            top: 166,
                            left: 129,
                        }}>
                            Change photo
                        </label>
                        <input
                            style={{ width: 608, height: 40, display: "none" }}
                            type="file"
                            id="changepicture"
                            onChange={handleImageChange}
                            placeholder="Masukkan nama lengkap"
                        />
                        <div
                            className="d-flex flex-column container p-0 mb-5"
                            style={{ width: "fit-content", position: "relative", maxWidth: "100%" }}
                        >
                            <button
                                className="mt-3"
                                onClick={handleUpdateBio}
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    maxWidth: "100%",
                                    width: 336,
                                    height: 50,
                                    border: "transparent",
                                    borderRadius: 5,
                                    backgroundColor: "#5E50A1",
                                    color: "white",
                                }}
                            >
                                Simpan
                            </button>
                            <button
                                className="mt-3"
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    maxWidth: "100%",
                                    width: 336,
                                    height: 50,
                                    border: "#5E50A1 1px solid",
                                    borderRadius: 5,
                                    backgroundColor: "transparent",
                                    color: "#5E50A1"
                                }}
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                    <div className="col-md-7 container">
                        <div
                            style={{
                                padding: 20,
                                maxWidth: "100%",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                                borderRadius: 10,
                                backgroundColor: "white",
                                width: "fit-content"
                            }}
                        >
                            <p style={{ fontSize: 22, fontWeight: 600 }}>Data diri</p>
                            <hr />
                            <form className=" m-0">
                                <div className="mt-3 mb-4">
                                    <label id="lbp1" htmlFor="namaperusahaan">
                                        Nama perusahaan
                                    </label>
                                    <br />
                                    <input
                                        style={{ width: 608, height: 40 }}
                                        type="text"
                                        id="namaperusahaan"
                                        name="nama_perusahaan"
                                        value={user.nama_perusahaan}
                                        onChange={handleChange}
                                        placeholder="Masukkan nama perusahaan"
                                    />
                                </div>
                                <div className="mt-3 mb-4">
                                    <label id="lbp2" htmlFor="email_perusahaan">
                                        Email perusahaan
                                    </label>
                                    <br />
                                    <input
                                        style={{ width: 608, height: 40 }}
                                        type="email"
                                        id="email_perusahaan"
                                        name="email_perusahaan"
                                        value={user.email_perusahaan}
                                        onChange={handleChange}
                                        placeholder="Masukkan email perusahaan"
                                    />
                                </div>
                                <div className="mt-3 mb-4">
                                    <label id="lbp3" htmlFor="jabatan">
                                        Jabatan
                                    </label>
                                    <br />
                                    <input
                                        style={{ width: 608, height: 40 }}
                                        type="text"
                                        id="jabatan"
                                        name="jabatan"
                                        value={user.jabatan}
                                        onChange={handleChange}
                                        placeholder="Masukkan Jabatan"
                                    />
                                </div>
                                <div className="mt-3 mb-4">
                                    <label id="lbp4" htmlFor="handphone">
                                        No.Handphone
                                    </label>
                                    <br />
                                    <input
                                        style={{ width: 608, height: 40 }}
                                        type="text"
                                        id="handphone"
                                        name="handphone"
                                        value={user.handphone}
                                        onChange={handleChange}
                                        placeholder="Masukkan nomor handphone"
                                    />
                                </div>
                                <div className="mt-3 mb-4">
                                    <label id="lbp4" htmlFor="domisili">
                                        Domisili
                                    </label>
                                    <br />
                                    <input
                                        style={{ width: 608, height: 40 }}
                                        type="text"
                                        id="domisili"
                                        name="domisili"
                                        value={user.domisili}
                                        onChange={handleChange}
                                        placeholder="Masukkan nomor domisili"
                                    />
                                </div>
                                <div className="mt-3">
                                    <label id="lbp5" htmlFor="deskripsi_perusahaan">
                                        Deskripsi perushaan
                                    </label>
                                    <br />
                                    <textarea
                                        style={{ width: 608, height: 240 }}
                                        type="text"
                                        id="deskripsi_perusahaan"
                                        name="deskripsi_perusahaan"
                                        placeholder="Tuliskan deskripsi perusahaan dengan singkat"
                                        value={user.deskripsi_perusahaan}
                                        onChange={handleChange}
                                    />
                                </div>
                                <hr />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
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
        
                #namaperusahaan,
                #email_perusahaan,
                #jabatan,
                #handphone,
                #domisili,
                #deskripsi_perusahaan,
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

export default Editprofilerecruiter