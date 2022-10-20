import Carrusel from '../componentes/Carrusel'

export default function SobreMi() {

    return (
        <div className="contenedor-textos" id='sobremi'>
            <div className="back-titulo">
                <h2 className="titulo">Sobre mi</h2>
                <div className="subrayado"></div>
            </div>
            <div className='contenedor-sobremi'>
                <p className="texto-cuerpo">
                Soy programadora <span className="detalle">Full Stack en MERN</span> (MongDB, Express, React, Node). Gracias a mi paso en Mindhub, de más de 600 horas, modalidad full time, simulando un ambiente real, desarrollé distintos proyectos grupales e individuales, los cuales podrás observar mi Github.

                Cuento con estudios previos de <span className="detalle">Diseño Industrial y Diseño UX/UI,</span> los cuales me permiten tener una visión general de distintos conceptos, y una gran inserción en los trabajos en grupo. 

                En mi desarrollo profesional soy una persona comprometida y responsable, buscando siempre obtener los mejores resultados, aprendiendo y progresando en cada momento.  

                Busco la oportunidad de insertarme laboralmente dispuesta a capacitarme para mejorar mis capacidades, e integrarme en el mundo digital que es lo que me apasiona. 
                </p>
                <Carrusel className='carrusel'/>
            </div>
        </div>
    )
}