import React from 'react';
import './App.css';
import { Goal } from './components/Goal/Goal';
import { Input } from './components/Input/Input';
import { SendButton } from './components/SendButton/SendButton';
import { DelButton } from './components/DelButton/DelButton';

function App() {
  return (
    <>
      <Goal text="Сделать домашку" />
      <DelButton />
      <Goal text="Убока" />
      <DelButton />
      <Goal text="Тренировка" />
      <DelButton />
      <Input text="Новая задача" />
      {' '}
      <SendButton />
    </>
);
}

export default App;
