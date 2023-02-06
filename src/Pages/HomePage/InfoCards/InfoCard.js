import React from 'react';

const InfoCard = ({ card }) => {

    const { name, description, bgClass, icon } = card;

    return (

        <div className={`card lg:card-side px-6 py-1 ${bgClass} shadow-xl`}>
            <figure><img className='pt-8 lg:pt-0' src={icon} alt="Movie" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default InfoCard;