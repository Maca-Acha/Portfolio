import foto from "../assets/foto-principal.png"

export default function inicio() {
    return (
        <div className="inicio">
            <div className="inicio-texto">
                <div className="primera-linea">
                    <h1>Hola, soy</h1>
                    <h1 className="nombre"> Macarena Acha</h1>
                </div>
                <h1>Desarrolladora Full Stack
                </h1>
            </div>
            <div className="contenedor-foto">
                <img alt="foto" src={foto} className="foto" />
            </div>            
        </div>
    )
}