"use client"; 
import { useEffect, useState } from 'react';
import imgBgDesk from '../img/aplicacion/v2/img-bg-desk-3x.png';
import imgBgMovil from '../img/aplicacion/v2/img-bg-movil.png';
import Image from 'next/image';

export function Main({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      handleResize();

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <>
        <div style={{ display: isMobile ? 'block' : 'flex', margin: isMobile ? '0 auto' : '' }}>

          <Image src={isMobile ? imgBgMovil : imgBgDesk} alt={isMobile ? 'logo-sky-m' : 'logo-sky'} id={isMobile ? 'logo-sky-m' : 'logo-sky'} 
            style={{ 
              width: isMobile ? '100%' : '50%',
              height: 'auto' 
            }}
          />
          <div style={{
            width: isMobile ? '100%' : '50%'
          }}>{children}</div>
        </div>   
        <div className="navInferior "></div>
        <style jsx>{`
          .navInferior {
            margin: 0.2rem 0rem;
            padding: 0.3rem;
            width: 95%;
            background-image: url('../img/aplicacion/v2/linea-spectrum.png')!important;
          }
        `}</style>
      </>
    );
}
