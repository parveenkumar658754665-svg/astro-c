import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import BookSession from "./Pages/BookSession";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Booking from "./Components/Booking/Booking.js";

import { load } from "@cashfreepayments/cashfree-js";
import axios from "axios";
import PaymentConfirmation from "./Components/Booking/PaymentConfirmation.js";

const App = () => {
  const [showBookingPage, setShowBookingPage] = useState(false);
  const [cashfree, setCashfree] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [orderDetails, setOrderDetails] = useState({});

  const handleSetShowBookingPage = async (par) => {
    setShowBookingPage(par);
  };

  useEffect(() => {
    const initializeSDK = async () => {
      const sdk = await load({
        mode: "production",
      });
      setCashfree(sdk);
    };
    initializeSDK();
  }, []);

  const getSessionId = async (name, email, phone) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/generate-sessionid`,
        { name, email, phone },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        const data = response.data;
        const orderInfo = {
          createdAt: data.created_at,
          orderId: data.order_id,
          orderAmount: data.order_amount,
          customerName: data.customer_details.customer_name,
          customerEmail: data.customer_details.customer_email,
          customerPhone: data.customer_details.customer_phone,
        };
        setOrderDetails(orderInfo); // still sets the state for UI
        setSessionId(data.payment_session_id);
        return orderInfo; // return this instead of relying on state
      } else {
        console.error("Error generating sessionId");
        return null;
      }
    } catch (error) {
      console.error("Error generating sessionId:", error);
      return null;
    }
  };

  const handlePayment = async () => {
    try {
      if (!cashfree) {
        console.error("Cashfree SDK not initialized.");
        return;
      }

      if (!sessionId) {
        console.error("Session Id not found.");
        return;
      }

      let checkoutOptions = {
        paymentSessionId: sessionId,
        returnUrl: `${window.location.origin}/payment-confirmation`,
        notifyUrl: `${process.env.REACT_APP_API_URL}/cashfreeWebhook`,
      };

      await cashfree
        .checkout(checkoutOptions)
        .then(function (data) {
          console.log(data, "Payment Initiate");
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <Booking
        showBookingPage={showBookingPage}
        setShowBookingPage={handleSetShowBookingPage}
        getSessionId={getSessionId}
        orderDetails={orderDetails}
        handlePayment={handlePayment}
      />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                showBookingPage={showBookingPage}
                setShowBookingPage={handleSetShowBookingPage}
                getSessionId={getSessionId}
              />
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book-session" element={<BookSession />} />
          <Route
            path="/payment-confirmation"
            element={<PaymentConfirmation />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
