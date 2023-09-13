import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import lois from '../../assets/image/profile.png'
import mail from '../../assets/image/mail (4).png'
import instagram from '../../assets/image/instagram.png'
import phone from '../../assets/image/phone 1.png'
import linkedin from '../../assets/image/linkedin 1.png'
import Image from 'next/image'
import NavbarAuth from '../../components/navbar/NavbarAuth'
import Link from 'next/link'
import pinloc from '../../assets/image/map-pin (4) 1.png'
import axios from 'axios'
import { useRouter } from 'next/router'

const Profilerecruiter = () => {
  const router = useRouter();
  const [login, setLogin] = useState()
  useEffect(() => {
    const login = localStorage.getItem('id')
    setLogin(login)
  }, [])

  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`https://peeworld-be.vercel.app/recruiter/${router.query.id}`)
        .then((res) => {
          setProfiles(res.data.data[0])
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [router.isReady,router.query.id]);

  return (
    <div>
      <NavbarAuth />
      <section
        className="container mt-5"
      >
        <div className="d-flex justify-content-center"
          id="pd"
        >
          <div id='pc'>
            <div id="shpi" className='d-flex justify-content-center'>
              <Image
                src={profiles.photo_profile ? profiles.photo_profile : lois}
                width={150}
                height={150}
                style={{ borderRadius: 100, position: "relative", marginTop: 130 }}
                alt="" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginTop: 85 }}>

              <p className='mt-3' >{profiles.nama_perusahaan}</p>
              <p>{profiles.jabatan}</p>
              <div className="row d-flex align-items-center m-0">
                <Image
                  src={pinloc}
                  alt=""
                  style={{ width: 16, height: 16, marginRight: 10 }}
                />
                <p style={{ marginTop: 13, color: "#9EA0A5" }}>{profiles.domisili ? profiles.domisili : "alamat"}</p>
              </div>
              <p style={{padding:"0px 5px"}} className='text-center'>{profiles.deskripsi_perusahaan ? profiles.deskripsi_perusahaan : "Deskripsi perusahaan"}</p>
            </div>
            <div className="d-flex justify-content-center mt-3 mb-5" >
              <Link href={`/editprofilerecruiter/${login}`}>
                <button
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    width: 297,
                    height: 50,
                    border: "transparent",
                    borderRadius: 5,
                    backgroundColor: "#5E50A1",
                    color: "white",
                    zIndex: 3,
                    position: "relative"
                  }}
                >
                  Edit profile
                </button>
              </Link>
            </div>
            <div className="m-0 d-flex justify-content-center">
              <div>
                <div className="row d-flex align-items-center m-0">
                  <Image
                    src={mail}
                    alt=""
                    style={{ width: 16, height: 16, marginRight: 10 }}
                  />
                  <p
                    style={{
                      marginTop: 13,
                      color: "#9EA0A5",
                      fontSize: 14,
                      fontWeight: 400
                    }}
                  >
                    {profiles.email_perusahaan ? profiles.email_perusahaan : "emailperusahaan@gmail.com"}
                  </p>
                </div>
                <div className="row d-flex align-items-center m-0">
                  <Image
                    src={instagram}
                    alt=""
                    style={{ width: 16, height: 16, marginRight: 10 }}
                  />
                  <p
                    style={{
                      marginTop: 13,
                      color: "#9EA0A5",
                      fontSize: 14,
                      fontWeight: 400
                    }}
                  >
                    @loist91
                  </p>
                </div>
                <div className="row d-flex align-items-center m-0">
                  <Image
                    src={phone}
                    alt=""
                    style={{ width: 16, height: 16, marginRight: 10 }}
                  />
                  <p
                    style={{
                      marginTop: 13,
                      color: "#9EA0A5",
                      fontSize: 14,
                      fontWeight: 400
                    }}
                  >
                    {profiles.handphone ? profiles.handphone : "08121212xxx"}
                  </p>
                </div>
                <div className="row d-flex align-items-center m-0">
                  <Image
                    src={linkedin}
                    alt=""
                    style={{ width: 16, height: 16, marginRight: 10 }}
                  />
                  <p
                    style={{
                      marginTop: 13,
                      color: "#9EA0A5",
                      fontSize: 14,
                      fontWeight: 400
                    }}
                  >
                    @loistommo91
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Footer />
      <style jsx>{`

         #pd{
          padding: 0px 400px 200px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          background-color: white;
         }

        #shpi {
          background-color: #5E50A1;
          height: 200px;
          width: 1110px;
        }

        #pc{
          // margin-top:150px
        }

        #tp {
          text-align: center; 
          font-size: 14px; 
          font-weight: 400; 
        }

        @media only screen and (max-width: 600px) {
          #ff {
              font-size: 9px;
          }

          #shpi {
            width: 390px;
          }

          #pd{
            padding-left:195px;
            padding-right:195px;
          }

          footer {
              padding: 10px;
          }

          #tp {
              text-align: left;
          }
        }
      `}
      </style>

    </div>
  )
}

export default Profilerecruiter