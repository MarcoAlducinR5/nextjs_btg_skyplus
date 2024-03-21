"use client"; 
import { useEffect, useState } from 'react';

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
        <br />
        <div style={{ display: isMobile ? 'block' : 'flex', margin: isMobile ? '0 auto' : '' }}>
          <img style={{
              width: isMobile ? '100%' : '50%',
              height: 'auto' 
            }} 
          src="https://sports.skymas.mx/dtc/imagenes/aplicacion/v2/img-bg-movil.png" alt="logo-sky"/>
          <div style={{
            width: isMobile ? '100%' : '50%'
          }}>{children}</div>
        </div>        
      </>
    );
}
