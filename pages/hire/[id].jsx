import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import NavbarAuth from '../../components/navbar/NavbarAuth'
import axios from 'axios'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2';
import CardHire from '../../components/cardedit/CardHire'

const Hire = () => {
    const router = useRouter();

  // GET Recruiter
//   const [login] = useState(localStorage.getItem('id'));
  const [login, setLogin] = useState([]);
  useEffect(() => {
      const id = localStorage.getItem('id');
      setLogin(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // GET ALL DATA
  const [recruiter, setRecruiter] = useState([]);

  // Profile page
  useEffect(() => {
    if (router.isReady && login) {
      axios
        .get(`https://peeworld-be.vercel.app/recruiter/${login}`)
        .then((response) => {
          setRecruiter(response.data.data[0]);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady,login]);

  // POST OFFERING
  const [user, setUser] = useState({
    offering: '',
    description: '',
    worker_name: '',
    worker_id: '',
    worker_email: '',
    recruiter_id: '',
    company_name: '',
    recruiter_email: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };

  const handleSubmitHire = (e) => {
    e.preventDefault();
    try {
      axios.post('https://peeworld-be.vercel.app/hiring', user).then((res) => {
        if (res.data.statusCode === 201) {
          Swal.fire({
            title: "Your offer message has been sent to this person's email",
            showConfirmButton: false,
            icon: 'success',
            target: '#custom-target',
            timer: 3000,
            timerProgressBar: true,
            customClass: {
              container: 'position-absolute',
            },
            toast: true,
            position: 'bottom-right',
          });
          router.push(`/profilehire/${router.query.id}`);
        }
      });
    } catch (err) {
      console.log(err.message);
    }
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
                        <CardHire setUser={setUser} />
                    </div>
                    <div className="col-md-7 container mt-5 mt-md-0">
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
                            <form onSubmit={handleSubmitHire} className=" m-0">
                                <div className="mt-3 mb-4">
                                    <label id="lbp1" htmlFor="namaperusahaan">
                                        Tujuan pesan
                                    </label>
                                    <br />
                                    <input
                                        required
                                        style={{ width: 608, height: 40 }}
                                        type="text"
                                        id="namaperusahaan"
                                        name="offering"
                                        placeholder="Proyek"
                                        onChange={handleChange}
                                        value={user.offering}
                                    />
                                </div>
                                <div className="mt-3">
                                    <label id="lbp5" htmlFor="deskripsi_perusahaan">
                                        Deskripsi
                                    </label>
                                    <br />
                                    <textarea
                                        required
                                        style={{ width: 608, height: 240 }}
                                        type="text"
                                        id="deskripsi_perusahaan"
                                        name="description"
                                        placeholder="Tuliskan deskripsi/tujuan lebih detail"
                                        onChange={handleChange}
                                        value={user.description}
                                    />
                                </div>
                                <hr />
                                <button
                                    className='btn btn-warning'
                                    type="submit"
                                    style={{
                                        width: 608,
                                        maxWidth: "100%",
                                        height: 40,
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color:'white'
                                    }}
                                >
                                    {recruiter.nama}
                                </button>
                                <input type="hidden" name="worker_id" value={(user.worker_id)} onChange={handleChange} />
                                <input type="hidden" name="worker_name" value={(user.worker_name)} onChange={handleChange} />
                                <input type="hidden" name="worker_email" value={(user.worker_email)} onChange={handleChange} />
                                <input type="hidden" name="recruiter_id" value={(user.recruiter_id = recruiter.recruiter_id)} onChange={handleChange} />
                                <input type="hidden" name="company_name" value={(user.company_name = `${recruiter.nama} at ${recruiter.nama_perusahaan}`)} onChange={handleChange} />
                                <input type="hidden" name="recruiter_email" value={(user.recruiter_email = recruiter.email)} onChange={handleChange} />
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

export default Hire