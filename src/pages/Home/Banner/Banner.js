import React from 'react';
import chair from '../../../assets/images/chair.png';
import backgroundPhoto from '../../../assets/images/bg.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <section className="hero bg-no-repeat lg:bg-left bg-contain lg:flex lg:items-center lg:justify-center px-5" style={{ backgroundImage: `url(${backgroundPhoto})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts <br />Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Banner;