import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestimonyCard from './TestimonyCard';

const Testimonial = () => {

    const testimonyData = [
        {
            id: 1,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            photo: people1,
            name: 'Harry Potter',
            location: 'California'
        },
        {
            id: 2,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            photo: people2,
            name: 'Ginny Weasley',
            location: 'California'
        },
        {
            id: 3,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            photo: people3,
            name: 'Hermione Granger',
            location: 'California'
        },
    ]

    return (
        <section>
            <div className='mt-20 mx-10 md:mx-5 flex flex-col-reverse md:flex-row items-start md:items-center justify-between'>
                <div>
                    <h3 className='text-xl text-secondary font-bold mt-5 md:mt-0'>Testimonial</h3>
                    <h1 className="text-4xl font-semibold">What Our Patients Says</h1>
                </div>
                <img src={quote} alt="" className='w-1/5' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-20'>
                {
                    testimonyData.map(testimony => <TestimonyCard
                        key={testimony.id}
                        testimony={testimony}
                    ></TestimonyCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;