import facebook from "./social-logos/facebook.png";
import twitter from "./social-logos/twitter.png";
import instagram from "./social-logos/instagram.png";
import pinterest from "./social-logos/pinterest.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="logos">
        <div className="logo">Loopstudios</div>
        <div className="bar">
          <div className="about">About</div>
          <div className="careers">Careers</div>
          <div className="events">Events</div>
          <div className="products">Products</div>
          <div className="support">Support</div>
        </div>
      </div>
      <div className="links">
        <div className="social">
          <img src={facebook} />
          <img src={twitter} />
          <img src={pinterest} />
          <img src={instagram} />
        </div>
        <div className="copyRights">
          © 2021 Loopstudios. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
