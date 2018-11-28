import React from 'react';
import ReactDOM from 'react-dom';
import TickTackToe from './boardgames/components/Ticktactoe';
import Bingo from './boardgames/components/Bingo';
import './main.css';

ReactDOM.render(
    <div>
        <TickTackToe/>
        <Bingo/>
    </div>,
    document.getElementById('root')
);