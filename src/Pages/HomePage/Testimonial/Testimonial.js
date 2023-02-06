import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';



const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people1,
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people2,
        },
        {
            _id: 3,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people3,
        }
    ]


    return (
        <section className='my-8 mx-[2px] lg:mx-[2%]'>
            <div className='flex justify-between items-center justify-center'>
                <div >
                    <h1 className="text-xl text-primary font-semibold ">Testimonial</h1>
                    <h1 className="text-2xl font-semibold text-black ">What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48 ' src={quote} alt=''></img>
                </figure>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-[20px] my-10'>
                {reviews.map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>)}

            </div>

        </section>

    );
};

export default Testimonial;