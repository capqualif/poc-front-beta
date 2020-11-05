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
                <h3>Bonjour, {store.getState().sailors.sailorBasicData.sailorCivilData.firstName} !</h3>
            </div>
            <button id="ask-for-a-title">
                Demander un titre
            </button>
            <div id="applications-in-progress">
                <p className="title">Mes demandes en cours</p>
                <ul className="card">
                    <li>CFBS : dossier en traitement ⏳</li>
                    <li>Premiers secours : dossier à compléter 🖊️</li>
                </ul>
            </div>
            <div id="main-title">
                <p className="title">Mon titre le plus récent</p>
                <div className="card">Matelot Pont</div>
            </div>
            <div id="other-titles">
                <p className="title">Mes autres titres</p>
                <div id="other-titles-container">
                    <div className="card other-titles-card">Brevet de capitaine 200</div>
                    <div className="card other-titles-card">Attestation XXX</div>
                    <div className="card other-titles-card">Certificat de formation de base à la sécurité (CFBS)</div>
                    <div className="card other-titles-card">Certificat de formation de base à la sécurité</div>
                </div>

            </div>
            <div id="service-lines">
                <p className="title">Mes lignes de service</p>
                <div className="card service-line-card">Ba blab blab la lorem ipsum fugu dzouigi dzouigi</div>
                <div className="card  service-line-card">Ba blab blab la lorem ipsum fugu dzouigi dzouigi</div>
                <div className="card  service-line-card">Ba blab blab la lorem ipsum fugu dzouigi dzouigi</div>
            </div>
        </div>
    );
};

export default Dashboard;