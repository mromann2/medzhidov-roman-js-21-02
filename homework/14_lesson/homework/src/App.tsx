import React from 'react';
import './App.css';
import { Goal } from './components/Goal/Goal';
import { Input } from './components/Input/Input';

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.addGoal = this.addGoal.bind(this);
        this.delete = this.delete.bind(this);
        this.state = {
            goals: localStorage.getItem('Goals') ? JSON.parse(localStorage.getItem('Goals') as string) : [],
        };
    }

    addGoal(text: string): void {
        this.setState({
            goals: this.state.goals.concat([{
            text,
            id: Date.now(),
            show: true,
        }]),
        }, () => localStorage.setItem('Goals', JSON.stringify(this.state.goals)));
    }

    delete(id: number): void {
        this.setState({
            goals: this.state.goals.filter((line: any) => line.id !== id),
        }, () => localStorage.setItem('Goals', JSON.stringify(this.state.goals)));
    }

    render() {
        return (
          <>
            {this.state.goals.map((goal: {
                id: number, text: string, show: boolean
            }) => <Goal text={goal.text} key={goal.id} id={goal.id} onDel={this.delete} />)}
            <Input text="Новая задача" onCreate={this.addGoal} />
          </>
        );
    }
}

export default App;
