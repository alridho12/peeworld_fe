import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import lois from '../../assets/image/profile.png'



const Carouseled = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const [worker, setWorker] = useState([]);
  useEffect(() => {
    axios
      .get(`https://peeworld-be.vercel.app/users`)
      .then((res) => {
        setWorker(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])



  return (
    <div>
      <Carousel responsive={responsive}>
        {worker.map((worker,index) => (
          <div key={index} id="frld" >
            <div
              style={{
                backgroundColor: "bisque",
                width: 140,
                height: 140,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100
              }}
            >
              <Image
                src={worker.photo_profile ? worker.photo_profile : lois}
                width={120}
                height={120}
                style={{borderRadius:100}}
                className="d-block"
                alt="..."
              />
            </div>
            <h4
              style={{
                textAlign: "center",
                marginTop: 10,
                fontWeight: 700
              }}
            >
              {worker.nama}
            </h4>
            <p style={{ color: "#9EA0A5", fontSize: 16, fontWeight: 400 }}>
              {worker.jobdesk ? worker.jobdesk :"Jobdesk"}
            </p>
            <p
              style={{ textAlign: "center", fontSize: 16, fontWeight: 400 }}
            >
              {worker.deskripsidiri ? worker.deskripsidiri : "Tentang Anda"}
            </p>
          </div >
        ))}
      </Carousel>
      <style jsx>{`
  #frld {
    background-color: #fff !important;
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
`}
      </style>
    </div>
  )
}

export default Carouseled