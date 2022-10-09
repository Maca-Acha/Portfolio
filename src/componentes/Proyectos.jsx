import Habilidades from './Habilidades'
import extreme from '../assets/extreme.png'
import insignia from '../assets/insignia-MERN.png'
import diplomatic from '../assets/diplomatic.png'

const proyectos =[
    {nombre: "Insignia MERN", src: insignia, id: 1},
    {nombre: "Extreme", src: extreme, id: 2},
    {nombre: "Diplomatic Week", src: diplomatic, id: 3}
]
export default function Proyectos() {
    return (
        <div className="contenedor-textos">
            <div className='proyectos'>
                <h2 className="titulo">Proyectos</h2>
                <div className="subrayado"></div>
            </div>
                <p className="texto-cuerpo texto-proyectos">
                En mi paso en el bootcamp, como en la fundación FPHV, he desarrollado distintos proyectos tanto individuales como en equipo. Me han ayudado a desarrollar distintas habilidades que se pueden ver reflejadas en los ejemplos de aqui abajo como en el certificado otorgado por el bootcamp.
                </p>
                <div className='cont-proyecto'>
                    {proyectos.map(proyecto => {
                        return(
                            <div className='cont-logo-proyecto'>
                                <img className="logo-proyecto" key={proyecto.id} alt= {proyecto.nombre} src={proyecto.src} />
                                <p className='nombre-proyecto'>{proyecto.nombre}</p>
                            </div>
                        )
                    })}
                </div>
            <div>
                <Habilidades/>
            </div>
        </div>
    )
}