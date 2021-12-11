import "./CardArticle.css"
import React from 'react'
import icon from '../../img/icon.png'


export class CardArticle extends React.Component{
    render(){
        return <article className="fish-buy">
            <img className="fish-buy__icon" src={icon} alt="fish"/>
                <div className="fish-buy__name">
                    <a className="fish-buy__a" href="#">{this.props.name}</a>
                    <input className="fish-buy__button" type="button" value="купить"/>
                </div>
        </article>
    }
}
