import React from 'react';


const TitleCard = ({ title }) => {

    // const listSailorEducationData = () => {
    //     return titles;
    // }

    return (
        <div className="card">
            {title.titleName}
            {title.titleNumber}
            {title.deliveryDate}
            {title.revalidationDate}
            {title.effectDate}
            {title.expirationDate}
            {title.restrictions}
            {title.prerogatives}
        </div>
    );
};

export default TitleCard;