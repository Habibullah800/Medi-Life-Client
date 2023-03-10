import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';



const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
        }

    ]
    return (
        <div>
            <div className='text-center my-16'>
                <h3 className='text-primary text-2xl font-semibold'> Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-[34px] my-10 px-[2%]'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;