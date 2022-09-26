import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/JavaScript-logo.png"
import node from "../assets/node.png"
import heroku from "../assets/heroku.png"
import react from "../assets/react.svg"
import vite from "../assets/vite.png"
import postman from "../assets/postman.png"
import redux from "../assets/redux.png"
import github from "../assets/github.png"
import git from "../assets/git.png"
import bootstrap from "../assets/bootstrap.png"
import express from "../assets/espressjs.png"
import mongo from "../assets/mongoDB.png"


const logos = [
    {nombre:"HTML", src: html, id:"html-logo"},
    {nombre:"CSS", src: css, id:"css-logo"},
    {nombre:"java Script", src: js, id:"js-logo"},
    {nombre:"Node", src: node, id:"node-logo"},
    {nombre:"Heroku", src: heroku, id:"heroku-logo"},
    {nombre:"React", src: react, id:"react-logo"},
    {nombre:"Vite", src: vite, id:"vite-logo"},
    {nombre:"Postman", src: postman, id:"postman-logo"},
    {nombre:"Redux", src: redux, id:"redux-logo"},
    {nombre:"Github", src: github, id:"github-logo"},
    {nombre:"Git", src: git, id:"git-logo"},
    {nombre:"Bootstrap", src: bootstrap, id:"bootstrap-logo"},
    {nombre:"Express", src: express, id:"express-logo"},
    {nombre:"Mongo DB", src: mongo, id:"mongo-logo"},
]
export default function Habilidades() {
    return (
        <div className="contenedor-textos">
            <div className="habilidades">
                <h2 className="titulo-habilidades">Habilidades</h2>
                <div className="subrayado sbr-habi"></div>
            </div>
            <div className="habilidades">
            {logos.map(logo => {
                            return(
                                <img className="logo-habilidad" key={logo._id} alt= {logo.name} src={logo.src} />
                            )
                        })}
            </div>
                
            
        </div>
    )
}