import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Software Projects</h1>
      <div className="member member-1">
        <div className="member-img superrod"></div>
        <div className="member-info">
          <h1 className="name">SuPerRod</h1>
          <h3 className="position">Developer and maintainer</h3>
          <h4 className="about">
            SuPerRod is a PyQt5 based software used for resolving molecular scale interfacial structure encoded in the background subtracted CTR profiles.
          </h4>
          <a href="https://github.com/jackey-qiu/DaFy/wiki/Motivation" className="contact-member" target="_blank" rel="noreferrer">
            <span>github link</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img xrv"></div>
        <div className="member-info">
          <h1 className="name">XRV</h1>
          <h3 className="position">Developer and maintainer</h3>
          <h4 className="about">
            XRV is an PyQt5-based GUI app to fit Bragg peak to achieve change of lattice unit cell.
          </h4>
          <a href="https://github.com/jackey-qiu/DaFy/wiki/XRV-tutorial#purpose-of-xrv-app" className="contact-member">
            <span>github link</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img ctr"></div>
        <div className="member-info">
          <h1 className="name">CTR</h1>
          <h3 className="position">Developer and maintainer</h3>
          <h4 className="about">
            CTR application was developed to process crystal truncation rod (CTR) raw data to extract peak intensity (structure factor)
            from 2D pixel detector images as a function of momentum transfer vector (i.e. L's along different CTR’s).
            The underlying processing engine is the background subtraction based on polynomial fitting subroutine.
          </h4>
          <a href="https://github.com/jackey-qiu/DaFy/wiki/CTR#purpose-of-ctr-software" className="contact-member">
            <span>github link</span>
          </a>
        </div>
      </div>

      <div className="member member-4">
        <div className="member-img ubmate"></div>
        <div className="member-info">
          <h1 className="name">ubMate</h1>
          <h3 className="position">Developer and maintainer</h3>
          <h4 className="about">
            ubMate is a tool developed at the beginning for angle calculation during sample alignment for performing SXRD.
            Along its evolution path, other functionalities, which are all based on calculations in the reciprocal space, are merged into this application.
          </h4>
          <a href="https://github.com/jackey-qiu/DaFy/wiki/ubMate-tutorial#how-to-run-the-gui-app" className="contact-member">
            <span>github link</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
