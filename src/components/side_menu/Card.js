import "./Card.css";

function Card(props) {
  return (
    <button
      onClick={() => {
        props.getIndex(props.index);
      }}
      className="card"
    >
      <span className="material-icons-outlined">{props.icon}</span>
      <p>{props.name}</p>
    </button>
  );
}

export default Card;
