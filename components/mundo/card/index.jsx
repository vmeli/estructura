import React from 'react';
import Curso from '../curso';

const lista = [
    {
        title: 'Cachorro',
        image: 'https://picsum.photos/id/237/200/300',
        categoria: 'mascotas'
    },
    {
        title: 'Recuerdos',
        image: 'https://picsum.photos/id/320/200/300',
        categoria: 'atardecer'
    },
    {
        title: 'Infancia',
        image: 'https://picsum.photos/id/820/200/300',
        categoria: 'columpio'
    }
]

const Card = () => (
    <>
        <h1>Ejemplos de card</h1>
        {
            lista.map(item =>
                <div className="wrapper-card">
                    <Curso title={item.title}
                        image={item.image}
                        categoria={item.categoria}
                    />
                </div>
            )
        }
    </>
)

export default Card;