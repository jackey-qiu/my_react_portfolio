import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { CgMail } from "react-icons/cg";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="#"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>To be there soon</span>
          </h2>
        </a>

        <a
          href="https://wa.me/49017666534412"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+49 0176 6653 4412</span>
          </h2>
        </a>

        <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=crqiu2@gmail.com" className="contact gmail">
          <CgMail className="icon" />
          <h2>
            gmail <span>_Creative_Ambition_</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
