import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ selectedOption, setOption, selectedDate }) => {

    const { name, slots } = selectedOption;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        console.log(name, phone, email);
        setOption(null);
        form.reset();
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle btn-primary bg-gradient-to-r from-primary to-secondary text-white absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-10'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select className="select select-bordered w-full">
                            {
                                slots.map((slot, idx) => <option key={idx} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full" required />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" required />
                        <input type="submit" value="SUBMIT" className='btn btn-block btn-primary bg-gradient-to-r from-primary to-secondary text-white' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;