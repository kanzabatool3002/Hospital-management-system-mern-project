
import React from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'D:/doctor appointment system/client/src/App.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import patient from './patient.jpg';
import Doctor_hero from './Doctor_hero.jpg';

const Website = () => (
    <>
        {/* <div className='hello'>Hii kanza</div> */}
        <Navbar style={{ backgroundColor: "rgb(51, 1, 1)", height: '80px', }} data-bs-theme="dark" >
            <Container>
                <Navbar.Brand href="#home">DOC APP</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Button href="/Login" variant="danger">Book Appontment</Button>{' '}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div class="hero-image">
            <Image
                src={
                    // doctor
                    Doctor_hero
                }
                alt="Third slide" />
            <div class="hero-text" >
                <h1 style={{ color: "black" }}>Doc App <br /> for healthy Life</h1>
                <button style={{ color: "white" }}>Book Appointment</button>
            </div>
        </div>
        <div className='d-flex justify-content-center mt-5'>
            <div className='me-2 ms-2'>
                <Card style={{ width: '22rem' }}>
                    <Card.Body>
                        <Card.Img src="https://img.freepik.com/premium-vector/office-worker-smiling-employee-private-office-cartoon-character-glasses-sitting-desk_276875-383.jpg?w=2000" style={{ height: '300px' }} />
                        <Card.Title>Admin</Card.Title>
                        <Button style={{ backgroundColor: "rgb(51, 1, 1)" }} href="/Login">Login as Admin</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='me-2 ms-2'>
                <Card style={{ width: '22rem' }}>
                    <Card.Body>
                        <Card.Img style={{ height: '300px' }} src="https://img.freepik.com/free-vector/doctor-background-design_1270-62.jpg?w=2000" />
                        <Card.Title>Doctor</Card.Title>
                        <Button style={{ backgroundColor: "rgb(51, 1, 1)" }} href="/Login">Login as Doctor</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='me-2 ms-2'>
                <Card style={{ width: '22rem' }}>
                    <Card.Body>
                        <Card.Img src={patient} style={{ height: '300px' }} />
                        <Card.Title>Patient</Card.Title>
                        <Button style={{ backgroundColor: "rgb(51, 1, 1)" }} href="/Login">Login as Patient</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className=' mt-5'>
            <div className='d-flex justify-content-center m-5'>
                <p className='mx-5 ' style={{ width: '400px', margin: "30px" }}>The Doctor Appointment System is software solution
                    designed to streamline and automate the process of scheduling and managing doctor appointments. It aims to
                    enhance the efficiency and effectiveness of the appointment booking process, providing
                    convenience for both healthcare providers and patients.
                </p>
                <div className='m-3'>
                    <Image style={{ height: '300px', width: '400px' }} src="https://cdn.systematic.com/media/g0sj1tbg/hospital-building-001-global.jpg?mode=crop&width=1200&height=630&center=" rounded />
                </div>
            </div>
        </div>



        <footer className="page-footer font-small blue pt-4 text-white bg-dark">
            <div className="container-fluid text-center text-md-left ">
                <div className="row justify-content-center">
                    <div className="col-md-6 mt-md-0 mt-3 " style={{ width: "400px" }}>
                        <h5 className="text-uppercase">DOC APP</h5>
                        <p >With Doc App you can book an appointment and get in touch with your
                            doctor in just a few clicks, thanks to the simple and clear interface of the application.
                        </p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Contact</a></li>
                            <li><a href="#!">FAQ</a></li>
                            <li><a href="#!">Privacy Policy</a></li>
                            <li><a href="#!">Information</a></li>
                        </ul>
                    </div>


                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2023 Copyright : DOC APP

            </div>

        </footer>


    </>
)

export default Website;
