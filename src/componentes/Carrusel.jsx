import Carousel from 'react-bootstrap/Carousel';
import recurso1 from '../assets/recurso1.png'
import recurso2 from '../assets/recurso2.png'
import recurso3 from '../assets/recurso3.png'

const recursos = [
    {nombre: "Mindhub", src: recurso1, id: 1},
    {nombre: "FDA-UNLP", src: recurso2, id: 2},
    {nombre: "Coderhouse", src: recurso3, id: 3}
]

export default function Carrusel() {
    return (
        <Carousel className='carrusel'>
            {recursos.map(recurso => {
                return(
                <Carousel.Item className='carrusel-item'>
                    <div className='cont-img'>
                        <img
                        className="carrusel-img d-block"
                        src={recurso.src}
                        alt={recurso.name}
                        key={recurso.id}
                        />
                    </div>
                </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

