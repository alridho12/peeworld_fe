import Image from 'next/image';
import NextNprogress from 'nextjs-progressbar';
import logo from '../../assets/image/Group 980 1.jpg'
import { useEffect, useState } from 'react';

const LoadingLogo = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        const handleLoad = () => setLoading(false);
        window.addEventListener('load',handleLoad);
        return () => window.removeEventListener('load',handleLoad)
    },[])
    return (
        <div>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={5}
                options={{ showSpinner: false }}
            />
            <div className="loading-logo">
                <Image
                    className="logo mr-4"
                    src={logo}
                    alt="logo"
                />
            </div>
            <style jsx>{`
        .loading-logo {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          /* Tambahkan properti lain seperti ukuran, warna, dan animasi */
        }
      `}</style>
        </div>
    )
}

export default LoadingLogo