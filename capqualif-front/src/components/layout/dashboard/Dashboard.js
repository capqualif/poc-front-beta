import React from 'react';
import store from '../../../app/redux/store';

import './Dashboard.css';

import sailorPicMock from '../../../resources/img/mocks/sailor.png';
import menuPicMock from '../../../resources/img/mocks/menu.png';

const Dashboard = () => {
    return (
        <div id="dashboard">
            {/* <h2>MON TABLEAU DE BORD</h2> */}
            <nav>
                <div id="photo">
                    <img src={sailorPicMock} alt="a fake sailor's pic"/>
                </div>
                <div id="menu">
                    <img src={menuPicMock}/>
                </div>
            </nav>
            <div id="greetings">
                <h3>Bonjour, {store.getState().sailors.sailorCivilData.firstName} !</h3>
            </div>
            <div id="titles">
                <button id="ask-for-a-title">
                    Demander un titre
                </button>
                <div id="my-titles">
                    <div id="main-title">
                        <p className="title">Mon titre principal</p>
                        <div className="card">Matelot Pont</div>
                    </div>
                    <div id="other-titles">
                        <p className="title">Mes autres titres</p>
                        <div className="card">Matelot Pont</div>
                        <div className="card">Matelot Pont</div>
                    </div>
                </div>
            </div>
            <div id="applications-in-progress">
                <p className="title">Mes demandes en cours</p>
                <ul>
                    <li>Matelot Pont</li>
                    <li>CFBS</li>
                    <li>Premiers secours</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;