"use client";
import { useEffect, useState } from 'react';

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
          <img 
          src="https://sports.skymas.mx/dtc/imagenes/logo.svg" alt="React Image" 
          style={
            { 
              margin:'12px 12px 12px 60px', 
              marginLeft: isMobile ? '0' : '60px',
            }} />
          
          <a style={{
             textDecoration: "none",
             color: "inherit",
             margin:'12px 60px 12px 12px', // Ajusta el margen vertical
             display: isMobile ? 'none' : 'flex'
          }}
          href="https://dtc.custhelp.com/app/answers/list" target="_blank">Centro de ayuda</a>

        </div>
        <div style={{
          background: '#F9FBFC',
          height: '4px', // Ajusta el margen vertical
          display: isMobile ? 'none' : 'flex'
        }}>          
        </div>
      </>
    );
}