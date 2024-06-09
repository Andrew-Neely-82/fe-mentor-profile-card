import Victor from "../assets/image-victor.jpg";
import BgImg from "../assets/bg-pattern-card.svg";

const Card = () => {
  return (
    <div className="card">
      <div className="top">
        <img src={BgImg} alt="" />
        <img className="pfp" src={Victor} alt="Victor Crest Profile Picture" />
      </div>

      <div className="info">
        <div className="name-age">
          <span className="name d-blue">Victor Crest</span>
          <span className="age bold grayBlue">26</span>
        </div>
        <div className="location">
          <span className="grayBlue small">London</span>
        </div>

        <hr />

        <div className="stats-container">
          <div className="stats">
            <span className="d-blue">83K</span>
            <span className="extra-small l-gray">Followers</span>
          </div>
          <div className="stats">
            <span className="d-blue">803K</span>
            <span className="extra-small l-gray">Likes</span>
          </div>
          <div className="stats">
            <span className="d-blue">1.4K</span>
            <span className="extra-small l-gray">Photos</span>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
export default Card;
