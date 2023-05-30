import React from 'react'
import affiche_rvlf from '../assets/affiche_rvlf.jpg'
import Container from 'react-bootstrap/esm/Container';
import '../style/Card_film.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Card_actor from './Card_actor';
import Critique from './Critique';
import { Badge, Card } from 'react-bootstrap';

export default function Card_film() {

    const number_star = 5;
    const star_total = []
    for (let i = 0; i < Math.floor(number_star); i++) {
        star_total.push(<FontAwesomeIcon className='' key={i} icon={faStar} />)
    }

    return (

        <Container className='mt-5'>
            <Card className='background-card-film'>
                <div className="row">
                    <div className="col-md-6">
                        <Card.Img
                            src={affiche_rvlf}
                            alt="Affiche retour vers le futur 1"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6">
                        <Card.Body>
                            <Card.Title className='fs-2'>Retour vers le futur </Card.Title>

                            <Card.Text>
                                {star_total}
                            </Card.Text>

                            <Card.Text className='fs-6 mt-3'>

                                Le jeune Marty McFly mène une existence anonyme, auprès de sa petite amie Jennifer, seulement troublée par sa famille en crise et un proviseur qui serait ravi de l'expulser du lycée. Ami de l'excentrique professeur Emmett Brown, il l'accompagne tester sa nouvelle expérience : le voyage dans le temps via une DeLorean modifiée. La démonstration tourne mal : des trafiquants d'armes débarquent et assassinent le scientifique.
                                <Card_actor></Card_actor>
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Card>
            <div className='row justify-content-center mt-5'>
                <Critique />
            </div>
        </Container>
    )
}
