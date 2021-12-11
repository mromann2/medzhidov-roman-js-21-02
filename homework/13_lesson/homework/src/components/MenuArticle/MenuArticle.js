import "./MenuArticle.css"
import React from 'react'

export class MenuArticle extends React.Component{
    render(){
        return <article className="fish-menu">
            <a className="fish-menu__a" href="#">{this.props.linkName}</a>
            <span className="fish-menu__slogan">{this.props.slogan}</span>
        </article>
    }
}
