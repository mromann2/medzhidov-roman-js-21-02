import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Comments } from './Forms/Comments/Comments';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="content">
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;

//  <div>
// {/*<Comment name={"Roman"} text={"Приветик!"}/>*/}
// {/*<Comment name={"Корал"} text={"Салам!"}/>*/}
// {/*<Comment name={"Иван"} text={"На здоровье!"}/>*/}
// {/*{apiResponse.map(({name, text}, index) => <Comment key={index} name={name} text={text}/>)}*/}
//  </div>
