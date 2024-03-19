import '../assets/css/about.css';

const About = () => {
  return (
    <section id="aboutUs">
      <img src="user.jpg" alt="computer user" />
      <div className="content">
        <h2>About Us</h2>
        <h4>Developer & Designer</h4>
        <p className="description">
          I am a Front-end web developer. I can provide clean code and pixel-perfect design. I also make the website more & more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their device.
        </p>
        <button className="btn">Hire Me</button>
      </div>
    </section>
  );
};

export default About;
