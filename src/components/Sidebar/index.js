import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactCard,
  faHome,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className="nav-bar">
    <Link>
      <img className="logo" src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="mish" />
    </Link>
    <nav>
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        to="/about"
        className="about-link"
      >
        <FontAwesomeIcon icon={faPerson} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        to="/contact"
        className="contact-link"
      >
        <FontAwesomeIcon icon={faContactCard} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mishrahman/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/mishrhm">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
