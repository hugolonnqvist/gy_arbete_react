import "./Patients.css";
import PatientCard from "./PatientCard";

function Patients(props) {
  return (
    <div className={props.className}>
      <div className="shortPatientsInfo">
        <p className="patientHeadline">Patients Information</p>
        <div className="patientImgCont">
          <img
            className="patientAvatar"
            src="../images/patientAvatar.png"
            alt="Patient img"
          ></img>
        </div>
        <PatientCard question="Name" answer="Babis Geber"></PatientCard>
        <PatientCard question="Age" answer="42"></PatientCard>
        <PatientCard question="Sex" answer="Sure"></PatientCard>
        <PatientCard question="Country" answer="Sweden"></PatientCard>
        <PatientCard question="Case Type" answer="Emergency"></PatientCard>
        <PatientCard question="Old Records" answer="See all"></PatientCard>
        <div className="buttonDetailsCont">
          <button className="fullDetailsButton">Check Full Details</button>
        </div>
      </div>
    </div>
  );
}

export default Patients;
