import React from "react";
import "./header.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import p1 from "./pool.jpg";
import p2 from "./groom.jpg";
import p3 from "./bath.jpg";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';








export default function Pool() {
  return (
    <>
      <div className="d2">
        <p style={{marginTop:100}}>
          Your pet’s care is our priority – be it on a short weekend getaway or
          a long vacation. We provide the best home pet boarding in Bangalore
          for cats and dogs with the utmost care and safety while you relax,
          unwind, recharge. You don’t have to look for a cat/dog care centre or
          a doggy day-care either. Let our devoted pet boarders treat your
          fur-babies with the love and care they deserve. We provide constant
          updates of all the woofs and meows, keeping a track of their
          activities.
        </p>
      </div>
      <div className="d3">
        <img src={p1} height="250px" alt=""/>
        <img src={p2} height="250px" alt=""/>
        <img src={p3} height="250px"alt=""/>
      </div>
      <p style={{marginTop:0}}>
        A paradise for your four-legged BFF, We have not one but two separate
        swimming pools -- one for the smaller breeds and the other for the
        bigger boys including St. Bernards. Yup, pool time for all the city pets
        who can't unleash the swimmer in them.

        Each of the facilities of pet paradise cost Rs 250 only but ther are lans that can help customers select budget friendly offers.

      </p>
      <h2>PLANS</h2>
      <div className="plans-container">
        <CardGroup >
          <Card style={{border: '5px solid black'}}>
            <Card.Body>
              <Card.Title style={{fontSize:'xx-large'}}>Rs 500 for 3 services.</Card.Title>
              <Card.Text>
                This is a budget friendly plan of pet paradise that includes not two but three services.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{borderTop:'5px solid black', 
          borderBottom :'5px solid black'}}>
            
            <Card.Body>
              <Card.Title style={{fontSize:'xx-large'}}>Rs 1000 per day</Card.Title>
              <Card.Text>
                This plan is a great help for people who are lookig for all services of pet paradise for more than a day.{"It includes all services with Rs 1000 per day "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{border: '5px solid black'}}>
            
            <Card.Body>
              <Card.Title style={{fontSize:'xx-large'}}>Rs 1500 per week</Card.Title>
              <Card.Text>
                This is the best plan for people who are going for a vacation but cannot take their pet buddies with them. This plan offers services for many weeks with base price being RS 1500 per week.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <h2 style={{marginBottom:7}}>CUSTOMER REVIEWS</h2>
<div className="cas">
 
      <Carousel >
      <Carousel.Item interval={1000} >
        
        <Carousel.Caption >
          <h3>MR and Mrs Sharma</h3>
          <p>Totally recommend the services for working people</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={700}>
       
        <Carousel.Caption>
          <h3>Mr Krishna</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
        <Carousel.Caption>
          <h3>Ms Radha</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      
    </div>

     
    </>
  );
}
