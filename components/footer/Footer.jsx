import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import logo from '../../assets/image/Group 978.png'

const Footer = () => {
    return (
        <div>
            <footer className=" mt-5">
                <div className="container ">
                    <Image src={logo} alt="" />
                    <p id="ff" className="mt-3 mb-5" style={{ color: "#FAFBFC" }}>
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In euismod
                        ipsum et dui <br /> rhoncus auctor.
                    </p>
                    <hr style={{ border: "#FAFBFC 1px solid" }} />
                    <div className="row">
                        <div className="col-6">
                            <p id="ff" style={{ color: "#FAFBFC" }}>
                                2020 Peworld. All right reserved
                            </p>
                        </div>
                        <div className="col-6 row d-flex justify-content-end m-0">
                            <div className="mr-5">
                                <p id="ff" style={{ color: "#FAFBFC" }}>
                                    Telephone
                                </p>
                            </div>
                            <div>
                                <p id="ff" style={{ color: "#FAFBFC" }}>
                                    Email
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <style jsx>{`
            footer {
                background-color: #5E50A1; 
                padding: 85px; 
                padding-bottom: 10px; 
                padding-top: 50px;
            }

            @media only screen and (max-width: 600px) {
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

export default Footer