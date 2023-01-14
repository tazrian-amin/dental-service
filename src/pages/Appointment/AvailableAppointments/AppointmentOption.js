import React from 'react';

const AppointmentOption = ({ appointmentOption, setOption }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary justify-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day!'}</p>
                <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        className={`${slots.length === 0 ? 'btn btn-disabled' : 'btn btn-primary bg-gradient-to-r from-primary to-secondary text-white'}`}
                        onClick={() => setOption(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;