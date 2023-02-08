/* eslint-disable @next/next/no-img-element */
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLocationSharp, IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = (props) => {
    return (
        <Container style={{}}>
            <MDBFooter className="text-center text-lg-start text-muted footer-customs">
                <section className="d-flex justify-content-center justify-content-lg-between p-1">
                    <MDBContainer
                        className="text-center text-md-start mt-5"
                        fluid="true"
                    >
                        {/*Container*/}
                        <MDBRow className="text-center text-md-start mt-5">
                            {/*Logo*/}
                            <MDBCol md="3" lg="2" xl="3">
                                <Link href="/">
                                    <img
                                        src="/recyclingLogo.png"
                                        alt=""
                                        className="img-fluid pb-5"
                                    />
                                </Link>
                            </MDBCol>

                            {/*Main*/}
                            <MDBCol fluid="true">
                                <MDBRow className="mt-3">
                                    {/*Seccion 1*/}
                                    <MDBCol
                                        md="3"
                                        lg="2"
                                        xl="2"
                                        className="me-auto pb-2"
                                    >
                                        <h6 className="text-uppercase fw-bold mb-3">
                                            Bicis
                                        </h6>
                                        <p>
                                            <a href="#!" className="text-reset">
                                                Comprar bicis
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">
                                                Vender bicis
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">
                                                Lista de espera
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">
                                                Lista de espera
                                            </a>
                                        </p>
                                    </MDBCol>

                                    {/*Seccion 2*/}
                                    <MDBCol
                                        md="4"
                                        lg="3"
                                        xl="2"
                                        className="me-auto mb-4 pb-2"
                                    >
                                        <h6 className="text-uppercase fw-bold mb-3">
                                            Otros Servicios
                                        </h6>
                                        <p>
                                            <a href="#!" className="text-reset">
                                                Nombre de la página
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">
                                                Nombre de la página
                                            </a>
                                        </p>
                                    </MDBCol>

                                    {/*Seccion 3 - Contact*/}
                                    <MDBCol
                                        md="5"
                                        lg="4"
                                        xl="3"
                                        className="me-auto mb-md-0 mb-4 pb-2"
                                    >
                                        <h6 className="text-uppercase fw-bold mb-3">
                                            Contacto
                                        </h6>
                                        <div className="">
                                            <p>
                                                <a
                                                    href="#!"
                                                    className="text-reset"
                                                >
                                                    Escríbenos por WhatsApp
                                                </a>
                                            </p>
                                            <p>
                                                <a
                                                    href="#!"
                                                    className="text-reset"
                                                >
                                                    Envíanos un Correo
                                                </a>
                                            </p>
                                            <p>
                                                <a
                                                    href="#!"
                                                    className="text-reset"
                                                >
                                                    Visítanos
                                                </a>
                                            </p>
                                        </div>

                                        {/*Display Antiguo - Localizacón...*/}
                                        {/* <p>
                                            <IoLocationSharp
                                                size={22}
                                                className="me-2"
                                            />
                                            New York, NY 10012, US
                                        </p>
                                        <p>
                                            <MdEmail
                                                size={22}
                                                className="me-3"
                                            />
                                            info@example.com
                                        </p>
                                        <p>
                                            <IoLogoWhatsapp
                                                size={24}
                                                className="me-3"
                                            />{" "}
                                            + 01 234 567 88
                                        </p> */}
                                    </MDBCol>

                                    {/*Seccion 4 - Síguenos*/}
                                    <MDBCol
                                        md="3"
                                        lg="3"
                                        xl="2"
                                        className="me-auto pb-5"
                                    >
                                        <h6 className="text-uppercase fw-bold mb-3 text-reset">
                                            Síguenos
                                        </h6>
                                        <a href="" className="me-2 text-reset">
                                            <BsInstagram size={25} />
                                        </a>
                                        <a href="" className="text-reset">
                                            <FaFacebook size={25} />
                                        </a>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            {/*End Content*/}
                        </MDBRow>
                        {/*End Container*/}
                    </MDBContainer>
                </section>

                {/*Bottom Footer*/}
                <Container fluid className="py-4">
                    <Row className="justify-content-between p-4">
                        <Col xs="auto">
                            <div className="text-left text-final-footer">
                                2023 © Recycling. Todos los derechos reservados
                            </div>
                        </Col>

                        <Col xs="auto">
                            <a href="#!" className="text-reset mr-3">
                                Política de privacidad{" "}
                            </a>

                            <a href="#!" className="text-reset mr-3">
                                Cookies{" "}
                            </a>
                            <a href="#!" className="text-reset mr-3">
                                Aviso Legal{" "}
                            </a>
                            <a href="#!" className="text-reset">
                                Condiciones de Uso{" "}
                            </a>
                        </Col>
                    </Row>
                </Container>
            </MDBFooter>
        </Container>
    );
};

export default Footer;
