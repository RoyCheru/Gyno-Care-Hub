function SelectDateTime({ bookingData, onDataChange, onNext, handleBack }) {
  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">Select Date and Time</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Select Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={bookingData.date}
            onChange={(e) => onDataChange("date", e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Select Time
          </label>
          <input
            type="time"
            className="form-control"
            id="time"
            value={bookingData.time}
            onChange={(e) => onDataChange("time", e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button type="button" className="btn btn-secondary" onClick={handleBack}>
            Back
          </button>
          <button type="button" className="btn btn-primary" onClick={onNext}>
            Review Booking
          </button>
        </div>
      </form>
    </div>
  );
}

export default SelectDateTime;