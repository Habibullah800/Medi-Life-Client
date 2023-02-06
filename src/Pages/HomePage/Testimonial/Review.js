import React from 'react';

const Review = ({ review }) => {

    const { name, location, description, image } = review;

    return (
        <section>
            <div className="card">
                <div className="card-body ">
                    <p>{description}</p>

                    <div className="card-actions px-2 pt-[10px] gap-6 items-center">
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image} alt='' />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold">{name}</h2>
                            <p>{location}</p>

                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Review;