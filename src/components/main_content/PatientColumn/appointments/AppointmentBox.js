import "./AppointmentBox.css";

function AppointmentBox(props) {
  return (
    <div className="appointmentBox">
      <img src={props.image} alt="patient image"></img>
      <p>{props.name}</p>
    </div>
  );
}

export default AppointmentBox;
