"use client";
import { useEffect, useState } from 'react';
import logo from '../img/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {  

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia 768 al ancho que consideres como límite entre móvil y escritorio
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
      <>
        <div className="navSuperior"></div>
        <div style={{
          background: '#F9FBFC',
          height: '4px',
          display: isMobile ? 'none' : 'flex',
        }}>          
        </div>

        <div style={{
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-between', // Ajusta el margen vertical
          
        }}>
          <Image 
           src={logo} alt="sky-logo1" id="logo_nav_sky"  
          style={
            { 
              margin:'12px 12px 12px 60px', 
              marginLeft: isMobile ? '0' : '60px',
            }} />
          
          <Link style={{
             textDecoration: "none",
             color: "inherit",
             margin:'12px 60px 12px 12px', // Ajusta el margen vertical
             display: isMobile ? 'none' : 'flex'
          }}
          href="https://dtc.custhelp.com/app/answers/list" target="_blank">Centro de ayuda</Link>

        </div>
        <div style={{
          background: '#F9FBFC',
          height: '4px', // Ajusta el margen vertical
          display: isMobile ? 'none' : 'flex'
        }}>          
        </div>
        <style jsx>{`
            .navSuperior {
                height: 0.2rem;
                width: 100%;
                background: linear-gradient(90deg, #ff9e00 0%, #ff0000 33.93%, #b5007d 58.36%, #21429c 82.54%, #0071ff 100%);
            }
        `}</style>
      </>
    );
}