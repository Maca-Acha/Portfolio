import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import node from "../assets/node.png"
import netlify from "../assets/logomark.svg"
import react from "../assets/react.svg"
import vite from "../assets/vite.png"
import postman from "../assets/postman.png"
import redux from "../assets/redux.png"
import github from "../assets/github.png"
import git from "../assets/git.png"
import bootstrap from "../assets/bootstrap.png"
import express from "../assets/express.png"
import mongo from "../assets/mongo.png"
import firebase from "../assets/firebase.png"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const logos = [
    {nombre:"HTML", src: html, id:"html-logo", i: 0},
    {nombre:"CSS", src: css, id:"css-logo", i: 1},
    {nombre:"Java Script", src: js, id:"js-logo", i: 2},
    {nombre:"Node", src: node, id:"node-logo", i: 3},
    {nombre:"Netlify", src: netlify, id:"netlify-logo", i: 4}
]
const logos2 = [
    {nombre:"React", src: react, id:"react-logo", i: 5},
    {nombre:"Vite", src: vite, id:"vite-logo", i: 6},
    {nombre:"Postman", src: postman, id:"postman-logo", i: 7},
    {nombre:"Redux", src: redux, id:"redux-logo", i: 8},
    {nombre:"Firebase", src: firebase, id:"firebase-logo", i: 9}
]
const logos3 = [
    {nombre:"Github", src: github, id:"github-logo", i: 9},
    {nombre:"Git", src: git, id:"git-logo", i: 10},
    {nombre:"Bootstrap", src: bootstrap, id:"bootstrap-logo", i: 11},
    {nombre:"Express", src: express, id:"express-logo", i: 12},
    {nombre:"Mongo DB", src: mongo, id:"mongo-logo", i: 13}
]

export default function Habilidades() {
    useEffect(()=>{
        AOS.init()
    },[])

    return (
        <div className="contenedor-habilidades">
            <div className="habilidades" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <h2 className="titulo-habilidades">Habilidades</h2>
                <div className="subrayado sbr-habi"></div>
            </div>
            <div className="habilidades-logos">
                <div className="habilidades-espaciado">
                    {logos.map(logo => {
                            return(
                                <div className="cont-logo" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                                    <div className="back-logo">
                                        <img className="logo-habilidad" key={logo.id} alt= {logo.nombre} src={logo.src} />
                                    </div>
                                    <p id="nombre-logo-skil">{logo.nombre}</p>
                                </div>
                                )
                        })}
                </div>
            </div>
            <div className="habilidades-logos ">
                <div className="habilidades-centro">
                    {logos2.map(logo => {
                            return(
                                <div className="cont-logo" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                                    <div className="back-logo">
                                        <img className="logo-habilidad" key={logo.id} alt= {logo.nombre} src={logo.src} />
                                    </div>
                                    <p id="nombre-logo-skil">{logo.nombre}</p>
                                </div>
                                )
                        })}
                </div>
            </div>
            <div className="habilidades-logos">
                <div className="habilidades-espaciado">
                    {logos3.map(logo => {
                            return(
                                <div className="cont-logo" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                                    <div className="back-logo">
                                        <img className="logo-habilidad" key={logo.id} alt= {logo.nombre} src={logo.src} />
                                    </div>
                                    <p id="nombre-logo-skil">{logo.nombre}</p>
                                </div>
                                )
                        })}
                </div>
            </div>
        </div>
    )
}