import SelectDoctor from "./SelectDoctor";
//import SelectDateTime from "./SelectDateTime";
//import ConfirmBooking from "./ConfirmBooking";
import { useState } from "react";
import Navbar from "./Navbar";

function Booking() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    doctor: null,
    concern: "",
    file: null,
    date: "",
    time: "",
  });

   const handleNext = () => {
    if (step === "selectDoctor") setStep("consultationDetails");
  };

   const handleDataChange = (key, value) => {
    setBookingData((prev) => ({ ...prev, [key]: value }));
  };


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
            <p>Consultation form coming next...</p>
          )}
        </div>
      </>
    );
}
export default Booking;