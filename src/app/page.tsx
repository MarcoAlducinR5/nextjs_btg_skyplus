'use client'
import Link from 'next/link';
import localFont from 'next/font/local';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import flecha_righ_azul from '../img/aplicacion/v2/flecha_righ_azul.svg';
import flecha_righ_blanca from '../img/aplicacion/v2/flecha_righ_blanca.svg';

const Nunito = localFont({
  src: [
    {
      path: '../fonts/Nunito-ottf/Nunito-Light.ttf',
      weight: 'normal',
      style: 'normal',
    }
  ],
  
});

export default function Home() {
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
      <div className="container-fluid py-4 pt-xl-5">
        <div className="row justify-content-lg-start">
          <div className="col-12">
            <div className="row font-weight-bold text-color-white">
              <div className="col-12 mb-2 gradientText-2" style={{fontWeight:400 }}>
                Bienvenido, recuerda que
              </div>
              <div className="col-12 mb-2 gradientText">
                Blue To Go Sports ahora es Sky+
              </div>
              <div className="col-10 col-xl-11 font-size-2 text-color-5" style={{fontWeight:600 }}>
                Podrás ver completamente en VIVO las ligas deportivas más importantes del mundo, estés donde estés. Sólo para MX .
              </div>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-12">
            <div className="row pt-4">
              <div className="col-12 col-xl-5">
                <button className='btn-btg-sports-6' id="btnTuCuenta">
                  <Link href='/ingresa' id="btnTuCuenta" style={{
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: '#000FF5',
                  }}>
                    Iniciar sesión
                    <Image src={flecha_righ_azul}
                      alt="arrow" id='arrowrightblue'
                      style={{position: 'absolute',
                      bottom: '20px',
                      top: '0',
                      right: '20px',
                      border: 'none',
                      background: 'transparent',
                      padding: '5px 8px 4px 8px',
                      width: '1.5rem',
                      height: '1.5rem'}}/>
                  </Link>
                </button>
              </div>
              {/* <c:if test="#{fn:length(sessionScope.UbicacionMB.paises) eq 1}"> */}
                <div className="col-12 col-xl-5 mb-4 d-xl-block">
                  <button className='btn-btg-sports-5' id="btnContrata">
                    <Link href='/prerregistro' id="btnContrata" style={{
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                      Quiero Contratar
                      <Image src={flecha_righ_blanca}
                        alt="arrow" id='arrowrightwhite'
                        style={{position: 'absolute',
                        bottom: '20px',
                        top: '0',
                        right: '20px',
                        border: 'none',
                        background: 'transparent',
                        padding: '5px 8px 4px 8px',width: '1.5rem',height: '1.5rem'}}/>
                    </Link>
                  </button>
                </div>
              {/* </c:if> */}
                         
              {/* <c:if test="#{fn:length(sessionScope.UbicacionMB.paises) > 1}">
                <div class="col-8 col-xl-5 mb-4 d-none d-xl-block">
                  <button className='btn-btg-sports-5' id="btnContrata">
                    <Link href='/prerregistro' id="btnContrata" style={{color:'white'}}>
                      Quiero Contratar
                      <button type="button"
                        style={{position: 'absolute',
                        bottom: '20px',
                        top: '0',
                        right: '20px',
                        border: 'none',
                        background: 'transparent',
                        padding: '5px 8px 4px 8px'
                      }}>
                        <Image src={flecha_righ_blanca}
                          alt="arrow" id='arrowrightwhite'
                          style={{width: '1.5rem',height: '1.5rem'}}/>
                      </button>
                    </Link>
                  </button>

                  <af:button text="#{resBTGS['contrata.text']}" id="btnContrataPc"
                    styleClass="btn-btg-sports-5">
                    <af:showPopupBehavior popupId="p1"/>
                  </af:button>
                  
                  <button type="button"
                    style="position: absolute;bottom: 0;top: 0;right: 20px;border: none; background: transparent;">
                    <img src="/dtc/imagenes/aplicacion/v2/flecha_righ_blanca.svg"
                      alt="arrow" id='arrowrightwhite2'
                      class="h-6 w-6"/>
                  </button>
                      
                </div>
              </c:if> */}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container-fluid
        {
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }

        .container-fluid
        {
          width: 97%;
          padding-right: 0.75rem !important;
          padding-left: 0.75rem !important;
          margin-right: auto !important;
          margin-left: auto !important;
        }

        .pt-4,
        .py-4 {
          padding-top: 1.5rem !important;
        }

        .py-4 {
          padding-bottom: 1.5rem !important;
        }

        .pt-xl-5
        {
          padding-top: 3rem !important;
        }

        .row::after, .row::before {
          content: "";
          clear: both;
          display: table;
        }

        .row {
          display: flex !important;
          display: -ms-flexbox !important;
          display: -moz-box !important;
          display: -webkit-box !important;
          display: -webkit-flex !important;
          -webkit-flex-wrap: wrap !important;
          -ms-flex-wrap: wrap !important;
          flex-wrap: wrap !important;
          margin-right: -0.75rem !important;
          margin-left: -0.75rem !important;
        }

        .justify-content-lg-start {
          justify-content: flex-start !important;
        }
        
        .col-12 {
          width: 100%;
        }

        .text-color-5{
          color: #6E6E6E !important;
        }

        .font-size-2{
          font-size: calc(13px + 0.35vw) !important;
        }

        .col-xl-11 {
          flex: 0 0 91.66667%!important;
          max-width: 91.66667%!important;
        }
        
        .col-10 {
          -ms-flex: 0 0 83.333333%!important;
          flex: 0 0 83.333333%!important;
          max-width: 83.333333%!important;
        }

        .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
        .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
        .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
        .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
        .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
        .col-xl-auto {
          position: relative !important;
          width: 100% !important;
          padding-right: 0.75rem !important;
          padding-left: 0.75rem !important;
        }

        .col-12 {
          -ms-flex: 0 0 96%!important;
          flex: 0 0 96%!important;
          max-width: 96%!important;
        }

        .w-100{
          width: 100% !important;
        }

        .font-weight-bold{
          font-weight: bolder !important;
        }

        .text-color-white{
          color: white !important;
        }

        .mb-2,
        .my-2 {
          margin-bottom: 0.5rem !important;
        }

        .gradientText-2{
          
          font-size: 25px !important;
          font-weight: 500 !important;
          line-height: 48px; /* 120% */
          background: linear-gradient(90deg, #0071FF 0%, #21429C 50%, #B5007D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gradientText{
          
          font-size: 35px !important;
          /* font-weight: 500 !important; */
          line-height: 48px; /* 120% */
          background: linear-gradient(90deg, #0071FF 0%, #21429C 50%, #B5007D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (min-width:768px) {
          .gradientText{
              font-size: 40px !important;
          }
          .gradientText-2{
          font-size: 40px !important;
          }
      
        }
        .col-xl-5 {
          flex: 0 0 41.66667%!important;
          max-width: 41.66667%!important;
        }

        .btn-btg-sports-6 {
          padding: 5px 8px 4px 8px;
          /*font-weight: 500 ;*/
          border-radius: 48px ;
          -webkit-border-radius: 5px ;
          -moz-border-radius: 48px ;
          color: #000FF5 ;
          font-size: 18px ;
          /*padding: 0rem 0.75rem ;*/
          background: #FFFFFF 0% 0% no-repeat padding-box ;
          /*box-shadow: 1px 1px 0.4rem 0px #000000 ;
          -webkit-box-shadow: 1px 1px 0.6rem 0px #000000 ;
          -moz-box-shadow: 1px 1px 0.6rem 0px #000000 ;*/
          display: inline-block;
          cursor: pointer;
          text-align: left;
          text-shadow: none ;
          border-color: #000FF5 ;
          width: 100% ;
          /*height: 100% ;*/
        }

        .btn-btg-sports-6 {
          background: #FFFFFF !important;
          color: #C4CED7 !important;
          cursor: default !important;
        }
        
        .btn-btg-sports-6 a{
          cursor: default !important;
        }

        .mb-4 {
          margin-bottom: 1.5rem !important;
        }

        .btn-btg-sports-5 {
          padding: 5px 8px 4px 8px;
          /*font-weight: 500 ;*/
          border-radius: 48px ;
          -webkit-border-radius: 5px ;
          -moz-border-radius: 48px ;
          color: #000FF5 ;
          font-size: 18px ;
          /*padding: 0rem 0.75rem ;*/
          background: #FFFFFF 0% 0% no-repeat padding-box ;
          /*box-shadow: 1px 1px 0.4rem 0px #000000 ;
          -webkit-box-shadow: 1px 1px 0.6rem 0px #000000 ;
          -moz-box-shadow: 1px 1px 0.6rem 0px #000000 ;*/
          display: inline-block;
          cursor: pointer;
          text-align: left;
          text-shadow: none ;
          border-color: #000FF5 ;
          width: 100% ;
          /*height: 100% ;*/
        }
        .btn-btg-sports-5{
            background: #000FF5 !important;
            color: #C4CED7 !important;
            cursor: default !important;
        }
        
        .btn-btg-sports-5 a{
            cursor: default !important;
        }
      `}</style>
    </>
  );
}
