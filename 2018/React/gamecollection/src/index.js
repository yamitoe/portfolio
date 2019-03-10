import React from 'react';
import ReactDOM from 'react-dom';
import TickTackToe from './boardgames/components/Ticktactoe';
import Bingo from './boardgames/components/Bingo';
import './main.css';

import Prac from './boardgames/components/misc/prac01';

ReactDOM.render(
    <div>
        <TickTackToe/>
        <Bingo/>
        <Prac
        parkingSpace={1}
        floors={5}
        carType={'Big'}
        />
    </div>,
    document.getElementById('root')
);