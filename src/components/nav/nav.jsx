import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdScience } from "react-icons/md";
import { AiFillCode } from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home" title="home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#education" title="education">
        <MdSchool className="icon" />
      </a>
      <a href="#research" title="scientific research">
        <MdScience className="icon" />
      </a>
      <a href="#about" title="program stack">
        <AiFillCode className="icon" />
      </a>

      <a href="#members" title="code projects">
        <BsGithub className="icon" />
      </a>
      <a href="#members" title="publication">
        <SiGooglescholar className="icon" />
      </a>
      <a href="#contact" title="contact">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer" title="down">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
