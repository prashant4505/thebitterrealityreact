import '../css/About.css';
import prashant from '../assets/images/Prashant.jpg';
import salil from '../assets/images/Salil.jpg';
import piyush from '../assets/images/Piyush.jpg';

const About = () => {
    return (
      <div className="container">
        <h1>About Us</h1>
        <p><em>Because life’s too short for fake smiles.</em></p>
  
        {/* Mission Section */}
        <h2>Our Mission</h2>
        <p>At <strong>The Bitter Reality</strong>, we believe in keeping it real. Our mission is to create a space where raw humor, unfiltered thoughts, and real-life experiences take center stage. We’re here to make you laugh, think, and sometimes even question reality—all while embracing the bittersweet truths of life.</p>
  
        {/* Vision Section */}
        <h2>Our Vision</h2>
        <p>We envision a world where people can connect through shared experiences, no matter how bitter or sweet. Through our content, we aim to foster a community that values honesty, humor, and authenticity.</p>
  
        {/* Meet the Team */}
        <h2>Meet the Team</h2>
        <div className="team">
          {/* Team Member 1 */}
          <div className="team-member">
            <img src={prashant} alt="Team Member 1" />
            <h3>Prashant Singh</h3>
            <p>Full Stack Developer</p>
            <p>Prashant loves coffee, sarcasm, and making people laugh. He started The Bitter Reality to share his unfiltered take on life.</p>
          </div>
  
          {/* Team Member 2 */}
          <div className="team-member">
            <img src={piyush} alt="Team Member 2" />
            <h3>Piyush Verma</h3>
            <p>Content Creator & Deep Thinker</p>
            <p>Piyush is the mastermind behind our witty one-liners and thought-provoking blogs. He’s always questioning the status quo.</p>
          </div>
  
          {/* Team Member 3 */}
          <div className="team-member">
            <img src={salil} alt="Team Member 3" />
            <h3>Salil Arora</h3>
            <p>Designer & Reality Enthusiast</p>
            <p>Salil brings The Bitter Reality to life with his creative designs. He’s passionate about making the site as relatable as possible.</p>
          </div>
        </div>
  
        {/* Join the Conversation */}
        <h2>Join the Conversation</h2>
        <p>We’re always looking for new voices to add to The Bitter Reality. Whether you’re a writer, comedian, or just someone with a unique perspective, we’d love to hear from you. <a href="mailto:info@thebitterreality.com">Reach out to us</a> and let’s make the world a little more real together.</p>
      </div>
    );
  }
  
  export default About;
  