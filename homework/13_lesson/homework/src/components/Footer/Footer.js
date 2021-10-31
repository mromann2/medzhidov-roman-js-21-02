import "./Footer.css"
import React from 'react'

export class Footer extends React.Component{
    render(){
        return <footer className="footer"><span>Контакты </span> <span className="right">&copy; 2021 ИП Рыбов О.А.</span></footer>
    }
}