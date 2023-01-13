import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-20 lg:mt-56 bg-no-repeat bg-contain' style={{ background: `url(${appointment})` }}>
            <div className="flex items-center">
                <img src={doctor} alt='' className="hidden lg:flex w-1/2 -mt-32" />
                <div className='p-10 text-white'>
                    <h3 className='text-xl text-secondary font-bold pb-5'>Appointment</h3>
                    <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;