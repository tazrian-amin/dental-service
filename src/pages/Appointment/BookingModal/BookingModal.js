import React from 'react';

const BookingModal = ({ selectedOption }) => {

    const { name, slots } = selectedOption;

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle btn-primary bg-gradient-to-r from-primary to-secondary text-white absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="py-4">{slots.length}</p>
                </div>
            </div>
        </>
    );
};

export default BookingModal;