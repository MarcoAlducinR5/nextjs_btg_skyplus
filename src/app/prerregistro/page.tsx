'use client'

import Image from "next/image";
import { BottonImagen, BtnBtgSports5 } from "../UIComponents/buttons";
import { InputTextBtgSports } from "../UIComponents/inputs";
import { GradientTextLabel, MsjBTGStxtc7, OutputLabelForm } from "../UIComponents/labels";
import visibilityOffIcon from '../../img/aplicacion/v2/visibility-off.svg';
import passIconOk from '../../img/aplicacion/v2/passIconOk.png';
import flechaRighBlanca from '../../img/aplicacion/v2/flecha_righ_blanca.svg';

export default function Page() {
    return (
        <>
            <div className="container pt-2 pt-xl-4">
                <div className="row justify-content-center">
                    <div className="col-11 mb-3 mb-md-1 text-center text-md-left">
                        <GradientTextLabel id="ol1">&#35;&#123;resBTGS&#91;&#39;crea.tu.cuenta.text&#39;&#93;&#125;</GradientTextLabel>
                    </div>
                    <div className="col-12 mb-5 mb-lg-0">
                        <div className="px-2 px-md-4">
                            <div className="row mb-4 justify-content-center">
                                
                                <div className="col-12 col-md-6 font-size-5">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-lg-12 mb-3 mb-lg-2">
                                            <OutputLabelForm id="ol01">Nombre</OutputLabelForm>
                                        </div>
                                        <div className="col-12 col-lg-12 mb-3 mb-lg-2">
                                            <InputTextBtgSports type="text" name="it1" placeholder="it1" required={true} />
                                            <MsjBTGStxtc7 id="m1" htmlFor="it1">MsjBTGStxtc7 </MsjBTGStxtc7>
                                        </div>
                                        <div className="col-12 col-lg-12 mb-3 mb-lg-2">
                                            <OutputLabelForm id="ol02">Apellido paterno</OutputLabelForm>
                                        </div>
                                        <div className="col-12 col-lg-12 mb-3 mb-lg-2">
                                            <InputTextBtgSports type="text" name="it2" placeholder="it2" required={true} />
                                            <MsjBTGStxtc7 id="m2" htmlFor="it2">MsjBTGStxtc7 </MsjBTGStxtc7>
                                        </div>
                                        <div className="col-12 col-lg-12 mb-3 mb-lg-2">
                                            <OutputLabelForm id="ol03">Apellido materno</OutputLabelForm>
                                        </div>
                                        <div className="col-12 col-lg-12 mb-2 mb-lg-2">
                                            <InputTextBtgSports type="text" name="it3" placeholder="it3" required={true} />
                                            <MsjBTGStxtc7 id="m3" htmlFor="it3">MsjBTGStxtc7 </MsjBTGStxtc7>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 font-size-5">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-lg-12 mb-3 mb-lg-2">
                                            <OutputLabelForm id="ocvl">&#35;&#123;resBTGS&#91;&#39;tu.correo.sera.tu.usuario.de.text&#39;&#93;&#125;</OutputLabelForm>
                                        </div>
                                        <div className="col-12 col-lg-12 mb-2 mb-lg-2">
                                            <InputTextBtgSports type="text" name="it5" maxLength={50} placeholder="#{resBTGS['correo.electronico.placeholder.text']}" required={true} />
                                            <MsjBTGStxtc7 id="m5" htmlFor="it5">MsjBTGStxtc7 </MsjBTGStxtc7>
                                        </div>
                                        <div className="col-12 col-lg-12 mb-3 mb-lg-2">
                                            <OutputLabelForm id="ol3">&#35;&#123;resBTGS&#91;&#39;password.placeholder.text&#39;&#93;&#125;</OutputLabelForm>
                                            <div className="col-12 col-lg-12 mb-3 mb-lg-2">
                                                <InputTextBtgSports type="password" name="itPassword" maxLength={20} placeholder="itPassword" required={true} autoComplete="off" /*onfocus */ />
                                                <BottonImagen right={"20px;"} height={"height: 48px;"}>
                                                    <Image src={visibilityOffIcon} alt="eye" className="h-6 w-6" /* onClick={mostrarContrasenia()} */ />
                                                </BottonImagen>
                                                <MsjBTGStxtc7 id="m6" htmlFor="itPassword">MsjBTGStxtc7 </MsjBTGStxtc7>
                                            </div> 
                                            <div className="col-12 col-lg-12 mb-3 mb-lg-2">
                                                <OutputLabelForm id="ol04">&#35;&#123;resBTGS&#91;&#39;confirmar.password.placeholder.text&#39;&#93;&#125;</OutputLabelForm>
                                            </div>
                                            <div className="col-12 col-lg-12">
                                                <InputTextBtgSports type="password" name="itPasswordConf" placeholder="#{resBTGS['confirmar.password.placeholder.text']}" required={true} autoComplete="off" />
                                                <BottonImagen right={"20px;"} height={"height: 48px;"}>
                                                    <Image src={visibilityOffIcon} alt="eye" className="h-6 w-6" /* onClick={mostrarContraseniaConf()} */ />
                                                </BottonImagen>
                                                <MsjBTGStxtc7 id="m7" htmlFor="itPasswordConf">MsjBTGStxtc7 </MsjBTGStxtc7>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                                            
                                <div className="row justify-content-center">
                                    <div id="col_pass_info" className="col-12 col-lg-12 mb-1 oculto">
                                        <div className="row col-12">
                                            <OutputLabelForm id="ol4" className="font-weight text-color-5">La contraseña debe tener:</OutputLabelForm>
                                        </div>
                                        <br/>
                                        <div className="row col-12">
                                            <Image src={passIconOk} alt="eye" id='imgPassLongOk' className="h-6 w-6 oculto" />
                                            <OutputLabelForm id="">&#35;&#123;resBTGS&#91;&#39;confirmar.password.placeholder.text&#39;&#93;&#125;</OutputLabelForm>
                                        </div>
                                        <br/>
                                        <div className="row col-12">
                                            <Image src={passIconOk} alt="eye" id='imgPassMayMinOk' className="h-6 w-6 oculto" />
                                            <OutputLabelForm id="">&#35;&#123;resBTGS&#91;&#39;password.minusculasmayusculas.requerida.text&#39;&#93;&#125;</OutputLabelForm>
                                        </div>
                                        <br/>
                                        <div className="row col-12">
                                            
                                            <Image src={passIconOk} alt="eye" id='imgPassEspCarOk' className="h-6 w-6 oculto" />
                                            <OutputLabelForm id="">&#35;&#123;resBTGS&#91;&#39;password.caracter.especial.requerido.text&#39;&#93;&#125;</OutputLabelForm>
                                        </div> 
                                    </div>
                                </div>
                                            
                                <br/>
                                <br/>
                                <div className="row justify-content-center">
                                    <div className="col-12 col-xl-5 text-center">
                                        <BtnBtgSports5>
                                            &#35;&#123;resBTGS&#91;&#39;crear.cuenta.text&#39;&#93;&#125;
                                            <Image src={flechaRighBlanca} alt="arrow" id='arrowrightwhite' className="h-6 w-6" />
                                        </BtnBtgSports5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 100% !important;
                    padding-right: 0.75rem !important;
                    padding-left: 0.75rem !important;
                    margin-right: auto !important;
                    margin-left: auto !important;
                }
                
                .container {
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
                
                @media (min-width: 576px) {
                    .container {
                        max-width: 540px !important;
                    }
                }
                
                @media (min-width: 768px) {
                    .container {
                        max-width: 720px !important;
                    }
                }
                
                @media (min-width: 992px) {
                    .container {
                        max-width: 960px !important;
                    }
                }
                
                @media (min-width: 1200px) {
                    .container {
                        max-width: 1140px !important;
                    }
                }
                @media (min-width: 576px) {
                    .container {
                        max-width: 540px !important;
                    }
                }
                
                @media (min-width: 768px) {
                    .container {
                        max-width: 720px !important;
                    }
                }
                
                @media (min-width: 992px) {
                    .container {
                        max-width: 960px !important;
                    }
                }
                
                @media (min-width: 1200px) {
                    .container {
                        max-width: 1140px !important;
                    }
                }

                .pt-2 {
                    padding-top: 0.5rem !important;
                }

                .pt-xl-4 {
                    padding-top: 1.5rem !important;
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

                .justify-content-center {
                    justify-content: center !important;
                }

                .col-11, .col-12, .col-md-6 .col-lg-12, .col-xl-5 {
                    position: relative !important;
                    width: 100% !important;
                    padding-right: 0.75rem !important;
                    padding-left: 0.75rem !important;
                }

                .col-11 {
                    -ms-flex: 0 0 91.666667%!important;
                    flex: 0 0 91.666667%!important;
                    max-width: 91.666667%!important;
                }

                .col-12 {
                    -ms-flex: 0 0 100%!important;
                    flex: 0 0 100%!important;
                    max-width: 100%!important;
                }

                .col-md-6 {
                    flex: 0 0 50%!important;
                    max-width: 50%!important;
                }

                .mb-3
                {
                    margin-bottom: 1rem !important;
                }

                .mb-5 {
                    margin-bottom: 3rem !important;
                }

                .mb-md-1
                {
                    margin-bottom: 0.25rem !important;
                }

                .mb-lg-0 {
                    margin-bottom: 0 !important;
                }

                .mb-lg-2 {
                  margin-bottom: 0.5rem !important;
                }

                .text-center{
                    text-align: center !important;
                }

                @media (min-width: 768px) {
                    .text-md-left {
                      text-align: left !important;
                    }
                }

                .col-12 {
                    width: 100%;
                }

                .px-2 {
                    padding-right: 0.5rem !important;
                }

                .px-md-4 {
                    padding-right: 1.5rem !important;
                }

                .mb-1 {
                  margin-bottom: 0.25rem !important;
                }

                .mb-4 {
                    margin-bottom: 1.5rem !important;
                }

                .font-size-5{
                    font-size: calc(13px + 0.15vw) !important;
                }

                .h-6{
                    height: 1.5rem; /* 24px */
                }

                w-6 {
                    width: 1.5rem; /* 24px */
                }

                .oculto {
                    display:none;
                }

                .font-weight {
                    font-weight:bolder;
                }
                
                .col-xl-5 {
                    flex: 0 0 41.66667%!important;
                    max-width: 41.66667%!important;
                }
                
            `}</style>
        </>
    );
}