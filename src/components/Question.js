import React, { useState } from 'react'
import { Badge, Button, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


export default function () {
    const [isOpen, setIsOpen] = useState(null);
    const questionData = [
        {
            "question": "Quelle est la date à laquelle Marty McFly voyage dans le passé pour la première fois ?",
            "answer": "5 novembre 1955",
            "difficulty": "facile"
        },
        {
            "question": "Comment s'appelle le professeur qui a inventé la machine à voyager dans le temps ?",
            "answer": "Emmett Brown",
            "difficulty": "facile"
        },
        {
            "question": "Quelle est la vitesse nécessaire pour que la DeLorean puisse voyager dans le temps ?",
            "answer": "88 miles à l'heure",
            "difficulty": "moyen"
        },
        {
            "question": "Dans quelle décennie se déroule la majorité du film ?",
            "answer": "Années 80",
            "difficulty": "facile"
        },
        {
            "question": "Quel est le nom du groupe de musique auquel Marty auditionne pour jouer à la fête du lycée ?",
            "answer": "The Pinheads",
            "difficulty": "moyen"
        },
        {
            "question": "Quel est le nom de famille de la petite amie de Marty McFly ?",
            "answer": "Parker",
            "difficulty": "facile"
        },
        {
            "question": "Dans quelle ville se déroule la plupart du film ?",
            "answer": "Hill Valley",
            "difficulty": "facile"
        },
        {
            "question": "Quelle est la réplique culte de Doc Brown lorsqu'il démontre la machine à voyager dans le temps ?",
            "answer": "Où nous allons, nous n'avons pas besoin... de route !",
            "difficulty": "difficile"
        },
        {
            "question": "Quelle est la suite de la trilogie 'Retour vers le futur' ?",
            "answer": "Retour vers le futur II et Retour vers le futur III",
            "difficulty": "moyen"
        },
        {
            "question": "Quelle actrice joue le rôle de la mère de Marty McFly ?",
            "answer": "Lea Thompson",
            "difficulty": "moyen"
        }
    ]

    return (
        <div className='mt-5 w-75 mx-auto'>
            <div className='fw-bold fs-1 text-center mb-5'>Question ?</div>
            {
                questionData.map((question, index) => {

                    return (
                        <>
                            <div className='d-flex w-75 mx-auto justify-content-between'>
                                <p key={index}><span className='fw-bold'>{index + 1} </span>. {question.question}  <Button className='border' onClick={() => setIsOpen(index)} variant="transparente"> <FontAwesomeIcon icon={faEye} /></Button> </p>


                                {(question.difficulty == 'facile') ? <Badge className='h-25' bg="success">Facile</Badge> : (question.difficulty == 'difficile') ? <Badge className='h-25' bg="danger">Difficile</Badge> : <Badge className='h-25' bg="primary">Moyen</Badge>}

                            </div>

                            <div className='w-75 mx-auto'>
                               
                                {isOpen === index && <p><span className='fw-bold'>Reponse : </span> {question.answer}</p>}
                            </div>
                        </>
                    )

                })

            }
        </div>


    )
}
