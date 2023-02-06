import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import Button from '../../Components/Button/Button';

const MakeAppoinment = () => {
    return (
        <div className="hero px-6 my-32 w-100"
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero-content flex-col lg:flex-row items-center justify-center" >
                <img src={doctor} alt='' className="lg:w-[606px] hidden lg:block -mt-[150px] -mb-4 rounded-lg" />
                <div className='py-8 lg:py-0'>
                    <h1 className="text-xl text-primary font-semibold ">Appointment</h1>
                    <h1 className="text-2xl font-semibold text-white ">Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;