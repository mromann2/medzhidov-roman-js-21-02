import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {MenuArticle} from "./components/MenuArticle/MenuArticle"
import {CardArticle} from "./components/CardArticle/CardArticle";
import React from 'react'

import './App.css';

function App() {
  return <React.Fragment>
      <Header/>
      <main className="main">
          <Sidebar/>
          <section className="section">
              <div className="section-header">
                  <h2>Рыбы на любой вкус</h2>
                  <span>Мы продаем рыбов, а не только показываем!</span>
              </div>
              <div className="first-block">
                  <MenuArticle linkName={'Замороженные рыбы'} slogan={"Мы заморозили рыбов для вас"}/>
                  <MenuArticle linkName={'Живые рыбы'} slogan ={"На кухню или на разведение"}/>
              </div>
              <div className="section-header">
                  <h3 className="section-header__h3">Популярные</h3>
              </div>
              <div className="second-block">
                  <CardArticle name={"Палтус"}/>
                  <CardArticle name={"Сёмга"}/>
                  <CardArticle name={"Сом"}/>
                  <CardArticle name={"Мойва"}/>
                  <CardArticle name={"Сельдь"}/>
                  <CardArticle name={"Тунец"}/>
              </div>
          </section>
      </main>
      <Footer/>
  </React.Fragment>

}

export default App;
