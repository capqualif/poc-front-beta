import React from 'react';

import './TitleDetails.css';

const TitleDetails = () => {
    return (
        <div id="title-details">
            <h2>Titre du titre (hihi).</h2>
            <div id="title" className="card">
                titleNumber : <br/>
                deliveryDate : <br/>
                revalidationDate : <br/>
                effectDate : <br/>
                expirationDate : <br/>
                restrictions : <br/>
                prerogatives : <br/>
            </div>
        </div>
    );
};

export default TitleDetails;