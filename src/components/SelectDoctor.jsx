import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./SelectDoctor.css";
import axios from "axios";

function SelectDoctor({ bookingData, onNext, onDataChange }) {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedDoctorId, setSelectedDoctorId] = useState(
      bookingData.doctor?.id || null
    );
    useEffect(() => {
      const fetchDoctors = async () => {
        try {
          console.log("Fetching doctors...");
          const res = await axios.get("http://localhost:5000/Doctors");
          setDoctors(res.data);
          console.log(res.data);
        } catch (error) {
          console.error("Error fetching doctors:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchDoctors();
    }, []);

    const handleDoctorSelect = (doctor) => {
      setSelectedDoctorId(doctor.id);
      onDataChange("doctor", doctor);
    };
    if (loading) return <p className="text-center mt-5">Loading doctors...</p>;
    return (
      <div className="container mt-4">
        <h3 className="mb-4 text-center">Select Your Doctor</h3>
        <div className="row">
          {doctors.map((doc) => (
            <div className="col-md-4 mb-3" key={doc.id}>
              <div
                className={`card doctor-card h-100 ${
                  selectedDoctorId === doc.id ? "border-primary" : ""
                }`}
                onClick={() => handleDoctorSelect(doc)}
                style={{ cursor: "pointer" }}
              >
                <img src={doc.image} className="card-img-top" alt={doc.name} />
                <div className="card-body">
                  <h5 className="card-title">{doc.name}</h5>
                  <p className="card-text">{doc.title}</p>
                  <p className="card-text">Experience:{doc.experienceYears}+ years</p>
                  <p className="card-text">{doc.currency} {doc.fee}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="justify-content-between mt-4">
          <button className="btn btn-secondary me-3" disabled>
            Back
          </button>
          <button
            className="btn btn-primary"
            disabled={!selectedDoctorId}
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
    );
}
export default SelectDoctor;