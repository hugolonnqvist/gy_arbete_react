import "./PatientCard.css";

function PatientCard(props) {
  return (
    <div className="patientCard">
      <div className="patientQuestion">{props.question}</div>
      <div className="patientAnswer">{props.answer}</div>
    </div>
  );
}

export default PatientCard;
