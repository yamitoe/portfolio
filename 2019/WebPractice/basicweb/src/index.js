import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component{

    render() {
        return (
            <div>
                <section className="navbar">
                    <nav>
                        <div>Home</div>
                        <div>Menu</div>
                        <div>Logo</div>
                        <div>About Us</div>
                        <div>Locations</div>
                    </nav>
                </section>
               <h1>Coffe Shop</h1>
               <section className="imgs">
                    <div><img src="" alt=""/></div>
                    <div><img src="" alt=""/></div>
                    <div><img src="" alt=""/></div>
               </section>
            </div>
        );
    }
}

ReactDOM.render(
    <MainPage/>,
    document.getElementById('root')
);


