import SelectDoctor from "./SelectDoctor";
import ConsultationDetails from "./ConsultationDetails";
import SelectDateTime from "./SelectDateTime";
import ConfirmBooking from "./ConfirmBooking";
import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";

function Booking() {
  const navigate = useNavigate();
  const [step, setStep] = useState("selectDoctor");
  const [bookingData, setBookingData] = useState({
    doctor: null,
    concern: "",
    file: null,
    date: "",
    time: "",
  });

   const handleNext = () => {
    if (step === "selectDoctor") setStep("consultationDetails");
    else if (step === "consultationDetails") setStep("selectDateTime");
    else if (step === "selectDateTime") setStep("confirmBooking");
  };

   const handleDataChange = (key, value) => {
    setBookingData((prev) => ({ ...prev, [key]: value }));
  };
    const handleConfirmation = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        alert("Please log in to confirm your booking.");
        return;
      }
      try {
        const newBooking = {
          userId: user.id,
          doctorId: bookingData.doctor.id,
          concern: bookingData.concern,
          date: bookingData.date,
          time: bookingData.time,
        };
        console.log("Booking confirmed:", newBooking);
        const res = await axios.post("http://localhost:5000/bookings", newBooking);
        if (res.status === 201) {
          alert("Booking confirmed successfully!");
          setStep("selectDoctor");
          setBookingData({
            doctor: null,
            concern: "",
            file: null,
            date: "",
            time: "",
          });
          navigate("/");
        }  
      } catch (error) {
        console.error("Error confirming booking:", error);
        alert("There was an error confirming your booking. Please try again.")
        };
      }


    return (
      <>
        <Navbar />
        <div> 
          {step === "selectDoctor" && (
            <SelectDoctor
              bookingData={bookingData}
              onNext={handleNext}
              onDataChange={handleDataChange}
            />
          )}

          {step === "consultationDetails" && (
            <ConsultationDetails
              bookingData={bookingData}
              onDataChange={handleDataChange}
              onNext={handleNext}
              handleBack={() => setStep("selectDoctor")}
            />
          )}
          {step === "selectDateTime" && (
            <SelectDateTime
              bookingData={bookingData}
              onDataChange={handleDataChange}
              onNext={handleNext}
              handleBack={() => setStep("consultationDetails")}
            />
          )}

          {step === "confirmBooking" && (
            <ConfirmBooking
              bookingData={bookingData}
              handleBack={() => setStep("selectDateTime")}
              onConfirm={handleConfirmation}
            />
          )} 
        </div>
      </>
    );
}
export default Booking;