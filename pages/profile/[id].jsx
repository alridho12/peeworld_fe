import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import mail from '../../assets/image/mail (4).png'
import instagram from '../../assets/image/instagram.png'
import github from '../../assets/image/github.png'
import gitlab from '../../assets/image/gitlab.png'
import Image from 'next/image'
import NavbarAuth from '../../components/navbar/NavbarAuth'
import Link from 'next/link'
import Pfwskill from '../../components/profileworker/Pfwskill'
import Pfwbio from '../../components/profileworker/Pfwbio'
import Pfwexperience from '../../components/profileworker/Pfwexperience'
import Pfwporto from '../../components/profileworker/Pfwporto'

const Profile = () => {
  const [login, setLogin] = useState()
  useEffect(() => {
    const login = localStorage.getItem('id')
    setLogin(login)
  }, [])

  return (
    <div>
      <NavbarAuth />
      <div id="shp">

      </div>
      <section
        className="container"
        style={{ position: "relative", marginTop: "-300px" }}
      >
        <div className="row m-0 mb-5">
          <div
            className="col-md-4"
            style={{
              padding: 20,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              borderRadius: 10,
              backgroundColor: "white"
            }}
          >
            <div className="m-0">
              <Pfwbio />
              <p style={{ fontSize: 22, fontWeight: 600 }}>Skill</p>
              <Pfwskill />
              <div className="mt-4">
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
                    louistommo@gmailcom
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
                    src={github}
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
                    @loistommo
                  </p>
                </div>
                <div className="row d-flex align-items-center m-0">
                  <Image
                    src={gitlab}
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
              <div className="d-flex justify-content-center">
                <Link href={`/editprofileworker/${login}`}>
                  <button
                    className="mt-5"
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      width: 297,
                      height: 50,
                      border: "transparent",
                      borderRadius: 5,
                      backgroundColor: "#5E50A1",
                      color: "white"
                    }}
                  >
                    Edit profile
                  </button>
                </Link>
              </div>
            </div>

          </div>
          <div
            className="col-md-7 container mt-md-0 mt-3"
            style={{
              padding: 20,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              borderRadius: 10,
              backgroundColor: "white"
            }}
          >
            <p
              style={{
                fontSize: 22,
                fontWeight: 600,
                borderBottom: "#5E50A1 2px solid",
                width: 100
              }}
            >
              Portofolio
            </p>
            <Pfwporto />
            <p
              style={{
                fontSize: 22,
                fontWeight: 600,
                borderBottom: "#5E50A1 2px solid",
                width: 193
              }}
            >
              Pengalaman kerja
            </p>
            <div className="row m-0 mb-4">
              <div className="col-md-2">

              </div>
              <div className="col-md-9 container">
                <Pfwexperience />
              </div>
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

        #tp {
          text-align: center; 
          font-size: 14px; 
          font-weight: 400; 
        }

        @media only screen and (max-width: 600px) {
          #ff {
              font-size: 9px;
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

export default Profile