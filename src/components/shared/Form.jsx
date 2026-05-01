"use client";

import { toast } from "react-toastify";

export default function BookingForm({ animal }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(`Booking confirmed!`);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="pb-6 grid grid-cols-1 gap-10 md:grid-cols-2">

          <div>
            <label className="text-[#7f4f24] font-semibold">Name</label>
            <input type="text" className="input" placeholder="Name" required />
          </div>

          <div>
            <label className="text-[#7f4f24] font-semibold">Phone</label>
            <input type="number" className="input" placeholder="Phone" required />
          </div>

          <div>
            <label className="text-[#7f4f24] font-semibold">Email</label>
            <input type="email" className="input" placeholder="Email" required />
          </div>

          <div>
            <label className="text-[#7f4f24] font-semibold">Address</label>
            <input type="text" className="input" placeholder="Address" required />
          </div>

        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn mb-10 w-10/12 bg-[#1b4332] text-white font-medium">
            Confirm Booking
          </button>
        </div>
      </form>

      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
    </>
  );
}