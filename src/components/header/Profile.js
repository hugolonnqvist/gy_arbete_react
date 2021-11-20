import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile">
      <img src="avatar_img.png" alt="babis" className="profileImg"></img>
      <div className="profileInfo">
        <p className="profileName">{props.name}</p>
        <p className="school">{props.school}</p>
      </div>
    </div>
  );
}

export default Profile;
