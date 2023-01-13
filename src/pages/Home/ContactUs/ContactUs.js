import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section className='mt-20 py-20 bg-no-repeat bg-cover' style={{ background: `url(${appointment})` }}>
            <h3 className='text-xl text-secondary font-bold text-center mb-2'>Contact Us</h3>
            <h1 className='text-4xl text-center text-white'>Stay connected with us</h1>
            <form className="flex flex-col items-center justify-center mx-10">
                <input type="text" placeholder="Email Address" className="input w-full lg:w-2/5 mt-10" />
                <input type="text" placeholder="Subject" className="input w-full lg:w-2/5 my-5" />
                <textarea className="textarea w-full lg:w-2/5 h-32" placeholder="Your Message"></textarea>
                <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-5' type="submit" value="Submit" />
            </form>
        </section>
    );
};

export default ContactUs;