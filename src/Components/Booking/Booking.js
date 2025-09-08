import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Booking = ({
  showBookingPage,
  setShowBookingPage,
  getSessionId,
  orderDetails,
  handlePayment,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [showEmailBox, setShowEmailBox] = useState(true);
  const [showOrderBox, setShowOrderBox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      alert("Emails do not match");
    } else {
      // Handle successful submission logic
      console.log("Submitted:", name, email, phone);
    }
  };

  return (
    <>
      {showBookingPage && (
        <div className="fixed top-0 left-0 h-screen w-screen z-50 bg-black/50 flex justify-center items-center">
          {showEmailBox && (
            <div
              className="w-[90%] max-w-md bg-[#fdf9f6] rounded-2xl shadow-xl overflow-hidden"
              style={{ fontFamily: "serif" }}
            >
              <div className="bg-gradient-to-r from-amber-200 to-pink-100 px-5 py-3 flex justify-between items-center text-gray-700 font-semibold text-lg">
                <span>User Details</span>
                <button
                  onClick={() => setShowBookingPage(false)}
                  className="text-xl hover:text-red-600 transition"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="email"
                  name="confirmEmail"
                  placeholder="Confirm your email"
                  required
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <button
                  type="submit"
                  onClick={async () => {
                    if (name && email && email === confirmEmail && phone) {
                      const details = await getSessionId(name, email, phone);
                      console.log(details); // This will have the expected data
                      if (details) {
                        setShowEmailBox(false);
                        setShowOrderBox(true);
                      }
                    } else {
                      alert("Recheck all fields");
                    }
                  }}
                  className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white py-2 rounded-lg text-lg font-semibold hover:opacity-90 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
          {showOrderBox && (
            <div
              className="w-[90%] max-w-md bg-[#fdf9f6] rounded-2xl shadow-xl overflow-hidden pb-2"
              style={{ fontFamily: "serif" }}
            >
              <div className="bg-gradient-to-r from-amber-200 to-pink-100 px-5 py-3 flex justify-between items-center text-gray-700 font-semibold text-lg">
                <span>Order Details</span>
                <button
                  onClick={() => setShowBookingPage(false)}
                  className="text-xl hover:text-red-600 transition"
                >
                  ✕
                </button>
              </div>
              <div className="p-5">
                <p>
                  <strong>Order ID:</strong> {orderDetails.orderId}
                </p>
                <p>
                  <strong>Order Amount:</strong> Rs.{orderDetails.orderAmount}
                </p>
                <p>
                  <strong>Customer Name:</strong> {orderDetails.customerName}
                </p>
                <p>
                  <strong>Customer Email:</strong> {orderDetails.customerEmail}
                </p>
                <p>
                  <strong>Customer Phone:</strong> {orderDetails.customerPhone}
                </p>
                <p>
                  <strong>Order Created At:</strong>{" "}
                  {new Date(orderDetails.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="w-full flex justify-center">
                <button
                  onClick={handlePayment}
                  className="w-[90%]   bg-gradient-to-r from-purple-400 to-pink-500 text-white py-2 rounded-lg text-lg font-semibold hover:opacity-90 transition"
                >
                  Make Payment
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="fixed flex h-[200px] items-center  justify-between p-10 w-full bottom-[20px] sm:bottom-0 left-0 ">
        <a href={`tel:+919773578595`} className="">
          <FaPhoneAlt className="text-5xl text-white bg-black p-2   rounded-full" />
        </a>
        <a href={`http://wa.me/+917011809637`}>
          <IoLogoWhatsapp className="text-5xl text-[#08c241] " />
        </a>
      </div>
    </>
  );
};

export default Booking;
