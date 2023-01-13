import React from 'react';

const TestimonyCard = ({ testimony }) => {

    const { comment, photo, name, location } = testimony;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{comment}</p>
                <div className='flex items-center justify-start mt-5'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={photo} alt="" />
                        </div>
                    </div>
                    <div className="ml-5">
                        <h2 className="card-title">{name}</h2>
                        <h4>{location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonyCard;