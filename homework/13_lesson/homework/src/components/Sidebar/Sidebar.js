import "./Sidebar.css"
import React from 'react'

export class Sidebar extends React.Component{
    render(){
        return <aside>
            <div>
                <p className="checkbox-group-name">Морская рыба</p>
                <label><input type="checkbox" name="shark" value="shark"/> Акула </label>
                <label><input type="checkbox" name="perch" value="perch"/> Окунь</label>
                <label><input type="checkbox" name="halibut" value="halibut"/> Палтус</label>
                <label><input type="checkbox" name="cod" value="cod"/> Треска</label>
                <p className="checkbox-group-name">Пресноводная рыба</p>
                <label><input type="checkbox" name="white-eye-bream" value="white-eye-bream"/> Белоглазка</label>
                <label><input type="checkbox" name="sturgeon" value="sturgeon"/> Осётр</label>
                <label><input type="checkbox" name="еuropean-eel" value="еuropean-eel"/> Речной угорь</label>
                <label><input type="checkbox" name="burbot" value="burbot"/> Налим</label>
            </div>
        </aside>
    }
}