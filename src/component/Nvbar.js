import React from 'react'
import { Navbar ,Container,Nav ,Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Nvbar() {
  return (
    <div>
          <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Link to="/Cards">Cards</Link>
    <Link to="/About">About</Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  <br />

  
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/sunset-over-danube-river-picture-id697488452?k=6&m=697488452&s=170667a&w=0&h=y2GdCnuWOspzKP_a40W27Qf9A4XZMaShApvoKHQxpsw="
      alt="First slide"
      height="500ox"
      width="300px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://live.staticflickr.com/426/31203834233_8f52731d4b_b.jpg"
      alt="Second slide"
      height="500ox"
      width="300px"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/16/ed/80/16ed80616fa6c62c50d5e9dbdaa10a30.jpg"
      alt="Third slide"
      height="500ox"
      width="300px"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  

 
    </div>
  )
}
