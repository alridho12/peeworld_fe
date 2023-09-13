import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import NavbarAuth from '../../components/navbar/NavbarAuth'
import CardBio from '../../components/cardedit/CardBio'
import axios from 'axios'
import { useRouter } from 'next/router'
import CardSkill from '../../components/cardedit/CardSkill'
import Swal from 'sweetalert2';
import PfwskillEdit from '../../components/profileworker/PfwskillEdit'
import CardExperience from '../../components/cardedit/CardExperience'
import PfwexperienceEdit from '../../components/profileworker/PfwexperienceEdit'
import CardPortofolio from '../../components/cardedit/CardPortofolio'
import Pfwportoedit from '../../components/profileworker/Pfwportoedit'


const Editprofileworker = () => {
    const router = useRouter();
    const [login, setLogin] = useState();

    useEffect(() => {
        const login = localStorage.getItem('id')
        setLogin(login)
    }, [])
    const [user, setUser] = useState({
        nama: "",
        jobdesk: "",
        domisili: "",
        tempatkerja: "",
        deskripsidiri: "",
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
        formData.append("nama", user.nama);
        formData.append("jobdesk", user.jobdesk);
        formData.append("domisili", user.domisili);
        formData.append("tempatkerja", user.tempatkerja);
        formData.append("deskripsidiri", user.deskripsidiri);
        if (imageFile) {
            formData.append('photo_profile', imageFile);
        }
        axios
            .put(`https://peeworld-be.vercel.app/users/${router.query.id}`, formData, {
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
                        <CardBio setUser={setUser} />
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
                                    <label id="lbp1" htmlFor="namalengkap">
                                        Nama lengkap
                                    </label>
                                    <br />
                                    <input
                                        style={{ width: 608, height: 40 }}
                                        type="text"
                                        id="namalengkap"
                                        name="nama"
                                        value={user.nama}
                                        onChange={handleChange}
                                        placeholder="Masukkan nama lengkap"
                                    />
                                </div>
                                <div className="mt-3 mb-4">
                                    <label id="lbp2" htmlFor="jobdesk">
                                        Job desk
                                    </label>
                                    <br />
                                    <input
                                        style={{ width: 608, height: 40 }}
                                        type="text"
                                        id="jobdesk"
                                        name="jobdesk"
                                        value={user.jobdesk}
                                        onChange={handleChange}
                                        placeholder="Masukkan job desk"
                                    />
                                </div>
                                <div className="mt-3 mb-4">
                                    <label id="lbp3" htmlFor="domisili">
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
                                        placeholder="Masukkan domisili"
                                    />
                                </div>
                                <div className="mt-3 mb-4">
                                    <label id="lbp4" htmlFor="tempatkerja">
                                        Tempat kerja
                                    </label>
                                    <br />
                                    <input
                                        style={{ width: 608, height: 40 }}
                                        type="text"
                                        id="tempatkerja"
                                        name="tempatkerja"
                                        value={user.tempatkerja}
                                        onChange={handleChange}
                                        placeholder="Masukkan tempat kerja"
                                    />
                                </div>
                                <div className="mt-3">
                                    <label id="lbp5" htmlFor="deskripsi">
                                        Deskripsi
                                    </label>
                                    <br />
                                    <textarea
                                        style={{ width: 608, height: 240 }}
                                        type="text"
                                        id="deskripsi"
                                        name="deskripsidiri"
                                        placeholder="Tuliskan deskripsi dengan singkat"
                                        value={user.deskripsidiri}
                                        onChange={handleChange}
                                    />
                                </div>
                                <hr />
                            </form>
                        </div>
                        <div
                            className="mt-5"
                            style={{
                                padding: 20,
                                maxWidth: "100%",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                                borderRadius: 10,
                                backgroundColor: "white",
                                width: "fit-content"
                            }}
                        >
                            <p style={{ fontSize: 22, fontWeight: 600 }}>Skill</p>
                            <hr />
                            <PfwskillEdit />
                            <CardSkill />
                        </div>
                        <div
                            className="mt-5"
                            style={{
                                padding: 20,
                                maxWidth: "100%",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                                borderRadius: 10,
                                backgroundColor: "white",
                                width: "fit-content"
                            }}
                        >
                            <p style={{ fontSize: 22, fontWeight: 600 }}>Pengalaman Kerja</p>
                            <hr />
                            <PfwexperienceEdit />
                            <CardExperience />
                        </div>
                        <div
                            className="mt-5"
                            style={{
                                padding: 20,
                                maxWidth: "100%",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                                borderRadius: 10,
                                backgroundColor: "white",
                                width: "fit-content"
                            }}
                        >
                            <p style={{ fontSize: 22, fontWeight: 600 }}>Portfolio</p>
                            <hr />
                            <Pfwportoedit />
                            <CardPortofolio />
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

export default Editprofileworker