import React from 'react';
import store from '../../../../app/redux/store';

import './NewTitleChoice.css';

import TitleCard from '../../../cards/title-card/TitleCard';

const NewTitleChoice = () => {
    return (
        <div id="new-title-choice">
            <h2>Quel titre souhaitez-vous demander ?</h2>
            <div id="suggested-titles">
                <h3>Titres suggérés</h3>
                <h4>Voici les titres que vous pouvez demander immédiatement.</h4>
                <div id="suggested-titles-container">
                    {
                        // TO DO : change for the right source !! Not impl yet in the back
                        store.getState().sailors.sailorBasicData.sailorEducationData.titles
                        .map(title => <TitleCard key={title.id} title={title}/>)
                    }
                    {/* <div className="card">
                        Lorem ipsum
                    </div>
                    <div className="card">
                        Lorem ipsum
                    </div>
                    <div className="card">
                        Lorem ipsum
                    </div> */}
                </div>
            </div>
            <div id="all-titles">
                <h3>Autres titres</h3>
                <h4>Et voici les titres pour lesquels vous devrez compléter votre dossier.</h4>
                <div id="other-titles-container">
                    <div className="card">
                        Lorem ipsum
                    </div>
                    <div className="card">
                        Lorem ipsum
                    </div>
                    <div className="card">
                        Lorem ipsum
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewTitleChoice;