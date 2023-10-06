import "./Ourcreations.css";
import DeepEarth from "./creations/image-deep-earth.jpg";

const Ourcreations = () => {
  return (
    <div className="Ourcreations">
      <div className="begin">
        <div className="title">Our creations</div>
        <div className="button">
          <button>See All</button>
        </div>
      </div>
      <div className="creations">
        <div className="DeepEarth">
          <p>deep earth</p>
        </div>
        <div className="NightArcade">
          <p>night arcade</p>
        </div>
        <div className="SoccerTeamVR">
          <p>soccer team vr</p>
        </div>
        <div className="TheGrid">
          <p>the grid</p>
        </div>
        <div className="FromUpAboveVR">
          <p>from up above vr</p>
        </div>
        <div className="PocketBorealis">
          <p>pocket borealis</p>
        </div>
        <div className="TheCuriosity">
          <p>the curiosity</p>
        </div>
        <div className="MakeItFishEye">
          <p>make it fisheye</p>
        </div>
      </div>
    </div>
  );
};

export default Ourcreations;
