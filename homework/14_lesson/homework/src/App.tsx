import React from 'react';
import './App.css';
import { Goal } from './components/Goal/Goal';
import { Input } from './components/Input/Input';



class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.addtodo = this.addtodo.bind(this);
        this.delete = this.delete.bind(this);
        this.state = {
            todos: [],
        };
    }

    addtodo(text: string): void {
        this.setState({
            todos: this.state.todos.concat([{
            text,
            id: Date.now(),
            show: true,
        }]),
        });
    }

    delete(id: number): void {
        this.setState({
            todos: this.state.todos.filter((line: any) => line.id !== id),
        });
    }

    render() {
        return (
          <>
            {this.state.todos.map((todo: { id: number, text: string, show: boolean }) => <Goal text={todo.text} key={todo.id} id={todo.id} onDel={this.delete} />)}
            <Input text="Новая задача" onCreate={this.addtodo} />
          </>
        );
    }
}

export default App;
