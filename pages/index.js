import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/footer/Footer'
import img1 from '../assets/image/Group 1195.jpg'
import img2 from '../assets/image/Group 1194.png'
import img3 from '../assets/image/Group 1196.jpg'
import thick1 from '../assets/image/tick 1.jpg'
import thick2 from '../assets/image/tick 13.jpg'
import vektor from '../assets/image/Vector 41.png'
import Image from 'next/image'
import NavbarAuth from '../components/navbar/NavbarAuth';
import Link from 'next/link';
import Carouseled from '../components/carousel/Carouseled';
const Landingpage = () => {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, []);

    return (
        <div>
            <NavbarAuth />
            <section className="container mt-md-5">
                <div className="row m-0">
                    <div className="col-md-6" data-aos="flip-right" data-aos-duration="2000">
                        <div id='main-text'>
                            <h1>
                                Talenta terbaik negri <br /> untuk perubahan <br /> revolusi 4.0
                            </h1>
                            <p
                                className="mt-3"
                                style={{ color: "#46505C", fontSize: 18, fontWeight: 400 }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
                                ipsum et dui rhoncus auctor.
                            </p>
                            <button
                                className="mt-3"
                                style={{
                                    borderColor: "#5E50A1",
                                    backgroundColor: "#5E50A1",
                                    width: 210,
                                    height: 63,
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    borderRadius: 5
                                }}
                            >
                                <Link
                                    href="/home"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        fontSize: 17,
                                        fontWeight: 700
                                    }}
                                >
                                    Mulai Dari Sekarang
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="flip-left" data-aos-duration="2000">
                        <div>
                            <Image src={img1}
                                alt=""
                                layout="responsive"
                                width={520}
                                height={520}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mt-5" data-aos="flip-left" data-aos-duration="2000">
                <div className="row m-0" id="sc1">
                    <div className="col-md-6">
                        <div>
                            <Image src={img2}
                                alt=""
                                layout="responsive"
                                width={520}
                                height={520}
                            />
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="flip-right" data-aos-duration="2000">
                        <div style={{ marginTop: 35 }}>
                            <h1 className="mb-4">Kenapa harus mencari tallent di peworld</h1>
                            <div className="row align-items-center m-0">
                                <Image src={thick1} alt="" className="mr-3" />
                                <p style={{ marginTop: 12 }}>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="row align-items-center m-0">
                                <Image src={thick1} alt="" className="mr-3" />
                                <p style={{ marginTop: 12 }}>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="row align-items-center m-0">
                                <Image src={thick1} alt="" className="mr-3" />
                                <p style={{ marginTop: 12 }}>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="row align-items-center m-0">
                                <Image src={thick1} alt="" className="mr-3" />
                                <p style={{ marginTop: 12 }}>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mt-5">
                <div className="row m-0">
                    <div className="col-md-6" data-aos="fade-left" data-aos-duration="2000">
                        <div style={{ marginTop: 44 }}>
                            <h1>Skill tallent</h1>
                            <p className="mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
                                ipsum et dui rhoncus auctor.
                            </p>
                            <div className="row m-0">
                                <div className="col-md-6">
                                    <div className="row align-items-center">
                                        <Image
                                            src={thick2}
                                            alt=""
                                            className="mr-3"
                                        />
                                        <p style={{ marginTop: 12 }}>Java</p>
                                    </div>
                                    <div className="row align-items-center">
                                        <Image
                                            src={thick2}
                                            alt=""
                                            className="mr-3"
                                        />
                                        <p style={{ marginTop: 12 }}>Kotlin</p>
                                    </div>
                                    <div className="row align-items-center">
                                        <Image
                                            src={thick2}
                                            alt=""
                                            className="mr-3"
                                        />
                                        <p style={{ marginTop: 12 }}>PHP</p>
                                    </div>
                                    <div className="row align-items-center">
                                        <Image
                                            src={thick2}
                                            alt=""
                                            className="mr-3"
                                        />
                                        <p style={{ marginTop: 12 }}>JavaScript</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row align-items-center">
                                        <Image
                                            src={thick2}
                                            alt=""
                                            className="mr-3"
                                        />
                                        <p style={{ marginTop: 12 }}>Golang</p>
                                    </div>
                                    <div className="row align-items-center">
                                        <Image
                                            src={thick2}
                                            alt=""
                                            className="mr-3"
                                        />
                                        <p style={{ marginTop: 12 }}>C++</p>
                                    </div>
                                    <div className="row align-items-center">
                                        <Image
                                            src={thick2}
                                            alt=""
                                            className="mr-3"
                                        />
                                        <p style={{ marginTop: 12 }}>Ruby</p>
                                    </div>
                                    <div className="row align-items-center">
                                        <Image
                                            src={thick2}
                                            alt=""
                                            className="mr-3"
                                        />
                                        <p style={{ marginTop: 12 }}>10+ Bahasa lainnya</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-right" data-aos-duration="2000">
                        <div>
                            <Image src={img3}
                                alt=""
                                layout="responsive"
                                width={520}
                                height={520}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mt-5">
                <div style={{ backgroundColor: "#FAFBFC", padding: 30 }}>
                    <h1 style={{ textAlign: "center" }}>Their opinion about peworld</h1>
                    <Carouseled />
                </div>
            </section>
            <section className="container" style={{ marginTop: 80, marginBottom: 80 }}>
                <div className="d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-duration="2000">
                    <div
                        style={{
                            backgroundColor: "#5E50A1",
                            width: 974,
                            height: 164,
                            maxHeight: "100%",
                            maxWidth: "100%",
                            borderRadius: "30px 0 30px 0"
                        }}
                    >
                        <Image
                            src={vektor}
                            alt=""
                            style={{
                                width: 974,
                                height: 164,
                                maxHeight: "100%",
                                maxWidth: "100%"
                            }}
                        />
                    </div>
                    <div
                        className="d-flex align-items-center justify-content-between"
                        style={{
                            position: "absolute",
                            width: 900,
                            maxHeight: "100%",
                            maxWidth: "80%"
                        }}
                    >
                        <p id="cb">
                            Lorem ipsum <br /> dolor sit amet{" "}
                        </p>
                        <Link href="/home">
                            <button id="btl2">Mulai Dari Sekarang</button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
            <style jsx>{`

                #main-text {
                    margin-top: 108px
                }
                
                #btn-login {
                    background-color: transparent;
                    width: 87px;
                    height: 44px;
                    margin: 10px;
                    border: 1px solid #5E50A1;
                    border-radius: 5px;
        
                }
        
                #btn-register {
                    background-color: #5E50A1;
                    width: 87px;
                    height: 44px;
                    margin: 10px;
                    border: 1px solid #5E50A1;
                    border-radius: 5px;
                }
        
                #frld {
                    background-color: #fff;
                    width: 300px;
                    height: 430px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    padding: 15px;
                }
        
                
        
                #cb {
                    color: #FAFBFC;
                    font-weight: 600;
                    font-size: 36px;
                }
        
                #btl2 {
                    background-color: #FAFBFC;
                    width: 210px;
                    height: 63px;
                    border-radius: 5px;
                    font-size: 16px;
                    font-weight: 700;
                    color: #5E50A1;
                }
        
                footer {
                    background-color: #5E50A1; 
                    padding: 85px; 
                    padding-bottom: 10px; 
                    padding-top: 50px;
                }
        
        
                @media only screen and (max-width: 600px) {
                    
                    #main-text{
                        margin-top: 50px
                    }
                    
                    #sc1 {
                        display: flex;
                        flex-direction: column-reverse;
                    }
        
                    #imgl {
                        height: 350px;
                    }
        
                    #cb {
                        font-size: 15px;
                    }
        
                    #btl2 {
                        width: 100px;
                        height: 43px;
                        font-size: 10px;
                    }
        
                    #ff {
                        font-size: 9px;
                    }
        
                    footer {
                        padding: 10px;
                    }
                }
            `}
            </style>
        </div>
    )
}

export default Landingpage