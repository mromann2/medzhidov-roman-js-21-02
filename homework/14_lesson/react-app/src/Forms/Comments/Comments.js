import React from "react";
import {apiResponse} from "../../api-mock/api";
import {Comment} from "../../components/Comment/Comment";
import "./Comments.css"

export class Comments extends React.Component{
    render(){

        // {/*<Comment name={"Roman"} text={"Приветик!"}/>*/}
        // {/*<Comment name={"Корал"} text={"Салам!"}/>*/}
        // {/*<Comment name={"Иван"} text={"На здоровье!"}/>*/}
        return <div className={"comments-form"}>
        {apiResponse.map(({name, text}, index) => <Comment key={index} name={name} text={text}/>)}
        </div>
    }
}