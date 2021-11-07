import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Comments } from './Forms/Comments/Comments';
import ComponentWithHelper from './wrappers/withHelper';

// const SidebarWithHelper = withHelper(Sidebar, 'Это Сайдбар');
// const CommentsWithHelper = withHelper(Comments, 'Это Комментарии');

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <div className="sidebar-container">
          <ComponentWithHelper comment="Это Sidebar">
            <Sidebar />
          </ComponentWithHelper>
        </div>
        <div className="content">
          <ComponentWithHelper comment="Это Comments">
            <Comments />
          </ComponentWithHelper>
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
