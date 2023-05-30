import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import imageMicheal from '../assets/michealfox.jpg'
import imageLea from '../assets/leathompson.jpg'
import imageChristopher from '../assets/christopherlloyd.jpg'
import imageRobertz from '../assets/robertzemeckis.jpg'
import Carousel from 'react-bootstrap/Carousel';


export default function Card_actor() {
    const cardData = [
        {
            title: 'Michael J. Fox',
            role: 'Marty McFly',
            imageUrl: imageMicheal,
            job: 'actor'
        },
        {
            title: 'Lea Thompson',
            role: 'Lorraine Baines',
            imageUrl: imageLea,
            job: 'actor'
        },
        {
            title: 'Christopher Lloyd',
            role: 'Dr. Emmett Brown',
            imageUrl: imageChristopher,
            job: 'actor'
        },
        {
            title: 'Robert Zemeckis',
            imageUrl: imageRobertz,
            job: 'director'
        },
        // Ajoutez plus d'objets de données pour les autres cartes
    ];

    return (
        <Container className='d-flex mt-5'>
            <Row className='justify-content-around'>
                <Carousel className='col-7'>
                {cardData.map((card, index) => (
                    <Carousel.Item interval={3500}>
                        <img
                            className="d-block w-100"
                            src={card.imageUrl}
                            alt="First slide"
                        />
                        <Carousel.Caption className='p-0'>
                            <h3 className='text-start fs-5'>{card.title}</h3>
                            <p className='text-start fs-6'>{card.role ? 'Role : ' + card.role : 'Réalisateur'}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
               
                      ))
                    }
                </Carousel>
            </Row>
        </Container >
    )
}
