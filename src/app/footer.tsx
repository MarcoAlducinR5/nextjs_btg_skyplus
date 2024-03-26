"use client"; 
import { useEffect, useState } from 'react';
import footerLogos from '../img/aplicacion/v2/footer_logos.png';
import footerLogos2 from '../img/aplicacion/v2/footer_logos2.png';
import lineaSpectrum from '../img/aplicacion/v2/linea-spectrum.png';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {

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
            <Image src={lineaSpectrum} alt="navInferior" id="navInferior" 
              style={{ 
                /* margin: '0.2rem 0rem',
                padding: '0.2rem', */
                width: '100%',
                height: 'auto',
              }}
            />

            {isMobile ? 
              <Image src={footerLogos2} alt="imgFt" id="imgFt" 
                style={{ 
                  width: '100%',
                  height: 'auto',
                }}
              />
            : 
            <Image src={footerLogos} alt="imgFtMovil" id="imgFtMovil"  
              style={{ 
                width: '100%',
                height: 'auto',
              }} 
            />}
        <div style={{
          background:'blue',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
            <Link
            style={{ color: 'white', fontSize: '17px', textDecoration: 'none' }}
            href={`https://wa.me/5540400202`}
            target="_blank"
            rel="noopener noreferrer"
            >
              <p style={{
                color: 'white',
                fontSize: '17px',
                justifyContent: 'center'
              }}> 
              {isMobile ? (
                <>
                  <span>Venta telefónica</span>
                </>
              ) : (
                <>
                  <span>Llamanos 55 4040 0202</span>
                </>
              )}
                </p>      
            </Link>    
          </div>
          <style jsx>{`
            .navInferior {
              margin: 0.2rem 0rem;
              padding: 0.3rem;
              width: 100%;
              background-image: url(../img/aplicacion/v2/linea-spectrum.png)!important;
            }
        `}</style>
      </>
    );
}