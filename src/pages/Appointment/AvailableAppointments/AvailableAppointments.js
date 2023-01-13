import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [selectedOption, setOption] = useState(null);

    useEffect(() => {
        fetch('appointmentSlots.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <div className='my-20'>
            <p className='text-center text-secondary text-lg font-semibold'>Available Services on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setOption={setOption}
                    ></AppointmentOption>)
                }
            </div>
            {
                selectedOption &&
                <BookingModal
                    selectedOption={selectedOption}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;