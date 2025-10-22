import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function ConsultationDetails({ bookingData, onDataChange, onNext, handleBack }) {
  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">Consultation Details</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="concern" className="form-label">
            Describe Your Concern
          </label>
          <textarea
            className="form-control"
            id="concern"
            rows="4"
            value={bookingData.concern}
            onChange={(e) => onDataChange("concern", e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">
            Upload Relevant Files (optional)
          </label>
          <input
            className="form-control"
            type="file"
            id="file"
            onChange={(e) => onDataChange("file", e.target.files[0])}
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleBack}
          >
            Back
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  ); 
}
export default ConsultationDetails;