import "./AppointmentBox.css";

function AppointmentBox(props) {
  return (
    <div className="appointmentBox">
      <img src={props.src} alt="patient"></img>
      <p>{props.name}</p>
    </div>
  );
}

export default AppointmentBox;
