import VRpic from "./image-interactive.jpg";
import "./Secondpart.css";

const Secondpart = () => {
  return (
    <div className="Secondpart">
      <div className="VRpic">
        <img src={VRpic} />
      </div>
      <div className="VRtext">
        <p>
          <h1>The leader in interactive VR</h1>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Secondpart;
