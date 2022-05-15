import './home.css';
// import img from '../props/img2.jpg';
import img from '../props/me.JPG';
import Buttons from '../button/button';
import Education from '../education/education';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show active'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
        {/* <img src="https://github.com/jackey-qiu/DaFy/blob/master/projects/superrod/icons/DAFY.png" alt='' /> */}
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>
      <h2>
        <span id="education">Education trajectory</span>
        <Education />
      </h2>
      <h2>
        <span id="research">Research overview</span> <br />
        <p style={{ "lineHeight": "150%", "textAlign": "justify" }}>
          I have been working with synchrotron-based X-ray surface diffraction techniques to undertake research regarding surface chemistry.
          The research work for my Ph.D elucidates the surface complexation of metal(loid)s [Pb(II), Sb(V) and As(V)] at the hematite(1-102) surface.
          My postdoc project at HZDR focuses on Zr-mica system that expands my PhD work to look at the interfacial behaviors of nanoparticle at a charged plane,
          including nanoparticle aggregation pattern and competitive adsorption of ZrO2 nanoparticle with alkali background electrolytes.
          Molecular scale structural information has been resolved to elucidate chemical processes occurring at mineral-fluid interfaces.
          My current research lands on the field of electrochemistry, where we have been investigating, using synchrotron-based XRD technique,
          the nanoscale structural changes (variation of lattice strain and skin layer thickness) occurring in crystalline catalyst materials (Co3O4 and CoOOH)
          in the process of oxygen evolution reaction.
        </p>
        <br />
        <p style={{ "lineHeight": "150%", "textAlign": "justify" }}>
          In the future, I would like to continue my research on advance materials with(out) long-range structural ordering by
          using a variety of modern synchrotron X-ray techniques, such as XRD, diffuse X-ray scattering, and X-ray absorption spectroscopy,
          to address scientific questions emerging in numerous fields, such as environmental interfacial chemistry, material science and surface catalysis.
          In addition, I am also interested in data-oriented projects that involve dedications to optimize massive, distributed computation and
          data storage architecture from server backend for serving end-users in a more user-friendly way.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
