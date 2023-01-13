import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png';
import backgroundImage from '../../../assets/images/bg.png';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <>
            <header className="hero bg-no-repeat bg-cover px-5" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="hero-content flex-col md:flex-row-reverse items-center justify-around">
                    <img src={chair} alt='' className="md:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </header>
        </>
    );
};

export default AppointmentBanner;