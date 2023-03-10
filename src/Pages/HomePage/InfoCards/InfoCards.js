import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Opening 9:00 am to 8:00 pm Everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit Our Location',
            description: 'Opening 9:00 am to 8:00 pm Everyday',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us',
            description: 'Opening 9:00 am to 8:00 pm Everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }

    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-10 px-[2%]'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }

        </div>
    );
};

export default InfoCards;