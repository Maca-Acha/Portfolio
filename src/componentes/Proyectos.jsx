import Habilidades from './Habilidades'

export default function Proyectos() {
    return (
        <div className="contenedor-textos">
            <div className='proyectos'>
                <h2 className="titulo">Proyectos</h2>
                <div className="subrayado"></div>
            </div>
                <p className="texto-cuerpo">
                En mi paso en el bootcamp, como en la fundación FPHV, he desarrollado distintos proyectos tanto individuales como en equipo. Me han ayudado a desarrollar distintas habilidades que se pueden ver reflejadas en los ejemplos de aqui abajo como en el certificado otorgado por el bootcamp.
                </p>
            <div>
                <Habilidades/>
                
            </div>
        </div>
    )
}