import React from 'react'
import { ListGroup } from 'react-bootstrap'
import image_profil_vide from '../assets/profil_vide.jpg'



export default function Critique() {

    const critiqueData = [
        {
            "name": "John Doe",
            "text": "J'ai adoré ce film ! L'histoire est captivante et les personnages sont attachants. Les voyages dans le temps sont bien exploités et le mélange d'action, d'humour et de romance est parfaitement dosé."
          },
          {
            "name": "Jane Smith",
            "text": "Retour vers le futur est un classique du cinéma ! Les performances des acteurs sont excellentes, en particulier celle de Michael J. Fox dans le rôle de Marty McFly. L'intrigue est intelligente et le scénario bien construit."
          },
          {
            "name": "Robert Johnson",
            "text": "Ce film est un pur divertissement ! Les effets spéciaux sont impressionnants pour l'époque et la musique est entraînante. C'est une aventure palpitante qui vous transporte à travers le temps et vous laisse avec le sourire."
          },
          {
            "name": "Sarah Williams",
            "text": "Retour vers le futur est un chef-d'œuvre intemporel. L'humour est génial et les références aux années 80 sont amusantes. Les thèmes abordés, tels que l'amitié et le destin, sont traités de manière touchante. C'est un film que je peux regarder encore et encore."
          },
          {
            "name": "David Thompson",
            "text": "J'ai été époustouflé par la créativité de ce film. L'idée de voyager dans le temps et de rencontrer ses propres parents est brillamment exécutée. Les dialogues sont percutants et l'émotion est au rendez-vous. Retour vers le futur est un incontournable du genre."
          }
        // Ajoutez plus d'objets de données pour les autres cartes
    ];
    return (
        <ListGroup className='w-50 mb-5'>
            <p className='fw-bold text-dark text-center fs-1'>Critiques</p>
            {critiqueData.map((critique, index) => (
                <ListGroup.Item key={index}>
                    <div className='row'>
                        <div className='col-1'><img className='rounded-circle' style={{ width: 50 }} src={image_profil_vide}></img></div>
                        <div className='col-11 align-self-center'> {critique.name}</div>
                        <small className='col-12 mt-2'>{critique.text}</small>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
