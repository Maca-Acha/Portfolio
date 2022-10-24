import { BsGithub, BsLinkedin, BsTelegram, BsWhatsapp} from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
    
    return (
        <div className="contenedor-footer" >
            <div className="iconos-sociales" >
                <a className="icono-social" href="https://github.com/Maca-Acha"><BsGithub/></a>
                <a className="icono-social" href="https://www.linkedin.com/in/macarena-acha/"><BsLinkedin/></a>
                <a className="icono-social" href="https://github.com/Maca-Acha"><BsTelegram/></a>
                <a className="icono-social" href="https://wa.me/542213641044"><BsWhatsapp/></a>
                <a className="icono-social" href="mailto:achamariamacarena@gmail.com"><MdAlternateEmail/></a>
            </div>
            <p className="texto-footer">© 2022 | Página desarrollada por Maca Acha </p>
        </div>
    )
}