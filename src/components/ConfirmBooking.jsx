import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import './ConfirmBooking.css';

function ConfirmBooking({ bookingData, handleBack, onConfirm }) {
  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">Confirm Your Booking</h3>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Doctor: {bookingData.doctor?.name}</h5>
          <p className="card-text">Title: {bookingData.doctor?.title}</p>
          <p className="card-text">Fee: {bookingData.doctor?.currency} {bookingData.doctor?.fee}</p>
          <p className="card-text">Concern: {bookingData.concern}</p>
          <p className="card-text">Date & Time: {bookingData.date} {bookingData.time}</p>
        </div>
      </div>
        <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-secondary" onClick={handleBack}>
                Back
            </button>
            <button className="btn btn-primary" type="submit" onClick={onConfirm}>
                Confirm Booking
            </button>
        </div>
    </div>
  );
}

export default ConfirmBooking;